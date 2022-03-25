import React, { useEffect } from 'react';
import {
  Grid,
  Card,
  Typography,
  Container,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from '../WizardSteppers';

import DropDown from '../../../components/common/DropDown';
import { PropTypes } from 'prop-types';

function StepAlgorithmCoin({ wizardData }) {
  console.log(wizardData);
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
        <Grid container spacing={8}>
          <Grid item>
            <Typography
              sx={{
                borderBottom: 'solid',
                borderImageSlice: 1,
                borderImageSource:
                  'linear-gradient(90deg, #EA7A8F 0.64%, #E452C8 99.36%)',
              }}
              variant="h3"
            >
              1. Coin Workshop
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ opacity: '0.5' }}>
              2. Smart Contract Workshop
            </Typography>
          </Grid>
        </Grid>
      )}

      <Grid container>
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={0} from={'coin'} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <Grid container spacing={4}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Email Address'}
                  placeholder={'Email'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField fullWidth label={'Coin Type'} placeholder={'Paid'} />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <DropDown
                  label={'Coin Algorithm'}
                  options={[
                    'Scrpt - proof of work1',
                    'Scrpt - proof of work2',
                    'Scrpt - proof of work3',
                  ]}
                />
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
            <Button variant="outlined" onClick={() => navigate('/wizard/')}>
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-coin-name')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

StepAlgorithmCoin.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
};

export default StepAlgorithmCoin;
