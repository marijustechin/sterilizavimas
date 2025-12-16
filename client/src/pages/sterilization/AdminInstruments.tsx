import { useEffect, useState } from 'react';
import {
  deleteInstrument,
  getInstruments,
  selectInstruments,
  selectInstrumentStatus,
} from '../../store/features/instrumentSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import type { TInstrument } from '../../types';
import toast from 'react-hot-toast';
import { AddEditInstrumentForm } from '../../components/admin/AddEditInstrumentForm';

export default function AdminInstruments() {
  const dispatch = useAppDispatch();
  const instruments = useAppSelector(selectInstruments);
  const instrumentStatus = useAppSelector(selectInstrumentStatus);

  // delete variables
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | undefined
  >();
  const [instrumentToDelete, setInstrumentToDelete] = useState<TInstrument>();

  // add/edit variables
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [instrumentToEdit, setInstrumentToEdit] = useState<TInstrument | null>(
    null
  );

  useEffect(() => {
    if (instrumentStatus === 'idle') dispatch(getInstruments());
  }, [dispatch, instrumentStatus]);

  const handleDeleteInstrument = async () => {
    setConfirmationOpen(false);
    // Cia vyksta realus instrumento pasalinimas
    try {
      if (instrumentToDelete) {
        await dispatch(
          deleteInstrument({ id: instrumentToDelete.instrument_code })
        ).unwrap();
        toast.success(
          `Instrumentas „${instrumentToDelete?.instrument_code}. ${instrumentToDelete?.instrument_name}“ pašalintas sėkmingai`
        );
      }
    } catch (error) {
      toast.error('Klaida: ' + String(error));
    } finally {
      setInstrumentToDelete(undefined);
      setConfirmationMessage(undefined);
    }
  };

  const handleDeleteClick = (instrument: TInstrument) => {
    setConfirmationMessage(
      `Ar tikrai norite pašalinti „${instrument.instrument_code}. ${instrument.instrument_name}“?`
    );
    setInstrumentToDelete(instrument);
    setConfirmationOpen(true);
  };

  const handleEditClick = (instrument: TInstrument) => {
    setInstrumentToEdit(instrument);
    setAddEditOpen(true);
  };

  const handleEditCancel = () => {
    setAddEditOpen(false);
    setInstrumentToEdit(null);
  };

  const handleAddNewClick = () => {
    setInstrumentToEdit(null);
    setAddEditOpen(true);
  };

  return (
    <main>
      <div className='flex gap-3 items-center'>
        <h1 className='text-3xl font-semibold'>Instrumentai</h1>
        <button className='btn-amber' type='button' onClick={handleAddNewClick}>
          ➕ Pridėti naują
        </button>
      </div>

      <table className='w-full text-left mt-5'>
        <thead className='uppercase bg-slate-200 text-center'>
          <tr>
            <th>Kodas</th>
            <th>Pavadinimas</th>
            <th>Galiojimas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {instruments?.length === 0 ? (
            <tr>
              <td colSpan={4} className='text-center py-4 text-gray-500'>
                Instrumentų duomenų bazėje nėra.
              </td>
            </tr>
          ) : (
            instruments?.map((instrument) => (
              <tr
                className='border-b border-rose-950/40 last:border-none'
                // instrumentų pavadinimai netuėtų dubliuotis,
                // bet dėl viso pikto pridedu kodą, kuris irgi turi būti unikalus
                key={instrument.instrument_name + instrument.instrument_code}
              >
                <td className='text-center'>{instrument.instrument_code}</td>
                <td>{instrument.instrument_name}</td>
                <td className='text-center'>{instrument.instrument_exp}</td>
                <td className='flex gap-2 py-1 items-center justify-center'>
                  <button
                    className='btn-emerald'
                    type='button'
                    onClick={() => handleEditClick(instrument)}
                  >
                    ✍️ Redaguoti
                  </button>
                  <button
                    className='btn-rose'
                    type='button'
                    onClick={() => handleDeleteClick(instrument)}
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
        onConfirm={handleDeleteInstrument}
        title='Dėmesio!'
      />
      <AddEditInstrumentForm
        isOpen={addEditOpen}
        onCancel={handleEditCancel}
        instrument={instrumentToEdit}
      />
    </main>
  );
}
