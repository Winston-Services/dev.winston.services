import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  InputAdornment,
} from '@mui/material';

import BinanceSmartChain from '../../assets/binance_smart_chain.svg';
import coinDrop from '../../assets/coinDrop.png';
import EthereumSmall from '../../assets/ethereum_small.svg';
import Litecoin from '../../assets/litecoin.svg';
// import waterDrop from '../../assets/water_drop.svg';
import FaucetTable from './FaucetTable';
import TokenTable from './TokenTable';

const rows = [
  {
    icon: EthereumSmall,
    name: 'Ethereum',
    tokens: '00000',
    givenAway: '00000',
  },
  {
    icon: Litecoin,
    name: 'Litecoin',
    tokens: '00000',
    givenAway: '00000',
  },
  {
    icon: BinanceSmartChain,
    name: 'Binance Smart Chain',
    tokens: '00000',
    givenAway: '00000',
  },
];

const rowsFaucetOnnWinston = [
  {
    id: 1,
    coin: 'Rickle',
    faucetTotal: 1306.25358,
    totalGiveToday: 0.59858,
    memberDP: 0.0038584,
    publicDP: 0.000038584,
    totalDropped: 295.5353,
  },
  {
    id: 2,
    coin: 'Winston',
    faucetTotal: 1306.25358,
    totalGiveToday: 0.59858,
    memberDP: 0.0038584,
    publicDP: 0.000038584,
    totalDropped: 295.5353,
  },
  {
    id: 3,
    coin: 'Ahava',
    faucetTotal: 1306.25358,
    totalGiveToday: 0.59858,
    memberDP: 0.0038584,
    publicDP: 0.000038584,
    totalDropped: 295.5353,
  },
  {
    id: 4,
    coin: 'New Coin',
    faucetTotal: 1306.25358,
    totalGiveToday: 0.59858,
    memberDP: 0.0038584,
    publicDP: 0.000038584,
    totalDropped: 295.5353,
  },
];

export default function Faucet() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ width: '100%' }}>
          <Typography variant="h2">Faucet</Typography>
          <Typography variant="subtitle2" my={3}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries.
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          sx={{
            width: { xs: '100%', sm: '529px' },
            height: { xs: '100%', sm: '392.93px' },
          }}
        >
          <img src={coinDrop} alt="crypto" width="100%" />
        </Grid>
      </Grid>
      <Grid container item spacing={4} my={14}>
        <Grid item sm={12} lg={6}>
          <Card>
            <TokenTable name={'Tokens'} rows={rows} />
          </Card>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Card>
            <TokenTable name={'Coins'} rows={rows} />
          </Card>
        </Grid>
      </Grid>
      <Grid container item>
        <Grid item sm={12} lg={12}>
          <Card sx={{ p: 5, height: '90%', boxShadow: 'none' }}>
            <Grid container spacing={4}>
              <Grid
                item
                container
                display={'flex'}
                justifyContent={'space-between'}
                lg={12}
                sm={12}
                md={12}
                xs={12}
              >
                <Grid item>
                  <Typography>Faucet On Winston</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    sx={{ backgroundColor: '#271D5A' }}
                    variant="standard"
                    hiddenLabel
                    fullWidth
                    color="filled"
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item lg={12} sm={12} md={12} xs={12}>
                <FaucetTable rows={rowsFaucetOnnWinston} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
