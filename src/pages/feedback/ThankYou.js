import React from 'react';

import { Container, Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import ThankYouIcon from './../../assets/thank-you-icon.svg';

function ThankYou() {
  const navigate = useNavigate();
  // const { rating, message } = useLocation().state;
  return (
    <Container>
      <Grid container display={'flex'} justifyContent="center">
        <Grid item md={8} textAlign={'center'}>
          <Typography variant="h3">Amazing!</Typography>
          <Typography variant="subtitle1">
            Thanks for your feedback!
          </Typography>
          <Typography variant="subtitle1">
            We strive to create the best product for
            you.
          </Typography>
          <Typography variant="subtitle2">
            Your feedback is important to us and we will use it to improve
            our product.
          </Typography>
          <Grid textAlign={'center'} mt={6} mb={8}>
            <img src={ThankYouIcon}></img>
          </Grid>
          <Grid mt={5} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate('/sign-in');
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                window.open('https://discord.gg/rickle-897546129108008960', '_blank');
              }}
            >
              Join Discord
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ThankYou;
