import React, { useState } from 'react';
import { Typography } from '@mui/material';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { plan: 'Free', total: 300 },
  { plan: 'Paid', total: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
export default function PlanSubPieChart() {
  const [planSubs] = useState(data);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <React.Fragment>
      <Typography variant="h6">Server Plan Subscriptions</Typography>

      <ResponsiveContainer>
        <PieChart width={500} height={500}>
          <Pie
            data={planSubs}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="total"
            nameKey="plan"
            legendType="circle"
          >
            {planSubs.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="top" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
