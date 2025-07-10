import * as z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { LoginSchema } from '../schemas/LoginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaUserLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, type RootState } from '../store/store';
import { loginUser, selectUser, setError } from '../store/features/authSlice';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { status, error } = useAppSelector((state: RootState) => state.auth);

  const [submiting, setSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (
    formValues
  ) => {
    dispatch(
      loginUser({
        username: formValues.username,
        password: formValues.password,
      })
    );
  };

  const handleInputChange = () => {
    if (error) dispatch(setError(null));
  };

  // user būsena
  // vėliau padarysim redirect
  useEffect(() => {
    if (status === 'loading') {
      setSubmiting(true);
      dispatch(setError(null));
    } else {
      setSubmiting(false);
    }

    if (status === 'failed' && error) {
      // Rodome klaidą per Toast
      toast.error(error);
    }
  }, [status, user, setError, dispatch]);

  return (
    <form
      className='max-w-sm mx-auto border border-rose-800/40 rounded-2xl shadow-sm p-2'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className='flex gap-2 items-center justify-center text-2xl text-rose-800'>
        <FaUserLock size={24} /> Prašome prisijungti
      </h1>
      <div className='h-10 w-full'>
        {error && (
          <span className='text-sm text-center text-rose-500'>{error}</span>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='username' className='form-label'>
            Naudotojo vardas
          </label>
          <input
            className='form-input'
            id='username'
            type='text'
            autoComplete='on'
            disabled={submiting}
            {...register('username', { onChange: handleInputChange })}
          />
          {errors.username && (
            <span className='text-xs text-rose-500'>
              {errors.username.message}
            </span>
          )}
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='form-label'>
            Slaptažodis
          </label>
          <input
            className='form-input'
            id='password'
            type='password'
            autoComplete='off'
            disabled={submiting}
            {...register('password', { onChange: handleInputChange })}
          />
          {errors.password && (
            <span className='text-xs text-rose-500'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='flex w-full items-center justify-center'>
          <button disabled={submiting} className='btn-generic' type='submit'>
            Prisijungti
          </button>
        </div>
      </div>
    </form>
  );
};
