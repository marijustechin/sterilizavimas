import { MdOutlinePrint } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  selectedInstruments,
  selectSelectedSterilizerId,
  setMessage,
  setPrintingPreview,
} from '../../store/features/sterilizationSlice';
import toast from 'react-hot-toast';

export const ButtonPrint = () => {
  const dispatch = useAppDispatch();
  const sterilizerId = useAppSelector(selectSelectedSterilizerId);
  const instruments = useAppSelector(selectedInstruments);

  const handlePrintAction = () => {
    if (!sterilizerId) {
      toast.error('Prašome pasirinkti sterilizatorių!');
      return;
    }

    if (instruments.length < 1) {
      toast.error('Prašome pasirinkti skyrius ir instrumentus!');
      return;
    }

    dispatch(setMessage({ message: 'Generuojami lipdukai...' }));
    dispatch(setPrintingPreview({ value: true }));

    // 1. Sugeneruojame lipdukus
    // 2. Įrašome duomenis į DB
    // 3. Spausdiname
  };

  return (
    <button
      type='button'
      className='flex gap-1 items-center p-2 rounded-lg bg-emerald-300 cursor-pointer hover:bg-emerald-500'
      onClick={handlePrintAction}
    >
      <MdOutlinePrint size={20} />
      Spausdinti
    </button>
  );
};
