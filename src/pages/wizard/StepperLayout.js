import React from 'react';

import { Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { wizardDataSelector } from './../../store/wizard';
import WizardSteppers from './WizardSteppers';

export default function StepperLayout() {
  const wizardData = useSelector(wizardDataSelector);
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
        <Grid item mt={6} mb={6} xs={12}>
          <WizardSteppers activeStepCount={0} from={'coin'} />
        </Grid>
        <Outlet />
      </Grid>
    </Container>
  );
}
