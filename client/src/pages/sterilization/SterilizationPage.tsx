import {
  DndContext,
  type UniqueIdentifier,
  type DragEndEvent,
  pointerWithin,
} from '@dnd-kit/core';

import { SelectSterilizer } from '../../components/sterilization/SelectSterilizer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  getInstruments,
  selectInstruments,
  selectInstrumentStatus,
} from '../../store/features/instrumentSlice';
import {
  getDepartments,
  selectDepartements,
  selectDepartmentStatus,
} from '../../store/features/departmentSlice';
import { useEffect } from 'react';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import toast from 'react-hot-toast';
import { DragableInstrument } from '../../components/sterilization/DragableInstrument';
import type { TInstrument } from '../../types';
import { DragableDepartment } from '../../components/sterilization/DragableDepartment';
import { DroppableSterilizer } from '../../components/sterilization/DroppableSterilizer';
import {
  addDepartmentToSterilizer,
  addInstrumentToDepartment,
  selectedDepartments,
  selectedInstruments,
  selectPrintingPreview,
} from '../../store/features/sterilizationSlice';
import { StickerList } from '../../components/sticker/StickerList';
import { SelectPrinter } from '../../components/sterilization/SelectPrinter';

// //////////////////////////////////////
export interface IInstrumentInDepartment {
  instrument: TInstrument;
  uniqueId: string;
  departmentId: string;
}
/////////////////////////////////////////

export const SterilizationPage = () => {
  const dispatch = useAppDispatch();
  const allInstruments = useAppSelector(selectInstruments);
  const allDepartments = useAppSelector(selectDepartements);

  // Ar duomenų gavimo indikatoriai
  const departmentStatus = useAppSelector(selectDepartmentStatus);
  const instrumentStatus = useAppSelector(selectInstrumentStatus);

  // Ši būsena laikys skyrius, kurie yra "sterilizatoriuje"
  const departmentsSelected = useAppSelector(selectedDepartments);
  const instrumentsSelected = useAppSelector(selectedInstruments);
  const printingPreview = useAppSelector(selectPrintingPreview);

  useEffect(() => {
    if (instrumentStatus === 'idle') {
      dispatch(getInstruments());
    }
    if (departmentStatus === 'idle') {
      dispatch(getDepartments());
    }
  }, [dispatch, instrumentStatus, departmentStatus]);

  const handleDragEndN = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return; // Niekur nenumesėme

    const activeId = active.id;
    const overId = over.id;

    // Išsiaiškinkime, kokio tipo yra tempimo elementas
    const isDepartment = activeId.toString().startsWith('department-');
    // Instrumentai gali būti sugeneruoti su unikaliu ID tempimo metu, bet pradiniame sąraše jie yra "instrument-id"
    const isOriginalInstrument = activeId.toString().startsWith('instrument-');

    // Išsiaiškinkime, kokio tipo yra numetimo zona
    const isSterilizerDropzone = overId === 'sterilizer-dropzone';
    const isDepartmentDropzone = overId
      .toString()
      .startsWith('department-dropzone-');

    if (isDepartment && isSterilizerDropzone) {
      const departmentId = parseInt(
        activeId.toString().replace('department-', '')
      );
      const departmentToMove = allDepartments?.find(
        (d) => d.id === departmentId
      );

      // Patikriname, ar skyrius jau nėra sterilizatoriuje
      if (
        departmentToMove &&
        !departmentsSelected.some((d) => d.id === departmentToMove.id)
      ) {
        dispatch(
          addDepartmentToSterilizer({ departmentToMove: departmentToMove })
        );
      } else if (departmentToMove) {
        toast.error(
          `Skyrius "${departmentToMove.department_name}" jau yra sterilizatoriuje.`
        );
      }
    }

    // --- Logika instrumentų tempimui į skyrius (GALI KARTOTIS) ---
    if (isOriginalInstrument && isDepartmentDropzone) {
      handleInstrumentDragToDepartment(overId, activeId);
    }

    // Draudžiama: Instrumentų tempimas į sterilizatorių (tiesiog nieko nedarome)
    if (isOriginalInstrument && isSterilizerDropzone) {
      toast.error('Instrumentų negalima tempti tiesiai į sterilizatorių!');

      return; // Nieko nedarome
    }

    // Draudžiama: Skyrių tempimas į instrumentų zonas ar kitas netinkamas vietas
    if (isDepartment && !isSterilizerDropzone) {
      toast.error('Skyrių galima tempti tik į sterilizatorių!');
    }
  };

  const handleInstrumentDragToDepartment = (
    overId: UniqueIdentifier,
    activeId: UniqueIdentifier
  ) => {
    const instrumentId = parseInt(
      activeId.toString().replace('instrument-', '')
    );

    const targetDepartmentIdStr = overId
      .toString()
      .replace('department-dropzone-', '');
    const targetDepartmentId = parseInt(targetDepartmentIdStr);

    const instrumentToMove = allInstruments?.find((i) => i.id === instrumentId);

    if (instrumentToMove && targetDepartmentId) {
      dispatch(
        addInstrumentToDepartment({
          instrument: instrumentToMove,
          departmentId: `department-dropzone-${targetDepartmentId}`,
          uniqueId: `${instrumentId}-${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 9)}`,
        })
      );
    }
  };

  return (
    <main className='flex-col gap-2'>
      {printingPreview ? (
        <StickerList />
      ) : (
        <DndContext
          collisionDetection={pointerWithin}
          onDragEnd={handleDragEndN}
        >
          <div className='flex gap-2'>
            {/* Skyriai ////////////////////////////////////////////////////////////////////// */}
            <section className='w-1/4 flex-col gap-2'>
              <h2 className='text-xl text-center font-semibold p-2'>Skyriai</h2>
              <div className='bg-amber-200 p-1 rounded-lg min-h-56'>
                {allDepartments ? (
                  <SortableContext
                    items={
                      allDepartments
                        .map(
                          (department) =>
                            `department-${department.id}` as UniqueIdentifier
                        )
                        .filter(
                          (id) =>
                            !departmentsSelected.some(
                              (d) => `department-${d.id}` === id
                            )
                        ) // Filtruojame perkeltus skyrius
                    }
                    strategy={verticalListSortingStrategy}
                  >
                    {allDepartments
                      .filter(
                        (d) => !departmentsSelected.some((sd) => sd.id === d.id)
                      )
                      .map((department) => (
                        <DragableDepartment
                          key={`department-${department.id}`}
                          department={department}
                        />
                      ))}
                  </SortableContext>
                ) : (
                  <p>Įkeliamas skyrių sąrašas...</p>
                )}
              </div>
            </section>
            {/* Sterilizatorius ////////////////////////////////////////////////////////////// */}
            <section className='w-2/4 flex-col gap-2'>
              <div className='flex gap-3'>
                <SelectSterilizer />
                <SelectPrinter />
              </div>

              <div className='p-1 rounded-lg mt-1 min-h-56'>
                <DroppableSterilizer
                  instruments={instrumentsSelected}
                  selectedDepartments={departmentsSelected}
                />
              </div>
            </section>
            {/* Instrumentai ///////////////////////////////////////////////////////////////////// */}
            <section className='w-1/4 flex-col gap-2'>
              <h2 className='text-xl text-center font-semibold p-2'>
                Instrumentai
              </h2>
              <div className='bg-sky-200 p-1 rounded-lg min-h-56'>
                {allInstruments ? (
                  <SortableContext
                    items={allInstruments.map(
                      (instrument) =>
                        `instrument-${instrument.id}` as UniqueIdentifier
                    )}
                    strategy={verticalListSortingStrategy}
                  >
                    {allInstruments.map((instrument) => (
                      <DragableInstrument
                        key={`instrument-${instrument.id}`}
                        instrument={instrument}
                      />
                    ))}
                  </SortableContext>
                ) : (
                  <p>Įkeliamas instrumentų sąrašas...</p>
                )}
              </div>
            </section>
          </div>
        </DndContext>
      )}
    </main>
  );
};
