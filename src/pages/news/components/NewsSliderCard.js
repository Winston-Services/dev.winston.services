import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NewsSliderCard({ item }) {
  const navigate = useNavigate();
  return (
    <Grid
      onClick={() => {
        navigate('/news/news-details');
      }}
      sx={{ cursor: 'pointer' }}
    >
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
        <Grid container justifyContent="space-between">
          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="subtitle1">{item.date}</Typography>
        </Grid>
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
