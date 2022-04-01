import React from 'react';

import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const SupportedCoins = () => {
  const data = [
    {
      image: './assets/icons/btc.svg',
      title: 'CRYPTOCURRENCY',
      subTitle: 'cryptoCurrency ',
    },
    {
      image: './assets/icons/ltc.png',
      title: 'LTC',
      subTitle: 'Litecoin ',
    },
    {
      image: './assets/icons/bci.png',
      title: 'BCI',
      subTitle: 'Bitcoin Interest',
    },
    {
      image: './assets/icons/bhy.jpg',
      title: 'BHY',
      subTitle: 'BHY',
    },
    {
      image: './assets/icons/dash.png',
      title: 'DASH',
      subTitle: 'Dash',
    },
    {
      image: './assets/icons/doge.png',
      title: 'DOGE',
      subTitle: 'doge',
    },
    {
      image: './assets/icons/sys.png',
      title: 'SYS',
      subTitle: 'syscoin',
    },
    {
      image: './assets/icons/shopify.png',
      title: 'SHOPIFY ',
      subTitle: 'shopify',
    },
    {
      image: './assets/icons/quickbooks.jpg',
      title: 'QUICKBOOKS',
      subTitle: 'quickbooks',
    },
    {
      image: './assets/icons/opencart.jpg',
      title: 'OOPENCART',
      subTitle: 'opencart',
    },
    {
      image: './assets/icons/mstr.png',
      title: 'MSTR',
      subTitle: 'mstr',
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
                <img src={item.image} width={'50px'} />
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
