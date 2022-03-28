import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { PropTypes } from 'prop-types';

const columns = [
  {
    field: 'coin',
    headerName: 'Coin',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
  {
    field: 'faucetTotal',
    headerName: 'Faucet Total',
    headerClassName: 'super-app-theme--header',
    width: 170,
  },
  {
    field: 'totalGiveToday',
    headerName: 'Total Give Today',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    field: 'memberDP',
    headerName: 'Member Drip Amount',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    field: 'publicDP',
    headerName: 'Public Drip Amount',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    field: 'totalDropped',
    headerName: 'Total Dropped',
    headerClassName: 'super-app-theme--header',
    width: 160,
  },
];

export default function FaucetTable({ rows }) {
  const total = {
    id: 5,
    coin: 'Total',
    faucetTotal: 0,
    totalGiveToday: 0,
    memberDP: 0,
    publicDP: 0,
    totalDropped: 0,
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
        '& .super-app-theme--header': {
          color: '#fff',
        },
      }}
    >
      <DataGrid
        sx={{ borderColor: 'transparent' }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
    </Box>
  );
}

FaucetTable.propTypes = {
  rows: PropTypes.array,
};
