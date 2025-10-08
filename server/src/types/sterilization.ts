export interface ISelectedInstrument {
  instrument: TInstrument;
  uniqueId: string;
  departmentId: string;
}

export type TSterilizer = {
  id: number;
  sterilizer_code: number;
  sterilizer_name: string;
};

export type TNewSterilizer = {
  sterilizer_code: number;
  sterilizer_name: string;
};

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

export type TNewDepartment = {
  department_code: number;
  department_name: string;
};

export type TInstrumentsOfDepartment = {
  departmentId: number;
  department_code: number;
  instruments: TInstrument[];
};

export type TSterilizationCyclePayload = {
  printerId: number;
  sterilizerId: number;
  userId: string;
  cycleNumber: number;
  departmentsAndInstruments: TInstrumentsOfDepartment[];
};

export type TPrintedItem = {
  id: number; // CI
  department_id: number; // DI
  instrument_id: number; // II
};
