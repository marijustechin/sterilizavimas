import type { TDepartment } from '../../types';
import { SortableBox } from './SortableBox';

interface DragableDepartmentProps {
  department: TDepartment;
}

export const DragableDepartment = ({ department }: DragableDepartmentProps) => {
  const id = `department-${department.id}`;

  return (
    <SortableBox id={id} className='p-2 border rounded shadow my-1 cursor-grab'>
      {department.department_code}. {department.department_name}
    </SortableBox>
  );
};
