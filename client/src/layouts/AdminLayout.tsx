import { Outlet, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AdminMenu } from '../components/admin/AdminMenu';
import { useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { selectUser } from '../store/features/authSlice';

export const AdminLayout = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <AdminMenu />
      <Outlet />
      <Footer />
    </div>
  );
};
