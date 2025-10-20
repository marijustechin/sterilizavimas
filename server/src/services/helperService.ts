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
}
