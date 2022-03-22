import React from 'react';
import { useTheme, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

// Generate Sales Data
function createData(time, amount, currency) {
  return { time, amount, currency };
}

const data = [
  createData('00:00', 0, 0),
  createData('03:00', 843, 0),
  createData('06:00', 0, 843),
  createData('09:00', 0, 0),
  createData('12:00', 0, 343),
  createData('15:00', 843, 0),
  createData('18:00', 0, 748),
  createData('21:00', 843, 0),
  createData('', undefined, undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography variant="h6">
        IN <span style={{ color: '#f44336' }}>OUT</span>
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.primary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Transactions (BCI)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.text.secondary}
            dot={true}
          />
          <Line
            type="monotone"
            dataKey="currency"
            stroke={theme.palette.errorColor.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
