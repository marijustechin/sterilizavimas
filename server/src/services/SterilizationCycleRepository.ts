import { TSterilizationCyclePayload } from 'types';
import { prisma } from '../config/prisma';

export default class SterilizationCycleRepository {
  static async createSterilizationCycle(payload: TSterilizationCyclePayload) {
    try {
      const result = await prisma.$transaction(async (tx) => {
        // 1. Įrašome naują sterilizacijos ciklą
        const newCycle = await tx.sterilizationCycle.create({
          data: {
            user_id: payload.userId,
            sterilizer_id: payload.sterilizerId,
            cycle_number: payload.cycleNumber,
          },
        });

        // 2. Ruošiame masyvą sterilizacijos ciklo elementams
        const cycleItemsData = payload.departmentsAndInstruments.flatMap(
          (department) =>
            department.instruments.map((instrument) => ({
              cycle_id: newCycle.id,
              instrument_id: instrument.id,
              department_id: department.departmentId,
            }))
        );

        // 3. Įrašome visus ciklo elementus
        const createdItems = await tx.sterilizationCycleItem.createMany({
          data: cycleItemsData,
        });

        // 4. Grąžiname naujo ciklo ID, kad galėtumėte jį panaudoti QR kode
        return {
          id: newCycle.id,
          cycle_number: newCycle.cycle_number,
        };
      });

      // Jei viskas pavyko
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      // Jei įvyko klaida, transakcija automatiškai atšaukiama
      console.error('Klaida įrašant sterilizacijos ciklą:', error);
      return {
        success: false,
        error: error,
      };
    }
  }
}
