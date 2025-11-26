import { useEffect } from 'react';
import { Pagination } from '../../components/Pagination';
import {
  getCurrentPage,
  getCycleRecords,
  getTotalPages,
  selectAdminStatus,
  selectCycleRecords,
  setCurrentPage,
} from '../../store/features/adminSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { AdminListFilters } from '../../components/admin/AdminListFilters';
import { AdminListTable } from '../../components/admin/AdminListTable';

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const cycleRecords = useAppSelector(selectCycleRecords);
  const adminStatus = useAppSelector(selectAdminStatus);
  const totalPages = useAppSelector(getTotalPages);
  const currentPage = useAppSelector(getCurrentPage);

  useEffect(() => {
    if (adminStatus === 'idle') dispatch(getCycleRecords());
  }, [adminStatus, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage({ current: page }));
    dispatch(getCycleRecords());
  };

  return (
    <main className='flex flex-col gap-4'>
      {/* Filtrai */}
      <AdminListFilters />

      {/* Sarasas */}
      <AdminListTable cycleRecords={cycleRecords} />

      {/* Puslapiai */}
      <Pagination
        onChange={(current) => handlePageChange(current)}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};
