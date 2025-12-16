import { useState } from 'react';
import { selectUser } from '../../store/features/authSlice';
import { toggleStickerSuccess } from '../../store/features/stickerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { DefectedReasonModal } from './DefectedReasonModal';

interface StickerSuccessToggleCheckboxProps {
  short_code: string;
  success: boolean;
}

export const StickerSuccessToggleCheckbox: React.FC<
  StickerSuccessToggleCheckboxProps
> = ({ success, short_code }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleSuccess = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setModalIsOpen(true);
    } else {
      if (user?.userId)
        dispatch(
          toggleStickerSuccess({ short_code: short_code, user_id: user.userId })
        );
    }
  };

  const reasonConfirm = (reason: string) => {
    setModalIsOpen(false);
    if (user?.userId)
      dispatch(
        toggleStickerSuccess({
          short_code: short_code,
          user_id: user.userId,
          successReason: reason,
        })
      );
  };

  return (
    <>
      <input
        className='w-5 h-5'
        id={short_code}
        autoComplete='off'
        type='checkbox'
        checked={!success}
        onChange={toggleSuccess}
      />
      <DefectedReasonModal
        isOpen={modalIsOpen}
        onConfirm={(reason) => reasonConfirm(reason)}
      />
    </>
  );
};
