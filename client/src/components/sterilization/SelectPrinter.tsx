import { useEffect, useState } from 'react';
import {
  getPrinters,
  selectActivePrinter,
  selectPrinterStatus,
} from '../../store/features/printerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import type { TPrinter } from '../../types';

export const SelectPrinter = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectPrinterStatus); // 'idle' | 'loading' | 'succeeded' | 'failed'
  const printers: TPrinter[] = useAppSelector(selectActivePrinter); // tik aktyvūs
  const [selectedPrinter, setSelectedPrinter] = useState<number | ''>('');

  // 1) fetch
  useEffect(() => {
    if (status === 'idle') dispatch(getPrinters());
  }, [dispatch, status]);

  // 2) inicializacija iš localStorage
  useEffect(() => {
    const saved = localStorage.getItem('selectedPrinter');
    if (saved) setSelectedPrinter(Number(saved));
  }, []);

  // 3) validacija kai pasikeičia aktyvių sąrašas
  useEffect(() => {
    if (printers.length === 0) {
      // nėra aktyvių – išvalom
      if (selectedPrinter !== '') setSelectedPrinter('');
      return;
    }

    // jei turimas ID nebegalioja – parenkam pagal taisykles
    const exists =
      selectedPrinter !== '' && printers.some((p) => p.id === selectedPrinter);
    if (!exists) {
      if (printers.length === 1) {
        setSelectedPrinter(printers[0].id); // vienas aktyvus – auto select
        localStorage.setItem('selectedPrinter', String(printers[0].id));
      } else {
        setSelectedPrinter(''); // daug aktyvių – tegul pasirenka
        localStorage.removeItem('selectedPrinter');
      }
    }
  }, [printers, selectedPrinter]);

  const onSelectPrinter = (id: number) => {
    setSelectedPrinter(id);
    localStorage.setItem('selectedPrinter', String(id));
  };

  const disabled = status === 'loading' || printers.length === 0;

  return (
    <select
      id='printer_select'
      className='p-2 border border-rose-800/50 rounded-lg focus:outline-none'
      value={selectedPrinter}
      disabled={disabled}
      onChange={(e) => onSelectPrinter(Number(e.target.value))}
    >
      <option value='' disabled>
        {status === 'loading' ? 'Kraunama…' : 'Pasirinkite spausdintuvą'}
      </option>
      {printers.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  );
};
