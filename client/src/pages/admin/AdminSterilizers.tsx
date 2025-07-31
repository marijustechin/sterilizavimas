import { useEffect } from 'react';
import {
  getSterilizers,
  selectSterilizer,
} from '../../store/features/sterilizerSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const AdminSterilizers = () => {
  const dispatch = useAppDispatch();
  const sterilizers = useAppSelector(selectSterilizer);

  useEffect(() => {
    if (!sterilizers) dispatch(getSterilizers());
  }, [dispatch, sterilizers]);

  return (
    <main>
      {sterilizers?.map((item) => (
        <div key={item.sterilizer_name}>
          {item.id}. {item.sterilizer_name}
        </div>
      ))}
    </main>
  );
};
