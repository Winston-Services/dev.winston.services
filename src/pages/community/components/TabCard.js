import React from 'react';

import { Paper, Grid, Typography, Button, Link } from '@mui/material';
import { PropTypes } from 'prop-types';

function TabCard({ item }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 0.6,
        borderRadius: 2,
      }}
    >
      <Grid display="flex">
        <Grid sx={{ mr: 2.5 }}>
          <img src={item.icon} />
        </Grid>
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid display={'flex'} flexDirection="column">
            <Typography component={'span'} variant="subtitle1">
              ${item.price}
            </Typography>
            <Link
              component={'span'}
              variant="subtitle1"
              sx={{ color: 'white', textDecoration: 'none' }}
              onClick={() => {}}
            >
              {item.user}
            </Link>
            <Typography component={'span'} variant="subtitle1">
              {item.daysAgo} Days ago
            </Typography>
          </Grid>
          <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button variant="outlined" onClick={() => {}}>
              View Details
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

TabCard.propTypes = {
  item: PropTypes.object,
};

export default TabCard;
