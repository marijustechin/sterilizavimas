import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import type { TDepartment } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { AddEditDepartmentSchema } from '../../schemas/AddEditDepartmentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import {
  createDepartment,
  selectDepartmentStatus,
  updateDepartment,
} from '../../store/features/departmentSlice';
import toast from 'react-hot-toast';

interface AddEditDepartmentFormProps {
  isOpen: boolean;
  onCancel: () => void;
  department: TDepartment | null;
}

export const AddEditDepartmentForm: React.FC<AddEditDepartmentFormProps> = ({
  isOpen,
  onCancel,
  department,
}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectDepartmentStatus);

  //   Forma
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddEditDepartmentSchema),
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof AddEditDepartmentSchema>
  > = async (formValues) => {
    try {
      if (department) {
        // Redagavimas
        const departmentToEdit = { id: department.id, ...formValues };

        await dispatch(
          updateDepartment({ department: departmentToEdit })
        ).unwrap();

        toast.success(
          `Skyrius ${formValues.department_code}. ${formValues.department_name} sėkmingai išsaugotas!`
        );
      } else {
        // Naujas skyrius
        await dispatch(createDepartment({ department: formValues })).unwrap();

        toast.success(
          `Skyrius ${formValues.department_code}. ${formValues.department_name} sėkmingai pridėtas!`
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

  // Pradinis formos inicijavimas
  useEffect(() => {
    if (department) {
      reset({
        department_code: department.department_code,
        department_name: department.department_name,
      });
    } else {
      reset({
        department_code: null,
        department_name: '',
      });
    }
  }, [reset, department]);

  const handleCancel = () => {
    reset({
      department_code: null,
      department_name: '',
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
              {department ? 'Skyriaus redagavimas' : 'Naujas skyrius'}
            </h2>
            {/* Kodas, pavadinimas */}
            <div className='flex gap-3 w-full '>
              {/* Skyriaus kodas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-1/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Kodas
                </legend>
                <input
                  id='department_code'
                  className='form-input w-36'
                  type='number'
                  step={1}
                  min={1}
                  {...register('department_code')}
                />
              </fieldset>
              {/* Skyriaus pavadinimas */}
              <fieldset className='border border-rose-950 p-2 rounded-lg w-5/6'>
                <legend className='px-3 text-rose-950 font-semibold'>
                  Pavadinimas
                </legend>
                <textarea
                  rows={3}
                  className='form-textarea w-full'
                  id='department_name'
                  {...register('department_name')}
                />
              </fieldset>
            </div>
            {/* Validacijos klaidų blokas */}
            <div className='flex flex-col gap-1'>
              {errors.department_code && (
                <span className='text-sm text-rose-500'>
                  {errors.department_code.message}
                </span>
              )}
              {errors.department_name && (
                <span className='text-sm text-rose-500'>
                  {errors.department_name.message}
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
