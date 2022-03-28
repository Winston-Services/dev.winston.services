import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Link } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', sortable: false, hide: true },
  {
    field: 'tokenId',
    headerName: 'Token ID',
    sortable: false,
    width: 90,
    renderCell: (param) => {
      return <Link>{param.row.tokenId}</Link>;
    },
  },
  {
    field: 'denomId',
    headerName: 'Denom ID',
    sortable: false,
    width: 120,
    renderCell: (param) => {
      return <Link>{param.row.denomId}</Link>;
    },
  },
  { field: 'nftName', headerName: 'NFT Name', sortable: false, width: 180 },
  { field: 'creator', headerName: 'Creator', sortable: false, width: 120 },
  {
    field: 'mintTime',
    headerName: 'Mint Time',
    sortable: false,
    width: 200,
    renderCell: (param) => {
      return <Link>{param.row.mintTime}</Link>;
    },
  },
];

const rows = [
  {
    id: '1',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '2',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '3',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '4',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '5',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '6',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '7',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '8',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '9',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '10',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '11',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '12',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
  {
    id: '13',
    tokenId: 'edition599',
    denomId: 'cro1vaye3e4gn89f5...',
    nftName: 'The Pawfect Mystery Box',
    creator: 'cro1wdxhq45... ',
    mintTime: '2021-07-15, 13:10:18 UTC',
  },
];
export default function OwnerNftsTable() {
  return (
    <Grid height={'765px'}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[]}
        disableColumnMenu
        sortable={false}
      />
    </Grid>
  );
}
