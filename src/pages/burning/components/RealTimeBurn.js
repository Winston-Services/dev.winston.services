import React from 'react';

import { AccessTime } from '@mui/icons-material';
import { Card, Grid, Typography } from '@mui/material';

import { ReactComponent as BurningIcon } from './../../../assets/burning_icon.svg';

function RealTimeBurn() {
  return (
    <Card elevation={0} sx={{ p: 5 }}>
      <Typography
        variant="h5"
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
      >
        <AccessTime sx={{ mr: 1 }} />
        Real-Time Burn
      </Typography>

      <Typography variant="subtitle1" mt={2} textAlign="center">
        BNB uses a real-time burning mechanism as introduced in BEP95. A fixed
        ratio of the gas fee collected is burned in each block, with the ratio
        decided by BSC validators.
      </Typography>

      <Grid container spacing={5} mt={0}>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ background: '#271D5A', p: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <BurningIcon />
              </Grid>
              <Grid item>
                <Typography variant="h5">Burned in the last 7 days</Typography>
                <Typography variant="h4" mt={2.5}>
                  2,976.85 WNS
                </Typography>
                <Typography variant="subtitle1">$1,238,578.65</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ background: '#271D5A', p: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <BurningIcon />
              </Grid>
              <Grid item>
                <Typography variant="h5">Total Burned</Typography>
                <Typography variant="h4" mt={2.5}>
                  69,392.24 WNS
                </Typography>
                <Typography variant="subtitle1">$28,872,028.73</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}

export default RealTimeBurn;
