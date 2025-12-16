import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// reducers
import authReducer from './features/authSlice';
import sterilizerReducer from './features/sterilizerSlice';
import instrumentsReducer from './features/instrumentSlice';
import departmentReducer from './features/departmentSlice';
import sterilizationReducer from './features/sterilizationSlice';
import adminReducer from './features/adminSlice';
import adminReportReducer from './features/adminReportSlice';
import printerReducer from './features/printerSlice';
import stickerReducer from './features/stickerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sterilizer: sterilizerReducer,
    instruments: instrumentsReducer,
    department: departmentReducer,
    sterilization: sterilizationReducer,
    admin: adminReducer,
    printers: printerReducer,
    sticker: stickerReducer,
    adminReport: adminReportReducer,
  },
});

// isvestiniai `RootState`,  `AppDispatch` ir `AppStore` is pacios stores
export type RootState = ReturnType<typeof store.getState>;
// isvesti tipai, pavyzdys is dokumentacijos:
// {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

// jei programoje nenori naudoti nuogus `useDispatch` ir `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
