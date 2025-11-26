import HelperService from '../../services/helperService';
import {
  getCycleRecords,
  selectAdminListTotalRecords,
  setAdminListLimit,
} from '../../store/features/adminSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const AdminListSelectInPage = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectAdminListTotalRecords);

  const handleShowInPageChange = (value: string) => {
    const filterValue = HelperService.getPositiveNumberOrUndefined(value);

    if (filterValue) {
      dispatch(setAdminListLimit({ limit: filterValue }));
      dispatch(getCycleRecords());
    }
  };

  return (
    <div className='flex items-center gap-1.5'>
      <div className='flex gap-0.5 items-center'>
        Viso: <span className='font-semibold'>{total}</span>
      </div>
      <div className='flex gap-0.5 items-center'>
        Puslapyje:{' '}
        <select
          id='admin_showinpage'
          className='px-2 py-1 border border-rose-800/50 rounded-lg focus:outline-none font-semibold'
          defaultValue={15}
          onChange={(e) => handleShowInPageChange(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};
