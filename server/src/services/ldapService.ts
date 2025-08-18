import { Client } from 'ldapts';
import { stringify } from 'uuid';
import ApiError from '../errors/apiErrors';
import config from '../config/config';
import { TldapUser } from 'types';

export default class LdapService {
  /**
   * Role/Division extractor
   * @param dn string
   * @returns object {role:string, division:string}
   */
  static extractOrgInfoFromDN(dn: string) {
    const ouMatches = dn.match(/OU=([^,]+)/g); // randa visas OU reikšmes
    if (!ouMatches || ouMatches.length < 2) {
      return { division: 'unknown', role: 'unknown' };
    }

    const role = ouMatches[0].replace('OU=', ''); // Pvz. 'Programuotojai'
    const division = ouMatches[1].replace('OU=', ''); // Pvz. 'Subranga'

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
    const searchBase = 'dc=karpol,dc=local'; // Pakeiskite į savo domeną
    const client = new Client({ url });

    try {
      // Pirmiausiai, reikia prisijungti prie LDAP serverio.
      // Paprastai prieigai paieškai naudojamas atskiras vartotojas
      // arba "anonymous bind" leidžiama paieška.
      // Jei jūsų LDAP reikalauja, čia reikės `client.bind(adminUser, adminPass);`
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
        attributes: ['displayName', 'objectGUID'], // kol kas imam tik šiuos atributus
        // *** SVARBU: ldapts kazka padaro su objectGUID, todel reikia naudoti explicitBufferAttributes ***
        explicitBufferAttributes: ['objectGUID'], // Nurodome, kad objectGUID yra dvejetainis ir norime jį gauti kaip Buffer
      });

      if (searchEntries.length === 0) {
        throw ApiError.Unauthorized(
          'Neteisingas naudotojo vardas arba slaptažodis'
        );
      }

      const userEntry = searchEntries[0] as TldapUser;

      const displayName = userEntry.displayName;
      const userId = this.objectGUIDBufferToIDString(userEntry.objectGUID);

      const { division, role } = this.extractOrgInfoFromDN(userEntry.dn);

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
}
