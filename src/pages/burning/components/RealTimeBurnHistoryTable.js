import React from 'react';

import { Grid } from '@mui/material';

import Table from './../../../components/common/Table';

const columns = [
  { id: 'index', headerName: 'Index' },
  { id: 'date', headerName: 'Date' },
  { id: 'burnedAmount', headerName: 'Burned Amount' },
];

const rows = [
  {
    id: '1',
    index: '19th',
    date: 'Q1 2022',
    burnedAmount: '1,839,786.261 WNS',
  },
  {
    id: '2',
    index: '15th',
    date: 'Q1 2022',
    burnedAmount: '1,839,786.261 WNS',
  },
  {
    id: '3',
    index: '17th',
    date: 'Q4 2021',
    burnedAmount: '1,684,387.114 WNS',
  },
  {
    id: '4',
    index: '16th',
    date: 'Q3 2021',
    burnedAmount: '1,335,888 WNS',
  },
  {
    id: '5',
    index: '15th',
    date: 'Q1 2021',
    burnedAmount: '1,099,888 WNS',
  },
  {
    id: '6',
    index: '15th',
    date: 'Q1 2021',
    burnedAmount: '1,099,888 WNS',
  },
];
export default function RealTimeBurnHistoryTable() {
  return (
    <Grid height={'100%'}>
      <Table columns={columns} rows={rows} />
    </Grid>
  );
}
