import React from 'react';

import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', sortable: false, hide: true },
  { field: 'name', headerName: 'Name', sortable: false, width: 270 },
  { field: 'lastPrice', headerName: 'Last Price', sortable: false, width: 270 },
  {
    field: 'oneDayChange',
    headerName: '24h Change',
    sortable: false,
    width: 270,
  },
  { field: 'marketCap', headerName: 'Market Cap', sortable: false, width: 270 },
];

const rows = [
  {
    id: '1',
    name: 'Rickle',
    lastPrice: '1306.25358',
    oneDayChange: '+2.25%',
    marketCap: '$71,083M',
  },
  {
    id: '2',
    name: 'Winston',
    lastPrice: '1306.25358',
    oneDayChange: '+2.25%',
    marketCap: '$71,083M',
  },
  {
    id: '3',
    name: 'Ahwa',
    lastPrice: '1306.25358',
    oneDayChange: '+2.25%',
    marketCap: '$71,083M',
  },
  {
    id: '4',
    name: 'New Coin',
    lastPrice: '1306.25358',
    oneDayChange: '+2.25%',
    marketCap: '$71,083M',
  },
];
export default function TrendingNfts() {
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
