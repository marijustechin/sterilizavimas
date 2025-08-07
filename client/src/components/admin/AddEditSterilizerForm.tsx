import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TSterilizer } from '../../types';
import { AddEditSterilizerSchema } from '../../schemas/AddEditSterilizerSchema';
import {
  createSterilizer,
  selectSterilizerStatus,
  updateSterilizer,
} from '../../store/features/sterilizerSlice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

interface AddEditSterilizerFormProps {
  isOpen: boolean;
  onCancel: () => void;
  sterilizer: TSterilizer | null;
}

export const AddEditSterilizerForm: React.FC<AddEditSterilizerFormProps> = ({
  isOpen,
  onCancel,
  sterilizer,
}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectSterilizerStatus);

  // Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddEditSterilizerSchema),
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof AddEditSterilizerSchema>
  > = async (formValues) => {
    try {
      if (sterilizer) {
        // Redagavimas
        const sterlizerToUpdate = { id: sterilizer.id, ...formValues };

        await dispatch(
          updateSterilizer({ sterilizer: sterlizerToUpdate })
        ).unwrap();

        toast.success(
          `Sterilizatorius ${formValues.sterilizer_code}. ${formValues.sterilizer_name} sėkmingai išsaugotas!`
        );
      } else {
        // Naujas
        await dispatch(createSterilizer({ sterilizer: formValues })).unwrap();
        toast.success(
          `Sterilizatorius ${formValues.sterilizer_code}. ${formValues.sterilizer_name} sėkmingai pridėtas!`
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

  useEffect(() => {
    if (sterilizer) {
      reset({
        sterilizer_code: sterilizer.sterilizer_code,
        sterilizer_name: sterilizer.sterilizer_name,
      });
    } else {
      reset({
        sterilizer_code: null,
        sterilizer_name: '',
      });
    }
  }, [sterilizer, reset]);

  const handleCancel = () => {
    reset({
      sterilizer_code: null,
      sterilizer_name: '',
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
              {sterilizer
                ? 'Sterilizatoriaus redagavimas'
                : 'Naujas sterilizatorius'}
            </h2>
            {/* Kodas, pavadinimas */}
            <div className='flex gap-3 w-full '>
              {/* Sterilizatoriaus kodas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Kodas
                </legend>
                <input
                  id='sterilizer_code'
                  className='form-input w-36'
                  type='number'
                  step={1}
                  min={1}
                  {...register('sterilizer_code')}
                />
              </fieldset>
              {/* Sterilizatoriaus pavadinimas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-5/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Pavadinimas
                </legend>
                <textarea
                  rows={3}
                  className='form-textarea w-full'
                  id='sterilizer_name'
                  {...register('sterilizer_name')}
                />
              </fieldset>
            </div>
            {/* Validacijos klaidų blokas */}
            <div className='flex flex-col gap-1'>
              {errors.sterilizer_code && (
                <span className='text-sm text-rose-500'>
                  {errors.sterilizer_code.message}
                </span>
              )}
              {errors.sterilizer_name && (
                <span className='text-sm text-rose-500'>
                  {errors.sterilizer_name.message}
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
