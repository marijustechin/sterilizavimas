import DatePicker from 'react-datepicker';
import { lt } from 'date-fns/locale/lt';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  selectReportPeriod,
  setReportEndDate,
  setReportStartDate,
} from '../../../store/features/adminReportSlice';
import toast from 'react-hot-toast';

export const ReportPeriodPicker = () => {
  const dispatch = useAppDispatch();
  const period = useAppSelector(selectReportPeriod);

  const handlePeriodEndChange = (date: Date | null) => {
    // palyginame, jei pradzios data didesne uz pabaigos data
    //  rodom pranesima
    if (period.startDate && date) {
      if (new Date(period.startDate) > date) {
        toast.error(
          'Laikotarpio pabaigos data turi būti mažesnė už pradžios datą'
        );
      }
    } else {
      dispatch(setReportEndDate(date ? date.toISOString() : null));
    }
  };

  return (
    <div className='flex gap-3 items-center justify-center'>
      <h4 className='font-semibold'>Laikotarpis:</h4>
      <DatePicker
        className='p-2 border border-rose-900/50 rounded-lg w-32'
        id='period_start'
        locale={lt}
        selected={period.startDate ? new Date(period.startDate) : new Date()}
        onChange={(date) =>
          dispatch(
            setReportStartDate(
              date ? date.toISOString() : new Date().toISOString()
            )
          )
        }
        dateFormat='yyyy-MM-dd'
        placeholderText='Pasirinkite pradžios datą'
      />
      <h4 className='font-semibold'>&mdash;</h4>
      <DatePicker
        className='p-2 border border-rose-900/50 rounded-lg w-32'
        id='period_end'
        locale={lt}
        selected={period.endDate ? new Date(period.endDate) : new Date()}
        onChange={(date) => handlePeriodEndChange(date)}
        dateFormat='yyyy-MM-dd'
        placeholderText='Pasirinkite pradžios datą'
      />
    </div>
  );
};
