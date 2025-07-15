import { useAppSelector } from '../../store/store';
import { selectInfoMessage } from '../../store/features/sterilizationSlice';
import { ButtonPrint } from './ButtonPrint';

export const TopMenu = () => {
  const infoText = useAppSelector(selectInfoMessage);

  return (
    <div className='flex items-center justify-start gap-4 mb-2 bg-gray-200 rounded-lg py-1 px-2'>
      <div className='w-2/12 text-center'>
        Data:{' '}
        <span className='text-sm font-semibold'>
          {new Date().toISOString().slice(0, 10)}
        </span>
      </div>

      <div className='w-8/12 text-center'>{infoText}</div>
      <div className='w-2/12 text-center'>
        <ButtonPrint />
      </div>
    </div>
  );
};
