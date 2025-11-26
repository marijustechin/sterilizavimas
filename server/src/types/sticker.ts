import { TDepartment, TInstrument } from './sterilization.js';

type TCycle = {
  id: number;
  user_id: string;
  sterilizer_id: number;
  cycle_number: number;
  sterilization_date: string;
};

export type TSticker = {
  id: number;
  short_code: string;
  cycle_id: number;
  instrument_id: number;
  department_id: number;
  success: boolean;
  instrument: TInstrument;
  department: TDepartment;
  cycle: TCycle;
};

export type TGetStickersResponse = {
  items: TSticker[];
  total: number;
  page: number;
  totalPages: number;
};
