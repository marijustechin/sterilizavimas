import { DocStatus } from '../config/generated/prisma/enums.js';
import ApiError from '../errors/apiErrors.js';

export default class HelperService {
  private static readonly BASE_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private static readonly BASE_SIZE = 36; // Fiksuojame bazės dydį (36)

  /**
   * Koduoja skaičių į nurodyto ilgio (default 6) Base 36 eilutę.
   * @param num Skaičius (DB ID)
   * @param length Minimalus ir fiksuotas grąžinamos eilutės ilgis.
   * @returns Fiksuoto ilgio Base 36 eilutė.
   */
  static encodeBase36(num: number, length = 6): string {
    if (num === 0) return '0'.repeat(length);
    let encoded = '';

    while (num > 0) {
      const remainder = num % this.BASE_SIZE;
      encoded = this.BASE_CHARS[remainder] + encoded;
      num = Math.floor(num / this.BASE_SIZE);
    }

    // pad priekiniais '0', kad visada būtų length simbolių
    return encoded.padStart(length, '0');
  }

  /**
   * Dekoduoja Base 36 eilutę atgal į skaičių (DB ID).
   * @param str Base 36 eilutė (short_code)
   * @returns DB ID
   */
  static decodeBase36(str: string): number {
    let num = 0;
    // Visą įvestį konvertuojame į didžiąsias raides, kad išvengtume klaidų, jei vartotojas įves mažąsias
    const upperStr = str.toUpperCase();

    for (const ch of upperStr) {
      const index = this.BASE_CHARS.indexOf(ch);
      if (index === -1) {
        // Apsauga nuo neteisingų simbolių
        console.error(`Neteisingas Base 36 simbolis: ${ch}`);
        return 0;
      }
      num = num * this.BASE_SIZE + index;
    }
    return num;
  }

  /**
   * Funkcija gauna skaiciu kaip string
   * ir grazina ta pati skaiciu kaip number
   * @param v string
   * @returns number
   */
  static toIntSafe(v?: string): number | undefined {
    if (v === undefined) return undefined;
    const n = Number.parseInt(v, 10);
    return Number.isFinite(n) ? n : undefined;
  }

  /**
   * @param s sticker string, pvz: "CI=1;DI=2;II=3"
   * @returns  cycleId, departmentId, instrumentId
   * @throws {ApiError.BadRequest} jei string netinkamo formato
   */
  static parseStickerString(s: string) {
    if (typeof s !== 'string' || !s.trim()) {
      throw ApiError.BadRequest(
        'stickerString privalomas ir turi būti tekstas'
      );
    }

    const map: Record<string, string> = {};
    for (const chunk of s.split(';')) {
      const [k, v] = chunk.split('=');
      if (!k || !v) continue;
      map[k.trim().toUpperCase()] = v.trim();
    }

    const toPosInt = (val?: string) => {
      const n = val ? Number.parseInt(val, 10) : NaN;
      return Number.isInteger(n) && n > 0 ? n : null;
    };

    const cycleId = toPosInt(map.CI);
    const departmentId = toPosInt(map.DI);
    const instrumentId = toPosInt(map.II);

    if (!cycleId || !departmentId || !instrumentId) {
      // Jei lipdukas būtų „CI“ = cycle_number, o ne PK, tada vietoj cycle_id naudotum:
      // where: { department_id: DI, instrument_id: II, cycle: { cycle_number: CI } }
      throw ApiError.BadRequest(
        'Netinkamas lipduko formatas. Tikimasi CI=...;DI=...;II=...'
      );
    }

    return { cycleId, departmentId, instrumentId };
  }

  /**
   * Patikrina, ar eilutė yra DocStatus reikšmė, ir ją konvertuoja.
   */
  static isValidDocStatus(value: string | undefined): DocStatus | undefined {
    if (!value) {
      return undefined;
    }

    const statusKey = value as DocStatus;

    // Patikriname, ar reikšmė egzistuoja enum'e
    if (Object.values(DocStatus).includes(statusKey)) {
      return statusKey;
    }

    return undefined;
  }
}
