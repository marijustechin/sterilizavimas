import {
  getStickers,
  selectStickersOnlyDefected,
  setFilterOnlyDefected,
  setSticerListCurrentPage,
} from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const StickerFilterDefect = () => {
  const dispatch = useAppDispatch();
  const onlyDefected = useAppSelector(selectStickersOnlyDefected);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    dispatch(setSticerListCurrentPage({ current: 1 }));
    dispatch(setFilterOnlyDefected({ onlyDefected: isChecked }));
    dispatch(getStickers());
  };

  return (
    <div className='flex items-center gap-2 font-semibold text-rose-900/70'>
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
  );
};
