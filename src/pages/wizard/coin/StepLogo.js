import React, { useEffect } from 'react';
import customLogo from './../../../assets/customLogo.svg';
import { Typography, Button, Grid, Container, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from './../WizardSteppers';
import { PropTypes } from 'prop-types';

function StepCoinCustomLogo({ wizardData }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
  }, []);

  return (
    <Container>
      {wizardData.workshop === 'Coin' && (
        <Typography variant="h3">Coin Workshop</Typography>
      )}
      {wizardData.workshop === 'Custom' && (
        <Typography variant="h3">
          <span>1. Coin Workshop</span>
          <span>2. Smart Contract Workshop</span>
        </Typography>
      )}
      <Grid container>
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={3} from={'coin'} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
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
              onClick={() => navigate('/wizard/step-coin-block-confirmation')}
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
                onClick={() => history.push('checkout')}
              >
                Checkout
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
StepCoinCustomLogo.propTypes = {
  wizardData: PropTypes.object,
  setwizardData: PropTypes.object,
};
export default StepCoinCustomLogo;
