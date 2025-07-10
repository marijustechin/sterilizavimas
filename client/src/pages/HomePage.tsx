import { LoginForm } from '../components/LoginForm';

export const HomePage = () => {
  // tikrinam ar naudotojas prisijunges
  // jei prisijunges, redirectinam ten, kur reikia

  return (
    <main className='py-20'>
      <LoginForm />
    </main>
  );
};
