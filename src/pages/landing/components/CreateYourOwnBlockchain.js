import React from 'react';

import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CreateYourOwnBlock from './../../../assets/create_blockchain.svg';

export default function CreateYourOwnBlockchain() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ pt: 16, flexDirection: { sm: 'column', md: 'row' } }}
    >
      <Grid item xs={12} container spacing={5} sx={{ mb: 15 }}>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          flexDirection={'column'}
          display="flex"
        >
          <Typography id="createBlockchainTitle" variant="h2" sx={{ mb: 3 }}>
            Coin Wizard
          </Typography>
          <Typography textAlign="left" sx={{ mb: 6, fontSize: 'x-large' }}>
            Trade your favorite crypto through the Winston Trading platform and
            have access to it through these platforms, WebApp, Discord, Twitter,
            SMS, and email. More to come.
          </Typography>
          <Box component="div" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                mr: { xs: 2, md: 3 },
                mb: 3,
                width: { xs: '100%', sm: 'auto' },
              }}
              onClick={() => {
                navigate('/wizard');
              }}
            >
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box sx={{ maxWidth: '500px', width: '100%', height: 'auto' }}>
            <Box
              component="img"
              src={CreateYourOwnBlock}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
