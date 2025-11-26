import { MdMore } from 'react-icons/md';
import type { TAdminRecord } from '../../types';
import { AdminListTableFilterStatus } from './AdminListTableFilterStatus';
import { AdminListTableSorting } from './AdminListTableSorting';

interface AdminListTableProps {
  cycleRecords: TAdminRecord[];
}

export const AdminListTable = ({ cycleRecords }: AdminListTableProps) => {
  return (
    <table className='w-full text-left mt-5'>
      <thead className='uppercase bg-slate-200 text-center font-medium text-xs'>
        <tr>
          <th>
            <AdminListTableSorting
              sortField='instrument_name'
              buttonText='Instrumentas'
            />
          </th>
          <th className='text-center'>
            <AdminListTableSorting
              sortField='department_name'
              buttonText='Skyrius'
            />
          </th>
          <th>Sterilizavo</th>
          <th>
            <AdminListTableSorting
              sortField='sterilization_date'
              buttonText='Data'
            />
          </th>
          <th>
            <AdminListTableSorting
              sortField='updatedAt'
              buttonText='Panaudotas'
            />
          </th>
          <th>
            <AdminListTableSorting sortField='used_by' buttonText='Medikas' />
          </th>
          <th>
            <AdminListTableSorting sortField='patient' buttonText='Pacientas' />
          </th>
          <th className='flex flex-col'>
            Būsena
            <AdminListTableFilterStatus />
          </th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {cycleRecords.map((record) => (
          <tr key={record.id} className='odd:bg-white even:bg-neutral-100'>
            <td>{record.instrument.instrument_name}</td>
            <td>{record.department.department_name}</td>
            <td className='text-center'>{record.sterilizedBy}</td>
            <td className='text-center border-r border-gray-500 text-xs'>
              {record.sterilizedAt}
            </td>
            <td className='text-center text-xs'>
              {record.usedAt ? record.usedAt : '---'}
            </td>
            <td className='text-center'>
              {record.usedBy ? record.usedBy : '---'}
            </td>
            <td className='text-center'>
              {record.usedTo ? record.usedTo : '---'}
            </td>
            <td className='text-center text-xs'>
              {record.docStatus ? record.docStatus : '---'}
            </td>
            <td>
              <button>
                <MdMore className='text-red-950' size={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
