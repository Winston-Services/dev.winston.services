import React from 'react';

import { Container, Typography } from '@mui/material';

import NewsSlider from './components/NewsSlider';
import './index.css';
import NewsTab from './components/NewsTab';

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
