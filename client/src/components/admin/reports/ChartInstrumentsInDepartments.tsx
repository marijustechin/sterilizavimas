import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import type { TReportInstrumentsInDepartments } from '../../../types';
import { CHART_COLORS } from '../../../config/chartColors';

interface ChartInstrumentsInDepartmentsProps {
  data: TReportInstrumentsInDepartments[];
}

export const ChartInstrumentsInDepartments = ({
  data,
}: ChartInstrumentsInDepartmentsProps) => {
  const total = data.reduce((sum, entry) => sum + entry.instrument_count, 0);

  return (
    <div className='flex flex-col border-b border-b-rose-900/50'>
      <h3 className='text-center font-semibold text-2xl'>
        Instrumentai pagal skyrius
      </h3>

      <PieChart
        width={800}
        height={500}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Pie
          data={data}
          dataKey='instrument_count'
          nameKey='department_name'
          cx='50%'
          cy='50%'
          outerRadius={100}
          fill='#8884d8'
          labelLine={false}
          label={({ value }) => {
            const percent = (value / total) * 100;
            return percent >= 3 ? `${percent.toFixed(1)}%` : '';
          }}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.department_name}`}
              fill={CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          values='dataKey'
          layout='vertical'
          verticalAlign='top'
          align='right'
          itemSorter='dataKey'
          wrapperStyle={{
            paddingLeft: '10px',
            maxWidth: 400,
          }}
        />
      </PieChart>
    </div>
  );
};
