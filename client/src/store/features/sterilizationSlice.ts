// src/store/features/sterilizationSlice.ts
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import SterilizationService from '../../services/sterilizationService';
import HelperService from '../../services/helperService';

// ... (Instrument, Department, SterilizationEntry tipai lieka nepakitę)

type SterilizationEntry = {
  instrumentId: number;
  departmentId: number;
};

// Atnaujintas SterilizationState interfeisas
interface SterilizationState {
  //currentBatch: SterilizationEntry[];
  selectedSterilizerId: number | null; // Pasirinkto sterilizatoriaus ID
  currentCycleNumber: number | null; // Apskaičiuotas ciklo numeris šiam sterilizatoriui ir dienai
  loadingCycleNumber: boolean; // Būsena, ar vyksta ciklo numerio gavimas
  cycleNumberError: string | null; // Klaidos pranešimas, jei nepavyko gauti ciklo numerio

  assignments: SterilizationEntry[]; // Nauja dalis
}

const initialState: SterilizationState = {
  // currentBatch: [],
  selectedSterilizerId: null,
  currentCycleNumber: null,
  loadingCycleNumber: false,
  cycleNumberError: null,

  assignments: [],
};

// Async Thunk ciklo numeriui gauti
export const fetchNextCycleNumber = createAsyncThunk(
  'sterilization/fetchNextCycleNumber',
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
  name: 'sterilization',
  initialState,
  reducers: {
    // ... (addInstrumentToCycle, removeInstrumentFromCycle, clearCurrentCycle, updateCycleEntryQuantity)

    // Veiksmas, skirtas nustatyti pasirinktą sterilizatorių
    setSelectedSterilizer: (state, action: PayloadAction<{ id: number }>) => {
      state.selectedSterilizerId = action.payload.id;
      state.currentCycleNumber = null; // Išvalyti seną ciklo numerį, kol bus gautas naujas
    },
    addInstrumentToDepartment: (
      state,
      action: PayloadAction<{ instrumentId: number; departmentId: number }>
    ) => {
      const { instrumentId, departmentId } = action.payload;

      // Neleidžiame dubliuoti įrašo
      const alreadyExists = state.assignments.some(
        (entry) =>
          entry.instrumentId === instrumentId &&
          entry.departmentId === departmentId
      );

      if (!alreadyExists) {
        state.assignments.push({ instrumentId, departmentId });
      }
    },
    removeInstrumentFromDepartment: (
      state,
      action: PayloadAction<{ instrumentId: number; departmentId: number }>
    ) => {
      const { instrumentId, departmentId } = action.payload;
      state.assignments = state.assignments.filter(
        (entry) =>
          !(
            entry.instrumentId === instrumentId &&
            entry.departmentId === departmentId
          )
      );
    },
  },
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
  removeInstrumentFromDepartment, // Naujas eksportas
} = sterilizationSlice.actions;

//export const selectCurrentBatch = (state: RootState) => state.sterilization.currentBatch;
export const selectSelectedSterilizerId = (state: RootState) =>
  state.sterilization.selectedSterilizerId;
export const selectCurrentCycleNumber = (state: RootState) =>
  state.sterilization.currentCycleNumber;
export const selectLoadingCycleNumber = (state: RootState) =>
  state.sterilization.loadingCycleNumber;
export const selectCycleNumberError = (state: RootState) =>
  state.sterilization.cycleNumberError;

export default sterilizationSlice.reducer;
