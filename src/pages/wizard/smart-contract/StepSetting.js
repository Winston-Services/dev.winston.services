import React from 'react';
import { useNavigate } from 'react-router-dom';
import ethereumBlue from './../../../assets/ethereum_blue.svg';
import { PropTypes } from 'prop-types';
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
  // Avatar,
} from '@mui/material';
import WizardSteppers from './../WizardSteppers';

function StepSetting({ wizardData }) {
  console.log(wizardData);
  const navigate = useNavigate();

  return (
    <Container>
      {wizardData.workshop === 'Smart Contract' && (
        <Typography variant="h3">Smart Contract Workshop</Typography>
      )}
      {wizardData.workshop === 'Custom' && (
        <Grid container spacing={8}>
          <Grid item>
            <Typography variant="h3" sx={{ opacity: '0.5' }}>
              1. Coin Workshop
            </Typography>
          </Grid>
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
              2. Smart Contract Workshop
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container>
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={1} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }} elevation={0}>
            {/* <Grid container>
              <Grid item lg={1} md={12} sm={12} xs={12}>
                <img src={ethereumBlue} alt="icon" />
              </Grid>
              <Grid item lg={1} md={12} sm={12} xs={12}>
                <Typography variant={'h6'}>
                  {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                  {wizardData.typeOfContact}
                </Typography>
              </Grid>
            </Grid> */}

            <ListItem>
              <ListItemAvatar>
                <img width={'60%'} src={ethereumBlue} alt="icon" />
              </ListItemAvatar>
              <Typography variant={'h5'}>
                {wizardData?.network === 'Binance' ? 'BEP ' : 'ERC '}
                {wizardData?.typeOfContact}
              </Typography>
            </ListItem>

            <Grid mb={3}>
              <Divider />
            </Grid>
            <Grid container spacing={4}>
              {wizardData.typeOfContact === '1155' ? (
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    label={'Name'}
                    placeholder={'Enter your Name'}
                  />
                </Grid>
              ) : (
                <>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      label={'Name'}
                      placeholder={'Enter your Name'}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      label={'Symbol'}
                      placeholder={'Symbol'}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      label={'Premine'}
                      placeholder={'Premine'}
                    />
                  </Grid>
                </>
              )}
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
              onClick={() => navigate('/wizard/network')}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-feature')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

StepSetting.propTypes = {
  wizardData: PropTypes.object,
};

export default StepSetting;
