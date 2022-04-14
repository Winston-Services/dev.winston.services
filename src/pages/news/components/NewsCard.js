import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';

function NewsCard({ item }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      display={'flex'}
      spacing={2}
      onClick={() => {
        navigate('/news/news-details');
      }}
      sx={{ cursor: 'pointer' }}
    >
      <Grid item sm={4}>
        <img
          src={item.image}
          style={{
            width: '100%',
            height: '195px',
            objectFit: 'cover',
          }}
        ></img>
      </Grid>
      <Grid
        item
        sm={8}
        display="flex"
        flexDirection={'column'}
        justifyContent="space-between"
        gap={1}
      >
        <Typography variant="h5" sx={{ mt: { xs: 1, sm: 0 } }}>
          {item.title}
        </Typography>
        <Typography variant="body1">{item.description}</Typography>
        <Grid item display={'flex'} sx={{ gap: { xs: 1, md: 2.5 }, mb: 1 }}>
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
