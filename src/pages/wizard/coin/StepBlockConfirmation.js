import React, { useEffect } from 'react';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Container,
  Grid,
  TextField,
  Card,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from '../WizardSteppers';
import DropDown from '../../../components/common/DropDown';
import ButtonNext from '../../../components/common/ButtonNext';
import ButtonPrev from '../../../components/common/ButtonPrev';
import { PropTypes } from 'prop-types';

function StepCoinBlockConfirmation({ wizardData }) {
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
        <Typography variant="h3" className="colorWhite service-text dFlex">
          <span
          // className={`bottom-gradient-border-5 ${
          //   matches ? ' fs50' : 'fs20 whiteSpacePre'
          // }`}
          >
            1. Coin Workshop
          </span>
          <span
          // className={`opacity50 ${
          //   matches ? ' fs50 ml70' : 'fs20 ml20 whiteSpacePre'
          // }`}
          >
            2. Smart Contract Workshop
          </span>
        </Typography>
      )}
      <Grid container>
        <Grid mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={3} from={'coin'} />
        </Grid>

        <Grid lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <Grid container spacing={4}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coinbase maturity'}
                  placeholder={
                    '50 (Number of coins received for mining a block with Proof of Work.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Number of confirmations'}
                  placeholder={
                    '6 (Number of blocks before a transaction is confirmed.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Target spacing in minutes'}
                  placeholder={
                    '5 (Number of minutes it should take to mine a block.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <DropDown
                  label={'Target timespan in minutes'}
                  options={[10, 20, 30]}
                  placeholder={
                    'Number of minutes before difficulty of the network is re-adjusted.'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Hardcoded node"
                  className="wrapperCheckBox"
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Node 1'}
                  placeholder={'Node2.winston.services'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Node 2'}
                  placeholder={
                    'Secondnode.winston.services (Hostname/IP of second server that will run a node for your coin.)'
                  }
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        mt={4}
        display="flex"
        justifyContent="flex-end"
      >
        <Grid item>
          <ButtonPrev onClick={'/wizard/step-coin-block-reward'} />
        </Grid>
        <Grid item>
          <ButtonNext onClick={'/wizard/step-coin-custom-logo'} />
        </Grid>
      </Grid>
    </Container>
  );
}
StepCoinBlockConfirmation.propTypes = {
  wizardData: PropTypes.object,
};
export default StepCoinBlockConfirmation;
