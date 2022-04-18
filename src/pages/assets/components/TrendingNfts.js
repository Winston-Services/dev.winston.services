import React from 'react';

import { Grid } from '@mui/material';

import Table from './../../../components/common/Table';

const columns = [
  { id: 'id', headerName: 'ID' },
  { id: 'name', headerName: 'Name' },
  { id: 'lastPrice', headerName: 'Last Price' },
  {
    id: 'oneDayChange',
    headerName: '24h Change',
  },
  { id: 'marketCap', headerName: 'Market Cap' },
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
      <Table columns={columns} rows={rows} />
    </Grid>
  );
}
