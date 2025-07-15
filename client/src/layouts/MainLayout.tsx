import { Outlet, useNavigate } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useAppSelector } from '../store/store';
import { selectUser } from '../store/features/authSlice';
import { useEffect } from 'react';

export const MainLayout = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/sterilizavimas');
  }, [user, navigate]);

  return (
    <div className='max-w-3xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
