import * as React from 'react';

import { Box } from '@mui/material';

import Table from '../../components/common/Table';

const columns = [
  {
    id: 'coin',
    headerName: 'Coin',
    headerClassName: 'super-app-theme--header',
    width: 90,
  },
  {
    id: 'network',
    headerName: 'Network',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },

  {
    id: 'symbol',
    headerName: 'Symbol',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    id: 'amount',
    headerName: 'Amount',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    id: 'network1',
    headerName: 'Network1',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },
  {
    id: 'coin1',
    headerName: 'Coin1',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },

  {
    id: 'symbol1',
    headerName: 'Symbol1',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    id: 'limit',
    headerName: 'Limit',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    id: 'posted',
    headerName: 'Posted',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    id: 'expires',
    headerName: 'Expires',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },
];

const rowsFaucetOnnWinston = [
  {
    id: 1,
    coin: 'Rickle',
    network: 1306.25358,
    symbol: 0.59858,
    amount: 0.0038584,
    coin1: 'Rickle',
    network1: 1306.25358,
    symbol1: 0.59858,
    limit: 'Rickle',
    posted: 1306.25358,
    expires: 0.59858,
  },
  {
    id: 2,
    coin: 'Rickle',
    network: 1306.25358,
    symbol: 0.59858,
    amount: 0.0038584,
    coin1: 'Rickle',
    network1: 1306.25358,
    symbol1: 0.59858,
    limit: 'Rickle',
    posted: 1306.25358,
    expires: 0.59858,
  },
  {
    id: 3,
    coin: 'Rickle',
    network: 1306.25358,
    symbol: 0.59858,
    amount: 0.0038584,
    coin1: 'Rickle',
    network1: 1306.25358,
    symbol1: 0.59858,
    limit: 'Rickle',
    posted: 1306.25358,
    expires: 0.59858,
  },
  {
    id: 4,
    coin: 'Rickle',
    network: 1306.25358,
    symbol: 0.59858,
    amount: 0.0038584,
    coin1: 'Rickle',
    network1: 1306.25358,
    symbol1: 0.59858,
    limit: 'Rickle',
    posted: 1306.25358,
    expires: 0.59858,
  },
  {
    id: 5,
    coin: 'total',
    network: 1306.25358,
    symbol: 0.59858,
    amount: 0.0038584,
    coin1: 'Rickle',
    network1: 1306.25358,
    symbol1: 0.59858,
    limit: 'Rickle',
    posted: 1306.25358,
    expires: 0.59858,
  },
];

export default function SwapTable() {
  return (
    <Box
      sx={{
        height: 400,
        width: 1,
        paddingLeft: { xs: 3, sm: 5 },
        paddingRight: { xs: 3, sm: 5 },
      }}
    >
      <Table columns={columns} rows={rowsFaucetOnnWinston} />
    </Box>
  );
}
