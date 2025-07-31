import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import type { TInstrument } from '../../types';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { AddEditInstrumentSchema } from '../../schemas/AddEditInstrumentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useEffect } from 'react';
import {
  createInstrument,
  selectInstrumentStatus,
  updateInstrument,
} from '../../store/features/instrumentSlice';
import toast from 'react-hot-toast';

interface AddEditInstrumentFormProps {
  isOpen: boolean;
  onCancel: () => void;
  instrument: TInstrument | null;
}

export const AddEditInstrumentForm: React.FC<AddEditInstrumentFormProps> = ({
  instrument,
  isOpen,
  onCancel,
}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectInstrumentStatus);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof AddEditInstrumentSchema>>({
    resolver: zodResolver(AddEditInstrumentSchema),
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof AddEditInstrumentSchema>
  > = async (formValues) => {
    try {
      if (instrument) {
        // Redagavimas
        const instrumentToUpdate = { id: instrument.id, ...formValues };
        await dispatch(
          updateInstrument({ instrument: instrumentToUpdate })
        ).unwrap();
        toast.success(
          `Instrumentas ${formValues.instrument_code}. ${formValues.instrument_name} sėkmingai išsaugotas!`
        );
      } else {
        // Naujas instrumentas
        await dispatch(createInstrument({ instrument: formValues })).unwrap();
        toast.success(
          `Instrumentas ${formValues.instrument_code}. ${formValues.instrument_name} sėkmingai pridėtas!`
        );
      }
      handleCancel();
    } catch (err) {
      if (typeof err === 'string') {
        toast.error(err);
      } else {
        toast.error('Įvyko nenumatyta klaida!');
      }
    }
  };

  useEffect(() => {
    if (instrument) {
      reset({
        instrument_code: instrument.instrument_code,
        instrument_name: instrument.instrument_name,
        instrument_exp: instrument.instrument_exp,
      });
    } else {
      reset({
        instrument_code: undefined,
        instrument_name: '',
        instrument_exp: undefined,
      });
    }
  }, [instrument, reset]);

  const handleCancel = () => {
    reset({
      instrument_code: undefined,
      instrument_name: '',
      instrument_exp: undefined,
    });
    // Tada uždarome modalinį langą
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
              {instrument ? 'Redagavimas' : 'Naujas instrumentas'}
            </h2>
            {/* Kodas, pavadinimas ir galiojimas */}
            <div className='flex gap-3 w-full '>
              {/* Instrumento kodas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Kodas
                </legend>
                <input
                  id='instrument_code'
                  className='form-input w-36'
                  type='number'
                  step={1}
                  min={1}
                  {...register('instrument_code')}
                />
              </fieldset>
              {/* Instrumento pavadinimas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-4/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Pavadinimas
                </legend>
                <textarea
                  rows={3}
                  className='form-textarea w-full'
                  id='instrument_name'
                  {...register('instrument_name')}
                />
              </fieldset>
              {/* Instrumento galiojimas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Galiojimas
                </legend>
                <input
                  id=''
                  className='form-input w-36'
                  type='number'
                  step={1}
                  min={1}
                  {...register('instrument_exp')}
                />
              </fieldset>
            </div>
            {/* Validacijos klaidų blokas */}
            <div className='flex flex-col gap-1'>
              {errors.instrument_code && (
                <span className='text-sm text-rose-500'>
                  {errors.instrument_code.message}
                </span>
              )}
              {errors.instrument_name && (
                <span className='text-sm text-rose-500'>
                  {errors.instrument_name.message}
                </span>
              )}
              {errors.instrument_exp && (
                <span className='text-sm text-rose-500'>
                  {errors.instrument_exp.message}
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
