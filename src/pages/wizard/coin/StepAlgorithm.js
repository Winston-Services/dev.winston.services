import React from 'react';

import { Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from './../../../components/common/DropDown';
import TextField from './../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  // email: Yup.string().email('Invalid email id').required('Email is required'),
  // coinType: Yup.string().required('Select coin type'),
  // coinAlgorithm: Yup.string().required('Select coin algorithm'),
});

function StepAlgorithmCoin({ wizardFormData, setWizardFormData }) {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    setWizardFormData(values);
    navigate('/wizard/coin/step-name');
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardFormData }}
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
            <Button variant="outlined" onClick={() => navigate('/wizard')}>
              Previous
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}

StepAlgorithmCoin.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepAlgorithmCoin;
