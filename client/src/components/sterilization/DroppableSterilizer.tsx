import { useDroppable } from '@dnd-kit/core';
import type { ISelectedInstrument, TDepartment } from '../../types';
import { DroppableDepartment } from './DroppableDepartment';

interface DroppableSterilizerProps {
  selectedDepartments: TDepartment[];
  instruments: ISelectedInstrument[];
}

export const DroppableSterilizer = ({
  selectedDepartments,
  instruments,
}: DroppableSterilizerProps) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'sterilizer-dropzone' });
  const highlightClass = isOver
    ? 'bg-green-100 border-green-500'
    : 'bg-emerald-200 border-gray-200';

  return (
    <div
      ref={setNodeRef}
      className={`p-1 rounded-lg mt-1 min-h-56 border ${highlightClass}`}
    >
      <h3 className='text-lg font-semibold text-center'>Sterilizatorius</h3>
      {isOver && (
        <p className='text-sm text-green-700 text-center'>
          Numeskite skyrių čia!
        </p>
      )}
      {selectedDepartments.length > 0 ? (
        <div className='grid grid-cols-2 gap-2 p-2'>
          {/* Sterilizatoriuje esantys skyriai, kurie taip pat yra droppable instrumentams */}
          {selectedDepartments.map((department) => (
            <DroppableDepartment
              key={`sterilizer-department-${department.id}`}
              department={department}
              // Pasiimame instrumentus pagal skyriaus droppable ID
              ins={
                instruments.filter(
                  (item) =>
                    item.departmentId === `department-dropzone-${department.id}`
                ) || []
              }
            />
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-500 mt-4'>
          Nutempkite skyrius čia...
        </p>
      )}
    </div>
  );
};
