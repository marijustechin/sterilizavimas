import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { format, parseISO } from 'date-fns';
import type { TUser } from '../types/user';
import type { TSticker } from '../types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import '../fonts/dejavu.ts';

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

  /**
   * Konvertuoja <input> įvesties eilutę į teigiamą skaičių arba undefined.
   * @param value Įvesties eilutė iš input lauko (e.g., e.target.value).
   * @returns Teigiamas skaičius (> 0) arba undefined.
   */
  static readonly getPositiveNumberOrUndefined = (
    value: string
  ): number | undefined => {
    const trimmedValue = value.trim();

    // 1. Jei eilutė tuščia, grąžiname undefined
    if (trimmedValue === '') {
      return undefined;
    }

    // 2. Bandome paversti į skaičių
    const num = Number(trimmedValue);

    // 3. Patikriname, ar tai tikras skaičius (ne NaN) ir ar jis > 0
    // NaN > 0 grąžins false, todėl num > 0 veikia kaip validacija
    if (num > 0) {
      return num;
    }

    // 4. Jei įvestis buvo neteisinga (pvz., tekstas) arba skaičius <= 0, grąžiname undefined
    return undefined;
  };

  static async generateDefectedStickersPDF(
    stickers: TSticker[],
    period: string,
    user: string
  ): Promise<void> {
    const pdf = new jsPDF();
    pdf.setFont('DejaVuSans', 'normal');
    pdf.setProperties({ title: 'Nesėkmingas sterilizavimas' });
    pdf.setFontSize(10);
    pdf.text('VšĮ Karoliniškių poliklinika', 14, 10);
    pdf.setFontSize(18);
    pdf.text(`Nesėkmingas sterilizavimas (${period} m.)`, 14, 20);
    pdf.setFontSize(8);
    pdf.text(`Ataskaitą sudarė: ${user}`, 14, 26);
    pdf.text(
      `Data ir laikas: ${format(new Date(), 'yyyy-MM-dd HH:mm')}`,
      14,
      30
    );

    const tableHead = [
      'ID',
      'Data',
      'Laikas',
      'Partija',
      'Instrumentas',
      'Skyrius',
      'Pažymėjo',
    ];

    const tableBody = stickers.map((sticker) => [
      sticker.short_code,
      this.dateStringToDate(sticker.cycle.sterilization_date, true, false),
      this.dateStringToDate(sticker.cycle.sterilization_date, false, true),
      sticker.cycle.cycle_number,
      sticker.instrument.instrument_name,
      sticker.department.department_name,
      sticker.successPerson,
    ]);

    autoTable(pdf, {
      startY: 35,
      headStyles: {
        fillColor: [248, 250, 252],
        textColor: [50, 50, 50],
        fontSize: 10,
        halign: 'center',
      },
      bodyStyles: {
        fontSize: 8,
        halign: 'left',
      },
      head: [tableHead],
      body: tableBody,
      styles: { font: 'DejaVuSans', fontStyle: 'normal' },
    });

    pdf.save(`blogi-lipdukai-${format(new Date(), 'yyyy-MM-dd-HH-mm-ss')}.pdf`);
  }
}
