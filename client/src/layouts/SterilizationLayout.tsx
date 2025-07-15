import { Outlet, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAppSelector } from '../store/store';
import { selectUser } from '../store/features/authSlice';
import { useEffect } from 'react';

export const SterilizationLayout = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
