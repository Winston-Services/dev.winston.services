import React from 'react';

import { Container, Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import ThankYouIcon from './../../../assets/thank-you-icon.svg';

function ThankYou() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container display={'flex'} justifyContent="center">
        <Grid item md={8} textAlign={'center'}>
          <Typography variant="h3">Amazing!</Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Grid textAlign={'center'} mt={12} mb={8}>
            <img src={ThankYouIcon}></img>
          </Grid>
          <Grid mt={5} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate('/');
              }}
            >
              Back to home page
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ThankYou;
