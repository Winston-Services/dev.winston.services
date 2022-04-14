import React from 'react';

import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', hide: true },
  { field: 'index', headerName: 'Index', width: 150 },
  { field: 'date', headerName: 'Date', width: 170 },
  { field: 'burnedAmount', headerName: 'Burned Amount', width: 120 },
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
];
export default function RealTimeBurnHistoryTable() {
  return (
    <Grid height={'100%'}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[25, 50, 100]}
        disableColumnMenu
        sortable={false}
      />
    </Grid>
  );
}
