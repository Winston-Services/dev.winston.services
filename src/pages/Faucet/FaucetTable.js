import * as React from 'react';

import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { PropTypes } from 'prop-types';

const columns = [
  {
    id: 1,
    field: 'coin',
    headerName: 'Coin',
    headerClassName: 'super-app-theme--header',
    width: 150,
  },
  {
    id: 2,
    field: 'faucetTotal',
    headerName: 'Faucet Total',
    headerClassName: 'super-app-theme--header',
    width: 170,
  },
  {
    id: 3,
    field: 'totalGiveToday',
    headerName: 'Total Give Today',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    id: 4,
    field: 'memberDP',
    headerName: 'Member Drip Amount',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    id: 5,
    field: 'publicDP',
    headerName: 'Public Drip Amount',
    headerClassName: 'super-app-theme--header',
    width: 190,
  },
  {
    id: 6,
    field: 'totalDropped',
    headerName: 'Total Dropped',
    headerClassName: 'super-app-theme--header',
    width: 160,
  },
];

export default function FaucetTable({ rows }) {
  // const total = {
  //   id: 5,
  //   coin: 'Total',
  //   faucetTotal: 0,
  //   totalGiveToday: 0,
  //   memberDP: 0,
  //   publicDP: 0,
  //   totalDropped: 0,
  // };

  // rows.forEach((row) => {
  //   total.faucetTotal += row.faucetTotal;
  //   total.totalGiveToday += row.totalGiveToday;
  //   total.memberDP += row.memberDP;
  //   total.publicDP += row.publicDP;
  //   total.totalDropped += row.totalDropped;
  // });

  // rows.push(total);
  // console.log(rows, 'rows');
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
