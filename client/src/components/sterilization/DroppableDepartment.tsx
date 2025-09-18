import { useDroppable } from '@dnd-kit/core';
import type { ISelectedInstrument, TDepartment } from '../../types';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useAppDispatch } from '../../store/store';
import {
  removeDepartmentFromSterilizer,
  removeInstrumentFromDepartment,
} from '../../store/features/sterilizationSlice';

interface DroppableDepartmentProps {
  department: TDepartment;
  ins: ISelectedInstrument[];
}

export const DroppableDepartment = ({
  department,

  ins,
}: DroppableDepartmentProps) => {
  const dispatch = useAppDispatch();
  // Svarbu: useDroppable ID turi būti unikalus DndContext kontekste
  const id = `department-dropzone-${department.id}`; // Unikalus ID droppable zonai
  const { setNodeRef, isOver } = useDroppable({ id: id });

  const baseClasses = 'p-3 border rounded shadow flex flex-col gap-1 min-h-32';
  const highlightClass = isOver
    ? 'border-blue-500 bg-blue-100'
    : 'border-gray-200 bg-white';

  const handleRemoveDeparment = (department: TDepartment) => {
    dispatch(removeDepartmentFromSterilizer({ id: department.id }));
  };

  const handleRemoveInstrument = (instrument: ISelectedInstrument) => {
    dispatch(removeInstrumentFromDepartment({ instrument: instrument }));
  };

  return (
    <div
      ref={setNodeRef}
      className={`${baseClasses} ${highlightClass} relative min-h-32`}
    >
      <h3 className='font-semibold'>
        <button
          type='button'
          className='text-rose-500 p-1 cursor-pointer'
          onClick={() => handleRemoveDeparment(department)}
        >
          ❌
        </button>{' '}
        {department.department_code}. {department.department_name}
      </h3>
      {isOver && (
        <p className='text-sm text-blue-700 mt-2'>Numeskite instrumentą čia!</p>
      )}

      {/* Čia atvaizduojami instrumentai, kurie priklauso šiam skyriui */}
      <div className='mt-2 w-full flex flex-col gap-2'>
        {ins.length > 0 ? (
          <SortableContext
            // Naudojame unikalų ID iš uniqueId, kadangi instrumentas gali kartotis
            items={ins.map((item) => item.uniqueId)}
            strategy={verticalListSortingStrategy}
          >
            {ins.map((item) => (
              <div
                className='bg-sky-200 rounded p-2 border border-black'
                key={item.uniqueId}
              >
                <button
                  className='px-1 cursor-pointer'
                  onClick={() => handleRemoveInstrument(item)}
                >
                  ❌
                </button>{' '}
                {item.instrument.instrument_code}.{' '}
                {item.instrument.instrument_name}
              </div>
            ))}
          </SortableContext>
        ) : (
          <p className='text-xs text-gray-500'>Nėra instrumentų</p>
        )}
      </div>
    </div>
  );
};
