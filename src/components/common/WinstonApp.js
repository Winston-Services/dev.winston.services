import React from 'react';

import { Paper, Container, Grid, Typography } from '@mui/material';

import appStore from './../../assets/app_store.svg';
import playStore from './../../assets/play_store.svg';
import winstonMobile from './../../assets/winston_mobile.png';

function WinstonApp() {
  return (
    <Paper elevation={0}>
      <Container>
        <Grid container display="flex" columnSpacing={2} my={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" mt={12}>
              Get the Winston app now!
            </Typography>
            <Typography variant="subtitle1" mt={4} mb={20}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              consequat ultricies adipiscing nisi nunc, sit feugiat euismod.
              Cras eget malesuada risus ante. Vitae egestas tristique nisi, eget
              mauris interdum.
            </Typography>
            <Grid display="flex" gap={1.5}>
              <Grid item>
                <img src={playStore} alt="play-store" />
              </Grid>
              <Grid item>
                <img src={appStore} alt="app-store" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12} display={'flex'} alignItems={'flex-end'}>
            <img src={winstonMobile} alt="winston-mobile" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

export default WinstonApp;
