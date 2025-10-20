import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { TSterilizationCycleItem, TSticker } from '../../types';
import type { RootState } from '../store';
import StickerService from '../../services/stickerService';
import HelperService from '../../services/helperService';

interface IStickerState {
  cycleNumber: number | undefined;
  departmentid: number | undefined;
  instrumentid: number | undefined;
  stickers: TSticker[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IStickerState = {
  cycleNumber: undefined,
  departmentid: undefined,
  instrumentid: undefined,
  stickers: [],
  status: 'idle',
  error: null,
};

// Get all stickers
export const getStickers = createAsyncThunk<
  TSticker[],
  void,
  { state: RootState }
>('sticker/getStickers', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const cycleNumber = state.sticker.cycleNumber;
    const departmentid = state.sticker.departmentid;
    const instrumentid = state.sticker.instrumentid;

    const query =
      '?cycleNumber=' +
      cycleNumber +
      '&departmentCode=' +
      departmentid +
      '&instrumentCode=' +
      instrumentid;

    const response = await StickerService.getAll(query);
    return response;
  } catch (error) {
    return rejectWithValue(HelperService.errorToString(error));
  }
});

// toggle success
export const toggleStickerSuccess = createAsyncThunk<
  TSterilizationCycleItem,
  { short_code: string }
>(
  'sticker/toggleStickerSuccess',
  async ({ short_code }, { rejectWithValue }) => {
    try {
      return await StickerService.toggleStickerSuccess(short_code);
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

export const stickerSlice = createSlice({
  name: 'sticker',
  initialState,
  reducers: {
    setFilterCycleNumber: (
      state,
      action: PayloadAction<{ cycleNumber: number | undefined }>
    ) => {
      state.cycleNumber = action.payload.cycleNumber;
    },
    setFilterDepartmentId: (
      state,
      action: PayloadAction<{ departmentid: number | undefined }>
    ) => {
      state.departmentid = action.payload.departmentid;
    },
    setFilterInstrumentId: (
      state,
      action: PayloadAction<{ instrumentid: number | undefined }>
    ) => {
      state.instrumentid = action.payload.instrumentid;
    },
    resetStickerFilters: (state) => {
      state.cycleNumber = undefined;
      state.departmentid = undefined;
      state.instrumentid = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      // get stickers
      .addCase(getStickers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getStickers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.stickers = action.payload;
      })
      .addCase(getStickers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // toggle success
      .addCase(toggleStickerSuccess.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(toggleStickerSuccess.fulfilled, (state, action) => {
        const updated = action.payload;

        const i = state.stickers.findIndex(
          (i) => i.short_code === updated.short_code
        );

        if (i !== -1) state.stickers[i].success = updated.success;

        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(toggleStickerSuccess.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {
  setFilterCycleNumber,
  setFilterDepartmentId,
  setFilterInstrumentId,
  resetStickerFilters,
} = stickerSlice.actions;

export const selectStickers = (state: RootState) => state.sticker;

export default stickerSlice.reducer;
