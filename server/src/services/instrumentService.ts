import { TInstrument, TNewInstrument, TScannedSticker } from "types";
import { prisma } from "../config/prisma";
import ApiError from "../errors/apiErrors";
import { addDays, format } from "date-fns";

export default class InstrumentService {
  /**
   * @param s sticker string, pvz: "CI=1;DI=2;II=3"
   * @returns { cycleId, departmentId, instrumentId }
   * @throws ApiError.BadRequest jei string netinkamo formato
   */
  static parseStickerString(s: string) {
    if (typeof s !== "string" || !s.trim()) {
      throw ApiError.BadRequest(
        "stickerString privalomas ir turi būti tekstas"
      );
    }

    const map: Record<string, string> = {};
    for (const chunk of s.split(";")) {
      const [k, v] = chunk.split("=");
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
        "Netinkamas lipduko formatas. Tikimasi CI=...;DI=...;II=..."
      );
    }

    return { cycleId, departmentId, instrumentId };
  }

  /**
   *
   * @returns Visus instrumentus išrikiuotus pagal instrument_code didėjimo tvarka
   */
  static async getAll() {
    return await prisma.instrument.findMany({
      orderBy: {
        instrument_code: "asc",
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
    stickerString: string
  ): Promise<TScannedSticker> {
    const { cycleId, departmentId, instrumentId } =
      this.parseStickerString(stickerString);

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
      throw ApiError.BadRequest("Nepavyko rasti instrumento");
    }

    const instrumentExpires = addDays(
      item.cycle.sterilization_date,
      item.instrument.instrument_exp
    );
    return {
      instrument_name: item.instrument.instrument_name,
      expires: format(instrumentExpires, "yyyy-MM-dd"),
    };
  }

  static async saveUsedInstruments(): Promise<string> {
    return "save used instruments - ok";
  }
}
