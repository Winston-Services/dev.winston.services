import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from './../WizardSteppers';
import DropDown from './../../../components/common/DropDown';
import {
  Grid,
  Typography,
  Container,
  TextField,
  Card,
  Button,
} from '@mui/material';
import { PropTypes } from 'prop-types';

function StepCoinName({ wizardData }) {
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
          <WizardSteppers activeStepCount={1} from={'coin'} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <Grid container spacing={4}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coin name'}
                  placeholder={'Bitcoin (Name of your coin.)'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coin abbreviation'}
                  placeholder={'BTC Abbreviation for your coin.'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <DropDown
                  label={'Address letter'}
                  options={[1, 2, 3]}
                  placeholder={'Starting letter for your public address.'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <DropDown
                  label={'Address letter testnet'}
                  options={['A', 'B', 'C']}
                  placeholder={'Starting letter for your public address.'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coin unit'}
                  placeholder={
                    'Satoshi (Name of the smallest unit for your coin.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'TimeStamp'}
                  placeholder={
                    'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks (Unique sentence that is stored inside your genesis block.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Website URL'}
                  placeholder={
                    'https://bitcoin.org (URL in about dialog of your coin that points to your website.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Github URL'}
                  placeholder={
                    'https://github.com/bitcoin/bitcoin (URL in about dialog of your coin that points to the GitHub page of your coin.)'
                  }
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
              onClick={() => navigate('/wizard/step-coin-block-reward')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

StepCoinName.propTypes = {
  wizardData: PropTypes.object,
};

export default StepCoinName;
