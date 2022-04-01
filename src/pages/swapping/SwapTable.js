import * as React from 'react';

import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { PropTypes } from 'prop-types';

const columns = [
  {
    field: 'coin',
    headerName: 'Coin',
    headerClassName: 'super-app-theme--header',
    width: 90,
  },
  {
    field: 'network',
    headerName: 'Network',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },

  {
    field: 'symbol',
    headerName: 'Symbol',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    field: 'network1',
    headerName: 'Network1',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },
  {
    field: 'coin1',
    headerName: 'Coin1',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },

  {
    field: 'symbol1',
    headerName: 'Symbol1',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    field: 'limit',
    headerName: 'Limit',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    field: 'posted',
    headerName: 'Posted',
    headerClassName: 'super-app-theme--header',
    width: 105,
  },
  {
    field: 'expires',
    headerName: 'Expires',
    headerClassName: 'super-app-theme--header',
    width: 115,
  },
];
export default function SwapTable({ rows }) {
  const total = {
    id: 5,
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
  };

  rows.map((row) => {
    total.faucetTotal += row.faucetTotal;
    total.totalGiveToday += row.totalGiveToday;
    total.memberDP += row.memberDP;
    total.publicDP += row.publicDP;
    total.totalDropped += row.totalDropped;
  });

  rows.push(total);
  return (
    <Box
      sx={{
        height: 400,
        width: 1,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
    </Box>
  );
}
SwapTable.propTypes = {
  rows: PropTypes.array,
};
