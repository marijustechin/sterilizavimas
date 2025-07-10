import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import InstrumentService from '../../services/instrumentService';
import type { TInstrument } from '../../types';

interface IInstrumentState {
  instruments: TInstrument[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IInstrumentState = {
  instruments: null,
  status: 'idle',
  error: null,
};

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

export const instrumentSlice = createSlice({
  name: 'instrument',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const selectInstruments = (state: RootState) =>
  state.instruments.instruments;

export default instrumentSlice.reducer;
