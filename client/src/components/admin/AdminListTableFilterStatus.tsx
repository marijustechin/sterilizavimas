import {
  getCycleRecords,
  setAdminDocumentStatus,
  setCurrentPage,
} from '../../store/features/adminSlice';
import { useAppDispatch } from '../../store/store';

export const AdminListTableFilterStatus = () => {
  const dispatch = useAppDispatch();

  const handleOnChange = (value: string) => {
    dispatch(setCurrentPage({ current: 1 }));
    if (value === 'visi') {
      dispatch(setAdminDocumentStatus({ status: '' }));
    } else {
      dispatch(setAdminDocumentStatus({ status: value }));
    }

    dispatch(getCycleRecords());
  };

  return (
    <select
      className='text-sm font-light'
      defaultValue={'visi'}
      onChange={(e) => handleOnChange(e.target.value)}
    >
      <option value={'visi'}>Rodyti visus</option>
      <option value={'nepatvirtintas'}>Nepatvirtintas</option>
      <option value={'patvirtintas'}>Patvirtintas</option>
      <option value={'atšauktas'}>Atšauktas</option>
      <option value={'panaikintas'}>Panaikintas</option>
    </select>
  );
};
