export interface ISelectedInstrument {
  instrument: TInstrument;
  uniqueId: string;
  departmentId: string;
}

export type TInstrument = {
  id: number;
  instrument_code: number;
  instrument_name: string;
  instrument_exp: number;
};

export type TNewInstrument = {
  instrument_code: number;
  instrument_name: string;
  instrument_exp: number;
};

export type TDepartment = {
  id: number;
  department_code: number;
  department_name: string;
};

export type TSterilizationCyclePayload = {
  sterilizerId: number;
  userId: string;
  cycleNumber: number;
  departments: TDepartment[];
  instruments: ISelectedInstrument[];
};
