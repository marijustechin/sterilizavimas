import { prisma } from '../config/prisma.js';
import { startOfDay, endOfDay } from 'date-fns';

import ApiError from '../errors/apiErrors.js';
import PrintingService from './printingService.js';
import SterilizationCycleRepository from './SterilizationCycleRepository.js';
import { TSterilizationCyclePayload } from '../types/sterilization.js';

export default class SterilizationService {
  static async getCycleNumber(sterilizerId: number): Promise<number> {
    const now = new Date();
    const todayStart = startOfDay(now);
    const todayEnd = endOfDay(now);

    const lastCycle = await prisma.sterilizationCycle.findFirst({
      where: {
        sterilizer_id: sterilizerId,
        sterilization_date: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
      orderBy: {
        cycle_number: 'desc',
      },
    });

    return lastCycle ? lastCycle.cycle_number + 1 : 1;
  }

  static async saveSterilizationCycle(
    sterilizationCycleData: TSterilizationCyclePayload
  ) {
    // 1) cycleNumber check – ok
    if (
      sterilizationCycleData.cycleNumber !==
      (await this.getCycleNumber(sterilizationCycleData.sterilizerId))
    ) {
      throw ApiError.BadRequest('Neteisingas ciklo numeris');
    }

    // 2) printer check – ok
    const printerStatus = await PrintingService.CheckPrinterStatus(
      sterilizationCycleData.printerId
    );
    if (printerStatus.status !== 'ready') {
      throw ApiError.PrinterError(printerStatus.message);
    }

    // 3) įrašom į DB
    const saveResult =
      await SterilizationCycleRepository.createSterilizationCycle(
        sterilizationCycleData
      );
    if (!saveResult.success || !saveResult.data) {
      throw ApiError.BadRequest(saveResult.error || 'Duomenų įrašymo klaida');
    }

    // 4) spausdinam – perduodam VISUS items
    const printOk = await PrintingService.PrintLabels(
      sterilizationCycleData,
      saveResult.data.items // kiekvienas turės savo id/DI/II
    );
    if (!printOk) throw ApiError.PrinterError('Spausdinimo klaida');

    return { print: 'success', save: 'success' };
  }
}
