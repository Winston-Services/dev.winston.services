import React from 'react';

import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    month: 'Jan',
    in: 90,
    out: 5,
  },
  {
    month: 'Feb',
    in: 65,
    out: 7,
  },
  {
    month: 'Mar',
    in: 95,
    out: 32,
  },
  {
    month: 'Apr',
    in: 60,
    out: 10,
  },
  {
    month: 'May',
    in: 30,
    out: 3,
  },
  {
    month: 'Jun',
    in: 50,
    out: 40,
  },
  {
    month: 'Jul',
    in: 30,
    out: 14,
  },
  {
    month: 'Aug',
    in: 35,
    out: 4,
  },
  {
    month: 'Sep',
    in: 75,
    out: 0,
  },
  {
    month: 'Oct',
    in: 45,
    out: 3,
  },
  {
    month: 'Nov',
    in: 65,
    out: 10,
  },
  {
    month: 'Dec',
    in: 72,
    out: 3,
  },
];

function MonthlyTranChart() {
  const color = useSelector(
    (state) => state.themeColors.chartColors.bigAreaChartColor
  );
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorTran" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="70%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip cursor={{ stroke: `${color}`, strokeDasharray: '3' }} />
        <XAxis dataKey={'month'} stroke={color} />
        <YAxis tick={false} width={10} stroke={color} />
        <Area
          dataKey="in"
          stroke={color}
          fillOpacity={0.5}
          fill="url(#colorTran)"
        />
        <Area
          dataKey="out"
          stroke={color}
          fillOpacity={0.5}
          fill="url(#colorTran)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MonthlyTranChart;
