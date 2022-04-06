import React from 'react';

import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

import CardType2 from './CardType2';

import './index.css';
export default function InfoCardType2({ data }) {
  return (
    <Grid container sx={{ mt: { xs: 10, lg: 0 } }}>
      <Grid item xs={12} container spacing={5}>
        {data.map((service, index) => (
          <Grid key={service.title} item xs={12} md={6}>
            <CardType2 item={service} index={index} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

InfoCardType2.propTypes = {
  data: PropTypes.array,
};
