import { Cell, Pie, PieChart } from 'recharts';

interface ChartGoodBadProps {
  total: number;
  bad: number;
}

export const ChartGoodBad = ({ total, bad }: ChartGoodBadProps) => {
  const data = [
    { name: 'Sėkmingas', value: total - bad, color: '#4caf50' },
    { name: 'Nesėkmingas', value: bad, color: '#f44336' },
  ];

  return (
    <div className='flex flex-col border-b border-b-rose-900/50'>
      <h3 className='text-center font-semibold text-2xl'>
        Sėkmingas/nesėkmingas sterilizavimas
      </h3>
      <PieChart
        width={800}
        height={350}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={100}
          label={({ name, value }) =>
            `${name}: ${((value / total) * 100).toFixed(1)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
