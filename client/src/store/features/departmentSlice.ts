import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import DepartmentService from '../../services/departmentService';
import type { TDepartment, TNewDepartment } from '../../types';

interface IDepartmentState {
  departements: TDepartment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IDepartmentState = {
  departements: [],
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

// Create department
export const createDepartment = createAsyncThunk<
  TDepartment,
  { department: TNewDepartment }
>(
  'departments/createDepartment',
  async ({ department }, { rejectWithValue }) => {
    try {
      const response = await DepartmentService.create(department);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// Delete department
export const deleteDepartment = createAsyncThunk<TDepartment, { id: number }>(
  'departments/deleteDepartment',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await DepartmentService.delete(id);

      return response;
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// update department
export const updateDepartment = createAsyncThunk<
  TDepartment,
  { department: TDepartment }
>(
  'departments/updateDepartment',
  async ({ department }, { rejectWithValue }) => {
    try {
      const response = await DepartmentService.update(department);

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
      })
      // Naujas skyrius
      .addCase(createDepartment.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createDepartment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.departements.push(action.payload);
      })
      .addCase(createDepartment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // delete department
      .addCase(deleteDepartment.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.departements = state.departements.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteDepartment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Update department
      .addCase(updateDepartment.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateDepartment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const updatedDepartment = action.payload;
        state.departements = state.departements.map((department) => {
          if (department.id === updatedDepartment.id) {
            return updatedDepartment;
          }
          return department;
        });
      });
  },
});

export const selectDepartements = (state: RootState) =>
  state.department.departements;

export const selectDepartmentStatus = (state: RootState) =>
  state.department.status;

export default departmentSlice.reducer;
