import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type {
  TGetStickersResponse,
  TSterilizationCycleItem,
  TSticker,
} from '../../types';
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
  totalPages: number;
  totalSticerRecords: number;
  currentPage: number;
  limit: number | undefined;
  onlyDefected: boolean;
  searchString: string;
}

const initialState: IStickerState = {
  cycleNumber: undefined,
  departmentid: undefined,
  instrumentid: undefined,
  stickers: [],
  status: 'idle',
  error: null,
  totalPages: 0,
  currentPage: 1,
  limit: 15,
  totalSticerRecords: 0,
  onlyDefected: false,
  searchString: '',
};

// Get all stickers
export const getStickers = createAsyncThunk<
  TGetStickersResponse,
  void,
  { state: RootState }
>('sticker/getStickers', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const cycleNumber = state.sticker.cycleNumber;
    const departmentid = state.sticker.departmentid;
    const instrumentid = state.sticker.instrumentid;
    const currentPage = state.sticker.currentPage;
    const limit = state.sticker.limit;
    const onlyDefecet = state.sticker.onlyDefected;
    const searchString = state.sticker.searchString;

    const query =
      '?currentPage=' +
      currentPage +
      '&limit=' +
      limit +
      '&cycleNumber=' +
      cycleNumber +
      '&departmentCode=' +
      departmentid +
      '&instrumentCode=' +
      instrumentid +
      '&onlyDefecet=' +
      onlyDefecet +
      '&search=' +
      searchString;

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
    // filters
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
    setFilterLimit: (
      state,
      action: PayloadAction<{ limit: number | undefined }>
    ) => {
      state.limit = action.payload.limit;
    },
    setFilterOnlyDefected: (
      state,
      action: PayloadAction<{ onlyDefected: boolean }>
    ) => {
      state.onlyDefected = action.payload.onlyDefected;
    },
    setFilterSearchString: (state, action: PayloadAction<{ text: string }>) => {
      state.searchString = action.payload.text;
    },
    resetStickerFilters: (state) => {
      state.cycleNumber = undefined;
      state.departmentid = undefined;
      state.instrumentid = undefined;
      state.searchString = '';
      state.onlyDefected = false;
    },
    // pagination
    setSticerListCurrentPage: (
      state,
      action: PayloadAction<{ current: number }>
    ) => {
      state.currentPage = action.payload.current;
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
        state.stickers = action.payload.items;
        state.totalPages = action.payload.totalPages;
        state.totalSticerRecords = action.payload.total;
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
  setFilterOnlyDefected,
  setFilterSearchString,
  setFilterCycleNumber,
  setFilterDepartmentId,
  setFilterInstrumentId,
  resetStickerFilters,
  setSticerListCurrentPage,
  setFilterLimit,
} = stickerSlice.actions;

export const selectStickers = (state: RootState) => state.sticker;
export const selectStickersOnlyDefected = (state: RootState) =>
  state.sticker.onlyDefected;
export const selectStickersSearchString = (state: RootState) =>
  state.sticker.searchString;

export default stickerSlice.reducer;
