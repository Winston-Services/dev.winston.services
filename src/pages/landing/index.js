import React from 'react';
import { Box } from '@mui/material';
import Home from './components/Home';

export default function Landing() {
  return (
    <Box>
      <Box component={'div'} id="#home">
        <Home />
      </Box>
    </Box>
  );
}
