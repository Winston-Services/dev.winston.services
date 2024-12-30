import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function PublicNoticeCard({ item }) {
  const navigate = useNavigate();
  return (
    <Grid
      container
      display={'flex'}
      spacing={2}
      onClick={() => {
        navigate(`/public-notice/proposal/${item.id}`);
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
        <Typography variant="subtitle1">{item.description}</Typography>
        <Grid item display={'flex'} sx={{ gap: { xs: 1, md: 2.5 }, mb: 1 }}>
          <Typography variant="body2">{item.author}</Typography>
          <Typography variant="body2">{item.infoTime}</Typography>
          <Typography variant="body2">{item.infoTitle}</Typography>
          <Typography variant="body2">{item.infoSubTitle}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

PublicNoticeCard.propTypes = {
  item: PropTypes.object,
};

export default PublicNoticeCard;
