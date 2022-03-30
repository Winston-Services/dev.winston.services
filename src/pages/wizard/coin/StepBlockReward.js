import React from 'react';
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  Container,
  Card,
  Button,
  FormHelperText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from '../WizardSteppers';
import { PropTypes } from 'prop-types';

import TextField from './../../../components/common/TextField';
import DropDown from './../../../components/common/DropDown';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const INITIAL_FORM_STATE = {
  blockReward: '',
  blockHalving: '',
  coinSupplyWithoutPremine: '',
  premine: 'Yes',
  premineAmount: '',
  coinSupplyWithPremine: '',
};

const FORM_VALIDATION = Yup.object().shape({
  blockReward: Yup.string().required('Block reward is required'),
  blockHalving: Yup.string().required('Block halving is required'),
  coinSupplyWithoutPremine: Yup.string().required(
    'Coin supply without premine is required'
  ),
  premine: Yup.string().required('Premine is required'),
  premineAmount: Yup.string().required('Premine amount is required'),
  coinSupplyWithPremine: Yup.string().required(
    'Coin supply with premine is required'
  ),
});
function StepCoinBlockReward({ wizardData }) {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/wizard/step-coin-block-confirmation');
  };

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
          <WizardSteppers activeStepCount={2} from={'coin'} />
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form>
              <Card sx={{ p: 6 }} elevation={0}>
                <Grid display={'flex'} flexDirection="column" gap={3}>
                  <TextField
                    name="blockReward"
                    label={'Block reward'}
                    placeholder={'50'}
                    helperText="Number of coins received for mining a block with Proof of Work."
                  />
                  <TextField
                    name="blockHalving"
                    label={'Block halving'}
                    placeholder={'210000'}
                    helperText="Block halving splits the block reward in half."
                  />
                  <TextField
                    name="coinSupplyWithoutPremine"
                    label={'Coin Supply without premine'}
                    placeholder={'21000000'}
                    helperText="Total number of coins your coin will create."
                  />
                  <DropDown
                    name="premine"
                    label={'Premine'}
                    options={['Yes', 'No']}
                    helperText="Premine"
                  />
                  <Grid display={'flex'} alignItems="center">
                    <FormControlLabel
                      control={<Checkbox />}
                      label="100% premine"
                    />
                    <FormHelperText>
                      (Your total coin supply is available after the mining of
                      block #1.)
                    </FormHelperText>
                  </Grid>
                  <TextField
                    name="premineAmount"
                    label={'Premine amount'}
                    placeholder={'1'}
                    helperText="Number of coins that is available after the mining of block #1."
                  />
                  <TextField
                    name="coinSupplyWithPremine"
                    label={'Coin supply with premine'}
                    placeholder={'21000000'}
                    helperText="Total number of coins your coin will create."
                  />
                </Grid>
              </Card>
              <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
                <Button variant="outlined" onClick={() => navigate(-1)}>
                  Previous
                </Button>
                <Button variant="contained" color="secondary" type="submit">
                  Next
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}
StepCoinBlockReward.propTypes = {
  wizardData: PropTypes.object,
};
export default StepCoinBlockReward;
