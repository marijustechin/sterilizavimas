import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  getSterilizers,
  selectSterilizer,
  selectSterilizerStatus,
} from '../../store/features/sterilizerSlice';
import {
  fetchNextCycleNumber,
  setSelectedSterilizer,
} from '../../store/features/sterilizationSlice';

export const SelectSterilizer = () => {
  const dispatch = useAppDispatch();
  const sterilizers = useAppSelector(selectSterilizer);
  const sterilizerStatus = useAppSelector(selectSterilizerStatus);

  useEffect(() => {
    if (sterilizerStatus === 'idle') dispatch(getSterilizers());
  }, [dispatch, sterilizerStatus]);

  const handleOnChange = (id: string) => {
    dispatch(setSelectedSterilizer({ id: parseInt(id) }));

    dispatch(fetchNextCycleNumber(parseInt(id)));
  };

  return (
    <div className='flex items-center gap-3'>
      <select
        className='p-2 border border-rose-800/50 rounded-lg focus:outline-none'
        id='select_sterilizer'
        onChange={(e) => handleOnChange(e.target.value)}
        defaultValue={''}
      >
        <option value='' disabled>
          Pasirinkite sterilizatorių
        </option>
        {sterilizers?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.sterilizer_name}
          </option>
        ))}
      </select>
    </div>
  );
};
