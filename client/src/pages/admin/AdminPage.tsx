import { useEffect } from 'react';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import {
  getCurrentPage,
  getCycleRecords,
  getTotalPages,
  selectAdminStatus,
  selectCycleRecords,
  setCurrentPage,
} from '../../store/features/adminSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { MdMore } from 'react-icons/md';
import { AdminMenu } from '../../components/admin/AdminMenu';

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const cycleRecords = useAppSelector(selectCycleRecords);
  const adminStatus = useAppSelector(selectAdminStatus);
  const totalPages = useAppSelector(getTotalPages);
  const currentPage = useAppSelector(getCurrentPage);

  useEffect(() => {
    if (adminStatus === 'idle') dispatch(getCycleRecords());
  }, [adminStatus, dispatch]);

  const onSearch = (searchText: string) => {
    console.log(searchText);
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage({ current: page }));
    dispatch(getCycleRecords());
  };

  return (
    <main className='flex flex-col gap-4'>
      <section>
        <Search
          placeholderText='Paieška pagal kažką'
          onSearch={(text) => onSearch(text)}
        />
      </section>
      <section>
        <table className='w-full text-left mt-5'>
          <thead className='uppercase bg-slate-200 text-center'>
            <tr>
              <th>Instrumentas</th>
              <th>Skyrius</th>
              <th>Sterilizuotas</th>
              <th>Panaudotas</th>
              <th>Medikas</th>
              <th>Pacientas</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {cycleRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.instrument.instrument_name}</td>
                <td>{record.department.department_name}</td>
                <td className='text-center'>{record.sterilizedAt}</td>
                <td className='text-center'>2025-11-12</td>
                <td>{record.sterilizedBy}</td>
                <td className='text-center'>Paciento ID</td>
                <td>
                  <button>
                    <MdMore className='text-red-950' size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Pagination
        onChange={(current) => handlePageChange(current)}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};
