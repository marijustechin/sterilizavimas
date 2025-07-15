import type { UniqueIdentifier } from '@dnd-kit/core';
import type { TInstrument } from '../../types';
import { SortableBox } from './SortableBox';

interface DragableInstrumentProps {
  instrument: TInstrument;
  // Pridėtas optional 'keyId' prop'as, jei norime tempimo metu naudoti kitą ID nei instrument.id
  // Tai praverčia, kai tas pats instrumentas gali būti kelis kartus toje pačioje vietoje
  keyId?: UniqueIdentifier;
}
export const DragableInstrument = ({
  instrument,
  keyId,
}: DragableInstrumentProps) => {
  // Naudojame perduotą keyId arba sugeneruojame unikalų iš instrument.id, jei keyId nėra
  const id = keyId || `instrument-${instrument.id}`;

  return (
    <SortableBox
      id={id}
      className='p-2 border bg-sky-200 rounded shadow my-1 cursor-grab'
    >
      {instrument.instrument_code}. {instrument.instrument_name}
    </SortableBox>
  );
};
