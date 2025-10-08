// src/store/features/sterilizationSlice.ts
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import SterilizationService from "../../services/sterilizationService";
import HelperService from "../../services/helperService";
import type {
  ISelectedInstrument,
  TDepartment,
  TInstrument,
} from "../../types";

// Atnaujintas SterilizationState interfeisas
interface SterilizationState {
  selectedSterilizerId: number | null; // Pasirinkto sterilizatoriaus ID
  currentCycleNumber: number | null; // Apskaičiuotas ciklo numeris šiam sterilizatoriui ir dienai
  loadingCycleNumber: boolean; // Būsena, ar vyksta ciklo numerio gavimas
  cycleNumberError: string | null; // Klaidos pranešimas, jei nepavyko gauti ciklo numerio

  departments: TDepartment[];
  instruments: ISelectedInstrument[];

  infoMessage: string;
  printingPreview: boolean;
}

const initialState: SterilizationState = {
  selectedSterilizerId: null,
  currentCycleNumber: null,
  loadingCycleNumber: false,
  cycleNumberError: null,

  // selected departments in sterilizer
  departments: [],
  // selected instruments in department
  instruments: [],

  infoMessage: "",
  printingPreview: false,
};

// Async Thunk ciklo numeriui gauti
export const fetchNextCycleNumber = createAsyncThunk(
  "sterilization/fetchNextCycleNumber",
  async (sterilizerId: number, { rejectWithValue }) => {
    try {
      const response = await SterilizationService.getCycleNumber(sterilizerId);

      return response;
    } catch (error: unknown) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

const sterilizationSlice = createSlice({
  name: "sterilization",
  initialState,
  reducers: {
    // reset sterilization state
    resetSterilizationState: (state) => {
      state.selectedSterilizerId = null;
      state.currentCycleNumber = null;
      state.departments = [];
      state.instruments = [];
      state.printingPreview = false;
    },
    // set printing preview
    setPrintingPreview: (state, action: PayloadAction<{ value: boolean }>) => {
      state.printingPreview = action.payload.value;
    },

    // set info message text
    setMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.infoMessage = action.payload.message;
    },

    // Veiksmas, skirtas nustatyti pasirinktą sterilizatorių
    setSelectedSterilizer: (state, action: PayloadAction<{ id: number }>) => {
      state.selectedSterilizerId = action.payload.id;
      state.currentCycleNumber = null; // Išvalyti seną ciklo numerį, kol bus gautas naujas
    },
    // add department to sterilizer
    addDepartmentToSterilizer: (
      state,
      action: PayloadAction<{ departmentToMove: TDepartment }>
    ) => {
      state.departments = [
        ...state.departments,
        action.payload.departmentToMove,
      ];
    },
    // remove department from sterilizer
    removeDepartmentFromSterilizer: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      const departmentId = `department-dropzone-${action.payload.id}`;
      state.departments = state.departments.filter(
        (item) => item.id !== action.payload.id
      );
      state.instruments = state.instruments.filter(
        (item) => item.departmentId !== departmentId
      );
    },
    // add instrument to department
    addInstrumentToDepartment: (
      state,
      action: PayloadAction<{
        instrument: TInstrument;
        departmentId: string;
        uniqueId: string;
        amount?: number;
      }>
    ) => {
      const amount = Math.max(1, action.payload.amount ?? 1);
      state.instruments = [...state.instruments, { ...action.payload, amount }];

      const total = state.instruments.reduce(
        (s, it) => s + (it.amount || 1),
        0
      );
      state.infoMessage = `Lipdukų skaičius: ${total}`;
    },
    // remove instrument from department
    removeInstrumentFromDepartment: (
      state,
      action: PayloadAction<{ instrument: ISelectedInstrument }>
    ) => {
      const uniqueInstrmentId = action.payload.instrument.uniqueId;

      state.instruments = state.instruments.filter(
        (item) => item.uniqueId !== uniqueInstrmentId
      );

      const total = state.instruments.reduce(
        (s, it) => s + (it.amount || 1),
        0
      );
      state.infoMessage = `Lipdukų skaičius: ${total}`;
    },
    // cia reikes keisti instrumento kieki
    setInstrumentAmount: (
      state,
      action: PayloadAction<{ uniqueId: string; amount: number }>
    ) => {
      const { uniqueId, amount } = action.payload;

      // Randame instrumentą pagal uniqueId
      const instrumentIndex = state.instruments.findIndex(
        (item) => item.uniqueId === uniqueId
      );

      if (instrumentIndex !== -1) {
        // Klonuojame objektą ir atnaujiname amount
        state.instruments[instrumentIndex] = {
          ...state.instruments[instrumentIndex],
          amount: amount,
        };
      }

      const total = state.instruments.reduce(
        (s, it) => s + (it.amount || 1),
        0
      );
      state.infoMessage = `Lipdukų skaičius: ${total}`;
    },
  },

  // extra ////////////////////////
  extraReducers: (builder) => {
    builder
      .addCase(fetchNextCycleNumber.pending, (state) => {
        state.loadingCycleNumber = true;
        state.cycleNumberError = null;
      })
      .addCase(
        fetchNextCycleNumber.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.loadingCycleNumber = false;
          state.currentCycleNumber = action.payload;
        }
      )
      .addCase(fetchNextCycleNumber.rejected, (state, action) => {
        state.loadingCycleNumber = false;
        state.cycleNumberError = action.payload as string;
        state.currentCycleNumber = null;
      });
  },
});

export const {
  setSelectedSterilizer,
  addInstrumentToDepartment,
  removeInstrumentFromDepartment,
  addDepartmentToSterilizer,
  removeDepartmentFromSterilizer,
  setMessage,
  setPrintingPreview,
  resetSterilizationState,
  setInstrumentAmount,
} = sterilizationSlice.actions;

export const selectedDepartments = (state: RootState) =>
  state.sterilization.departments;

export const selectedInstruments = (state: RootState) =>
  state.sterilization.instruments;

export const selectInfoMessage = (state: RootState) =>
  state.sterilization.infoMessage;

export const selectSelectedSterilizerId = (state: RootState) =>
  state.sterilization.selectedSterilizerId;

export const selectCurrentCycleNumber = (state: RootState) =>
  state.sterilization.currentCycleNumber;

export const selectLoadingCycleNumber = (state: RootState) =>
  state.sterilization.loadingCycleNumber;

export const selectCycleNumberError = (state: RootState) =>
  state.sterilization.cycleNumberError;

export const selectPrintingPreview = (state: RootState) =>
  state.sterilization.printingPreview;

export const selectTotalLabels = (state: RootState) =>
  state.sterilization.instruments.reduce((s, it) => s + (it.amount || 1), 0);

export default sterilizationSlice.reducer;
