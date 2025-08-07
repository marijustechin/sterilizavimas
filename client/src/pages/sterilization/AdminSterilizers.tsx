import { useEffect, useState } from 'react';
import {
  deleteSterilizer,
  getSterilizers,
  selectSterilizer,
  selectSterilizerStatus,
} from '../../store/features/sterilizerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import type { TSterilizer } from '../../types';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { AddEditSterilizerForm } from '../../components/admin/AddEditSterilizerForm';
import toast from 'react-hot-toast';

export const AdminSterilizers = () => {
  const dispatch = useAppDispatch();
  const sterilizers = useAppSelector(selectSterilizer);
  const sterilizerStatus = useAppSelector(selectSterilizerStatus);

  // delete variables
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | undefined
  >();
  const [sterilizerToDelete, setSterilizerToDelete] = useState<TSterilizer>();

  // add/edit variables
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [sterilizerToEdit, setSterilizerToEdit] = useState<TSterilizer | null>(
    null
  );

  useEffect(() => {
    if (sterilizerStatus === 'idle') dispatch(getSterilizers());
  }, [dispatch, sterilizerStatus]);

  const handleAddNewClick = () => {
    setSterilizerToEdit(null);
    setAddEditOpen(true);
  };
  const handleEditClick = (sterilizer: TSterilizer) => {
    setSterilizerToEdit(sterilizer);
    setAddEditOpen(true);
  };

  const handleDeleteClick = (sterilizer: TSterilizer) => {
    setConfirmationMessage(
      `Ar tikrai norite pašalinti „${sterilizer.sterilizer_code}. ${sterilizer.sterilizer_name}“?`
    );
    setSterilizerToDelete(sterilizer);
    setConfirmationOpen(true);
  };

  const handleDeleteSterilizer = async () => {
    setConfirmationOpen(false);
    // Cia vyksta realus sterilizatoriaus pasalinimas
    try {
      if (sterilizerToDelete) {
        await dispatch(
          deleteSterilizer({ id: sterilizerToDelete.id })
        ).unwrap();
        toast.success(
          `Sterilizatorius „${sterilizerToDelete.sterilizer_code}. ${sterilizerToDelete.sterilizer_name}“ pašalintas sėkmingai`
        );
      }
    } catch (error) {
      toast.error('Klaida: ' + String(error));
    } finally {
      setSterilizerToDelete(undefined);
      setConfirmationMessage(undefined);
    }
  };

  const handleEditCancel = () => {
    setAddEditOpen(false);
    setSterilizerToEdit(null);
  };

  return (
    <main>
      <div className='flex gap-3 items-center'>
        <h1 className='text-3xl font-semibold'>Sterilizatoriai</h1>
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
          {sterilizers.length === 0 ? (
            <tr>
              <td colSpan={3} className='text-center py-4 text-gray-500'>
                Sterilizatorių duomenų bazėje nėra.
              </td>
            </tr>
          ) : (
            sterilizers.map((sterilizer) => (
              <tr
                className='border-b border-rose-950/40 last:border-none'
                key={sterilizer.sterilizer_name + sterilizer.sterilizer_code}
              >
                <td className='text-center'>{sterilizer.sterilizer_code}</td>
                <td>{sterilizer.sterilizer_name}</td>
                <td className='flex gap-2 py-1 items-center justify-center'>
                  <button
                    className='btn-emerald'
                    type='button'
                    onClick={() => handleEditClick(sterilizer)}
                  >
                    ✍️ Redaguoti
                  </button>
                  <button
                    className='btn-rose'
                    type='button'
                    onClick={() => handleDeleteClick(sterilizer)}
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
        onConfirm={handleDeleteSterilizer}
        title='Dėmesio!'
      />
      <AddEditSterilizerForm
        isOpen={addEditOpen}
        onCancel={handleEditCancel}
        sterilizer={sterilizerToEdit}
      />
    </main>
  );
};
