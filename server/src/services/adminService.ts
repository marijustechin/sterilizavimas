import { addDays, format } from 'date-fns';
import { prisma } from '../config/prisma';
import LdapService from './ldapService';
import { TAdminRecord, TCycleDataResponse } from 'types';

export default class AdminService {
  static async getSterilizationData(
    page = 1,
    limit = 10,
    sort = '',
    filter = ''
  ): Promise<TCycleDataResponse> {
    // Apskaičiuojame, kiek įrašų praleisti
    const skip = (page - 1) * limit;

    const where: any = {
      OR: filter
        ? [
            { instrument: { name: { contains: filter, mode: 'insensitive' } } },
            { instrument: { code: { contains: filter, mode: 'insensitive' } } },
            {
              cycle: { cycleNumber: { contains: filter, mode: 'insensitive' } },
            },
            {
              cycle: {
                sterilizerId: { contains: filter, mode: 'insensitive' },
              },
            },
          ]
        : undefined,
    };

    const [records, totalRecords] = await Promise.all([
      prisma.sterilizationCycleItem.findMany({
        skip,
        take: limit,
        where,
        include: {
          cycle: true,
          instrument: true,
          department: true,
          usage: true,
        },
      }),
      prisma.sterilizationCycleItem.count({ where }),
    ]);

    const guids = Array.from(
      new Set(records.map((r) => r.cycle.user_id).filter(Boolean))
    );

    const nameMap = await LdapService.getDisplayNamesByUserIds(guids);

    const cycleData: TAdminRecord[] = records.map((record) => {
      const sterilizedAt = format(
        record.cycle.sterilization_date,
        'yyyy-MM-dd'
      );
      const expiresAt = format(
        addDays(
          record.cycle.sterilization_date,
          record.instrument.instrument_exp
        ),
        'yyyy-MM-dd'
      );

      return {
        id: record.id,
        instrument: record.instrument,
        department: record.department,
        sterilizedBy: nameMap.get(record.cycle.user_id) ?? record.cycle.user_id,
        sterilizedAt,
        expiresAt,
        usedAt: record.usage?.usage_timestamp
          ? format(record.usage?.usage_timestamp, 'yyyy-MM-dd')
          : null,
        usedBy: record.usage?.used_by_user_id
          ? record.usage?.used_by_user_id
          : null, // cia reiketu taip pat gauti mediku vardus
        usedTo: record.usage?.patient_id ? record.usage?.patient_id : null,
      };
    });

    const totalPages =
      totalRecords % limit === 0
        ? Math.floor(totalRecords / limit)
        : Math.floor(totalRecords / limit) + 1;

    return {
      items: cycleData,
      totalPages: totalPages,
      page: page,
      total: totalRecords,
    };
  }
}
