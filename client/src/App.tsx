import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { useAppDispatch, useAppSelector } from './store/store';
import { checkAuth, selectIsInitialized } from './store/features/authSlice';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { SterilizationLayout } from './layouts/SterilizationLayout';

// Dinaminiai importai (smaller chunks)
const LazyHomePage = React.lazy(() => import('./pages/HomePage'));
const LazyAdminPage = React.lazy(() => import('./pages/admin/AdminPage'));
const LazyPrintersPage = React.lazy(() => import('./pages/admin/PrintersPage'));
const LazyAdminReportsPage = React.lazy(
  () => import('./pages/admin/AdminReportsPage')
);
const LazySterilizationPage = React.lazy(
  () => import('./pages/sterilization/SterilizationPage')
);
const LazyAdminInstruments = React.lazy(
  () => import('./pages/sterilization/AdminInstruments')
);
const LazyAdminDepartments = React.lazy(
  () => import('./pages/sterilization/AdminDepartments')
);
const LazyAdminSterilizers = React.lazy(
  () => import('./pages/sterilization/AdminSterilizers')
);
const LazyAdminStickers = React.lazy(
  () => import('./pages/sterilization/AdminStickers')
);

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
          <Route index element={<LazyHomePage />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<LazyAdminPage />} />
          <Route path='/admin/spausdintuvai' element={<LazyPrintersPage />} />
          <Route path='/admin/statistika' element={<LazyAdminReportsPage />} />
        </Route>

        <Route path='/sterilizavimas' element={<SterilizationLayout />}>
          <Route index element={<LazySterilizationPage />} />
          <Route
            path='/sterilizavimas/sterilizatoriai'
            element={<LazyAdminSterilizers />}
          />
          <Route
            path='/sterilizavimas/instrumentai'
            element={<LazyAdminInstruments />}
          />
          <Route
            path='/sterilizavimas/skyriai'
            element={<LazyAdminDepartments />}
          />
          <Route
            path='/sterilizavimas/lipdukai'
            element={<LazyAdminStickers />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
