import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import HelperService from '../../services/helperService';
import type { TAdminRecord, TCycleDataResponse } from '../../types';
import AdminService from '../../services/adminService';

interface IAdminState {
  cycleRecords: TAdminRecord[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  sort: string;
  filter: string;
  limit: number;
  totalCycleRecords: number;
  totalPages: number;
}

const initialState: IAdminState = {
  cycleRecords: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  sort: '',
  filter: '',
  limit: 10,
  totalPages: 0,
  totalCycleRecords: 0,
};

///////////////////////////////////////////////////
/**
 *
 */
export const getCycleRecords = createAsyncThunk<
  TCycleDataResponse,
  void,
  { state: RootState }
>('admin/getCycleRecords', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const currentPage = state.admin.currentPage;
    const sort = state.admin.sort;
    const limit = state.admin.limit;
    const filter = state.admin.filter;

    const query =
      '?page=' +
      currentPage +
      '&limit=' +
      limit +
      '&sort=' +
      sort +
      '&filter=' +
      filter;

    return await AdminService.getCycleRecords(query);
  } catch (error) {
    return rejectWithValue(HelperService.errorToString(error));
  }
}); //////////////////////////////////////

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ current: number }>) => {
      state.currentPage = action.payload.current;
    },
    setSorting: (state, action: PayloadAction<{ sort: string }>) => {
      state.sort = action.payload.sort;
    },
    setFilter: (state, action: PayloadAction<{ filter: string }>) => {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCycleRecords.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        getCycleRecords.fulfilled,
        (state, action: PayloadAction<TCycleDataResponse>) => {
          state.status = 'succeeded';
          state.error = null;
          if (action.payload.items.length > 0) {
            state.cycleRecords = action.payload.items;
            state.totalPages = action.payload.totalPages;
            state.totalCycleRecords = action.payload.total;
          } else {
            state.cycleRecords = [];
            state.totalCycleRecords = 0;
            state.totalPages = action.payload.totalPages;
          }
        }
      )
      .addCase(getCycleRecords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentPage, setSorting, setFilter } = adminSlice.actions;

export const selectCycleRecords = (state: RootState) =>
  state.admin.cycleRecords;

export const selectAdminStatus = (state: RootState) => state.admin.status;
export const getTotalPages = (state: RootState) => state.admin.totalPages;
export const getCurrentPage = (state: RootState) => state.admin.currentPage;

export default adminSlice.reducer;
