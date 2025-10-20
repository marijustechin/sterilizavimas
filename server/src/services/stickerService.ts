// services/stickerService.ts
import { TSterilizationCycleItem, TSticker } from 'types';
import { prisma } from '../config/prisma';
import { Prisma } from '@prisma/client';
import ApiError from '../errors/apiErrors';

interface StickerFilter {
  cycleNumber?: string;
  departmentCode?: string;
  instrumentCode?: string;
}

export default class StickerService {
  /**
   *
   * @param v number as string
   * @returns number | undefined
   */
  private static toIntSafe(v?: string): number | undefined {
    if (v === undefined) return undefined;
    const n = Number.parseInt(v, 10);
    return Number.isFinite(n) ? n : undefined;
  }

  /**
   *
   * @param filters
   * @returns
   */
  static async getAll(filters: StickerFilter): Promise<TSticker[]> {
    // pradinis where objektas
    const where: Prisma.SterilizationCycleItemWhereInput = {};

    // 1. FILTRAVIMAS PAGAL DEPARTAMENTĄ (DEPARTMENT CODE)
    const departmentCode = this.toIntSafe(filters.departmentCode);
    if (departmentCode !== undefined) {
      // Ryšio filtravimas: department yra to-one, naudojame `is`
      where.department = {
        is: {
          // Reikšmė ieškoma `Department` modelyje
          department_code: departmentCode,
        },
      };
    }

    // 2. FILTRAVIMAS PAGAL INSTRUMENTĄ (INSTRUMENT CODE)
    const instrumentCode = this.toIntSafe(filters.instrumentCode);
    if (instrumentCode !== undefined) {
      // Ryšio filtravimas: instrument yra to-one, naudojame `is`
      where.instrument = {
        is: {
          // Reikšmė ieškoma `Instrument` modelyje
          instrument_code: instrumentCode,
        },
      };
    }

    // 3. FILTRAVIMAS PAGAL CIKLO NUMERĮ (CYCLENUMBER) - Lieka beveik nepakitęs
    const cycleNumber = this.toIntSafe(filters.cycleNumber);
    if (cycleNumber !== undefined) {
      // Ryšio filtravimas: cycle yra to-one, naudojame `is`
      where.cycle = {
        is: {
          cycle_number: cycleNumber,
        },
      };
    }

    const stickers = await prisma.sterilizationCycleItem.findMany({
      where,
      include: {
        instrument: true,
        department: true,
        cycle: true, // naudinga užklausų testavimui / response
      },
    });

    return stickers as unknown as TSticker[];
  }

  /**
   *
   * @param short_code as string
   * @returns Updated sterilization cycle item
   */
  static async toggleStickerSuccess(
    short_code: string
  ): Promise<TSterilizationCycleItem> {
    const existingCycleItem = await prisma.sterilizationCycleItem.findUnique({
      where: { short_code },
    });

    if (!existingCycleItem)
      throw ApiError.BadRequest(`Lipdukas ID:${short_code} nerastas`);

    const updatedCycleItem = await prisma.sterilizationCycleItem.update({
      where: { short_code },
      data: {
        success: !existingCycleItem.success,
      },
    });

    return updatedCycleItem;
  }
}
