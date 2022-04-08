import React from 'react';

import { Container, Typography } from '@mui/material';

import NewsSlider from './NewsSlider';

function News() {
  return (
    <Container>
      <Typography variant="h3">Latest News</Typography>
      <NewsSlider />
    </Container>
  );
}

export default News;
