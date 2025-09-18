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
  const status = useAppSelector(selectPrinterStatus);
  const printers: TPrinter[] = useAppSelector(selectActivePrinter);
  const [selectedPrinter, setSelectedPrinter] = useState<number | ''>('');

  // 1. Jei nėra, iš db atsinešame spausdintuvus į redux
  useEffect(() => {
    if (status === 'idle') dispatch(getPrinters());
  }, [dispatch, status]);

  // 2. Patikriname localStorage ir aktyvių spausdintuvų sąrašą
  useEffect(() => {
    // Vykdome tik kai spausdintuvai įkelti
    if (printers.length > 0) {
      const saved = localStorage.getItem('selectedPrinter');
      const savedId = saved ? Number(saved) : null;
      const exists = savedId && printers.some((p) => p.id === savedId);

      if (exists) {
        setSelectedPrinter(savedId);
      } else if (printers.length === 1) {
        setSelectedPrinter(printers[0].id);
        localStorage.setItem('selectedPrinter', String(printers[0].id));
      } else {
        setSelectedPrinter('');
        localStorage.removeItem('selectedPrinter');
      }
    }
  }, [printers]);

  // Kai naudotojas pasirenka spausdintuvą,
  // įrašome spausdintuvo ID į localStorage
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
        {status === 'loading' ? 'Įkeliama…' : 'Pasirinkite spausdintuvą'}
      </option>
      {printers.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </select>
  );
};
