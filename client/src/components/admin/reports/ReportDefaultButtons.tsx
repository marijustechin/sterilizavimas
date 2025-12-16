import { subMonths, subYears } from 'date-fns';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  getAdminReport,
  selectReportDefaultButton,
  setReportButtonActive,
  setReportEndDate,
  setReportStartDate,
} from '../../../store/features/adminReportSlice';

export const ReportDefaultButtons = () => {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(selectReportDefaultButton);

  const buttonClass =
    'p-2 border border-rose-900/40 rounded-lg cursor-pointer hover:shadow-md';
  const activeButtonClass =
    'p-2 border border-rose-900/40 rounded-lg cursor-arrow bg-rose-300';

  const handleGetDataByPeriod = (
    start: string,
    end: string,
    button: number
  ) => {
    dispatch(setReportButtonActive(button));
    dispatch(setReportStartDate(start));
    dispatch(setReportEndDate(end));
    dispatch(getAdminReport());
  };

  const handleMonthButtonClick = () => {
    const start = subMonths(new Date(), 1);
    const end = new Date();
    handleGetDataByPeriod(start.toISOString(), end.toISOString(), 1);
  };

  const handleHalfYearButtonClick = () => {
    const start = subMonths(new Date(), 6);
    const end = new Date();
    handleGetDataByPeriod(start.toISOString(), end.toISOString(), 6);
  };

  const handleYearButtonClick = () => {
    const start = subYears(new Date(), 1);
    const end = new Date();
    handleGetDataByPeriod(start.toISOString(), end.toISOString(), 12);
  };

  return (
    <div className='flex gap-2'>
      <button
        disabled={buttons.month}
        className={buttons.month ? activeButtonClass : buttonClass}
        onClick={handleMonthButtonClick}
      >
        Mėnuo
      </button>
      <button
        disabled={buttons.halfYear}
        className={buttons.halfYear ? activeButtonClass : buttonClass}
        onClick={handleHalfYearButtonClick}
      >
        Pusmetis
      </button>
      <button
        disabled={buttons.year}
        className={buttons.year ? activeButtonClass : buttonClass}
        onClick={handleYearButtonClick}
      >
        Metai
      </button>
    </div>
  );
};
