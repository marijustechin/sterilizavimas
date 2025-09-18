import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const MedicLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
