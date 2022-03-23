import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  {
    month: 'Jan',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Feb',
    in: 3400,
    out: 2200,
  },
  {
    month: 'Mar',
    in: 4400,
    out: 2100,
  },
  {
    month: 'Apr',
    in: 4500,
    out: 1200,
  },
  {
    month: 'May',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Jun',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Jul',
    in: 5600,
    out: 2500,
  },
  {
    month: 'Aug',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Sep',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Oct',
    in: 4500,
    out: 1200,
  },
  {
    month: 'Nov',
    in: 2400,
    out: 2200,
  },
  {
    month: 'Dec',
    in: 2400,
    out: 2200,
  },
];

export default function PlanBarChart() {
  const [chartData] = useState(data);
  const color = useSelector(
    (state) => state.themeColors.chartColors.barChartColor
  );

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Legend />
          <Bar dataKey="in" {...color[0]} />
          <Bar dataKey="out" {...color[1]} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
