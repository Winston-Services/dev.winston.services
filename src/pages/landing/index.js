import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Home from './components/Home';
import Services from './components/Services';
import Discord from './components/Discord';
import CreateYourOwnBlockchain from './components/CreateYourOwnBlockchain';
import Academy from './components/Academy';

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
        <Container maxWidth="lg">
          <Home />
        </Container>
      </Box>
      <Box component={'div'} id="services">
        <Container maxWidth="lg">
          <Services />
        </Container>
      </Box>
      <Box component={'div'} className="blueSectionLandingBg" id="discord">
        <Container maxWidth="lg">
          <Discord />
        </Container>
      </Box>
      <Box component={'div'} id="createBlockchain">
        <Container maxWidth="lg">
          <CreateYourOwnBlockchain />
        </Container>
      </Box>
      <Box component={'div'} className={'blueSectionLandingBg'} id="academy">
        <Container maxWidth="lg">
          <Academy />
        </Container>
      </Box>
    </Box>
  );
}
