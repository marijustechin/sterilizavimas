import type { TAdminRecord } from '../../types';
import { AdminListTableFilterStatus } from './AdminListTableFilterStatus';
import { AdminListTableSorting } from './AdminListTableSorting';

interface AdminListTableProps {
  cycleRecords: TAdminRecord[];
}

export const AdminListTable = ({ cycleRecords }: AdminListTableProps) => {
  return (
    <div className='shadow overflow-hidden rounded border-b border-gray-200'>
      <table className='min-w-full'>
        <thead className='bg-gray-800 text-white uppercase text-sm'>
          <tr>
            <th className='w-2/12'>
              <AdminListTableSorting
                sortField='instrument_name'
                buttonText='Instrumentas'
              />
            </th>
            <th className='w-2/12 text-center'>
              <AdminListTableSorting
                sortField='department_name'
                buttonText='Skyrius'
              />
            </th>
            <th className='w-1/12'>Sterilizavo</th>
            <th className='w-1/12'>
              <AdminListTableSorting
                sortField='sterilization_date'
                buttonText='Data'
              />
            </th>
            <th>
              <AdminListTableSorting sortField='used_by' buttonText='Medikas' />
            </th>
            <th className='w-2/12'>
              <AdminListTableSorting
                sortField='patient'
                buttonText='Pacientas'
              />
            </th>
            <th className='w-1/12'>
              <AdminListTableSorting
                sortField='updatedAt'
                buttonText='Panaudotas'
              />
            </th>
            <th className='flex flex-col'>
              Būsena
              <AdminListTableFilterStatus />
            </th>
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
              <td className='text-center'>
                {record.usedBy ? record.usedBy : '---'}
              </td>
              <td className='text-center'>
                {record.usedTo ? record.usedTo : '---'}
              </td>
              <td className='text-center text-xs'>
                {record.usedAt ? record.usedAt : '---'}
              </td>
              <td className='text-center text-xs'>
                {record.docStatus ? record.docStatus : '---'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
