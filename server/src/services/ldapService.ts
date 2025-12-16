import { Client, EqualityFilter, OrFilter } from 'ldapts';
import { stringify } from 'uuid';
import ApiError from '../errors/apiErrors.js';
import config from '../config/config.js';
import { TldapUser } from '../types/user.js';

export default class LdapService {
  static convertUUIDToBinary(uuidStr: string): Buffer {
    const hex = uuidStr.replace(/-/g, '').toLowerCase();
    if (!/^[0-9a-f]{32}$/.test(hex)) {
      throw new Error(`Blogas UUID formatas: ${uuidStr}`);
    }
    const d1 = parseInt(hex.slice(0, 8), 16);
    const d2 = parseInt(hex.slice(8, 12), 16);
    const d3 = parseInt(hex.slice(12, 16), 16);
    const tail = hex.slice(16); // 16 hex simbolių = 8 baitai

    const buf = Buffer.alloc(16);
    buf.writeUInt32LE(d1, 0);
    buf.writeUInt16LE(d2, 4);
    buf.writeUInt16LE(d3, 6);
    Buffer.from(tail, 'hex').copy(buf, 8);
    return buf;
  }

  /**
   * Role extractor
   * @param dn string
   * @returns object {role:string, division:string}
   */
  private static extractOrgInfoFromDN(dn: string, userName: string) {
    const ouMatches = dn.match(/OU=([^,]+)/g); // randa visas OU reikšmes
    console.log('LdapService 33: ', ouMatches);

    if (!ouMatches || ouMatches.length < 2) {
      return { division: 'unknown', role: 'unknown' };
    }

    // Normalizuojam OU reikšmes
    const ous = ouMatches.map((o) => o.replace('OU=', '').trim());

    // Role logika
    const role =
      ous.includes('IT Skyrius') ||
      ous.includes('Programuotojai') ||
      userName === 'gabsim'
        ? 'admin'
        : 'user';

    // Division – kaip anksčiau (OU[1])
    const division = ous[1] || 'unknown';

    return { role, division };
  }

  /**
   * userId Buffer->string
   * @param objectGUIDBuffer Buffer
   * @returns string (id)
   */
  static objectGUIDBufferToIDString(objectGUIDBuffer: Buffer): string {
    let objectGUIDString = null;

    if (Buffer.isBuffer(objectGUIDBuffer) && objectGUIDBuffer.length === 16) {
      // Teisingas objectGUID (AD) konvertavimas į standartinę UUID eilutę
      // Dėl unikalios Active Directory objectGUID baitų tvarkos
      const guidBytes = Buffer.from(objectGUIDBuffer); // Dirbsime su kopija

      const d1 = guidBytes.readUInt32LE(0); // Pirmieji 4 baitai (little-endian)
      const d2 = guidBytes.readUInt16LE(4); // Kiti 2 baitai (little-endian)
      const d3 = guidBytes.readUInt16LE(6); // Dar 2 baitai (little-endian)

      // Suformuojame 16 baitų masyvą teisinga tvarka uuid.stringify funkcijai
      const orderedBytes = Buffer.alloc(16);
      orderedBytes.writeUInt32BE(d1, 0); // Rašome pirmąją dalį big-endian
      orderedBytes.writeUInt16BE(d2, 4); // Rašome antrąją dalį big-endian
      orderedBytes.writeUInt16BE(d3, 6); // Rašome trečiąją dalį big-endian

      // Likusius 8 baitus (8-15) nukopijuojame tiesiogiai, nes jie jau yra big-endian tvarka
      guidBytes.copy(orderedBytes, 8, 8, 16);

      objectGUIDString = stringify(orderedBytes).toUpperCase();
    } else {
      console.error('KLAIDA: objectGUID nėra Buffer arba yra netinkamo ilgio.');
      objectGUIDString = 'FORMATAVIMO_KLAIDA';
    }

    return objectGUIDString;
  }

  static async getDisplayNameByUserId(userId: string): Promise<string> {
    const url = `ldap://${config.ldap.ldap_server}`;
    const searchBase = 'dc=karpol,dc=local';
    const client = new Client({ url });

    try {
      // Pirmiausiai, reikia prisijungti prie LDAP serverio.
      // Paprastai prieigai paieškai naudojamas atskiras vartotojas
      // arba "anonymous bind" leidžiama paieška.
      await client.bind(config.ldap.ldap_user, config.ldap.ldap_password);

      const { searchEntries } = await client.search(searchBase, {
        scope: 'sub',
        filter: `(objectGUID=${userId})`,
        attributes: ['displayName', 'sAMAccountName'],
        explicitBufferAttributes: ['objectGUID'],
      });

      if (searchEntries.length === 0) {
        throw new Error('Naudotojas nerastas.');
      }

      const userEntry = searchEntries[0] as TldapUser;

      const objectGUIDBuffer = userEntry.objectGUID;
      const idString = this.objectGUIDBufferToIDString(objectGUIDBuffer);

      if (idString === userId) {
        return userEntry.displayName;
      } else {
        throw new Error('ID neatitinka. Galima klaida su formatavimu.');
      }
    } catch (err) {
      console.error('Klaida gaunant naudotojo vardą iš LDAP:', err);
      throw new Error('Nepavyko gauti naudotojo vardo. Bandykite dar kartą.');
    } finally {
      await client.unbind();
    }
  }

  static async ldapLogin(username: string, password: string) {
    const url = `ldap://${config.ldap.ldap_server}`;
    const user = `karpol\\${username}`;
    const pass = password;

    const client = new Client({ url });

    try {
      await client.bind(user, pass);

      // čia mums reikia gauti info apie naudotoją
      const searchBase = 'dc=karpol,dc=local';
      const { searchEntries } = await client.search(searchBase, {
        scope: 'sub',
        filter: `(sAMAccountName=${username})`,
        // kol kas imam tik šiuos atributus
        attributes: [
          'dn',
          'displayName', // Vardas pavarde
          'objectGUID',
        ],
        // *** SVARBU: ldapts kazka padaro su objectGUID, todel reikia naudoti explicitBufferAttributes ***
        explicitBufferAttributes: ['objectGUID'], // Nurodome, kad objectGUID yra dvejetainis ir norime jį gauti kaip Buffer
      });

      if (searchEntries.length === 0) {
        throw ApiError.Unauthorized(
          'Neteisingas naudotojo vardas arba slaptažodis'
        );
      }

      const userEntry = searchEntries[0] as TldapUser;
      console.log('LdapService 156: ', userEntry);

      const displayName = userEntry.displayName;
      const userId = this.objectGUIDBufferToIDString(userEntry.objectGUID);

      const { division, role } = this.extractOrgInfoFromDN(
        userEntry.dn,
        username
      );

      const userData = {
        userId: userId,
        username: username,
        displayName: displayName,
        role: role,
        division: division,
      };

      return userData;
    } catch (err) {
      console.log(err);
      throw ApiError.Unauthorized(
        'Neteisingas naudotojo vardas arba slaptažodis'
      );
    } finally {
      await client.unbind();
    }
  }

  static async getDisplayNamesByUserIds(
    userIds: string[]
  ): Promise<Map<string, string>> {
    const unique = Array.from(new Set(userIds.filter(Boolean)));
    const map = new Map<string, string>();
    if (unique.length === 0) return map;

    const url = `ldap://${config.ldap.ldap_server}:389`;
    const adminUser = `${config.ldap.ldap_domain}\\${config.ldap.ldap_user}`;
    const adminPass = config.ldap.ldap_password;

    const client = new Client({ url });
    try {
      await client.bind(adminUser, adminPass);

      // RootDSE → tikras DN bazės vardas
      const root = await client.search('', {
        scope: 'base',
        attributes: ['defaultNamingContext'],
      });
      const base = (root.searchEntries[0] as any)
        ?.defaultNamingContext as string;

      // Sudarom OR filtrą iš EqualityFilter(objectGUID=Buffer)
      const eqs = unique.map(
        (g) =>
          new EqualityFilter({
            attribute: 'objectGUID',
            value: this.convertUUIDToBinary(g),
          })
      );
      const or = new OrFilter({ filters: eqs });

      const { searchEntries } = await client.search(base, {
        scope: 'sub',
        filter: or,
        attributes: ['displayName', 'sAMAccountName', 'objectGUID'],
        explicitBufferAttributes: ['objectGUID'],
      });

      for (const e of searchEntries as any[]) {
        const guid = this.objectGUIDBufferToIDString(e.objectGUID); // UPPERCASE UUID
        const name = (e.displayName as string) ?? (e.sAMAccountName as string);
        if (guid && name) map.set(guid, name);
      }
      return map;
    } finally {
      try {
        await client.unbind();
      } catch {}
    }
  }
}
