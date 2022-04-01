import React from 'react';

import { Typography, Button, Grid, Card } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import customLogo from './../../../assets/customLogo.svg';

function StepCoinCustomLogo({ wizardData }) {
  let navigate = useNavigate();

  return (
    <>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Card sx={{ p: 6 }} elevation={0}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} lg={6}>
              <Typography>Wallet icon</Typography>
              <Grid container mt={3}>
                <Grid item sm={12} xs={12} lg={3}>
                  <img src={customLogo} alt="icon" />
                </Grid>
                <Grid item sm={12} xs={12} lg={9} pl={1}>
                  <Typography>
                    Select a PNG image for the icon of your wallet.
                  </Typography>
                  <Typography>
                    Preferred image size: W: 1024px | H: 1024px.
                  </Typography>
                  <Button
                    sx={{ backgroundColor: 'white', color: 'black', mt: 2 }}
                  >
                    Select Image
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={6} xs={12} lg={6}>
              <Typography>Wallet icon</Typography>
              <Grid container mt={3}>
                <Grid item sm={12} xs={12} lg={3}>
                  <img src={customLogo} alt="icon" />
                </Grid>
                <Grid item sm={12} xs={12} lg={9} pl={1}>
                  <Typography>
                    Select a PNG image for the icon of your wallet.
                  </Typography>
                  <Typography>
                    Preferred image size: W: 1024px | H: 1024px.
                  </Typography>
                  <Button
                    sx={{ backgroundColor: 'white', color: 'black', mt: 2 }}
                  >
                    Select Image
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid
        container
        spacing={2}
        mt={4}
        display="flex"
        justifyContent="flex-end"
      >
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => navigate('/wizard/coin/step-block-confirmation')}
          >
            Previous
          </Button>
        </Grid>
        <Grid item>
          {wizardData.workshop === 'Custom' && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/network')}
            >
              Next
            </Button>
          )}
          {wizardData.workshop === 'Coin' && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/coin/checkout')}
            >
              Checkout
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}
StepCoinCustomLogo.propTypes = {
  wizardData: PropTypes.object,
  setwizardData: PropTypes.object,
};
export default StepCoinCustomLogo;
