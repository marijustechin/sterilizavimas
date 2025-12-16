import { useEffect, useState } from 'react';
import {
  deleteDepartment,
  getDepartments,
  selectDepartements,
  selectDepartmentStatus,
} from '../../store/features/departmentSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import type { TDepartment } from '../../types';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { AddEditDepartmentForm } from '../../components/admin/AddEditDepartmentForm';
import toast from 'react-hot-toast';

export default function AdminDepartments() {
  const dispatch = useAppDispatch();
  const departments = useAppSelector(selectDepartements);
  const depatrmentStatus = useAppSelector(selectDepartmentStatus);

  // delete variables
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | undefined
  >();
  const [departmentToDelete, setDepartmentToDelete] = useState<TDepartment>();

  // add/edit variables
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [departmentToEdit, setDepartmentToEdit] = useState<TDepartment | null>(
    null
  );

  useEffect(() => {
    if (depatrmentStatus === 'idle') dispatch(getDepartments());
  }, [depatrmentStatus, dispatch]);

  const handleAddNewClick = () => {
    setDepartmentToEdit(null);
    setAddEditOpen(true);
  };

  const handleEditClick = (department: TDepartment) => {
    setDepartmentToEdit(department);
    setAddEditOpen(true);
  };

  const handleDeleteClick = (department: TDepartment) => {
    setConfirmationMessage(
      `Ar tikrai norite pašalinti „${department.department_code}. ${department.department_name}“?`
    );
    setDepartmentToDelete(department);
    setConfirmationOpen(true);
  };

  const handleDeleteDepartment = async () => {
    setConfirmationOpen(false);
    // Cia vyksta realus skyriaus pasalinimas
    try {
      if (departmentToDelete) {
        await dispatch(
          deleteDepartment({ id: departmentToDelete.department_code })
        ).unwrap();
        toast.success(
          `Skyrius „${departmentToDelete.department_code}. ${departmentToDelete.department_name}“ pašalintas sėkmingai`
        );
      }
    } catch (error) {
      toast.error('Klaida: ' + String(error));
    } finally {
      setDepartmentToDelete(undefined);
      setConfirmationMessage(undefined);
    }
  };

  const handleEditCancel = () => {
    setAddEditOpen(false);
    setDepartmentToEdit(null);
  };

  return (
    <main>
      <div className='flex gap-3 items-center'>
        <h1 className='text-3xl font-semibold'>Skyriai</h1>
        <button className='btn-amber' type='button' onClick={handleAddNewClick}>
          ➕ Pridėti naują
        </button>
      </div>

      <table className='w-full text-left mt-5'>
        <thead className='uppercase bg-slate-200 text-center'>
          <tr>
            <th>Kodas</th>
            <th>Pavadinimas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {departments.length === 0 ? (
            <tr>
              <td colSpan={3} className='text-center py-4 text-gray-500'>
                Skyrių duomenų bazėje nėra.
              </td>
            </tr>
          ) : (
            departments.map((department) => (
              <tr
                className='border-b border-rose-950/40 last:border-none'
                key={department.department_name + department.department_code}
              >
                <td className='text-center'>{department.department_code}</td>
                <td>{department.department_name}</td>
                <td className='flex gap-2 py-1 items-center justify-center'>
                  <button
                    className='btn-emerald'
                    type='button'
                    onClick={() => handleEditClick(department)}
                  >
                    ✍️ Redaguoti
                  </button>
                  <button
                    className='btn-rose'
                    type='button'
                    onClick={() => handleDeleteClick(department)}
                  >
                    ❌ Pašalinti
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ConfirmationModal
        isOpen={confirmationOpen}
        message={confirmationMessage}
        onCancel={() => setConfirmationOpen(false)}
        onConfirm={handleDeleteDepartment}
        title='Dėmesio!'
      />
      <AddEditDepartmentForm
        isOpen={addEditOpen}
        onCancel={handleEditCancel}
        department={departmentToEdit}
      />
    </main>
  );
}
