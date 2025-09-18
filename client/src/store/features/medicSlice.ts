import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import HelperService from '../../services/helperService';
import MedicService from '../../services/medicService';
import type { TScannedSticker } from '../../types';

interface IMedicState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  scannedInstruments: TScannedSticker[];
}

const initialState: IMedicState = {
  status: 'idle',
  error: null,
  scannedInstruments: [],
};

/**
 *
 */
export const getStickerDetails = createAsyncThunk<
  TScannedSticker,
  { stickerString: string }
>('medic/getStickerDetails', async ({ stickerString }, { rejectWithValue }) => {
  try {
    const response = await MedicService.getStickerDetails(stickerString);

    return response;
  } catch (error) {
    return rejectWithValue(HelperService.errorToString(error));
  }
});

/**
 *
 */
export const saveUsedInstruments = createAsyncThunk<
  string,
  void,
  { state: RootState }
>('medic/saveUsedInstruments', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();

    // testavimui - reikes pataisyti
    console.log(state.medic.scannedInstruments);

    const respose = await MedicService.saveUsedInstruments();

    return respose;
  } catch (error) {
    return rejectWithValue(HelperService.errorToString(error));
  }
});

const medicSlice = createSlice({
  name: 'medic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get sticker details
      .addCase(getStickerDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getStickerDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.scannedInstruments.push(action.payload);
      })
      .addCase(getStickerDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // save used instruments
      .addCase(saveUsedInstruments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(saveUsedInstruments.fulfilled, (state, action) => {
        // sita eilute irgi testavimui
        console.log(action.payload);
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(saveUsedInstruments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectScannedInstruments = (state: RootState) =>
  state.medic.scannedInstruments;

export default medicSlice.reducer;
