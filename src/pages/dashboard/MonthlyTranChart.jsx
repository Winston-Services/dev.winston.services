import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  {
    month: 'Jan',
    uv: 90,
  },
  {
    month: 'Feb',
    uv: 65,
  },
  {
    month: 'Mar',
    uv: 95,
  },
  {
    month: 'Apr',
    uv: 60,
  },
  {
    month: 'May',
    uv: 30,
  },
  {
    month: 'Jun',
    uv: 50,
  },
  {
    month: 'Jul',
    uv: 30,
  },
  {
    month: 'Aug',
    uv: 35,
  },
  {
    month: 'Sep',
    uv: 75,
  },
  {
    month: 'Oct',
    uv: 45,
  },
  {
    month: 'Nov',
    uv: 65,
  },
  {
    month: 'Dec',
    uv: 72,
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
          dataKey="uv"
          stroke={color}
          fillOpacity={0.5}
          fill="url(#colorTran)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MonthlyTranChart;
