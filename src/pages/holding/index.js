import React from 'react';

import { Container, Typography, Grid, Card, Link } from '@mui/material';

import Table from '../../components/common/Table';
import DiscordLink from './../../components/DiscordLink';

const columns = [
  {
    id: 'coinName',
    headerName: 'Coin/Token name',
  },
  {
    id: 'TokenBalance',
    headerName: 'Token balance',
  },
  {
    id: 'price',
    headerName: 'Price',
  },
  {
    id: 'holdingValue',
    headerName: 'Holding value USD',
  },
  {
    id: 'decimals',
    headerName: 'Decimals',
  },
  {
    id: 'contractAddress',
    headerName: 'Contract address',
  },
  {
    id: 'more',
    headerName: 'More',
  },
];

const rows = [
  {
    id: 1,
    coinName: '1337 (1337) (PoS)',
    TokenBalance: 0.09,
    price: '--',
    holdingValue: 0,
    decimals: '00',
    contractAddress: (
      <Link>
        <Typography>0x49fc111e5ddd5580f48d6fdc4314540cb3a5cc4b</Typography>
      </Link>
    ),
    more: (
      <Grid item height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 2,
    coinName: '1Million Token (1MT)',
    TokenBalance: 74.98,
    price: 0.4,
    holdingValue: 29.992,
    decimals: 7,
    contractAddress: (
      <Link>
        <Typography>0xf0bc1ae4ef7ffb126a8347d06ac6f8add770e1ce</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 3,
    coinName: 'WhaleStreet SHRIMP Token (5HRIMP)',
    TokenBalance: 0,
    price: '--',
    holdingValue: 0,
    decimals: '--',
    contractAddress: (
      <Link>
        <Typography>0xc96c1609a1a45ccc667b2b7fa6508e29617f7b69</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 4,
    coinName: 'Aave (AAVE)',
    TokenBalance: 0.000036,
    price: '--',
    holdingValue: 0,
    decimals: 18,
    contractAddress: (
      <Link>
        <Typography>0xd6df932a45c0f255f85145f286ea0b292b21c90b</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 5,
    coinName: 'ABSTRACT (ABST)',
    TokenBalance: 0,
    price: '--',
    holdingValue: 0,
    decimals: '--',
    contractAddress: (
      <Link>
        <Typography>0xa0b207103f764a920b4af9e691f5bd956de14ded</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 6,
    coinName: 'Cardano (ADA)',
    TokenBalance: 74.98,
    price: 0.4,
    holdingValue: 29.992,
    decimals: 7,
    contractAddress: (
      <Link>
        <Typography>0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 7,
    coinName: 'Adamant (ADDY)',
    TokenBalance: 0,
    price: 0,
    holdingValue: 0,
    decimals: 0,
    contractAddress: (
      <Link>
        <Typography>0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 8,
    coinName: 'AndjelaNadja (AIN)',
    TokenBalance: 0,
    price: 0,
    holdingValue: 0,
    decimals: 0,
    contractAddress: (
      <Link>
        <Typography>0x8BDfaE0F83a03F5fa98B0bDf339F56df3C9F8BD5</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
  {
    id: 9,
    coinName: 'Alchemix (ALCX)',
    TokenBalance: 0,
    price: 0,
    holdingValue: 0,
    decimals: 0,
    contractAddress: (
      <Link>
        <Typography>0xdbdb4d16eda451d0503b854cf79d55697f90c8df</Typography>
      </Link>
    ),
    more: (
      <Grid height="40px" width="40px">
        <DiscordLink />
      </Grid>
    ),
  },
];

function Holding() {
  return (
    <Container>
      <Typography textAlign={'center'} variant="h3">
        Current holdings
      </Typography>
      <Grid mt={5}>
        <Card elevation={0} sx={{ pb: 7 }}>
          <Table columns={columns} rows={rows}></Table>
        </Card>
      </Grid>
    </Container>
  );
}

export default Holding;
