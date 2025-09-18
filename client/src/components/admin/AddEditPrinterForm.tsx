import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import type { TPrinter } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  createPrinter,
  editPrinter,
  selectPrinterStatus,
} from '../../store/features/printerSlice';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddEditPrinterSchema } from '../../schemas/AddEditPrinterSchema';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

interface AddEditPrinterFormProps {
  isOpen: boolean;
  onCancel: () => void;
  printer: TPrinter | null;
}

export const AddEditPrinterForm: React.FC<AddEditPrinterFormProps> = ({
  isOpen,
  onCancel,
  printer,
}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectPrinterStatus);

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddEditPrinterSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof AddEditPrinterSchema>> = async (
    formValues
  ) => {
    try {
      if (printer) {
        // redagavimas
        await dispatch(
          editPrinter({
            id: printer.id,
            name: formValues.name,
            port: formValues.port,
            ip_address: formValues.ip_address,
          })
        ).unwrap();
        toast.success(
          `Spausdintuvas ${formValues.ip_address}:${formValues.port} sėkmingai atnaujintas!`
        );
      } else {
        //naujas
        await dispatch(
          createPrinter({
            name: formValues.name,
            port: formValues.port,
            ip_address: formValues.ip_address,
          })
        ).unwrap();
        toast.success(
          `Spausdintuvas ${formValues.ip_address}:${formValues.port} sėkmingai pridėtas!`
        );
      }
      handleCancel();
    } catch (error) {
      if (typeof error === 'string') {
        toast.error(error);
      } else {
        toast.error('Įvyko nenumatyta klaida!');
      }
    }
  };

  // jei redauojame, suteikiame reiksmes
  useEffect(() => {
    if (printer) {
      reset({
        ip_address: printer.ip_address,
        name: printer.name,
        port: printer.port,
      });
    } else {
      reset({
        name: '',
        port: null,
        ip_address: '',
      });
    }
  }, [printer, reset]);

  const handleCancel = () => {
    reset({
      name: '',
      port: null,
      ip_address: '',
    });

    onCancel();
  };

  return (
    <AnimatePresence>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${
          isOpen ? 'visible bg-violet-950/50' : 'invisible'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className='bg-white p-6 rounded-2xl shadow-lg w-5xl text-center'
          onClick={(e) => e.stopPropagation()}
        >
          <form
            className='flex flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className='font-semibold text-xl'>
              {printer ? 'Spausdintuvo redagavimas' : 'Naujas spausdintuvas'}
            </h2>
            {/* Kodas, pavadinimas */}
            <div className='flex gap-3 w-full '>
              {/* IP adresas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  IP adresas
                </legend>
                <input
                  id='ip_address'
                  className='form-input w-36'
                  type='text'
                  {...register('ip_address')}
                />
              </fieldset>
              {/* Prievadas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Prievadas
                </legend>
                <input
                  id='port'
                  className='form-input w-36'
                  type='number'
                  {...register('port')}
                />
              </fieldset>
              {/* Sterilizatoriaus pavadinimas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-4/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Pavadinimas
                </legend>
                <textarea
                  autoComplete='on'
                  rows={2}
                  className='form-textarea w-full'
                  id='name'
                  {...register('name')}
                />
              </fieldset>
            </div>
            {/* Validacijos klaidų blokas */}
            <div className='flex flex-col gap-1'>
              {errors.name && (
                <span className='text-sm text-rose-500'>
                  {errors.name.message}
                </span>
              )}
              {errors.port && (
                <span className='text-sm text-rose-500'>
                  {errors.port.message}
                </span>
              )}
              {errors.ip_address && (
                <span className='text-sm text-rose-500'>
                  {errors.ip_address.message}
                </span>
              )}
            </div>
            {/* Išsaugoti/Atsisakyti mygtukai */}
            <div className='flex gap-3 items-center justify-center mt-3'>
              <button
                disabled={status === 'loading'}
                type='submit'
                className='btn-emerald'
              >
                Išsaugoti
              </button>
              <button onClick={handleCancel} className='btn-rose' type='button'>
                Atsisakyti
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
