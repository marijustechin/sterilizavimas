import * as net from 'net';
import {
  TPrintedItem,
  TPrinterStatus,
  TSterilizationCyclePayload,
} from 'types';
import { addDays, format } from 'date-fns';
import { prisma } from '../config/prisma';
import ApiError from '../errors/apiErrors';

export default class PrintingService {
  // patikriname ar spausdintuvas pasirengęs darbui
  static async CheckPrinterStatus(printerId: number): Promise<{
    status: TPrinterStatus;
    message: string;
  }> {
    const printer = await prisma.printer.findUnique({
      where: {
        id: printerId,
      },
    });

    if (!printer)
      throw ApiError.NotFound(
        `Spausdintuvo ID:${printerId} duomenų bazėje nepavyko rasti`
      );

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

      client.connect(printer.port, printer.ip_address);
    });
  }

  // spausdiname duomenis
  static async PrintLabels(
    payload: TSterilizationCyclePayload,
    items: TPrintedItem[]
  ): Promise<boolean> {
    const zpl = this.buildZplFromPayload(payload, items);
    const printer = await prisma.printer.findUnique({
      where: { id: payload.printerId },
    });
    if (!printer)
      throw ApiError.NotFound(`Spausdintuvas ID:${payload.printerId} nerastas`);

    return new Promise((resolve, reject) => {
      const client = net.createConnection(
        { host: printer.ip_address, port: printer.port },
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
    items: TPrintedItem[]
  ): string {
    const DPI = 300;
    const DOTS_PER_MM = DPI / 25.4;
    const W = Math.round(22 * DOTS_PER_MM);
    const L = Math.round(29 * DOTS_PER_MM);
    const FONT = 36;
    const QR_SIZE = 5;

    const today = new Date();
    const formattedDateNow = format(today, 'yyyy-MM-dd');

    const labels: string[] = [];
    const deptById = new Map(
      payload.departmentsAndInstruments.map((d) => [d.departmentId, d])
    );

    for (const it of items) {
      const dept = deptById.get(it.department_id);
      const instr = dept?.instruments.find((i) => i.id === it.instrument_id);
      const dateEnd = addDays(today, instr?.instrument_exp ?? 0);
      const formattedEnd = format(dateEnd, 'yyyy-MM-dd');

      const cycleAndSterilizer = `${payload.sterilizerId}-${payload.cycleNumber}`;
      const departmentAndInstrument = `${dept?.department_code ?? ''}-${
        instr?.instrument_code ?? ''
      }`;

      const shortCode = it.short_code;

      // svarbiausia vieta:
      const qrData = `CI=${it.id};DI=${it.department_id};II=${it.instrument_id}`;

      const zpl =
        '^XA\n' +
        '^CI28\n' +
        '^MTT\n' +
        '^MNY\n' +
        '^PR2\n' +
        '^MD32\n' +
        `^PW${W}\n` +
        `^LL${L}\n` +
        '^LH0,0\n' +
        '^FWB\n' +
        `^FO${2 * DOTS_PER_MM},${
          8 * DOTS_PER_MM
        }^A0,N,${FONT},${FONT}^FD${formattedDateNow}^FS\n` +
        `^FO${8 * DOTS_PER_MM},${
          8 * DOTS_PER_MM
        }^A0,N,${FONT},${FONT}^FD${formattedEnd}^FS\n` +
        `^FO${12 * DOTS_PER_MM},${
          15 * DOTS_PER_MM
        }^A0,N,${FONT},${FONT}^FD${cycleAndSterilizer}^FS\n` +
        `^FO${16 * DOTS_PER_MM},${
          15 * DOTS_PER_MM
        }^A0,N,${FONT},${FONT}^FD${departmentAndInstrument}^FS\n` +
        `^FO${17 * DOTS_PER_MM},${15 * DOTS_PER_MM}^A0,N,${FONT - 6},${
          FONT - 6
        }^FD${shortCode}^FS\n` +
        `^FO${11 * DOTS_PER_MM},${3 * DOTS_PER_MM}^BQN,2,${QR_SIZE}\n` +
        `^FDLA,${qrData}^FS\n` +
        '^XZ';
      labels.push(zpl);
    }
    return labels.join('\n');
  }
}
