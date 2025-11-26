import { addDays, format } from 'date-fns';
import { Prisma } from '@prisma/client';
import { prisma } from '../config/prisma';
import LdapService from './ldapService';
import HelperService from './helperService';
import { TAdminListFilters, TAdminRecord, TCycleDataResponse } from 'types';

/**
 * Naudojama rikiavimui buildOrderByClause metode
 */
const SORT_MAP: Record<
  string,
  (o: Prisma.SortOrder) => Prisma.SterilizationCycleItemOrderByWithRelationInput
> = {
  id: (o) => ({ id: o }),
  short_code: (o) => ({ short_code: o }),
  success: (o) => ({ success: o }),

  instrument_name: (o) => ({ instrument: { instrument_name: o } }),
  instrument_code: (o) => ({ instrument: { instrument_code: o } }),
  instrument_exp: (o) => ({ instrument: { instrument_exp: o } }),

  department_name: (o) => ({ department: { department_name: o } }),
  department_code: (o) => ({ department: { department_code: o } }),

  cycle_number: (o) => ({ cycle: { cycle_number: o } }),
  user_id: (o) => ({ cycle: { user_id: o } }),
  sterilization_date: (o) => ({ cycle: { sterilization_date: o } }),

  used_by: (o) => ({ usage: { used_by: o } }),
  patient: (o) => ({ usage: { patient: o } }),
  doc_status: (o) => ({ usage: { doc_status: o } }),
  createdAt: (o) => ({ usage: { createdAt: o } }),
  updatedAt: (o) => ({ usage: { updatedAt: o } }),
};

export default class AdminService {
  static async getInstrumentUsageData(filters: TAdminListFilters) {
    const limit = HelperService.toIntSafe(filters.limit) ?? 15;
    const currentPage = HelperService.toIntSafe(filters.currentPage) ?? 1;
    const skip = (currentPage - 1) * limit;

    let where = this.buildWhereClause(filters);

    // filtravimas pagal doc_status
    if (filters.docStatus !== undefined) {
      where.usage = {
        doc_status: filters.docStatus,
      };
    }

    // blogas/geras sterilizavimo rezultatas
    if (filters.success === 'true' || filters.success === 'false') {
      const onlyDefected = filters.success === 'true' ? true : false;
      where.success = onlyDefected;
    }

    const orderBy = this.buildOrderByClause(filters);

    const [records, totalRecords] = await Promise.all([
      prisma.sterilizationCycleItem.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        include: {
          cycle: true,
          instrument: true,
          department: true,
          usage: true,
        },
      }),
      prisma.sterilizationCycleItem.count({ where }),
    ]);

    // gauname sterilizuotoju guids
    const guids = Array.from(
      new Set(records.map((r) => r.cycle.user_id).filter(Boolean))
    );

    const nameMap = await LdapService.getDisplayNamesByUserIds(guids);

    const cycleData: TAdminRecord[] = records.map((record) => {
      const sterilizedAt = format(
        record.cycle.sterilization_date,
        'yyyy-MM-dd HH:mm'
      );
      const expiresAt = format(
        addDays(
          record.cycle.sterilization_date,
          record.instrument.instrument_exp
        ),
        'yyyy-MM-dd HH:mm'
      );

      return {
        id: record.id,
        instrument: record.instrument,
        department: record.department,
        sterilizedBy: nameMap.get(record.cycle.user_id) ?? record.cycle.user_id,
        sterilizedAt,
        expiresAt,
        usedAt: record.usage?.updatedAt
          ? format(record.usage?.updatedAt, 'yyyy-MM-dd HH:mm')
          : null,
        usedBy: record.usage?.used_by ? record.usage?.used_by : null, // cia reiketu taip pat gauti mediku vardus
        usedTo: record.usage?.patient ? record.usage?.patient : null,
        docStatus: record.usage?.doc_status ? record.usage?.doc_status : null,
      };
    });

    const totalPages =
      totalRecords % limit === 0
        ? Math.floor(totalRecords / limit)
        : Math.floor(totalRecords / limit) + 1;

    return {
      items: cycleData,
      totalRecords: totalRecords,
      totalPages: totalPages,
      currentPage: currentPage,
    };
  }

  // --- PRIVATE METODAI LOGIKAI ---

  /**
   * Konstruoja Prisma WHERE sąlygą, įskaitant įdėtą filtravimą.
   * @param filters
   * @returns
   */
  private static buildWhereClause(
    filters: TAdminListFilters
  ): Prisma.SterilizationCycleItemWhereInput {
    let where: Prisma.SterilizationCycleItemWhereInput = {};

    if (
      filters.searchField !== undefined &&
      filters.searchString !== undefined
    ) {
      const field = filters.searchField;
      const searchString = filters.searchString;

      // Naudojame centralizuotą logiką filtrams
      if (['used_by', 'patient'].includes(field)) {
        where.usage = {
          [field]: { contains: searchString },
        };
      } else if (['instrument_name'].includes(field)) {
        where.instrument = {
          [field]: { contains: searchString },
        };
      } else if (['cycle_number', 'user_id'].includes(field)) {
        where.cycle = {
          [field]: { contains: searchString },
        };
      } else if (['short_code'].includes(field)) {
        // Filtravimas pagal pagrindinės lentelės lauką
        where = {
          ...where,
          [field]: { contains: searchString, mode: 'insensitive' },
        };
      }
    }

    // Čia galite pridėti kitus bendrus filtrus (pvz., datos diapazonas)

    return where;
  }

  /**
   * Konstruoja Prisma ORDER BY sąlygą.
   */
  private static buildOrderByClause(filters: TAdminListFilters) {
    if (!filters.sortField || !filters.sortOrder) return undefined;

    const field = filters.sortField;
    const order = filters.sortOrder as Prisma.SortOrder;

    const builder = SORT_MAP[field];
    return builder ? builder(order) : undefined;
  }
}
