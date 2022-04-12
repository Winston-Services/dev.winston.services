import React from 'react';

import { Grid, Paper, Typography, Link, Button } from '@mui/material';
import { PropTypes } from 'prop-types';

export default function TabCard({ data }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2,
      }}
    >
      {data.map((item, index) => (
        <div key={index}>
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
          {index !== data.length - 1 ? (
            <Grid
              sx={{ m: '15px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
          ) : null}
        </div>
      ))}
    </Paper>
  );
}

TabCard.propTypes = {
  data: PropTypes.array,
};
