import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import CreateYourOwnBlock from './../../../assets/create_blockchain.svg';

export default function CreateYourOwnBlockchain() {
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ mt: 0, flexDirection: { sm: 'column', md: 'row' } }}
    >
      <Grid item xs={12} container spacing={5} sx={{ mb: 25 }}>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          flexDirection={'column'}
          display="flex"
        >
          <Typography id="createBlockchainTitle" variant="h3" sx={{ mb: 3 }}>
            Create your own Blockchain
          </Typography>
          <Typography textAlign="justify" sx={{ mb: 6 }}>
            Trade your favorite crypto through the Winston Trading platform and
            have access to it through these platforms, WebApp, Discord, Twitter,
            SMS, and email. More to come.
          </Typography>
          <Box component="div" sx={{ mt: 6 }}>
            <Button
              variant="outlined"
              sx={{
                mr: { xs: 2, md: 3 },
                mb: 3,
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Get started
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            src={CreateYourOwnBlock}
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
