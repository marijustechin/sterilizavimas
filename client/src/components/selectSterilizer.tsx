import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../store/store';
import {
  getSterilizers,
  selectSterilizer,
} from '../store/features/sterilizerSlice';
import {
  fetchNextCycleNumber,
  selectSelectedSterilizerId,
  setSelectedSterilizer,
} from '../store/features/sterilizationSlice';

export const SelectSterilizer = () => {
  const dispatch = useAppDispatch();
  const sterilizers = useAppSelector(selectSterilizer);
  const selectedSterilizer = useAppSelector(selectSelectedSterilizerId);

  useEffect(() => {
    dispatch(getSterilizers());
  }, [dispatch]);

  const handleOnChange = (id: string) => {
    dispatch(setSelectedSterilizer({ id: parseInt(id) }));

    dispatch(fetchNextCycleNumber(parseInt(id)));
  };

  console.log(selectedSterilizer);

  return (
    <select
      className='p-2 border border-rose-800/50 rounded-lg focus:outline-none'
      id='select_sterilizer'
      onChange={(e) => handleOnChange(e.target.value)}
    >
      {sterilizers?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.sterilizer_name}
        </option>
      ))}
    </select>
  );
};
