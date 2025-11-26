import type { TDepartment, TInstrument } from './sterilization';

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
  docStatus: string | null;
};

export type TCycleDataResponse = {
  items: TAdminRecord[];
  total: number;
  page: number;
  totalPages: number;
};
