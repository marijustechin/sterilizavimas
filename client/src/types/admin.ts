import type { TDepartment, TInstrument } from './sterilization';
import { DocStatus } from '../../../server/src/config/generated/prisma/enums';

export type TAdminRecord = {
  id: number;
  instrument: TInstrument;
  department: TDepartment;
  sterilizedBy: string;
  sterilizedAt: string;
  expiresAt: string;
  usedAt: string | null;
  usedBy: string | null;
  usedTo: string | null;
  docStatus: DocStatus;
};

export type TCycleDataResponse = {
  items: TAdminRecord[];
  totalRecords: number;
  currentPage: number;
  totalPages: number;
};

////////////////////////
// Reports
////////////////////////
export type TReportInstrumentsInDepartments = {
  department_name: string;
  instrument_count: number;
};

export type TReportInstrumentsByMedic = {
  used_by: string;
  instrument_count: number;
};

export type TReportInstrumentStats = {
  instrument_name: string;
  instrument_count: number;
};

export type TAdminReportResponse = {
  instrumentStats: TReportInstrumentStats[];
  instrumentsByMedic: TReportInstrumentsByMedic[];
  instrumentsInDepartments: TReportInstrumentsInDepartments[];
  total: number;
  totalBad: number;
};
