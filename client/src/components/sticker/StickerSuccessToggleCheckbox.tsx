import { toggleStickerSuccess } from '../../store/features/stickerSlice';
import { useAppDispatch } from '../../store/store';

interface StickerSuccessToggleCheckboxProps {
  short_code: string;
  success: boolean;
}

export const StickerSuccessToggleCheckbox: React.FC<
  StickerSuccessToggleCheckboxProps
> = ({ success, short_code }) => {
  const dispatch = useAppDispatch();

  const toggleSuccess = () => {
    dispatch(toggleStickerSuccess({ short_code: short_code }));
  };

  return (
    <input
      className='w-5 h-5'
      id={short_code}
      autoComplete='off'
      type='checkbox'
      checked={!success}
      onChange={toggleSuccess}
    />
  );
};
