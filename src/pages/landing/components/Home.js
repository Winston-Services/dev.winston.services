import React from 'react';

import { Grid2 as Grid, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CryptoLandingImage from './../../../components/crypto-landing-image/index';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ my: 15, flexDirection: { sm: 'column', md: 'row' } }}
    >
      <Grid size={5.5}>
        <Typography
          id="homeTitle"
          variant="h2"
          fontWeight={'700'}
          fontFamily={'Cookie'}
          sx={{ mt: 4 }}
        >
          Winston Crypto
        </Typography>
        <div style={{ textAlign: 'left' }}>
          <Typography variant="h4" sx={{ mt: 4 }}>
            Ever find yourself struggling to understand blockchain and
            cryptocurrency?
          </Typography>
          <Typography variant="h4" sx={{ mt: 4 }}>
            Let Winston help you find answers to your most pressing questions
            about blockchain and cryptocurrency.
          </Typography>
        </div>
        <Box sx={{ justifyContent: 'center', display: 'flex' }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 3 }}
            onClick={() => navigate('/sign-up')}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
      <Grid size={0.5}></Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          className="cryptoContainer"
          sx={{
            width: { xs: '100%', sm: '100%', lg: '39vw' },
            height: { xs: '100%', sm: '425px', lg: '125%' },
          }}
        >
          <CryptoLandingImage />
        </Box>
      </Grid>
    </Grid>
  );
}
