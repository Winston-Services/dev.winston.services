import React from 'react';

import { Typography, Grid, Card, Container } from '@mui/material';

import BinanceSmartChain from '../../assets/binance_smart_chain.svg';
import EthereumSmall from './../../assets/ethereum_small.svg';
import ProofOfStake1 from './../../assets/proof_of_stake1.svg';
import ProofOfStake2 from './../../assets/proof_of_stake2.svg';
import ProofOfStake3 from './../../assets/proof_of_stake3.svg';
import ProofOfWork1 from './../../assets/proof_of_work1.svg';
import ProofOfWork2 from './../../assets/proof_of_work2.svg';
import ProofOfWork3 from './../../assets/proof_of_work3.svg';
import CoinTable from './CoinTable';
import StakingTable from './StakingTable';

const proofOfWork = [
  {
    icon: ProofOfWork1,
    des: 'Stakers stake assets to validate a new block',
  },
  {
    icon: ProofOfWork2,
    des: 'If the block is illegitimate the staked amount will be "Slashed"',
  },
  {
    icon: ProofOfWork3,
    des: 'If legitmate, the staker will get back the staked assets and an addional reward',
  },
];
const proofOfStake = [
  { icon: ProofOfStake1, des: 'Communities Donate to a pool' },
  {
    icon: ProofOfStake2,
    des: 'Stakers Stake Tokens and coins agains the pool to receive rewards.',
  },
  {
    icon: ProofOfStake3,
    des: 'Stake holders who have vested for thirty days earn daily rewards based on the pools.',
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
        <Grid container item xs={12} justifyContent={'center'} spacing={8}>
          <Grid item>
            <Typography variant="h2" textAlign={'center'}>
              Staking With Winston
            </Typography>
            <Typography variant="h3" mt={10} textAlign={'center'}>
              Traditional Chain Staking
            </Typography>
          </Grid>
          <Grid item container spacing={6}>
            {proofOfWork.map((item) => {
              return (
                <Grid
                  key={item.des}
                  item
                  xs={12}
                  md={4}
                  justifyContent={'center'}
                  textAlign={'center'}
                  spacing={6}
                >
                  <img src={item.icon} />
                  <Typography variant="h6" mt={5}>
                    {item.des}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          item
          lg={12}
          justifyContent={'center'}
          spacing={8}
          mt={4}
        >
          <Grid item>
            <Typography variant="h3">Staking On Winston</Typography>
          </Grid>
          <Grid item container spacing={6}>
            {proofOfStake.map((item) => {
              return (
                <Grid
                  key={item.des}
                  item
                  sm={12}
                  md={4}
                  lg={4}
                  justifyContent={'center'}
                  textAlign={'center'}
                  spacing={6}
                >
                  <img src={item.icon} />
                  <Typography variant="h6" mt={5}>
                    {item.des}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item container spacing={4} mt={4}>
          <Grid item sm={12} xs={12} md={12} lg={6}>
            <Card elevation={0}>
              <CoinTable name={'Pending'} rows={rows} />
            </Card>
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={6}>
            <Card elevation={0}>
              <CoinTable name={'Vested'} rows={rows} />
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item sm={12} lg={12}>
            <Card sx={{ p: 5 }} elevation={0}>
              <Grid container spacing={4}>
                <Grid item container justifyContent={'space-between'}>
                  <Grid item lg={9} md={9} sm={6} xs={6}>
                    <Typography variant="h6">Staking Pools</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    lg={3}
                    md={3}
                    sm={6}
                    xs={6}
                    justifyContent={'space-between'}
                  >
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <Typography variant="subtitle2">
                        Amount Pending
                      </Typography>
                      <Typography variant="subtitle2">00000</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <Typography variant="subtitle2">Total Vested</Typography>
                      <Typography variant="subtitle2">00000</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item lg={12} sm={12} md={12} xs={12}>
                  <StakingTable />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          flexDirection={'column'}
          alignContent={'center'}
          width="100%"
          mt={10}
        >
          <Typography variant="h3" textAlign={'center'} mb={6}>
            Staking On Winston
          </Typography>

          <Typography variant="h6" textAlign={'center'}>
            <span>
              Each coin or token project can enable staking with in the Winston
              network.
            </span>
            <br />
            <span>
              Once a pool is established for staking members are able to stake
              the coin ortoken for the project with in the Winston network.
            </span>
            <br />
            <span>
              Tokens must be held for 30 days to start earning rewards. Rewards
              are based on the following algo.
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
    </Container>
  );
}
