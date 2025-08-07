import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import type { TNewSterilizer, TSterilizer } from '../../types';
import SterilizerService from '../../services/sterilizerService';
import { statsBuffer } from 'framer-motion';

interface ISterilizerState {
  sterilizers: TSterilizer[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ISterilizerState = {
  sterilizers: [],
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

// Create sterilizer
export const createSterilizer = createAsyncThunk<
  TSterilizer,
  { sterilizer: TNewSterilizer }
>(
  'sterilizers/createSterilizer',
  async ({ sterilizer }, { rejectWithValue }) => {
    try {
      const response = await SterilizerService.create(sterilizer);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// update sterilizer
export const updateSterilizer = createAsyncThunk<
  TSterilizer,
  { sterilizer: TSterilizer }
>(
  'sterilizers/updateSterilizer',
  async ({ sterilizer }, { rejectWithValue }) => {
    try {
      const response = await SterilizerService.update(sterilizer);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// Delete sterilizer
export const deleteSterilizer = createAsyncThunk<TSterilizer, { id: number }>(
  'sterilizers/deleteSterilizer',
  async ({ id }, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await SterilizerService.delete(id);

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
      })
      // create sterilizer
      .addCase(createSterilizer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createSterilizer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.sterilizers.push(action.payload);
      })
      .addCase(createSterilizer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // update sterilizer
      .addCase(updateSterilizer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateSterilizer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const updatedSterilizer = action.payload;
        state.sterilizers = state.sterilizers.map((sterilizer) => {
          if (sterilizer.id === updatedSterilizer.id) {
            return updatedSterilizer;
          }
          return sterilizer;
        });
      })
      .addCase(updateSterilizer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // delete sterilizer
      .addCase(deleteSterilizer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteSterilizer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.sterilizers = state.sterilizers.filter(
          (sterilizer) => sterilizer.id !== action.payload.id
        );
      })
      .addCase(deleteSterilizer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectSterilizer = (state: RootState) =>
  state.sterilizer.sterilizers;

export const selectSterilizerStatus = (state: RootState) =>
  state.sterilizer.status;

export default sterilizerSlice.reducer;
