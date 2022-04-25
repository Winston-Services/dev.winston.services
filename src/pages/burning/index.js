import React from 'react';

import { Container, Grid, Typography } from '@mui/material/';

import BurningImage from './../../assets/burning_image.svg';
import BurningTabs from './components/BurningTabs';
import FrequestlyAskedQuestion from './components/FrequestlyAskedQuestion';
import QuarterlyAutoBurn from './components/QuarterlyAutoBurn';
import RealTimeBurn from './components/RealTimeBurn';
import SupplyChart from './components/SupplyChart';

function Burning() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Typography variant="h3">Burning Coins</Typography>
          <Typography variant="subtitle1" mt={2.5}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Typography>
          <Typography variant="subtitle1" mt={2.5}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <img src={BurningImage} width={'100%'} />
        </Grid>
      </Grid>
      <Grid item sx={{ mt: { xs: 0, sm: 6, md: 12 } }}>
        <RealTimeBurn />
      </Grid>
      <Grid mt={6}>
        <QuarterlyAutoBurn />
      </Grid>
      <Grid container spacing={5} mt={1}>
        <Grid item xs={12} md={6}>
          <BurningTabs />
        </Grid>
        <Grid item xs={12} md={6}>
          <SupplyChart />
        </Grid>
      </Grid>
      <Grid mt={6}>
        <FrequestlyAskedQuestion />
      </Grid>
    </Container>
  );
}

export default Burning;
