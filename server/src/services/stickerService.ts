// services/stickerService.ts
import { prisma } from '../config/prisma.js';
import ApiError from '../errors/apiErrors.js';
import HelperService from './helperService.js';
import { TGetStickersResponse, TSticker } from '../types/sticker.js';
import { TSterilizationCycleItem } from '../types/sterilization.js';
import { Prisma } from '../config/generated/prisma/client.js';

interface StickerFilter {
  limit?: string;
  currentPage?: string;
  cycleNumber?: string;
  departmentCode?: string;
  instrumentCode?: string;
  searchString?: string;
  onlyDefected?: string;
}

export default class StickerService {
  /**
   *
   * @param filters
   * @returns
   */
  static async getAll(filters: StickerFilter): Promise<TGetStickersResponse> {
    const limit = HelperService.toIntSafe(filters.limit) ?? 15;
    const currentPage = HelperService.toIntSafe(filters.currentPage) ?? 1;
    // Apskaičiuojame, kiek įrašų praleisti
    const skip = (currentPage - 1) * limit;
    // pradinis where objektas
    const where: Prisma.SterilizationCycleItemWhereInput = {};

    // 1. FILTRAVIMAS PAGAL DEPARTAMENTĄ (DEPARTMENT CODE)
    const departmentCode = HelperService.toIntSafe(filters.departmentCode);
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
    const instrumentCode = HelperService.toIntSafe(filters.instrumentCode);
    if (instrumentCode !== undefined) {
      // Ryšio filtravimas: instrument yra to-one, naudojame `is`
      where.instrument = {
        is: {
          // Reikšmė ieškoma `Instrument` modelyje
          instrument_code: instrumentCode,
        },
      };
    }

    // 3. FILTRAVIMAS PAGAL CIKLO NUMERĮ (CYCLENUMBER)
    const cycleNumber = HelperService.toIntSafe(filters.cycleNumber);
    if (cycleNumber !== undefined) {
      // Ryšio filtravimas: cycle yra to-one, naudojame `is`
      where.cycle = {
        is: {
          cycle_number: cycleNumber,
        },
      };
    }

    // 4. FILTRAVIMAS PAGAL UNIKALŲ ID (short_code)
    const searchString = filters.searchString;
    if (searchString) {
      where.short_code = {
        contains: searchString, // = %searchString%
      };
    }

    // 5. FILTRAVIMAS PAGAL GERAS/BLOGAS (success)
    if (filters.onlyDefected !== undefined) {
      const onlyDefected = filters.onlyDefected === 'true' ? false : true;
      where.success = onlyDefected;
    }

    const stickers = await prisma.sterilizationCycleItem.findMany({
      take: limit,
      skip,
      where,
      include: {
        instrument: true,
        department: true,
        cycle: true, // naudinga užklausų testavimui / response
      },
    });

    const totalStickers = await prisma.sterilizationCycleItem.count({ where });

    const totalPages =
      totalStickers % limit === 0
        ? Math.floor(totalStickers / limit)
        : Math.floor(totalStickers / limit) + 1;

    return {
      items: stickers as unknown as TSticker[],
      total: totalStickers,
      totalPages: totalPages,
      page: currentPage,
    };
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
