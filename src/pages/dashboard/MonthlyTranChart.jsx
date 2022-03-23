import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  {
    uv: 90,
  },
  {
    uv: 80,
  },
  {
    uv: 60,
  },
  {
    uv: 65,
  },
  {
    uv: 45,
  },
  {
    uv: 70,
  },
  {
    uv: 55,
  },
  {
    uv: 65,
  },
  {
    uv: 45,
  },
  {
    uv: 50,
  },
  {
    uv: 30,
  },
  {
    uv: 40,
  },
  {
    uv: 55,
  },
  {
    uv: 30,
  },
  {
    uv: 40,
  },
  {
    uv: 35,
  },
  {
    uv: 60,
  },
  {
    uv: 75,
  },
  {
    uv: 50,
  },
  {
    uv: 45,
  },
  {
    uv: 50,
  },
  {
    uv: 65,
  },
  {
    uv: 70,
  },
  {
    uv: 72,
  },
  {
    uv: 75,
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
        <Tooltip cursor={{ stroke: '#2196F3', strokeDasharray: '3' }} />
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
