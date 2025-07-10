import {
  closestCorners,
  DndContext,
  useDroppable,
  type DragEndEvent,
  type UniqueIdentifier,
} from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../store/store';

import { useEffect } from 'react';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  getInstruments,
  selectInstruments,
} from '../store/features/instrumentSlice';
import {
  getDepartments,
  selectDepartements,
} from '../store/features/departmentSlice';
import { SelectSterilizer } from '../components/selectSterilizer';
import {
  addInstrumentToDepartment,
  selectCurrentCycleNumber,
} from '../store/features/sterilizationSlice';

// types/instrumentai.ts
export type TInstrument = {
  id: number; // Duomenų bazės ID yra skaičius
  instrument_code: string; // Jei kodas gali būti raidės ar skaičiai, geriau string
  instrument_name: string;
};

// types/skyriai.ts
export type TDepartment = {
  id: number; // Duomenų bazės ID yra skaičius
  department_code: string; // Jei kodas gali būti raidės ar skaičiai, geriau string
  department_name: string;
};

export const SterilizationPage = () => {
  const dispatch = useAppDispatch();
  // Užtikriname, kad instrumentai ir skyriai būtų masyvai arba null
  const instruments = useAppSelector(selectInstruments) as TInstrument[] | null;
  const departments = useAppSelector(selectDepartements) as
    | TDepartment[]
    | null;

  const cycleNumber = useAppSelector(selectCurrentCycleNumber);

  useEffect(() => {
    // Siunčiame veiksmą tik jei duomenų dar nėra
    if (!instruments) {
      dispatch(getInstruments());
    }
    if (!departments) {
      dispatch(getDepartments());
    }
  }, [dispatch, instruments, departments]); // Priklausomybių masyvas atnaujintas

  // Sukurti unikalų konteinerio ID dnd-kitui (jei reikės vėliau)
  const droppableContainerIds =
    departments?.map(
      (department) => `department-${department.id}` as UniqueIdentifier
    ) || [];

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) return;

    const draggedId = active.id.toString(); // "instrument-1"
    const targetId = over.id.toString(); // "department-2"

    if (
      draggedId.startsWith('instrument-') &&
      targetId.startsWith('department-')
    ) {
      const instrumentId = parseInt(draggedId.replace('instrument-', ''), 10);
      const departmentId = parseInt(targetId.replace('department-', ''), 10);
      console.log(instrumentId);
      dispatch(addInstrumentToDepartment({ instrumentId, departmentId }));
    }
  };

  return (
    <main className='max-w-7xl mx-auto'>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className='flex gap-3'>
          <section className='w-1/3 border p-2 rounded shadow'>
            {instruments ? (
              <SortableContext
                // Naudojame prefiksuotus ID SortableContext'e
                items={instruments.map(
                  (instrument) =>
                    `instrument-${instrument.id}` as UniqueIdentifier
                )}
                strategy={verticalListSortingStrategy}
              >
                {instruments.map((instrument) => (
                  // Perduodame visą instrumento objektą
                  <DragableInstrument
                    key={`instrument-${instrument.id}`}
                    instrument={instrument}
                  />
                ))}
              </SortableContext>
            ) : (
              <p>Įrankiai įkeliami...</p>
            )}
          </section>
          <section className='w-2/3 flex flex-col gap-2'>
            <div className='flex gap-3 items-center'>
              <SelectSterilizer />
              <div>
                Partijos Nr. <strong>{cycleNumber}</strong>
              </div>
            </div>

            <div className=' grid grid-cols-3 gap-4'>
              {departments ? (
                departments.map((department) => (
                  // Perduodame visą skyriaus objektą
                  <DroppableDepartment
                    key={`department-${department.id}`}
                    department={department}
                  />
                ))
              ) : (
                <p>Skyriai kraunami...</p>
              )}
            </div>
          </section>
        </div>
      </DndContext>
    </main>
  );
};

// cia bus atskiras komponentas
interface DragableInstrumentProps {
  instrument: TInstrument;
}

const DragableInstrument = ({ instrument }: DragableInstrumentProps) => {
  const id = `instrument-${instrument.id}`;
  // Svarbu: useSortable ID turi atitikti SortableContext items ID
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id }); // Pataisyta iš item.id į instrumentas.id

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      // key taip pat turi atitikti ID, naudojamus SortableContext ir useSortable
      className='p-2 border rounded shadow my-1 cursor-grab' // Pridėtas `my-1` ir `cursor-grab` stiliaus patogumui
    >
      {instrument.instrument_code}. {instrument.instrument_name}
    </div>
  );
};

// Cia bus atskiras komponentas
interface DroppableDepartmentProps {
  department: TDepartment;
}

const DroppableDepartment = ({ department }: DroppableDepartmentProps) => {
  // Svarbu: useDroppable ID turi būti unikalus DndContext kontekste
  const { setNodeRef, isOver } = useDroppable({
    id: `department-${department.id}` as UniqueIdentifier,
  });

  const baseClasses =
    'p-4 border rounded shadow h-32 flex flex-col justify-center items-center text-center cursor-pointer';
  const highlightClass = isOver
    ? 'border-blue-500 bg-blue-100'
    : 'border-gray-200 bg-white';

  return (
    <div
      ref={setNodeRef}
      className={`${baseClasses} ${highlightClass}`}
      // key jau nurodytas tėviniame komponente map'inimo metu, bet jei atvaizduotumėte čia vieną, reikėtų jį turėti.
      // kadangi perduodam objektą, o ne tiesiog komponentą, key jau yra `SterilizationPage` map'e.
    >
      <h3 className='font-bold text-lg'>
        {department.department_code}. {department.department_name}
      </h3>
      {isOver && (
        <p className='text-sm text-blue-700 mt-2'>Numeskite instrumentą čia!</p>
      )}
    </div>
  );
};
