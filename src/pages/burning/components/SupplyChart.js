import React, { useCallback, useState } from 'react';

import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import { Card, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Circulating Supply', value: 35240 },
  { name: 'Total Burned to Date', value: 12500 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 15;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={-5}
        textAnchor="middle"
        fill={'white'}
        fontSize={12}
      >
        {'Total Amount'}
      </text>
      <text x={cx} y={cy} dy={16} textAnchor="middle" fill={'white'}>
        {'100,000,000 WNS'}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        strokeWidth="2"
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2.5} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="white"
        fontSize={20}
      >
        {value}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="white"
        fontSize={12}
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={34}
        textAnchor={textAnchor}
        fill="white"
        fontSize={12}
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function SupplyChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Card elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" display={'flex'} alignItems="center">
        <PieChartRoundedIcon sx={{ mr: 1 }} />
        WNS Circulating Supply Chart
      </Typography>
      <ResponsiveContainer width={'100%'} height={400}>
        <PieChart width={550} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={120}
            fill="#4F409A"
            dataKey="value"
            stroke=""
            onMouseEnter={onPieEnter}
          >
            <Cell key="cell-0" fill="#4F409A" />
            <Cell key="cell-1" fill="#271D5A" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default SupplyChart;
