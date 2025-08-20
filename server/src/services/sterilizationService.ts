import { TSterilizationCyclePayload } from 'types';
import { prisma } from '../config/prisma';
import { startOfDay, endOfDay } from 'date-fns';

import ApiError from '../errors/apiErrors';
import PrintingService from './printingService';
import SterilizationCycleRepository from './SterilizationCycleRepository';

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
    // 1. Patikriname partijos numerį
    if (
      sterilizationCycleData.cycleNumber !==
      (await this.getCycleNumber(sterilizationCycleData.sterilizerId))
    ) {
      throw ApiError.BadRequest('Neteisingas ciklo numeris');
    }

    // 2. Patikriname spausdintuvo būseną
    const printerStatus = await PrintingService.CheckPrinterStatus();

    if (printerStatus.status !== 'ready')
      throw ApiError.PrinterError(printerStatus.message);

    // 3. Rasome duomenis į DB
    const saveResult =
      await SterilizationCycleRepository.createSterilizationCycle(
        sterilizationCycleData
      );

    if (!saveResult.success)
      throw ApiError.BadRequest('Duomenų įrašymo klaida');

    // 4. Perduodame duomenis spausdinimui
    const printResult = await PrintingService.PrintLabels(
      sterilizationCycleData,
      10
    );

    if (!printResult) throw ApiError.PrinterError('Spausdinimo klaida');

    return { print: 'success', save: 'success' };
  }
}
