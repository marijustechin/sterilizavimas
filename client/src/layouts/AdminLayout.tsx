import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdminTopMenu } from '../components/admin/AdminTopMenu';

export const AdminLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <AdminTopMenu />
      <Outlet />
      <Footer />
    </div>
  );
};
