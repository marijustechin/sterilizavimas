import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  getCycleRecords,
  selectAdminListSortingField,
  selectAdminListSortingOrder,
  setAdminListSorting,
} from '../../store/features/adminSlice';

interface AdminListTableSortingProps {
  sortField: string;
  buttonText: string;
}

export const AdminListTableSorting = ({
  sortField,
  buttonText,
}: AdminListTableSortingProps) => {
  const dispatch = useAppDispatch();
  const currentSortingField = useAppSelector(selectAdminListSortingField);
  const currentSortOrder = useAppSelector(selectAdminListSortingOrder);

  const handleClick = () => {
    // 1. Jei spaudžiama ant lauko, kuris ŠIUO METU rikiuojamas
    if (currentSortingField === sortField) {
      let newSortOrder: 'asc' | 'desc' | '';

      if (currentSortOrder === 'asc') {
        // Rikiuojama ASC -> pereina į DESC
        newSortOrder = 'desc';
      } else if (currentSortOrder === 'desc') {
        // Rikiuojama DESC -> pereina į 'None' (galbūt tuščią eilutę ar 'asc', priklauso nuo Jūsų logikos)
        // Jei norite ciklo: asc -> desc -> asc
        newSortOrder = 'asc';

        // Jei norėtumėte grįžti į nerikiuotą būseną:
        // newSortOrder = '';
        // dispatch(setAdminListSorting({ sortField: '', sortOrder: '' })); // Būtų reikalingas kitas veiksmas
      } else {
        // Jei sortOrder yra 'null'/'', pradėti ASC
        newSortOrder = 'asc';
      }

      dispatch(
        setAdminListSorting({ sortField: sortField, sortOrder: newSortOrder })
      );
    } else {
      // 2. Jei spaudžiama ant KITO lauko (pradėti rikiavimą pagal jį)
      dispatch(setAdminListSorting({ sortField: sortField, sortOrder: 'asc' }));
    }
    dispatch(getCycleRecords());
  };

  // Panaudojau myField vietoj currentSortingField, kaip buvo Jūsų originale
  const isActive = currentSortingField === sortField;

  return (
    <button
      type='button'
      className='flex gap-1 items-center cursor-pointer text-xs uppercase'
      onClick={handleClick}
    >
      {/* Pakeičiau tekstą, kad atitiktų universalų komponentą */}
      {/* Galbūt turėtumėte perduoti etiketę kaip props (label: string) */}
      <span className='font-semibold'>{buttonText}</span>

      {/* Logika, kuri paima teisingą ikoną: */}
      {isActive ? (
        currentSortOrder === 'asc' ? (
          <FaSortUp size={18} className='text-blue-500' /> // Galite priskirti spalvą aktyviam
        ) : (
          <FaSortDown size={18} className='text-blue-500' />
        )
      ) : (
        <FaSort size={18} className='text-gray-400' /> // Nereikia aktyvaus rikiavimą rodančios ikonėlės
      )}
    </button>
  );
};
