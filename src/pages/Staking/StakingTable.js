import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  {
    field: 'coinTokenName',
    headerName: 'Coin/Token Name',
    headerClassName: 'super-app-theme--header',
    width: 380,
  },
  {
    field: 'stakedAndPending',
    headerName: 'Staked and Pending',
    headerClassName: 'super-app-theme--header',
    width: 260,
  },
  {
    field: 'stakedAndVested',
    headerName: 'Staked and Vested',
    headerClassName: 'super-app-theme--header',
    width: 260,
  },
  {
    field: 'balance',
    headerName: 'Balance',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    coinTokenName: 'Rickle',
    stakedAndPending: '00',
    stakedAndVested: '00',
    balance: '00',
  },
  {
    id: 2,
    coinTokenName: 'Binance smart chain',
    stakedAndPending: '00',
    stakedAndVested: '00',
    balance: '00',
  },
  {
    id: 3,
    coinTokenName: 'Binance smart chain',
    stakedAndPending: '00',
    stakedAndVested: '00',
    balance: '00',
  },
  {
    id: 4,
    coinTokenName: 'Binance smart chain',
    stakedAndPending: '00',
    stakedAndVested: '00',
    balance: '00',
  },
];

export default function StakingTable() {
  return (
    <Box
      sx={{
        height: 400,
        width: 1,
        '& .super-app-theme--header': {
          color: '#fff',
        },
      }}
      className="faucet-custom-table"
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
