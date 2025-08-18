import * as net from 'net';
import config from '../config/config';
import { TPrinterStatus, TSterilizationCyclePayload } from 'types';
import { addDays, format } from 'date-fns';

export default class PrintingService {
  // patikriname ar spausdintuvas pasirengęs darbui
  static async CheckPrinterStatus(): Promise<{
    status: TPrinterStatus;
    message: string;
  }> {
    return new Promise((resolve) => {
      const client = new net.Socket();
      let resolved = false;

      const finish = (status: TPrinterStatus, message: string) => {
        if (!resolved) {
          resolved = true;
          try {
            client.destroy();
          } catch {}
          resolve({ status, message });
        }
      };

      client.setTimeout(2000);

      client.once('connect', () => {
        finish('ready', 'Spausdintuvas pasirengęs');
      });

      client.once('timeout', () => {
        finish('timeout', 'Spausdintuvas nepasiekiamas (timeout)');
      });

      client.once('error', () => {
        finish('error', 'Nepavyko prisijungti prie spausdintuvo');
      });

      client.connect(
        Number(config.printer.printer_port),
        config.printer.printer_host
      );
    });
  }

  // spausdiname duomenis
  static async PrintLabels(
    labelData: TSterilizationCyclePayload,
    recordId: number
  ): Promise<boolean> {
    const zpl = this.buildZplFromPayload(labelData, recordId);

    return new Promise((resolve, reject) => {
      const client = net.createConnection(
        {
          host: config.printer.printer_host,
          port: Number(config.printer.printer_port),
        },
        () => {
          client.write(zpl);
          client.end();
        }
      );
      client.on('error', reject);
      client.on('close', () => resolve(true));
    });
  }

  private static buildZplFromPayload(
    payload: TSterilizationCyclePayload,
    cycleId: number
  ): string {
    const DPI = 300;
    const DOTS_PER_MM = DPI / 25.4;
    const W = Math.round(22 * DOTS_PER_MM);
    const L = Math.round(29 * DOTS_PER_MM);
    const FONT = 36;
    const QR_SIZE = 5;

    // aktyvi data ir galiojimas
    const today = new Date();
    const formattedDateNow = format(today, 'yyyy-MM-dd');

    const cycleAndSterilizer = payload.sterilizerId + '-' + payload.cycleNumber;

    const labels: string[] = [];

    payload.departmentsAndInstruments.forEach((department) => {
      department.instruments.forEach((instrument) => {
        const dateEnd = addDays(today, instrument.instrument_exp);
        const formatedDateEnd = format(dateEnd, 'yyyy-MM-dd');
        const qrData = `CI=${cycleId};DI=${department.departmentId};II=${instrument.id}`;
        const departmentAndInstrument =
          department.department_code + '-' + instrument.instrument_code;

        const zpl =
          '^XA\n' +
          '^CI28\n' +
          '^MTT\n' +
          '^MNY\n' +
          '^PR2\n' +
          '^MD32\n' + // šiek tiek tamsiau; jei blyšku – iki 35
          `^PW${W}\n` +
          `^LL${L}\n` +
          '^LH0,0\n' +
          '^FWB\n' + // orientacija: bottom-up (–90°), kad „skaitytųsi“ iš apačios
          // koordinates - x0 kairys lipduko kraštas, y0 lipduko viršus
          // data x1 y8
          `^FO${1 * DOTS_PER_MM},${
            8 * DOTS_PER_MM
          }^A0,N,${FONT},${FONT}^FD${formattedDateNow}^FS\n` +
          // galiojimas x7 y8
          `^FO${7 * DOTS_PER_MM},${
            8 * DOTS_PER_MM
          }^A0,N,${FONT},${FONT}^FD${formatedDateEnd}^FS\n` +
          // sterilizatorius - partija x12 y15
          `^FO${12 * DOTS_PER_MM},${
            15 * DOTS_PER_MM
          }^A0,N,${FONT},${FONT}^FD${cycleAndSterilizer}^FS\n` +
          // skyrius - instrumentas x16 y15
          `^FO${16 * DOTS_PER_MM},${
            15 * DOTS_PER_MM
          }^A0,N,${FONT},${FONT}^FD${departmentAndInstrument}^FS\n` +
          // QR kodas x11 y3
          `^FO${11 * DOTS_PER_MM},${3 * DOTS_PER_MM}^BQN,2,${QR_SIZE}\n` +
          `^FDLA,${qrData}^FS\n` +
          '^XZ';

        labels.push(zpl);
      });
    });

    return labels.join('\n');
  }
}
