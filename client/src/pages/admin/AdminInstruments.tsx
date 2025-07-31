import { useEffect, useState } from 'react';
import {
  deleteInstrument,
  getInstruments,
  selectInstruments,
} from '../../store/features/instrumentSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Search } from '../../components/Search';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import type { TInstrument } from '../../types';
import toast from 'react-hot-toast';
import { AddEditInstrumentForm } from '../../components/admin/AddEditInstrumentForm';

export const AdminInstruments = () => {
  const dispatch = useAppDispatch();
  const instruments = useAppSelector(selectInstruments);

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
    if (instruments.length === 0) dispatch(getInstruments());
  }, [dispatch, instruments]);

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
      <div className='flex gap-3'>
        <button className='btn-amber' type='button' onClick={handleAddNewClick}>
          ➕ Pridėti naują
        </button>
        <Search placeholderText='Ieškoti instrumentų...' onSearch={() => {}} />
      </div>

      <table>
        <thead>
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
                <td>{instrument.instrument_code}</td>
                <td>{instrument.instrument_name}</td>
                <td>{instrument.instrument_exp}</td>
                <td className='flex gap-2 py-1'>
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
};
