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

export default function TrendingNfts() {
  const rows = [
    {
      id: '1',
      name: 'Rickle',
      symbol: 'rkl',
      lastPrice: '$0.0015',
      oneDayChange: '+2.25%',
      marketCap: '$2.4M',
    },
    {
      id: '2',
      name: 'Winston',
      symbol: 'win',
      lastPrice: '$0.0025',
      oneDayChange: '+2.25%',
      marketCap: '$200k',
    },
    {
      id: '3',
      name: 'Ahwa',
      symbol: 'AHWA',
      lastPrice: '$6.25358',
      oneDayChange: '+2.25%',
      marketCap: 'n/a',
    },
    {
      id: '4',
      name: 'Winston Academy Coin',
      symbol: 'WAC',
      lastPrice: '$0.00016',
      oneDayChange: '+2.25%',
      marketCap: '$16B',
    },
  ];

  return (
    <Grid height={'100%'}>
      <Table columns={columns} rows={rows} />
    </Grid>
  );
}
