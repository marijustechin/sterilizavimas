import { prisma } from '../config/prisma.js';
import { Prisma } from '../config/generated/prisma/client.js';
import {
  TReportInstrumentsByMedic,
  TReportInstrumentsInDepartments,
  TReportInstrumentStats,
} from '../types/admin.js';

export default class ReportService {
  /**
   *
   * @param start
   * @param end
   * @returns
   */
  static async getInstrumentsInDepartments(
    start: Date,
    end: Date
  ): Promise<TReportInstrumentsInDepartments[]> {
    const grouped = await prisma.sterilizationCycleItem.groupBy({
      by: ['department_id'],
      where: {
        success: true,
        cycle: {
          sterilization_date: {
            gte: start,
            lte: end,
          },
        },
      },
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: 'desc',
        },
      },
    });

    const departmentIds = grouped.map((g) => g.department_id);

    const departments = await prisma.department.findMany({
      where: { id: { in: departmentIds } },
      select: { id: true, department_name: true },
    });

    const depMap = new Map(departments.map((d) => [d.id, d.department_name]));

    return grouped.map((g) => ({
      department_name:
        depMap.get(g.department_id) ??
        `Nenurodytas skyrius (${g.department_id})`,
      instrument_count: g._count.id,
    }));
  }

  /**
   *
   * @param start
   * @param end
   * @returns
   */
  static async getInstrumentsByMedic(
    start: Date,
    end: Date
  ): Promise<TReportInstrumentsByMedic[]> {
    const grouped = await prisma.instrumentUsage.groupBy({
      by: ['used_by'],
      where: {
        createdAt: {
          gte: start,
          lte: end,
        },
        // doc_status: 'patvirtintas', // jei reikia tik patvirtintų
      },
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: 'desc',
        },
      },
    });

    return grouped.map((g) => ({
      used_by: g.used_by,
      instrument_count: g._count.id,
    }));
  }

  /**
   *
   * @param start
   * @param end
   * @returns
   */
  static async getInstrumentSterilizationStats(
    start: Date,
    end: Date
  ): Promise<TReportInstrumentStats[]> {
    // gauname {_count: {id: SKAICIUS}, instrument_id: SKAICIUS}
    const grouped = await prisma.sterilizationCycleItem.groupBy({
      by: ['instrument_id'],
      where: {
        cycle: {
          sterilization_date: {
            gte: start,
            lte: end,
          },
        },
      },
      _count: { id: true },
      orderBy: {
        _count: { id: 'desc' },
      },
    });

    const instrumentIds = grouped.map((i) => i.instrument_id);

    const instruments = await prisma.instrument.findMany({
      where: { id: { in: instrumentIds } },
      select: { id: true, instrument_name: true },
    });

    const instrumentsMap = new Map(
      instruments.map((i) => [i.id, i.instrument_name])
    );

    return grouped.map((g) => ({
      instrument_name:
        instrumentsMap.get(g.instrument_id) ??
        `Nenurodytas instrumentas (${g.instrument_id})`,
      instrument_count: g._count.id,
    }));
  }
}
