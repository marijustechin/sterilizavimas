import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import DepartmentService from '../../services/departmentService';
import type { TDepartment } from '../../types';

interface IDepartmentState {
  departements: TDepartment[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IDepartmentState = {
  departements: null,
  status: 'idle',
  error: null,
};

export const getDepartments = createAsyncThunk<TDepartment[]>(
  'departments/getDepartments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await DepartmentService.getAll();
      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

export const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDepartments.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.departements = action.payload;
        state.error = null;
      })
      .addCase(getDepartments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectDepartements = (state: RootState) =>
  state.department.departements;

export default departmentSlice.reducer;
