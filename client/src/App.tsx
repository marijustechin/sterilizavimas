import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AdminLayout } from './layouts/AdminLayout';
import { AdminPage } from './pages/admin/AdminPage';
import { SterilizationPage } from './pages/sterilization/SterilizationPage';
import { SterilizationLayout } from './layouts/SterilizationLayout';
import { useAppDispatch, useAppSelector } from './store/store';
import { checkAuth, selectIsInitialized } from './store/features/authSlice';
import { useEffect } from 'react';
import { AdminInstruments } from './pages/sterilization/AdminInstruments';
import { AdminDepartments } from './pages/sterilization/AdminDepartments';
import { AdminSterilizers } from './pages/sterilization/AdminSterilizers';
import { MedicLayout } from './layouts/MedicLayout';
import { MedicPage } from './pages/MedicPage';
import { PrintersPage } from './pages/admin/PrintersPage';

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
          <Route path='/admin/spausdintuvai' element={<PrintersPage />} />
        </Route>
        <Route path='/nuskaitymas' element={<MedicLayout />}>
          <Route index element={<MedicPage />} />
        </Route>
        <Route path='/sterilizavimas' element={<SterilizationLayout />}>
          <Route index element={<SterilizationPage />} />
          <Route
            path='/sterilizavimas/sterilizatoriai'
            element={<AdminSterilizers />}
          />
          <Route
            path='/sterilizavimas/instrumentai'
            element={<AdminInstruments />}
          />
          <Route
            path='/sterilizavimas/skyriai'
            element={<AdminDepartments />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
