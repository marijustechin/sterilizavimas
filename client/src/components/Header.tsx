import { MdLogout } from 'react-icons/md';
import { logoutUser, selectUser } from '../store/features/authSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  return (
    <header className='flex gap-4 items-center justify-center border-b border-rose-800/30 p-3 mb-3'>
      <img
        className='w-12'
        src='favicons/android-chrome-192x192.png'
        alt='Logotipas'
      />
      <div className='flex flex-col'>
        <div>Sterilizavimo procesų informacinė sistema</div>
        {user?.displayName && (
          <div className='border-t border-rose-800/40 font-semibold text-center'>
            {user.displayName}
          </div>
        )}
      </div>

      {user?.displayName && (
        <button
          type='button'
          className='btn-generic flex gap-2 items-center'
          onClick={() => dispatch(logoutUser())}
        >
          <MdLogout size={20} />
          Atsijungti
        </button>
      )}
    </header>
  );
};
