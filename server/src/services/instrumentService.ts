import { prisma } from '../config/prisma.js';
import ApiError from '../errors/apiErrors.js';
import { addDays, format } from 'date-fns';
import HelperService from './helperService.js';
import RawDbService from './rawDbService.js';
import { TInstrument, TNewInstrument } from '../types/sterilization.js';
import { TScannedSticker } from '../types/medic.js';
import { DocStatus } from '../config/generated/prisma/enums.js';

export default class InstrumentService {
  /**
   *
   * @returns Visus instrumentus išrikiuotus pagal instrument_code didėjimo tvarka
   */
  static async getAll() {
    return await prisma.instrument.findMany({
      orderBy: {
        instrument_code: 'asc',
      },
    });
  }

  /**
   *
   * @param id instrumento kodas (instrument_code)
   * @returns
   */
  static async delete(id: number): Promise<TInstrument> {
    // patikriname ar instrumentas su tokiu id yra
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        instrument_code: id,
      },
    });

    if (!existingInstrument)
      throw ApiError.NotFound(`Instrumentas, kurio kodas ${id} nerastas.`);

    return await prisma.instrument.delete({
      where: {
        instrument_code: id,
      },
    });
  }

  /**
   *
   * @param newInstrument naujas instrumentas
   * @returns
   */
  static async create(newInstrument: TNewInstrument): Promise<TInstrument> {
    // Tikriname, ar instrument_code egzistuoja duomenų bazėje
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        instrument_code: newInstrument.instrument_code,
      },
    });

    if (existingInstrument) {
      throw ApiError.Conflict(
        `Instrumentas su kodu: ${newInstrument.instrument_code} jau egzistuoja`
      );
    }

    return await prisma.instrument.create({
      data: {
        instrument_code: newInstrument.instrument_code,
        instrument_name: newInstrument.instrument_name,
        instrument_exp: newInstrument.instrument_exp,
      },
    });
  }

  static async patch(instrument: TInstrument): Promise<TInstrument> {
    // Tikriname, ar instrumentas yraa duomenų bazėje
    const existingInstrument = await prisma.instrument.findUnique({
      where: {
        id: instrument.id,
      },
    });

    if (!existingInstrument) {
      throw ApiError.NotFound(
        `Instrumentas ${instrument.instrument_code}. ${instrument.instrument_name} nerastas.`
      );
    }

    // Tikriname, ar atnaujinamo instrumento kodas pakeistas
    // jei pakeistas, tikriname, ar jis unikalus
    if (existingInstrument.instrument_code !== instrument.instrument_code) {
      const codeInDatabase = await prisma.instrument.findUnique({
        where: {
          instrument_code: instrument.instrument_code,
        },
      });

      if (codeInDatabase)
        throw ApiError.Conflict(`${instrument.instrument_code} kodas užimtas`);
    }

    return await prisma.instrument.update({
      where: {
        id: instrument.id,
      },
      data: {
        instrument_code: instrument.instrument_code,
        instrument_name: instrument.instrument_name,
        instrument_exp: instrument.instrument_exp,
      },
    });
  }

  /**
   *
   * @param stickerString formatas: CI=5;DI=2;II=11 CI: recordId
   * @returns object {}
   */
  static async lookupInstrument(
    stickerString: string,
    doc_id: string
  ): Promise<TScannedSticker> {
    const { cycleId, departmentId, instrumentId } =
      HelperService.parseStickerString(stickerString);

    const docId = HelperService.toIntSafe(doc_id);

    if (!docId) throw ApiError.BadRequest('Netinkamas dokumento id');

    const item = await prisma.sterilizationCycleItem.findFirst({
      where: {
        id: cycleId,
        department_id: departmentId,
        instrument_id: instrumentId,
      },
      include: {
        instrument: true,
        cycle: true,
        department: true,
        usage: true, // 1:1 – jei yra, reiškia jau panaudotas
      },
    });

    if (!item) {
      throw ApiError.BadRequest('Nepavyko rasti instrumento');
    }

    const instrumentExpires = addDays(
      item.cycle.sterilization_date,
      item.instrument.instrument_exp
    );

    // gauname medika ir pacienta pagal docId
    const medicPacientData = await RawDbService.getDataByDocId(docId);

    await this.saveUsedInstrument({
      cycle_item_id: item.id,
      doc_id: docId,
      used_by: medicPacientData.EmployeeDuties ?? 'Nežinomas',
      patient: medicPacientData.PersonName ?? 'Nežinomas',
    });

    return {
      instrument_name: item.instrument.instrument_name,
      expires: format(instrumentExpires, 'yyyy-MM-dd'),
    };
  }

  static async scannerCheckExistingInstruments(docId: string) {
    const doc_id = HelperService.toIntSafe(docId);
    if (!doc_id) throw ApiError.BadRequest('Neteisingas dokumento ID');

    // Paimam visus nepatvirtintus instrumentus
    const usages = await prisma.instrumentUsage.findMany({
      where: { doc_id, doc_status: 'nepatvirtintas' },
    });

    if (usages.length === 0) return [];

    // Visi ciklo item ID vienoje vietoje
    const ids = usages.map((u) => u.cycle_item_id);

    // Paimam visus reikalingus ciklo item duomenis vienu SELECT
    const items = await prisma.sterilizationCycleItem.findMany({
      where: { id: { in: ids } },
      include: {
        instrument: true,
        department: true,
        cycle: true,
      },
    });

    // Formuojame atsakymą
    return items.map((item) => {
      const { id, instrument, department, cycle } = item;

      const stickerString = `CI=${id};DI=${department.department_code};II=${instrument.instrument_code}`;
      const expires = addDays(
        cycle.sterilization_date,
        instrument.instrument_exp
      );

      return {
        stickerString,
        stickerData: {
          instrument_name: instrument.instrument_name,
          expires: format(expires, 'yyyy-MM-dd'),
        },
      };
    });
  }

  private static async saveUsedInstrument(data: {
    cycle_item_id: number;
    doc_id: number;
    used_by: string;
    patient: string;
  }): Promise<string> {
    // Ar toks irasas jau yra?
    const existing = await prisma.instrumentUsage.findUnique({
      where: {
        cycle_item_id: data.cycle_item_id,
      },
    });

    if (existing) {
      throw ApiError.Conflict(
        `Šis instrumentas jau panaudotas (cycle_item_id=${data.cycle_item_id})`
      );
    }

    await prisma.instrumentUsage.create({
      data: {
        cycle_item_id: data.cycle_item_id,
        used_by: data.used_by,
        patient: data.patient,
        doc_id: data.doc_id,
      },
    });

    return 'save used instruments - ok';
  }

  static async setUsedInstrumentStatus(docId: string, status: string) {
    // 1. Tikriname ar status atitinka enum
    if (!Object.values(DocStatus).includes(status as DocStatus))
      throw ApiError.BadRequest('Neteisinga dokumento būsena');

    // 2. Ar teisinga docId
    const doc_id = HelperService.toIntSafe(docId);
    if (!doc_id) throw ApiError.BadRequest('Neteisingas dokumento ID');

    // result = { count: number }
    const result = await prisma.instrumentUsage.updateMany({
      where: {
        doc_id,
      },
      data: {
        doc_status: status as DocStatus,
      },
    });

    console.log(
      `InstrumentService (line 263) debug: status->${status}, doc_id->${doc_id}, updatedRecords: ${result.count}`
    );
    return { status: status, doc_id: docId, updatedRecords: result.count };
  }
}
