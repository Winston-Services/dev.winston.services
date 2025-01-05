import React from 'react';

import { Grid, Typography, Container } from '@mui/material';

import useApi from '../../hooks/useApi';
import Currencies from '../currencies/Currencies';

const SupportedCoins = () => {
  const [supportedCoins, setSupportedCoins] = React.useState([]);
  const [getTokens, { isLoading, error }] =
    useApi().endpoints.getTokens.useLazyQuery();

  React.useEffect(() => {
    if (isLoading) return;
    getTokens()
      .unwrap()
      .then((data) => {
        setSupportedCoins(
          data.data.map((item) => ({
            subTitle: item.symbol,
            title: item.name,
            image: item.icon,
            item,
          }))
        );
        console.log(data.data);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={12} justifyContent={'center'}>
        <Grid item>
          <Typography variant={'h3'}>Project Tokens</Typography>
        </Grid>
        <Grid container item lg={12} display={'flex'} rowSpacing={8}>
          {isLoading && <Typography>Loading...</Typography>}
          {error && <Typography>Error fetching supported coins</Typography>}
          {supportedCoins.map((item, id) => {
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
        <Grid container item lg={12} display={'flex'} rowSpacing={8}>
          <Currencies />
        </Grid>
      </Grid>
    </Container>
  );
};
export default SupportedCoins;
