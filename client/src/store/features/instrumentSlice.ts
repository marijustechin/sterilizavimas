import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import InstrumentService from '../../services/instrumentService';
import type { TInstrument, TNewInstrument } from '../../types';

interface IInstrumentState {
  instruments: TInstrument[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IInstrumentState = {
  instruments: [],
  status: 'idle',
  error: null,
};

// Get all instruments
export const getInstruments = createAsyncThunk<TInstrument[]>(
  'instrument/getInstruments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await InstrumentService.getAll();
      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// Delete instrumment
export const deleteInstrument = createAsyncThunk<TInstrument, { id: number }>(
  'instrument/deleteInstrument',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await InstrumentService.delete(id);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// update instrument
export const updateInstrument = createAsyncThunk<
  TInstrument,
  { instrument: TInstrument }
>(
  'instrument/updateInstrument',
  async ({ instrument }, { rejectWithValue }) => {
    try {
      const response = await InstrumentService.update(instrument);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// Create instrument
export const createInstrument = createAsyncThunk<
  TInstrument,
  { instrument: TNewInstrument }
>(
  'instrument/createInstrument',
  async ({ instrument }, { rejectWithValue }) => {
    try {
      const response = await InstrumentService.create(instrument);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

////////////////////////////////////////////////////////////////
export const instrumentSlice = createSlice({
  name: 'instrument',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all instruments
      .addCase(getInstruments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getInstruments.fulfilled, (state, action) => {
        state.instruments = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(getInstruments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Delete instrument
      .addCase(deleteInstrument.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteInstrument.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.instruments = state.instruments?.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteInstrument.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Create instrument
      .addCase(createInstrument.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createInstrument.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.instruments?.push(action.payload);
      })
      .addCase(createInstrument.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Update instrument
      .addCase(updateInstrument.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateInstrument.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const updatedInstrument = action.payload;
        if (state.instruments) {
          state.instruments = state.instruments.map((instrument) => {
            if (instrument.id === updatedInstrument.id) {
              return updatedInstrument;
            }
            return instrument;
          });
        }
      })
      .addCase(updateInstrument.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectInstruments = (state: RootState) =>
  state.instruments.instruments;

export const selectInstrumentStatus = (state: RootState) =>
  state.instruments.status;
export const selectInstrumentError = (state: RootState) =>
  state.instruments.error;

export default instrumentSlice.reducer;
