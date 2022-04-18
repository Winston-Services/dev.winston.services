import * as React from 'react';

import { Box } from '@mui/material';

import TableWrapper from '../../components/common/Table';

const stakingColumns = [
  {
    id: 'coinTokenName',
    headerName: 'Coin/Token Name',
    headerClassName: 'super-app-theme--header',
    width: 380,
  },
  {
    id: 'stakedAndPending',
    headerName: 'Staked and Pending',
    headerClassName: 'super-app-theme--header',
    width: 260,
  },
  {
    id: 'stakedAndVested',
    headerName: 'Staked and Vested',
    headerClassName: 'super-app-theme--header',
    width: 260,
  },
  {
    id: 'balance',
    headerName: 'Balance',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
];

const stakingRows = [
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
        height: 270,
        width: 1,
      }}
    >
      <TableWrapper rows={stakingRows} columns={stakingColumns} />
    </Box>
  );
}
