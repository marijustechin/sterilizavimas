import { TScannedSticker } from 'types';
import { prisma } from '../config/prisma';
import ApiError from '../errors/apiErrors';
import { addDays, format } from 'date-fns';

export default class MedicService {
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

  // kol kas grazina string, bet veliau grazins instrumento duomenis
  static async getStickerDetails(
    stickerString: string
  ): Promise<TScannedSticker> {
    const { cycleId, departmentId, instrumentId } =
      this.parseStickerString(stickerString);

    const item = await prisma.sterilizationCycleItem.findFirst({
      where: {
        cycle_id: cycleId,
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
    return {
      instrument_name: item.instrument.instrument_name,
      expires: format(instrumentExpires, 'yyyy-MM-dd'),
    };
  }

  static async saveUsedInstruments(): Promise<string> {
    return 'save used instruments - ok';
  }
}
