import Container from '@mui/material/Container';
import { Grid, Typography, Card } from '@mui/material';
import antsCoin from '../../assets/coins/ants-coin.svg';
import botcoin from '../../assets/coins/botcoin.svg';
import btt from '../../assets/coins/btt.svg';
import comfy from '../../assets/coins/comfy.png';
import lottocoin from '../../assets/coins/lottocoin.svg';
import rblue from '../../assets/coins/rblue.png';
import skillcoin from '../../assets/coins/skillcoin.svg';
import usdc from '../../assets/coins/usdc.svg';
import React from 'react';

const SupportedCoins = () => {
  const data = [
    {
      image: usdc,
      title: 'USDC',
      subTitle: 'USDC',
    },
    {
      image: antsCoin,
      title: 'AntsCoin',
      subTitle: 'ANT',
    },
    {
      image: comfy,
      title: 'ComfyToken',
      subTitle: 'COMFY',
    },
    {
      image: rblue,
      title: 'REVIVAL',
      subTitle: 'RVL',
    },
    {
      image: lottocoin,
      title: 'LottoCoin ',
      subTitle: 'LOT',
    },
    {
      image: btt,
      title: 'btt',
      subTitle: 'BTT',
    },
    {
      image: botcoin,
      title: 'Botcoin ',
      subTitle: 'BOT',
    },
    {
      image: skillcoin,
      title: 'SKILLCOIN',
      subTitle: 'SKILL',
    },
    {
      image: skillcoin,
      title: 'SKILLCOIN',
      subTitle: 'SKILL',
    },
  ];
  return (
    <Grid container>
      <Container>
        <Typography
          variant={'h3'}
          sx={{ textAlign: 'center', fontWeight: '700' }}
        >
          Supported Coins
        </Typography>
        <Grid sx={{ display: 'flex', flexWrap: 'wrap' }} lg={12}>
          {data.map((item, id) => {
            return (
              <Card
                elevation={0}
                key={id}
                sx={{
                  margin: '40px',
                  textAlign: 'center',
                  background: 'transparent',
                  inlineSize: 'fin-content',
                }}
              >
                <img src={item.image} style={{ width: 50 }} />
                <Typography level={'h6'}>{item.title}</Typography>
                <Typography level={'h6'}>({item.subTitle})</Typography>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
};
export default SupportedCoins;
