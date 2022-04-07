import React from 'react';

import { Grid, Typography, Container, Box } from '@mui/material';
import { PropTypes } from 'prop-types';

import CheckoutCard from './CheckoutCard';

export default function CheckoutWrapper({ checkoutData }) {
  return (
    <Container>
      {checkoutData.map((obj) => (
        <Grid key={obj.title} container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component={'img'} sx={{ mr: 3 }} src={obj.icon} alt="icon" />
            <Typography variant={'h3'} sx={{ flexGrow: 1 }}>
              {obj.title}
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Typography>{obj.description}</Typography>
          </Grid>
          <Grid item container spacing={4}>
            {obj.items?.map((itemObj) => {
              return (
                <Grid key={itemObj.title} item xs={12} md={6} lg={6}>
                  <CheckoutCard data={itemObj} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
CheckoutWrapper.propTypes = {
  checkoutData: PropTypes.array,
};
