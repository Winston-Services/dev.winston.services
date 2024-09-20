import React from 'react';

import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AcademyBooks from './../../../assets/academy.svg';

export default function Academy() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems={'center'}
      sx={{ mt: 0, flexDirection: { sm: 'column', md: 'row' } }}
    >
      <Grid item xs={12} container spacing={3} sx={{ mb: 8 }}>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            src={AcademyBooks}
            sx={{ width: '90%', height: 'auto' }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          flexDirection={'column'}
          display="flex"
        >
          <Typography id="academyTitle" variant="h3" sx={{ mb: 3 }}>
            Academy
          </Typography>
          <Typography textAlign="left" sx={{ mb: 4, fontSize: 'x-large' }}>
            Want to learn about blockchain and all the components that are
            involved in the decentralized financial world of the future. Winston
            Academy is here to help, and you can even earn while you learn.
            Already know enough to help others learn get paid to create classes
            that others use.
          </Typography>
          <Box component="div" sx={{ mt: 4 }}>
            <Button
              variant="outlined"
              sx={{
                mr: { xs: 2, md: 3 },
                mb: 3,
                width: { xs: '100%', sm: 'auto' },
              }}
              size="large"
              onClick={() => navigate('/academy')}
            >
              Learn To Earn
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
