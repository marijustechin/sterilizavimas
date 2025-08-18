import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import HelperService from '../../services/helperService';
import type { TCycleRecord } from '../../types';
import AdminService from '../../services/adminService';

interface IAdminState {
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
  status: 'idle',
  error: null,
  currentPage: 1,
  sort: 'first_name_asc',
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
  TCycleRecord,
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
  reducers: {},
});

export default adminSlice.reducer;
