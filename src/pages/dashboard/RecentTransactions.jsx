import React from 'react';

import { Grid } from '@mui/material';

import Table from '../../components/common/Table';

// import bitcoin from './../../assets/bitcoin.svg';
// import send from './../../assets/send.svg';
// const columns = [
//   { field: 'id', headerName: 'ID', sortable: false, hide: true },
//   { field: 'date', headerName: 'Date', sortable: false, width: 120 },
//   {
//     field: 'source',
//     headerName: 'Source',
//     sortable: false,
//     width: 160,
//     renderCell: (param) => {
//       return (
//         <Grid display="flex">
//           <img src={bitcoin} />
//           <Typography ml={1}>{param.row.source}</Typography>
//         </Grid>
//       );
//     },
//   },
//   {
//     field: 'sendReceive',
//     headerName: 'Send/Receive',
//     sortable: false,
//     width: 160,
//     renderCell: (param) => {
//       return (
//         <Grid display="flex">
//           <img src={send} />
//           <Typography ml={1}>{param.row.sendReceive}</Typography>
//         </Grid>
//       );
//     },
//   },
//   {
//     field: 'walletAddress',
//     headerName: 'Wallet address',
//     sortable: false,
//     width: 180,
//   },
//   { field: 'amount', headerName: 'Amount', sortable: false, width: 170 },
//   { field: 'value', headerName: 'Value', sortable: false },
// ];

// const rows = [
//   {
//     id: '1',
//     date: '08 Mar,2022',
//     source: 'Bitcoin',
//     sendReceive: 'Send',
//     walletAddress: '2022231.14546',
//     amount: '2022231.14546',
//     value: '$312',
//   },
//   {
//     id: '2',
//     date: '08 Mar,2022',
//     source: 'Bitcoin',
//     sendReceive: 'Send',
//     walletAddress: '2022231.14546',
//     amount: '2022231.14546',
//     value: '$312',
//   },
//   {
//     id: '3',
//     date: '08 Mar,2022',
//     source: 'Bitcoin',
//     sendReceive: 'Send',
//     walletAddress: '2022231.14546',
//     amount: '2022231.14546',
//     value: '$312',
//   },
//   {
//     id: '4',
//     date: '08 Mar,2022',
//     source: 'Bitcoin',
//     sendReceive: 'Send',
//     walletAddress: '2022231.14546',
//     amount: '2022231.14546',
//     value: '$312',
//   },
//   {
//     id: '5',
//     date: '08 Mar,2022',
//     source: 'Bitcoin',
//     sendReceive: 'Send',
//     walletAddress: '2022231.14546',
//     amount: '2022231.14546',
//     value: '$312',
//   },
// ];

const columns = [
  { id: 'date', headerName: 'Date' },
  {
    id: 'source',
    headerName: 'Source',
  },
  {
    id: 'sendReceive',
    headerName: 'Send/Receive',
  },
  {
    id: 'walletAddress',
    headerName: 'Wallet address',
  },
  { id: 'amount', headerName: 'Amount' },
  { id: 'value', headerName: 'Value' },
];

const rows = [
  {
    id: '1',
    date: '08 Mar,2022',
    source: 'Bitcoin',
    sendReceive: 'Send',
    walletAddress: '2022231.14546',
    amount: '2022231.14546',
    value: '$312',
  },
  {
    id: '2',
    date: '08 Mar,2022',
    source: 'Bitcoin',
    sendReceive: 'Send',
    walletAddress: '2022231.14546',
    amount: '2022231.14546',
    value: '$312',
  },
  {
    id: '3',
    date: '08 Mar,2022',
    source: 'Bitcoin',
    sendReceive: 'Send',
    walletAddress: '2022231.14546',
    amount: '2022231.14546',
    value: '$312',
  },
  {
    id: '4',
    date: '08 Mar,2022',
    source: 'Bitcoin',
    sendReceive: 'Send',
    walletAddress: '2022231.14546',
    amount: '2022231.14546',
    value: '$312',
  },
  {
    id: '5',
    date: '08 Mar,2022',
    source: 'Bitcoin',
    sendReceive: 'Send',
    walletAddress: '2022231.14546',
    amount: '2022231.14546',
    value: '$312',
  },
];
export default function RecentTransactions() {
  return (
    <Grid height={'100%'}>
      <Table columns={columns} rows={rows} />
      {/* <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[25, 50, 100]}
        disableColumnMenu
        sortable={false}
      /> */}
    </Grid>
  );
}
