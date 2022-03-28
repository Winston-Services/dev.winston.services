import React from 'react';
import StakingTable from './StakingTable';
import CoinTable from './CoinTable';
import BinanceSmartChain from '../../assets/binance_smart_chain.svg';
import EthereumSmall from './../../assets/ethereum_small.svg';
import ProofOfStake1 from './../../assets/proof_of_stake1.svg';
import ProofOfStake2 from './../../assets/proof_of_stake2.svg';
import ProofOfStake3 from './../../assets/proof_of_stake3.svg';
import ProofOfWork1 from './../../assets/proof_of_work1.svg';
import ProofOfWork2 from './../../assets/proof_of_work2.svg';
import ProofOfWork3 from './../../assets/proof_of_work3.svg';
import SearchIcon from '@mui/icons-material/Search';
import {
  Typography,
  Grid,
  Card,
  Container,
  Divider,
  Box,
  TextField,
} from '@mui/material';

const proofOfWork = [
  {
    icon: ProofOfWork1,
    des: 'Miners complete to solve difficult math problems',
  },
  {
    icon: ProofOfWork2,
    des: 'The first miner to solve the problem validates the next block',
  },
  {
    icon: ProofOfWork3,
    des: 'The winning miner recives a reward from the network',
  },
];
const proofOfStake = [
  { icon: ProofOfStake1, des: 'Stakers stake assets to validate a new block' },
  {
    icon: ProofOfStake2,
    des: 'If the block is illegitimate the staked amount will be "Slashed"',
  },
  {
    icon: ProofOfStake3,
    des: 'If legitmate, the staker will get back the staked assets and an addional reward',
  },
];

export default function Staking() {
  const rows = [
    {
      icon: EthereumSmall,
      name: 'Rickle',
      tokens: '0',
      givenAway: '100',
    },
    {
      icon: BinanceSmartChain,
      name: 'Binance Smart Chain',
      tokens: '0',
      givenAway: '100',
    },
  ];
  return (
    <Container>
      <Grid container spacing={8}>
        <Grid container item lg={12} justifyContent={'center'} spacing={8}>
          <Grid item>
            <Typography variant="h3">Proof of work</Typography>
          </Grid>
          <Grid item container spacing={6}>
            {proofOfWork.map((item, index) => {
              return (
                <Grid
                  container
                  key={index}
                  item
                  sm={12}
                  md={4}
                  lg={4}
                  justifyContent={'center'}
                  spacing={6}
                >
                  <Grid item>
                    <img src={item.icon} />
                  </Grid>
                  <Grid item>
                    <Typography textAlign={'center'} variant="h6">
                      {item.des}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Divider variant="fullWidth" sx={{ borderBottomWidth: 5 }} />
        </Grid>
        <Grid container item lg={12} justifyContent={'center'} spacing={8}>
          <Grid item>
            <Typography variant="h3">Proof of stake</Typography>
          </Grid>
          <Grid item container spacing={6}>
            {proofOfStake.map((item, index) => {
              return (
                <Grid
                  container
                  key={index}
                  item
                  sm={12}
                  md={4}
                  lg={4}
                  justifyContent={'center'}
                  spacing={6}
                >
                  <Grid item>
                    <img src={item.icon} />
                  </Grid>
                  <Grid item>
                    <Typography textAlign={'center'} variant="h6">
                      {item.des}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item sm={12} lg={6}>
            <Card>
              <CoinTable name={'Pending'} rows={rows} />
            </Card>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Card>
              <CoinTable name={'Vested'} rows={rows} />
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item sm={12} lg={12}>
            <Card sx={{ p: 5, height: '80%' }}>
              <Grid container spacing={4}>
                <Grid
                  item
                  display={'flex'}
                  justifyContent={'space-between'}
                  lg={12}
                  sm={12}
                  md={12}
                  xs={12}
                >
                  <Typography>Faucet On Winston</Typography>
                  <Box>
                    <SearchIcon />
                    <TextField
                      placeholder="Search coin or token"
                      variant="standard"
                      InputProps={{ disableUnderline: true }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={12} sm={12} md={12} xs={12}>
                  <StakingTable />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={12}
          lg={12}
          justifyContent={'center'}
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3">Staking On Winston</Typography>
          </Grid>

          <Grid item>
            <Typography variant="h6" textAlign={'center'}>
              <span>
                Each coin or token project can enable staking with in the
                Winston network.
              </span>
              <br />
              <span>
                Once a pool is established for staking members are able to stake
                the coin ortoken for the project with in the Winston network.
              </span>
              <br />
              <span>
                Tokens must be held for 30 days to start earning rewards.
                Rewards are based on the following algo.
              </span>
              <br />
              <span style={{ color: 'yellow ' }}>
                User_Weight = Total_Staked / User_Available_Stake
              </span>
              <br />
              <span style={{ color: 'yellow ' }}>
                Payout = (Pool / 365) / User_Weight
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
