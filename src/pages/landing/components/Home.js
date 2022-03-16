import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ReactComponent as CryptoImg } from './../../../assets/crypto_landing.svg';

export default function Home() {
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ mt: 15, flexDirection: { sm: 'column', md: 'row' } }}
    >
      <Grid item md={5.5}>
        <Typography variant="h2" fontWeight={'700'} sx={{ mb: 3 }}>
          Crypto
        </Typography>
        <Typography textAlign="justify" sx={{ mb: { lg: 25, md: 20, xs: 8 } }}>
          Ever find yourself struggling to understand blockchain and
          cryptocurrency? Let Winston Services help you find answers to your
          most pressing questions about blockchain and cryptocurrency. Winston
          Services offers a full line of features and services to help you along
          your journey in this new Decentralized Financial World.
        </Typography>
      </Grid>
      <Grid item md={0.5}></Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: { xs: '100%', lg: '125%' },
            height: { xs: '100%', sm: '425px', lg: '125%' },
          }}
        >
          <CryptoImg width="100%" height="100%" />
        </Box>
      </Grid>
    </Grid>
  );
}
