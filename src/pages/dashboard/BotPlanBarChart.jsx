import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Feb',
    Free: 3400,
    Paid: 2200,
  },
  {
    month: 'Mar',
    Free: 4400,
    Paid: 2100,
  },
  {
    month: 'Apr',
    Free: 4500,
    Paid: 1200,
  },
  {
    month: 'May',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Jun',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Jul',
    Free: 5600,
    Paid: 2500,
  },
  {
    month: 'Aug',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Sep',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Oct',
    Free: 4500,
    Paid: 1200,
  },
  {
    month: 'Nov',
    Free: 2400,
    Paid: 2200,
  },
  {
    month: 'Dec',
    Free: 2400,
    Paid: 2200,
  },
];

export default function BotPlanBarChart() {
  const [chartData] = useState(data);
  const color = useSelector(
    (state) => state.themeColors.chartColors.botBarChartColor
  );
  const mainColor = useSelector(
    (state) => state.themeColors.chartColors.primary.main
  );

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <BarChart data={chartData} barGap={0} barSize={12}>
          <XAxis dataKey="month" stroke={mainColor} />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Legend iconType="circle" verticalAlign="top" align="right" />
          <Bar dataKey="Free" {...color[0]} />
          <Bar dataKey="Paid" {...color[1]} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
