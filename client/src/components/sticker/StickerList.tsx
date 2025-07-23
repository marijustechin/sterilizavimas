import {
  selectCurrentCycleNumber,
  selectedDepartments,
  selectedInstruments,
  selectSelectedSterilizerId,
} from '../../store/features/sterilizationSlice';
import { useAppSelector } from '../../store/store';
import { Sticker } from './Sticker';

export const StickerList = () => {
  const cycleNumber = useAppSelector(selectCurrentCycleNumber);
  const departments = useAppSelector(selectedDepartments);
  const instruments = useAppSelector(selectedInstruments);
  const sterilizerId = useAppSelector(selectSelectedSterilizerId);

  const dropzoneRegex = /^department-dropzone-(\d+)$/;

  return (
    <div className='flex gap-3'>
      {departments?.map((department) =>
        instruments
          .filter((item) => {
            const match = dropzoneRegex.exec(item.departmentId);
            return match ? Number(match[1]) === department.id : false;
          })
          .map((instrument) => (
            <Sticker
              key={instrument.uniqueId}
              sterilizerId={sterilizerId}
              department={department}
              instrument={instrument}
              cycleNumber={cycleNumber}
            />
          ))
      )}
    </div>
  );
};
