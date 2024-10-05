import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import NewsSlider from './components/NewsSlider';
import NewsTab from './components/NewsTab';
function News() {
  return (
    <Container>
      <Typography variant="h3" style={{ display: 'inline-block' }}>In The News ...</Typography>
      <Button variant="contained" color="primary" style={{ float: 'right' }}>Report the News</Button>
      <NewsSlider />
      <NewsTab />
    </Container>
  );
}

export default News;
