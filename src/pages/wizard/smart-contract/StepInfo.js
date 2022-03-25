import React, { useEffect } from 'react';
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  Card,
  ListItem,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ethereumBlue from './../../../assets/ethereum_blue.svg';
import { PropTypes } from 'prop-types';
import WizardSteppers from '../WizardSteppers';

function StepInfo({ wizardData }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
  }, []);

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
          <WizardSteppers activeStepCount={4} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <ListItem>
              <ListItemAvatar>
                <img width={'60%'} src={ethereumBlue} alt="icon" />
              </ListItemAvatar>
              <Typography variant={'h5'}>
                {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                {wizardData.typeOfContact}
              </Typography>
            </ListItem>
            <Grid mb={3}>
              <Divider />
            </Grid>
            <Grid container spacing={4}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Security Contact'}
                  placeholder={'Security Contact'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'License'}
                  placeholder={'License'}
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
              onClick={() => navigate('/wizard/checkout')}
            >
              Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
StepInfo.propTypes = {
  wizardData: PropTypes.object,
};

export default StepInfo;
