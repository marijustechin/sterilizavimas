import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  deletePrinter,
  getPrinters,
  selectPrinter,
  selectPrinterStatus,
} from '../../store/features/printerSlice';
import { useEffect, useMemo, useState } from 'react';
import type { TPrinter } from '../../types';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import { AddEditPrinterForm } from '../../components/admin/AddEditPrinterForm';
import { ActivePrinterToggleCheckbox } from '../../components/admin/ActivePrinterToggleCheckbox';
import toast from 'react-hot-toast';

export default function PrintersPage() {
  const dispatch = useAppDispatch();
  const printers = useAppSelector(selectPrinter);
  const printersStatus = useAppSelector(selectPrinterStatus);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filteredPrinters = useMemo(() => {
    if (filter === 'active') return printers.filter((p) => p.active === true);
    if (filter === 'inactive')
      return printers.filter((p) => p.active === false);
    return printers;
  }, [printers, filter]);

  // delete variables
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | undefined
  >();
  const [printerToDelete, setPrinterToDelete] = useState<TPrinter>();

  // add/edit variables
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [printerToEdit, setPrinterToEdit] = useState<TPrinter | null>(null);

  useEffect(() => {
    if (printersStatus === 'idle') dispatch(getPrinters());
  }, [dispatch, printersStatus]);

  const handleAddNewClick = () => {
    setPrinterToEdit(null);
    setAddEditOpen(true);
  };

  const handleEditClick = (printer: TPrinter) => {
    setPrinterToEdit(printer);
    setAddEditOpen(true);
  };

  const handleDeleteClick = (printer: TPrinter) => {
    setConfirmationMessage(
      `Ar tikrai norite pašalinti spausdintuvą „${printer.name}“?`
    );
    setPrinterToDelete(printer);
    setConfirmationOpen(true);
  };

  const handleDeletePrinter = async () => {
    // Cia vyksta realus spausdintuvo pasalinimas
    try {
      if (printerToDelete) {
        await dispatch(deletePrinter({ id: printerToDelete.id })).unwrap();
        toast.success(
          `Spausdintuvas „${printerToDelete.ip_address}:${printerToDelete.port}“ pašalintas sėkmingai`
        );
      }
    } catch (error) {
      toast.error('Klaida: ' + String(error));
    } finally {
      setConfirmationOpen(false);
      setPrinterToDelete(undefined);
      setConfirmationMessage(undefined);
    }
  };

  const handleEditCancel = () => {
    setAddEditOpen(false);
    setPrinterToEdit(null);
  };

  const handleOnChangeFilter = (val: 'all' | 'active' | 'inactive') => {
    setFilter(val);
  };

  return (
    <main className='flex flex-col gap-3'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-3xl font-semibold'>Spausdintuvai</h1>
        <button className='btn-amber' type='button' onClick={handleAddNewClick}>
          ➕ Pridėti naują
        </button>
        <div className='flex gap-3 items-center pl-3'>
          <label htmlFor='select_filter'>Filtras</label>
          <select
            className='p-2 border border-rose-800/50 rounded-lg focus:outline-none'
            id='select_filter'
            onChange={(e) =>
              handleOnChangeFilter(
                e.target.value as 'all' | 'active' | 'inactive'
              )
            }
            value={filter}
          >
            <option value='all'>Rodyti visus</option>
            <option value='active'>Rodyti aktyvius</option>
            <option value='inactive'>Rodyti neaktyvius</option>
          </select>
        </div>
      </div>

      <table className='w-full text-left mt-5'>
        <thead className='uppercase bg-slate-200 text-center'>
          <tr>
            <th>ID</th>
            <th>Pavadinimas</th>
            <th>IP adresas</th>
            <th>Prievadas</th>
            <th>Aktyvus</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <tr
                className='border-b border-rose-950/40 last:border-none'
                key={printer.id + printer.name}
              >
                <td className='text-center'>{printer.id}</td>
                <td>{printer.name}</td>
                <td className='text-center'>{printer.ip_address}</td>
                <td className='text-center'>{printer.port}</td>
                <td className='text-center'>
                  <ActivePrinterToggleCheckbox
                    printerId={printer.id}
                    isActive={printer.active}
                  />
                </td>
                <td className='flex gap-2 py-1 items-center justify-center'>
                  <button
                    className='btn-emerald'
                    type='button'
                    onClick={() => handleEditClick(printer)}
                  >
                    ✍️ Redaguoti
                  </button>
                  <button
                    className='btn-rose'
                    type='button'
                    onClick={() => handleDeleteClick(printer)}
                  >
                    ❌ Pašalinti
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className='text-center py-4 text-gray-500'>
                Spausdintuvų duomenų bazėje nėra.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ConfirmationModal
        isOpen={confirmationOpen}
        message={confirmationMessage}
        onCancel={() => setConfirmationOpen(false)}
        onConfirm={handleDeletePrinter}
        title='Dėmesio!'
      />
      <AddEditPrinterForm
        isOpen={addEditOpen}
        onCancel={handleEditCancel}
        printer={printerToEdit}
      />
    </main>
  );
}
