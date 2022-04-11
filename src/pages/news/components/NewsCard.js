import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

function NewsCard({ item }) {
  return (
    <Grid container display={'flex'} columnSpacing={5}>
      <Grid item md={3}>
        <img
          src={item.image}
          style={{
            width: '100%',
            height: '195px',
            objectFit: 'cover',
          }}
        ></img>
      </Grid>
      <Grid item md={9}>
        <Typography variant="h5">{item.title}</Typography>
        <Grid mt={2}>
          <Typography variant="body1">{item.description}</Typography>
        </Grid>
        <Grid display={'flex'} gap={2} mt={7}>
          <Typography variant="body2">{item.infoTag}</Typography>
          <Typography variant="body2">{item.infoTime}</Typography>
          <Typography variant="body2">{item.infoTitle}</Typography>
          <Typography variant="body2">{item.infoSubTitle}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

NewsCard.propTypes = {
  item: PropTypes.object,
};

export default NewsCard;
