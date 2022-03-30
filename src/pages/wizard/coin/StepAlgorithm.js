import React from 'react';
import { Grid, Card, Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from '../WizardSteppers';
import { PropTypes } from 'prop-types';

import TextField from './../../../components/common/TextField';
import DropDown from './../../../components/common/DropDown';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const INITIAL_FORM_STATE = {
  email: '',
  coinType: 'Paid',
  coinAlgorithm: 'Scrpt - proof of work1',
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email id').required('Email is required'),
  coinType: Yup.string().required('Select coin type'),
  coinAlgorithm: Yup.string().required('Select coin algorithm'),
});

function StepAlgorithmCoin({ wizardData }) {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    navigate('/wizard/step-coin-name');
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
        <Grid item mt={6} mb={6} xs={12}>
          <WizardSteppers activeStepCount={0} from={'coin'} />
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
                    name="email"
                    label="Email"
                    placeholder="Email"
                    helperText="Please Enter your Email address"
                  />
                  <TextField
                    name="coinType"
                    label="Coin Type"
                    placeholder="Coin Type"
                    helperText="Coin Type"
                    disabled
                  />
                  <DropDown
                    name="coinAlgorithm"
                    label="Coin Algorithm"
                    options={[
                      'Scrpt - proof of work1',
                      'Scrpt - proof of work2',
                      'Scrpt - proof of work3',
                    ]}
                    helperText="Select the algorithm for your coin."
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

StepAlgorithmCoin.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
};

export default StepAlgorithmCoin;
