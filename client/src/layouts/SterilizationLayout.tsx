import { Outlet, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAppSelector } from '../store/store';
import { selectUser } from '../store/features/authSlice';
import { useEffect } from 'react';
import { TopMenu } from '../components/sterilization/TopMenu';

export const SterilizationLayout = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <TopMenu />
      <Outlet />
      <Footer />
    </div>
  );
};
