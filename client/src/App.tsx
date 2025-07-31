import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AdminLayout } from './layouts/AdminLayout';
import { AdminPage } from './pages/admin/AdminPage';
import { SterilizationPage } from './pages/SterilizationPage';
import { SterilizationLayout } from './layouts/SterilizationLayout';
import { useAppDispatch, useAppSelector } from './store/store';
import { checkAuth, selectIsInitialized } from './store/features/authSlice';
import { useEffect } from 'react';
import { AdminInstruments } from './pages/admin/AdminInstruments';
import { AdminDepartments } from './pages/admin/AdminDepartments';
import { AdminSterilizers } from './pages/admin/AdminSterilizers';

function App() {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsInitialized);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  if (!isInitialized) {
    return (
      <div className='flex justify-center items-center h-screen'>
        Tikrinama sesija...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path='/admin/instrumentai' element={<AdminInstruments />} />
          <Route path='/admin/skyriai' element={<AdminDepartments />} />
          <Route path='/admin/sterilizatoriai' element={<AdminSterilizers />} />
        </Route>
        <Route path='/sterilizavimas' element={<SterilizationLayout />}>
          <Route index element={<SterilizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
