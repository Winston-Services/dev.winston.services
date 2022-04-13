import React from 'react';

import { Container, Typography } from '@mui/material';

import NewsSlider from './NewsSlider';
import NewsTab from './NewsTab';

function News() {
  return (
    <Container>
      <Typography variant="h3">Latest News</Typography>
      <NewsSlider />
      <NewsTab />
    </Container>
  );
}

export default News;
