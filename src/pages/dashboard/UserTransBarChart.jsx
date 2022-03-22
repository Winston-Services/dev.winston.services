import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Typography } from '@mui/material';

const data = [
  {
    month: 'JAN',
    in: 2400,
    out: 2200,
  },
  {
    month: 'FEB',
    in: 3400,
    out: 2200,
  },
  {
    month: 'MAR',
    in: 4400,
    out: 2100,
  },
  {
    month: 'APR',
    in: 4500,
    out: 1200,
  },
  {
    month: 'MAY',
    in: 2400,
    out: 2200,
  },
  {
    month: 'JUN',
    in: 2400,
    out: 2200,
  },
  {
    month: 'JUL',
    in: 5600,
    out: 2500,
  },
  {
    month: 'AUG',
    in: 2400,
    out: 2200,
  },
  {
    month: 'SEP',
    in: 2400,
    out: 2200,
  },
];

export default function UserTransBarChart() {
  const [userTransactions] = useState(data);

  return (
    <React.Fragment>
      <Typography>User Monthly Transactions</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={500}
          data={userTransactions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="in" fill="#0088FE" label={false} />
          <Bar dataKey="out" fill="#f44336" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
