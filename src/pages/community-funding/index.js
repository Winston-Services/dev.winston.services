import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { ReactComponent as CommunityFundingIcon } from './../../assets/community_funding_icon.svg';

function index() {
  return (
    <Container>
      <Grid container display={'flex'} alignItems="center">
        <Grid item md={6}>
          <Typography variant="h2" mb={6.25}>
            Do you really have a creative idea?
          </Typography>
          <Button variant="contained" color="secondary">
            Start Campaign
          </Button>
        </Grid>
        <Grid item md={6}>
          <CommunityFundingIcon />
        </Grid>
      </Grid>
    </Container>
  );
}

export default index;
