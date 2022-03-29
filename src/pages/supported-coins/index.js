import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
// import antsCoin from '../../assets/coins/ants-coin.svg';
// import botcoin from '../../assets/coins/botcoin.svg';
// import btt from '../../assets/coins/btt.svg';
// import comfy from '../../assets/coins/comfy.png';
// import lottocoin from '../../assets/coins/lottocoin.svg';
// import rblue from '../../assets/coins/rblue.png';
// import skillcoin from '../../assets/coins/skillcoin.svg';
// import usdc from '../../assets/coins/usdc.svg';
import cryptoCurrency from './../../assets/crypto_currency.svg';
import React from 'react';

const SupportedCoins = () => {
  const data = [
    {
      image: cryptoCurrency,
      title: 'USDC',
      subTitle: 'USDC',
    },
    {
      image: cryptoCurrency,
      title: 'AntsCoin',
      subTitle: 'ANT',
    },
    {
      image: cryptoCurrency,
      title: 'ComfyToken',
      subTitle: 'COMFY',
    },
    {
      image: cryptoCurrency,
      title: 'REVIVAL',
      subTitle: 'RVL',
    },
    {
      image: cryptoCurrency,
      title: 'LottoCoin ',
      subTitle: 'LOT',
    },
    {
      image: cryptoCurrency,
      title: 'btt',
      subTitle: 'BTT',
    },
    {
      image: cryptoCurrency,
      title: 'Botcoin ',
      subTitle: 'BOT',
    },
    {
      image: cryptoCurrency,
      title: 'SKILLCOIN',
      subTitle: 'SKILL',
    },
    {
      image: cryptoCurrency,
      title: 'SKILLCOIN',
      subTitle: 'SKILL',
    },
  ];
  return (
    <Container>
      <Grid container spacing={12} justifyContent={'center'}>
        <Grid item>
          <Typography variant={'h3'}>Supported Coins</Typography>
        </Grid>
        <Grid container item lg={12} display={'flex'} rowSpacing={8}>
          {data.map((item, id) => {
            return (
              <Grid
                key={id}
                item
                lg={1.5}
                md={3}
                sm={3}
                xs={6}
                textAlign={'center'}
              >
                <img src={item.image} />
                <Typography variant={'subtitle1'}>{item.title}</Typography>
                <Typography variant={'subtitle2'}>({item.subTitle})</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
export default SupportedCoins;
