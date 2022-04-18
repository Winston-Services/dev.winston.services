import React from 'react';

import { Container, Typography, Grid, Paper, Button } from '@mui/material';

import CurrenciesImage from './../../assets/currencies_image.png';

const data = [
  {
    image: './assets/icons/btc.svg',
    title: 'Cardano',
    subTitle: 'ADA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DigByte',
    subTitle: 'DGB',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Komodo',
    subTitle: 'KMD',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Alias',
    subTitle: 'ALIAS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Divi',
    subTitle: 'DIVI',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'LBRY Credits',
    subTitle: 'LBC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Avalanche',
    subTitle: 'ACAX',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Dogecoin',
    subTitle: 'DOGE',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Litecoin',
    subTitle: 'LTC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Banano',
    subTitle: 'BAN',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DeValut',
    subTitle: 'DVT',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Terra',
    subTitle: 'LUNA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Bitcoin Cash',
    subTitle: 'BCH',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'NestEgg Coin',
    subTitle: 'EGG',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Marketlist',
    subTitle: 'MARTK',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Blockidcoin',
    subTitle: 'BID',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'EOS',
    subTitle: 'EOS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Cardano',
    subTitle: 'ADA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DigByte',
    subTitle: 'DGB',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Komodo',
    subTitle: 'KMD',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Alias',
    subTitle: 'ALIAS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Divi',
    subTitle: 'DIVI',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'LBRY Credits',
    subTitle: 'LBC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Avalanche',
    subTitle: 'ACAX',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Dogecoin',
    subTitle: 'DOGE',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Litecoin',
    subTitle: 'LTC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Banano',
    subTitle: 'BAN',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DeValut',
    subTitle: 'DVT',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Terra',
    subTitle: 'LUNA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Bitcoin Cash',
    subTitle: 'BCH',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'NestEgg Coin',
    subTitle: 'EGG',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Marketlist',
    subTitle: 'MARTK',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Blockidcoin',
    subTitle: 'BID',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'EOS',
    subTitle: 'EOS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Cardano',
    subTitle: 'ADA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DigByte',
    subTitle: 'DGB',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Komodo',
    subTitle: 'KMD',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Alias',
    subTitle: 'ALIAS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Divi',
    subTitle: 'DIVI',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'LBRY Credits',
    subTitle: 'LBC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Avalanche',
    subTitle: 'ACAX',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Dogecoin',
    subTitle: 'DOGE',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Litecoin',
    subTitle: 'LTC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Banano',
    subTitle: 'BAN',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DeValut',
    subTitle: 'DVT',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Terra',
    subTitle: 'LUNA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Bitcoin Cash',
    subTitle: 'BCH',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'NestEgg Coin',
    subTitle: 'EGG',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Marketlist',
    subTitle: 'MARTK',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Blockidcoin',
    subTitle: 'BID',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'EOS',
    subTitle: 'EOS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Cardano',
    subTitle: 'ADA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DigByte',
    subTitle: 'DGB',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Komodo',
    subTitle: 'KMD',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Alias',
    subTitle: 'ALIAS',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Divi',
    subTitle: 'DIVI',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'LBRY Credits',
    subTitle: 'LBC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Avalanche',
    subTitle: 'ACAX',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Dogecoin',
    subTitle: 'DOGE',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Litecoin',
    subTitle: 'LTC',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Banano',
    subTitle: 'BAN',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'DeValut',
    subTitle: 'DVT',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Terra',
    subTitle: 'LUNA',
  },
  {
    image: './assets/icons/btc.svg',
    title: 'Bitcoin Cash',
    subTitle: 'BCH',
  },
];

function Currencies() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign={'center'}>
          Currencies
        </Typography>
        <Grid container rowSpacing={6} mt={0}>
          {data.map((item, index) => {
            return (
              <Grid
                key={item.title + index}
                item
                lg={1.5}
                md={3}
                sm={3}
                xs={6}
                textAlign={'center'}
              >
                <img src={item.image} width={'50px'} />
                <Typography variant={'subtitle1'}>{item.title}</Typography>
                <Typography variant={'subtitle2'}>({item.subTitle})</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Paper elevation={0}>
        <Container>
          <Grid container spacing={5} my={10}>
            <Grid item xs={12} md={7} my={10}>
              <Typography variant="h3">Upload your own currencies</Typography>
              <Typography variant="subtitle1" mt={4} mb={15}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                consequat ultricies adipiscing nisi nunc, sit feugiat euismod.
                Cras eget malesuada risus ante. Vitae egestas tristique nisi,
                eget mauris interdum.
              </Typography>
              <Button variant="contained" color="secondary">
                Upload your own Currencies
              </Button>
            </Grid>
            <Grid item md={5} xs={12} display={'flex'} alignItems={'flex-end'}>
              <img src={CurrenciesImage} alt="currencies-image" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Currencies;
