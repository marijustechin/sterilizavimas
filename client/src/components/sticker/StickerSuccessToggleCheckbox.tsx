import { selectUser } from '../../store/features/authSlice';
import { toggleStickerSuccess } from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

interface StickerSuccessToggleCheckboxProps {
  short_code: string;
  success: boolean;
}

export const StickerSuccessToggleCheckbox: React.FC<
  StickerSuccessToggleCheckboxProps
> = ({ success, short_code }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const toggleSuccess = () => {
    if (user?.userId)
      dispatch(
        toggleStickerSuccess({ short_code: short_code, user_id: user.userId })
      );
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
