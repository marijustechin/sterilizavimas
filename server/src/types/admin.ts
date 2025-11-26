import { TDepartment, TInstrument } from './sterilization.js';
import { DocStatus } from '../config/generated/prisma/enums.js';

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
  docStatus: DocStatus | null;
};

export type TCycleDataResponse = {
  items: TAdminRecord[];
  total: number;
  page: number;
  totalPages: number;
};

export type TAdminListFilters = {
  limit?: string;
  currentPage?: string;
  sortOrder?: string;
  sortField?: string;
  docStatus?: DocStatus;
  searchString?: string;
  searchField?: string;
  success?: string;
};
