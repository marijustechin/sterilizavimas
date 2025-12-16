import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type {
  TAdminReportResponse,
  TReportInstrumentsByMedic,
  TReportInstrumentsInDepartments,
  TReportInstrumentStats,
} from '../../types';
import HelperService from '../../services/helperService';
import AdminService from '../../services/adminService';

interface IAdminReportState {
  period: {
    startDate: string | null;
    endDate: string | null;
  };
  defaultButtons: {
    month: boolean;
    halfYear: boolean;
    year: boolean;
  };
  stats: {
    instrumentStats: TReportInstrumentStats[];
    instrumentsByMedic: TReportInstrumentsByMedic[];
    instrumentsInDepartments: TReportInstrumentsInDepartments[];
    total: number;
    totalBad: number;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IAdminReportState = {
  period: {
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
  },
  defaultButtons: {
    month: false,
    halfYear: false,
    year: false,
  },
  stats: {
    instrumentStats: [],
    instrumentsByMedic: [],
    instrumentsInDepartments: [],
    total: 0,
    totalBad: 0,
  },
  status: 'idle',
  error: null,
};

//////////////////////////////////////////////////////
export const getAdminReport = createAsyncThunk<
  TAdminReportResponse,
  void,
  { state: RootState }
>('adminReport/getAdminReport', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const startDate = state.adminReport.period.startDate
      ? state.adminReport.period.startDate
      : new Date().toISOString();
    const endDate = state.adminReport.period.endDate
      ? state.adminReport.period.endDate
      : new Date().toISOString;

    const query = '?startDate=' + startDate + '&endDate=' + endDate;

    return await AdminService.getAdminReport(query);
  } catch (error) {
    return rejectWithValue(HelperService.errorToString(error));
  }
});
//////////////////////////////////////////////////////

const adminReportSlice = createSlice({
  name: 'adminReport',
  initialState,
  reducers: {
    setReportStartDate: (state, action: PayloadAction<string | null>) => {
      state.period.startDate = action.payload;
    },
    setReportEndDate: (state, action: PayloadAction<string | null>) => {
      state.period.endDate = action.payload;
    },
    setReportButtonActive: (state, action: PayloadAction<number>) => {
      if (action.payload === 1) {
        state.defaultButtons.month = true;
        state.defaultButtons.halfYear = false;
        state.defaultButtons.year = false;
      }
      if (action.payload === 6) {
        state.defaultButtons.month = false;
        state.defaultButtons.halfYear = true;
        state.defaultButtons.year = false;
      }
      if (action.payload === 12) {
        state.defaultButtons.month = false;
        state.defaultButtons.halfYear = false;
        state.defaultButtons.year = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminReport.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAdminReport.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.stats.total = action.payload.total;
        state.stats.totalBad = action.payload.totalBad;
        state.stats.instrumentsInDepartments =
          action.payload.instrumentsInDepartments;
        state.stats.instrumentsByMedic = action.payload.instrumentsByMedic;
        state.stats.instrumentStats = action.payload.instrumentStats;
      })
      .addCase(getAdminReport.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setReportStartDate, setReportEndDate, setReportButtonActive } =
  adminReportSlice.actions;

export const selectReportPeriod = (state: RootState) =>
  state.adminReport.period;
export const selectReportDefaultButton = (state: RootState) =>
  state.adminReport.defaultButtons;
export const selectReportStats = (state: RootState) => state.adminReport.stats;

export default adminReportSlice.reducer;
