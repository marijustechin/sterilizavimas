import { useAppDispatch } from '../../store/store';
import { toggleIsActivePrinter } from '../../store/features/printerSlice';

interface ActivePrinterToggleCheckboxProps {
  printerId: number;
  isActive: boolean;
}

export const ActivePrinterToggleCheckbox: React.FC<
  ActivePrinterToggleCheckboxProps
> = ({ printerId, isActive }) => {
  const dispatch = useAppDispatch();

  const toggleIsActive = () => {
    dispatch(toggleIsActivePrinter({ id: printerId }));
  };

  return (
    <input
      className='w-5 h-5'
      autoComplete='off'
      type='checkbox'
      checked={isActive}
      onChange={toggleIsActive}
    />
  );
};
