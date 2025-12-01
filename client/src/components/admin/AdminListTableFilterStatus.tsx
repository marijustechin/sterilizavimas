import {
  getCycleRecords,
  setAdminDocumentStatus,
  setCurrentPage,
} from '../../store/features/adminSlice';
import { useAppDispatch } from '../../store/store';

import { DocStatus } from '../../../../server/src/config/generated/prisma/enums';

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
      className='text-sm font-light text-black bg-gray-100 rounded-t-md focus:outline-0'
      defaultValue='visi'
      onChange={(e) => handleOnChange(e.target.value)}
      id='filter_status'
    >
      <option value='visi'>Rodyti visus</option>
      {Object.values(DocStatus).map((status) => (
        <option key={status} value={status}>
          {status.charAt(0).toUpperCase() + status.slice(1)}{' '}
          {/* pirmą raidę didžiąja */}
        </option>
      ))}
    </select>
  );
};
