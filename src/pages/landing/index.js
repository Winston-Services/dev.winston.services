import React, { useEffect } from 'react';

import { Box, Container } from '@mui/material';

import Academy from './components/Academy';
/* eslint-disable */
import CreateYourOwnBlockchain from './components/CreateYourOwnBlockchain';
/* eslint-enable */
import Discord from './components/Discord';
import Home from './components/Home';
import Services from './components/Services';
import './index.css';

export default function Landing() {
  useEffect(() => {
    if (document.getElementById(window.location.hash.replace('#', ''))) {
      window.scrollTo(
        0,
        document.getElementById(window.location.hash.replace('#', '')).offsetTop
      );
    }
  }, []);

  return (
    <Box>
      <Box component={'div'} id="home">
        <Container maxWidth="xl">
          <Home />
        </Container>
      </Box>
      <Box component={'div'} className="blueSectionLandingBg" id="discord">
        <Container maxWidth="xl">
          <Discord />
        </Container>
      </Box>
      <Box component={'div'} className={'blueSectionLandingBg'} id="academy" >
        <Container maxWidth="xl">
          <Academy />
        </Container>
      </Box>
      <Box component={'div'} id="services">
        <Container maxWidth="xl">
          <Services />
        </Container>
      </Box>
      {/*
      <Box component={'div'} id="createBlockchain">
        <Container maxWidth="xl">
          <CreateYourOwnBlockchain />
        </Container>
      </Box>
      */}
    </Box>
  );
}
