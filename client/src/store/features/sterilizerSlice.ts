import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import type { TSterilizer } from '../../types';
import SterilizerService from '../../services/sterilizerService';

interface ISterilizerState {
  sterilizers: TSterilizer[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ISterilizerState = {
  sterilizers: null,

  status: 'idle',
  error: null,
};

export const getSterilizers = createAsyncThunk<TSterilizer[]>(
  'sterilizers/getSterilizers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await SterilizerService.getAll();
      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

export const sterilizerSlice = createSlice({
  name: 'sterilizers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSterilizers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSterilizers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.sterilizers = action.payload;
      })
      .addCase(getSterilizers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectSterilizer = (state: RootState) =>
  state.sterilizer.sterilizers;

export default sterilizerSlice.reducer;
