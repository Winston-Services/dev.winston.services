import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  Legend,
} from 'recharts';
import { useSelector } from 'react-redux';

const data = [
  {
    name: 'Page A',
    In: 0,
    Out: 0,
  },
  {
    name: 'Page B',
    In: 2800,
    Out: 1398,
  },
  {
    name: 'Page C',
    In: 2000,
    Out: 7800,
  },
  {
    name: 'Page D',
    In: 6080,
    Out: 3908,
  },
  {
    name: 'Page E',
    In: 4090,
    Out: 4800,
  },
  {
    name: 'Page F',
    In: 3000,
    Out: 3800,
  },
  {
    name: 'Page G',
    In: 4900,
    Out: 2500,
  },
  {
    name: 'Page H',
    In: 1890,
    Out: 2000,
  },
  {
    name: 'Page I',
    In: 2390,
    Out: 3800,
  },
  {
    name: 'Page J',
    In: 0,
    Out: 0,
  },
];

function InOutAreaChart() {
  const color = useSelector(
    (state) => state.themeColors.chartColors.inOutAreaChartColor
  );
  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <Tooltip
          cursor={{ stroke: `${color['stroke']}`, strokeDasharray: '3' }}
        />
        <YAxis stroke={color['stroke']} mirror />
        <Legend iconType="circle" verticalAlign="top" align="right" />
        <Area
          type="monotone"
          dataKey="In"
          stroke={color.area[0]}
          strokeOpacity={0}
          fill={color.area[0]}
        />
        <Area
          type="monotone"
          dataKey="Out"
          stroke={color.area[1]}
          strokeOpacity={0}
          fill={color.area[1]}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default InOutAreaChart;
