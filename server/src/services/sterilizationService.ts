import { TSterilizationCyclePayload } from 'types';
import { prisma } from '../config/prisma';
import { startOfDay, endOfDay } from 'date-fns';

import ApiError from '../errors/apiErrors';

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
    if (
      sterilizationCycleData.cycleNumber !==
      (await this.getCycleNumber(sterilizationCycleData.sterilizerId))
    ) {
      throw ApiError.BadRequest('Incorrect cycle number');
    }

    return sterilizationCycleData;
  }
}
