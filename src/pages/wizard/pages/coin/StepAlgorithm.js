import React from 'react';

import { Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from './../../../../components/common/DropDown';
import TextField from './../../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email id').required('Email is required'),
  coinType: Yup.string().required('Select coin type'),
  coinAlgorithm: Yup.string().required('Select coin algorithm'),
});

function StepAlgorithmCoin({ wizardFormData, setWizardFormData }) {
  const { previous, next } = useOutletContext();
  const handleSubmit = (values) => {
    setWizardFormData(values);
    next();
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
                  'Script - proof of work1',
                  'Script - proof of work2',
                  'Script - proof of work3',
                ]}
                helperText="Select the algorithm for your coin."
              />
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={previous}>
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
