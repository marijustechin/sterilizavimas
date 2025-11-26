// SterilizationCycleRepository.ts
import { prisma } from '../config/prisma.js';
import { TSterilizationCyclePayload } from '../types/sterilization.js';
import HelperService from './helperService.js';

export default class SterilizationCycleRepository {
  static async createSterilizationCycle(payload: TSterilizationCyclePayload) {
    try {
      const result = await prisma.$transaction(async (tx) => {
        // 1) ciklas
        const newCycle = await tx.sterilizationCycle.create({
          data: {
            user_id: payload.userId,
            sterilizer_id: payload.sterilizerId,
            cycle_number: payload.cycleNumber,
          },
        });

        // 2) paruošiam items be short_code
        const cycleItemsData = payload.departmentsAndInstruments.flatMap(
          (department) =>
            department.instruments.map((instrument) => ({
              cycle_id: newCycle.id,
              instrument_id: instrument.id,
              department_id: department.departmentId,
            }))
        );

        // 3) įrašom items
        await tx.sterilizationCycleItem.createMany({ data: cycleItemsData });

        // 4) Pasiimam ką tik įrašytus items su ID (vienoje transakcijoje — kiti jų nematys tol, kol nekomituosim)
        const itemsToUpdate = await tx.sterilizationCycleItem.findMany({
          where: { cycle_id: newCycle.id },
          select: { id: true, department_id: true, instrument_id: true },
          orderBy: { id: 'asc' },
        });

        // 5) Atnaujinam short_code pagal item.id
        // Generuojame short_code ir atnaujiname. Promise.all vykdomas per tx, tad viskas lieka atomic.
        const updatePromises = itemsToUpdate.map((item) => {
          const itemShortCode = HelperService.encodeBase36(item.id);
          return tx.sterilizationCycleItem.update({
            where: { id: item.id },
            data: { short_code: itemShortCode },
          });
        });
        await Promise.all(updatePromises);
        // 6) Grąžinam galutinius įrašus (su short_code)
        const finalItems = await tx.sterilizationCycleItem.findMany({
          where: { cycle_id: newCycle.id },
          select: {
            id: true,
            department_id: true,
            instrument_id: true,
            short_code: true,
          },
          orderBy: { id: 'asc' },
        });

        return {
          cycle: {
            id: newCycle.id,
            cycle_number: newCycle.cycle_number,
            sterilizer_id: newCycle.sterilizer_id,
          },
          items: finalItems, // svarbiausia: čia visi lipdukai su savo ID
        };
      });

      return {
        success: true,
        data: result as {
          cycle: { id: number; cycle_number: number; sterilizer_id: number };
          items: Array<{
            id: number;
            department_id: number;
            instrument_id: number;
            short_code: string;
          }>;
        },
      };
    } catch (error) {
      console.error('Klaida įrašant sterilizacijos ciklą:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
}
