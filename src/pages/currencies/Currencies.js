import React from 'react';

import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CurrenciesImage from './../../assets/currencies_image.png';

const data = [
  {
    image: './assets/icons/btc.svg',
    title: 'Bitcoin',
    subTitle: 'BTC',
  },
  {
    image: './assets/icons/busd.svg',
    title: 'BUSD',
    subTitle: 'BUSD',
  },
  {
    image: './assets/icons/dash.png',
    title: 'Dash',
    subTitle: 'DASH',
  },
  {
    image: './assets/icons/doge.png',
    title: 'Dogecoin',
    subTitle: 'DOGE',
  },
  {
    image: './assets/icons/eth.png',
    title: 'Ethereum',
    subTitle: 'ETH',
  },
  {
    image: './assets/icons/ltc.png',
    title: 'Litecoin',
    subTitle: 'LTC',
  },
  {
    image: './assets/icons/wbnb.svg',
    title: 'WBNB',
    subTitle: 'WBNB',
  },
];

function Currencies() {
  const navigate = useNavigate();

  /* eslint-disable */
  const renderCreateCurrency = () => {
    return (
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/currencies/upload-currency')}
              >
                Upload your own Currencies
              </Button>
            </Grid>
            <Grid item md={5} xs={12} display={'flex'} alignItems={'flex-end'}>
              <img src={CurrenciesImage} alt="currencies-image" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  };
  /* eslint-enable */

  return (
    <>
      <Container>
        <Typography variant="h3" textAlign={'center'}>
          What&apos;s on Winston
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
    </>
  );
}

export default Currencies;
