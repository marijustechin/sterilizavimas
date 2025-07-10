import { Client } from 'ldapts';
import { stringify } from 'uuid';
import TokenService from './tokenService';
import ApiError from '../errors/apiErrors';
import DbService from './dbService';
import dbAutoclave from '../config/db';
import { JwtPayload } from 'jsonwebtoken';

type TldapUser = {
  dn: string;
  displayName: string;
  objectGUID: Buffer;
};

type TUser = {
  accessToken: string;
  refreshToken: string;
  user: {
    userId: string;
    username: string;
    displayName: string;
    role: string;
    division: string;
  };
};

// Sukuriame DbService instancą vieną kartą
const dbServiceInstance = new DbService(dbAutoclave);

export default class UserService {
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
   * User login
   * @param username string
   * @param password string
   * @returns
   */
  static async login(username: string, password: string): Promise<TUser> {
    const url = `ldap://${process.env.LDAP_SERVER}`;
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

      // sukuriam tokenus
      const tokens = TokenService.generateTokens(userData);

      // irasom refreshToken i db
      await dbServiceInstance.insertRefreshToken(userData, tokens.refreshToken);

      return {
        ...tokens,
        user: userData,
      };
    } catch (err) {
      console.log(err);
      throw ApiError.Unauthorized(
        'Neteisingas naudotojo vardas arba slaptažodis'
      );
    } finally {
      await client.unbind();
    }
  }

  static async logout(refreshToken: string) {
    // patikrinam, ar tokenas validus
    const userData = TokenService.validateRefreshToken(refreshToken);

    if (!userData) throw ApiError.BadRequest('Neteisinga užklausa');

    const token = await dbServiceInstance.deleteRefreshTokenByToken(
      refreshToken
    );

    return token;
  }

  static async refresh(refreshToken: string) {
    // tikrinam ar nepasibaiges refreshToken galiojimas
    // ir gaunam is token userData
    const userData = TokenService.validateRefreshToken(refreshToken);

    // tikrinam, ar db yra tas refresh token
    const tokenFromDb = await dbServiceInstance.findTokenByToken(refreshToken);

    // ar refresh token geras? ar toks pat refresh token yra db?
    if (!userData || !tokenFromDb) {
      throw ApiError.Unauthorized('Invalid refresh token');
    }

    // isfiltruojam iat ir exp laukus is userData
    const { iat, exp, ...cleanPayload } = userData;

    const tokens = TokenService.generateTokens(cleanPayload as JwtPayload);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: cleanPayload,
    };
  }
}
