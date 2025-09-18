import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { TPrinter } from '../../types';
import HelperService from '../../services/helperService';
import PrinterService from '../../services/printerService';

interface IPrinterState {
  printers: TPrinter[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: IPrinterState = {
  printers: [],
  status: 'idle',
  error: null,
};

// get all printers
export const getPrinters = createAsyncThunk<TPrinter[]>(
  'printers/getPrinters',
  async (_, { rejectWithValue }) => {
    try {
      return await PrinterService.getAll();
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// create new printer
export const createPrinter = createAsyncThunk<
  TPrinter,
  { name: string; port: number; ip_address: string }
>(
  'printers/createPrinter',
  async ({ name, port, ip_address }, { rejectWithValue }) => {
    try {
      return await PrinterService.create(name, port, ip_address);
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// edit printer
export const editPrinter = createAsyncThunk<
  TPrinter,
  { id: number; name: string; port: number; ip_address: string }
>(
  'printers/editPrinter',
  async ({ id, name, port, ip_address }, { rejectWithValue }) => {
    try {
      return await PrinterService.edit(id, name, port, ip_address);
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// delete printer
export const deletePrinter = createAsyncThunk<TPrinter, { id: number }>(
  'printers/deletePrinter',
  async ({ id }, { rejectWithValue }) => {
    try {
      return await PrinterService.delete(id);
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// toggle active printer
export const toggleIsActivePrinter = createAsyncThunk<TPrinter, { id: number }>(
  'printers/toggleIsActivePrinter',
  async ({ id }, { rejectWithValue }) => {
    try {
      return await PrinterService.toggleIsActivePrinter(id);
    } catch (error) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

export const printerSlice = createSlice({
  name: 'printers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get printers
      .addCase(getPrinters.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getPrinters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.printers = action.payload;
      })
      .addCase(getPrinters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // create printer
      .addCase(createPrinter.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createPrinter.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'succeeded';
        state.printers.push(action.payload);
      })
      .addCase(createPrinter.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = 'failed';
      })
      // toggle printer is active
      .addCase(toggleIsActivePrinter.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(toggleIsActivePrinter.fulfilled, (state, action) => {
        const updated = action.payload;
        const i = state.printers.findIndex((p) => p.id === updated.id);

        if (i !== -1) state.printers[i] = updated;

        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(toggleIsActivePrinter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // delete printer
      .addCase(deletePrinter.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deletePrinter.fulfilled, (state, action) => {
        const deletedPrinter = action.payload;
        state.printers = state.printers.filter(
          (p) => p.id !== deletedPrinter.id
        );

        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(deletePrinter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // edit printer
      .addCase(editPrinter.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(editPrinter.fulfilled, (state, action) => {
        const updatedPrinter = action.payload;
        const i = state.printers.findIndex((p) => p.id === updatedPrinter.id);

        if (i !== -1) state.printers[i] = updatedPrinter;

        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(editPrinter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectPrinter = (state: RootState) => state.printers.printers;

export const selectActivePrinter = createSelector([selectPrinter], (list) =>
  list.filter((p) => p.active)
);

export const selectPrinterStatus = (state: RootState) => state.printers.status;

export default printerSlice.reducer;
