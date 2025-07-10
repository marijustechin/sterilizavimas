import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { TUser } from '../../types/user';
import AuthService from '../../services/authService';
import HelperService from '../../services/helperService';
import type { RootState } from '../store';
import axios from 'axios';
import { BASE_URL } from '../../config/axios';

interface AuthState {
  user: TUser | null;
  accessToken: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isInitialized: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  status: 'idle',
  error: null,
  isInitialized: false,
};

// restore session
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/refresh`, null, {
        withCredentials: true,
      });
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      localStorage.removeItem('accessToken');
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

// Atjumgiam
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('accessToken');
    } catch (error: unknown) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem('accessToken', response.accessToken);

      return response;
    } catch (error: unknown) {
      return rejectWithValue(HelperService.errorToString(error));
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.isInitialized = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        state.isInitialized = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
        state.isInitialized = true;
      })
      // checkAuth cases
      .addCase(checkAuth.pending, (state) => {
        state.error = null;
        state.isInitialized = false;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.status = 'succeeded'; // Po sėkmingos inicializacijos būsena sėkminga
        state.error = null;
        state.isInitialized = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.status = 'idle';
        state.error = null;
        state.isInitialized = true;
      })
      //logout cases
      .addCase(logoutUser.pending, (state) => {
        state.status = 'loading';
        state.isInitialized = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.accessToken = null;
        state.user = null;
        state.error = null;
        state.status = 'succeeded';
        state.isInitialized = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setError } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsInitialized = (state: RootState) =>
  state.auth.isInitialized;

export default authSlice.reducer;
