import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { format, parseISO } from 'date-fns';
import type { TUser } from '../types/user';

export default class HelperService {
  static errorToString(error: unknown): string {
    if (axios.isAxiosError(error)) return error.response?.data.message;

    if (error instanceof Error) return error.message;

    return 'Įvyko nenumatyta klaida.';
  }

  static isTokenValid(token: string): boolean {
    try {
      const decoded: { exp: number } = jwtDecode(token);
      return decoded.exp * 1000 > Date.now(); // sekundes -> milisekundes
    } catch (error: unknown) {
      console.log('Token dekodavimo klaida: ', error);
      return false; // Neteisingas tokenas
    }
  }

  // Šis metodas turėtų grąžinti user, jei pavyko atkurti, arba null
  static async restoreUserFromToken(token: string): Promise<TUser | null> {
    if (this.isTokenValid(token)) {
      try {
        const { userId, username, displayName, role, division } = jwtDecode<{
          userId: string;
          username: string;
          displayName: string;
          role: string;
          division: string;
        }>(token);

        return { userId, username, displayName, division, role };
      } catch (error) {
        console.error('Klaida dekoduojant accessToken iš localStorage:', error);
        return null; // Jei dekodavimas nepavyksta, tokenas sugadintas
      }
    } else {
      // Grąžiname null, kad informuotume, jog accessToken negalioja.
      return null;
    }
  }

  static dateStringToDate(
    dateString: string,
    date?: boolean,
    time?: boolean
  ): string {
    // 1. Pirmiausia paverčiam ISO formatą į JavaScript Date objektą
    const dateObject = parseISO(dateString);
    if (date) return format(dateObject, 'yyyy-MM-dd');
    if (time) return format(dateObject, 'HH:mm:ss');

    return format(dateObject, 'yyyy-MM-dd HH:mm:ss');
  }
}
