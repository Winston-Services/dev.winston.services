import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {
  Typography,
  Grid,
  Card,
  TextField,
  Container,
  InputAdornment,
} from '@mui/material';

import BinanceSmartChain from '../../assets/binance_smart_chain.svg';
import EthereumSmall from '../../assets/ethereum_small.svg';
import Litecoin from '../../assets/litecoin.svg';
import waterDrop from '../../assets/water_drop.svg';
import FaucetTable from './FaucetTable';
import TokenTable from './TokenTable';

export default function Faucet() {
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
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid container item spacing={6}>
          <Grid item sm={12} lg={6}>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="h2">Faucet</Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'justify', mb: 2 }}
                >
                  Winston has a community funded faucet feature. A faucet in the
                  crypto world means a place where you can get crypto for free.
                  They have crypto pools as a bank account and the faucet to pay
                  out those who support the Winston project.
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: 'justify', mb: 2 }}
                >
                  Paid members will be able to have more access to the faucets
                  to obtain more free crypto. We want the community to be able
                  to have access to cryptocurrency with the support of the
                  Winston project.
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
                  We are able to give away $100’s of dollars a year to help
                  spread the use of Crypto.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} lg={6}>
            <img src={waterDrop} alt="crypto" />
          </Grid>
        </Grid>
        <Grid container item spacing={4}>
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
      </Grid>
    </Container>
  );
}
