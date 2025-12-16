import { useEffect } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import {
  getAdminReport,
  selectReportStats,
  setReportButtonActive,
  setReportEndDate,
  setReportStartDate,
} from '../../store/features/adminReportSlice';
import { subYears } from 'date-fns';
import { ReportDefaultButtons } from '../../components/admin/reports/ReportDefaultButtons';
import { ChartGoodBad } from '../../components/admin/reports/ChartGoodBad';
import { ChartInstrumentsInDepartments } from '../../components/admin/reports/ChartInstrumentsInDepartments';
import { ChartInstrumentsByMedic } from '../../components/admin/reports/ChartInstrumentsByMedic';
import { ReportPeriodPicker } from '../../components/admin/reports/ReportPeriodPicker';
import { ChartInstrumentStats } from '../../components/admin/reports/ChartInstrumentStats';

export default function AdminReportsPage() {
  const dispatch = useAppDispatch();

  const stats = useAppSelector(selectReportStats);

  // pradinis numatytosios ataskaitos inicijavimas
  useEffect(() => {
    const today = new Date();
    const lastYear = subYears(today, 1);

    dispatch(setReportButtonActive(12));
    dispatch(setReportStartDate(lastYear.toISOString()));
    dispatch(setReportEndDate(today.toISOString()));

    dispatch(getAdminReport());
  }, []);

  return (
    <main className='flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Statistika</h1>
        <ReportPeriodPicker />
        <ReportDefaultButtons />
      </div>
      {/* Diagramos */}
      <div className='flex flex-col items-center justify-center gap-5'>
        <ChartInstrumentsInDepartments data={stats.instrumentsInDepartments} />
        <ChartInstrumentStats data={stats.instrumentStats} />
        <ChartGoodBad total={stats.total} bad={stats.totalBad} />
        <ChartInstrumentsByMedic data={stats.instrumentsByMedic} />
      </div>
    </main>
  );
}
