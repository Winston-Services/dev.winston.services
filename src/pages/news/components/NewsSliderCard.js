import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

function NewsSliderCard({ item }) {
  return (
    <Grid>
      <img
        src={item.image}
        style={{
          width: '100%',
          height: '260px',
          borderRadius: '20px',
          objectFit: 'cover',
        }}
      ></img>
      <Grid my={1.5}>
        <Typography variant="subtitle1">{item.date}</Typography>
      </Grid>
      <Grid>
        <Typography variant="h5">{item.description}</Typography>
      </Grid>
    </Grid>
  );
}

NewsSliderCard.propTypes = {
  item: PropTypes.object,
};

export default NewsSliderCard;
