import {
  getStickers,
  selectOnlyStickers,
  selectStickersOnlyDefected,
  setFilterOnlyDefected,
  setSticerListCurrentPage,
} from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

import HelperService from '../../services/helperService';
import { FaFilePdf } from 'react-icons/fa6';
import { selectUser } from '../../store/features/authSlice';
import toast from 'react-hot-toast';

export const StickerFilterDefect = () => {
  const dispatch = useAppDispatch();
  const onlyDefected = useAppSelector(selectStickersOnlyDefected);
  const stickers = useAppSelector(selectOnlyStickers);
  const user = useAppSelector(selectUser);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    dispatch(setSticerListCurrentPage({ current: 1 }));
    dispatch(setFilterOnlyDefected({ onlyDefected: isChecked }));
    dispatch(getStickers());
  };

  const handleExportPDF = async () => {
    if (user?.displayName) {
      await HelperService.generateDefectedStickersPDF(
        stickers,
        '2025',
        user.displayName
      );
    } else toast.error('Neprisijungęs naudotojas');
  };

  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-1 font-semibold text-rose-900/70'>
        Rodyti tik blogus:{' '}
        <input
          className='w-5 h-5'
          autoComplete='off'
          type='checkbox'
          id='filter_defected'
          checked={onlyDefected}
          onChange={handleOnChange}
        />
      </div>

      {onlyDefected && stickers.length > 0 && (
        <>
          <select id='select_year'>
            <option value={2025}>2025</option>
          </select>
          <button
            type='button'
            onClick={handleExportPDF}
            className='cursor-pointer'
          >
            <FaFilePdf
              size={32}
              className='text-rose-500 hover:shadow-md hover:text-rose-700'
            />
          </button>
        </>
      )}
    </div>
  );
};
