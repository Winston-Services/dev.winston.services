import React, { useEffect } from 'react';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  TextField,
  Container,
  Card,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from '../WizardSteppers';
import DropDown from '../../../components/common/DropDown';
import { PropTypes } from 'prop-types';

function StepCoinBlockReward({ wizardData }) {
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
        <Grid item mt={6} mb={6} lg={12} md={12} sm={12} xs={12}>
          <WizardSteppers activeStepCount={2} from={'coin'} />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Card sx={{ p: 6 }}>
            <Grid container spacing={4}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Block reward'}
                  placeholder={
                    '50 (Number of coins received for mining a block with Proof of Work.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Block halving'}
                  placeholder={
                    '210000 (Block halving splits the block reward in half.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coin Supply without premine'}
                  placeholder={'21000000'}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <DropDown label={'Premine'} options={['Yes', 'No']} />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="100% premine"
                  className="wrapperCheckBox"
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Premine amount'}
                  placeholder={
                    '1 (Number of coins that is available after the mining of block #1.)'
                  }
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label={'Coin supply with premine'}
                  placeholder={'21000000'}
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
              onClick={() => navigate('/wizard/step-coin-name')}
            >
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-coin-block-confirmation')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
StepCoinBlockReward.propTypes = {
  wizardData: PropTypes.object,
};
export default StepCoinBlockReward;
