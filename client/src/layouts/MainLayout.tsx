import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useAppSelector } from '../store/store';
import { selectUser } from '../store/features/authSlice';

export const MainLayout = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'user') navigate('/sterilizavimas');
    if (user?.role === 'admin') navigate('/admin');
  }, [user, navigate]);

  return (
    <div className='max-w-3xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
