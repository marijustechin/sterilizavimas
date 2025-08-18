import { prisma } from '../config/prisma';

export default class AdminService {
  static async getSterilizationData() {
    const sterilizationData = await prisma.sterilizationCycle.findMany({
      include: {
        sterilizer: true,
        items: {
          include: {
            instrument: true,
            department: true,
            InstrumentUsage: true,
          },
        },
      },
    });

    return sterilizationData;
  }
}
