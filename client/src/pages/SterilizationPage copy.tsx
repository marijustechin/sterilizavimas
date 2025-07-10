import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const instruments = [
  'Skalpelis',
  'Pincetas',
  'Vata',
  'Akušerijos teleskopas',
  'Odontologinis rinkinys',
];

const departments = [
  'Chirurgija',
  'Akušerija',
  'Odontologija',
  'Traumatologija',
  'Laboratorija',
  'Oftalmologija',
  'Kardiologija',
  'Neurologija',
  'Dermatologija',
  'Onkologija',
  'Urologija',
  'Ortopedija',
  'Reabilitacija',
];

export const SterilizationPage = () => {
  const [sterilizer, setSterilizer] = useState(() => {
    const obj: Record<string, string[]> = {};
    departments.forEach((d) => (obj[d] = []));
    return obj;
  });

  const handleDrop = (event: any) => {
    const { active, over } = event;
    const instrument = active.id;
    const dept = over?.id;

    if (dept && !sterilizer[dept].includes(instrument)) {
      setSterilizer((prev) => ({
        ...prev,
        [dept]: [...prev[dept], instrument],
      }));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDrop}>
      <div className='flex w-full h-screen p-4 gap-4'>
        <div className='w-1/3 border p-2 rounded shadow'>
          <h2 className='text-xl mb-2'>Instrumentai</h2>
          {instruments.map((name) => (
            <Draggable key={name} id={name} />
          ))}
        </div>

        <div className='w-2/3 grid grid-cols-3 gap-4'>
          {departments.map((dept) => (
            <Droppable key={dept} id={dept} items={sterilizer[dept]} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

function Draggable({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className='p-2 border mb-1 rounded bg-white cursor-move'
    >
      {id}
    </div>
  );
}

function Droppable({ id, items }: { id: string; items: string[] }) {
  return (
    <div className='border rounded p-2 min-h-[100px] bg-gray-100'>
      <h3 className='text-sm font-bold mb-1'>{id}</h3>
      {items.map((item, idx) => (
        <div key={idx} className='p-1 text-sm bg-white rounded mb-1'>
          {item}
        </div>
      ))}
    </div>
  );
}
