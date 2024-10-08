import React from 'react';

import { Grid, Card, Button, Typography, Link, Paper } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from './../../../../components/common/DropDown';
import TextField from './../../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email address.')
    .required('Enter a valid email address.'),
});

function StepAlgorithmCoin({ wizardCoinData, setWizardCoinData }) {
  const { previous, next } = useOutletContext();
  const handleSubmit = (values) => {
    setWizardCoinData(values);
    next();
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardCoinData }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Card sx={{ p: { xs: 2.5, sm: 4, md: 5, lg: 6 } }} elevation={0}>
            <Grid display={'flex'} flexDirection="column" gap={3}>
              <TextField
                name="email"
                label="Email"
                placeholder="Email"
                helperText="Please Enter your Email address"
                autoComplete="off"
              />
              <TextField
                name="coinType"
                label="Coin Type"
                placeholder="Coin Type"
                helperText="Coin Type"
                disabled
                autoComplete="off"
              />
              {wizardCoinData.coinAlgorithm ===
              'Proof of Work and Proof of Stake + Masternode' ? (
                <Paper
                  elevation={0}
                  sx={{ padding: '20px', backgroundColor: '#4F409A' }}
                >
                  <Grid container gap={1}>
                    <Typography>
                      This coin has requirements to start the PoS phase.{' '}
                    </Typography>
                    <Link>
                      <Typography>Click here</Typography>
                    </Link>
                    <Typography>for more information.</Typography>
                  </Grid>
                </Paper>
              ) : (
                <></>
              )}
              <DropDown
                name="coinAlgorithm"
                label="Coin Algorithm"
                options={[
                  'Script - Proof of Work',
                  'Scrypt- Proof of Work and Proof of Stack',
                  'SHA-256 - Proof of Work',
                  'X11 - Proof of Work + Masternode',
                  'Proof of Work and Proof of Stake + Masternode',
                ]}
                helperText="Select the algorithm for your coin."
                onChange={(value) => {
                  setWizardCoinData({ coinAlgorithm: value });
                }}
              />
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={previous}
              sx={{ width: { xs: '50%', sm: 'auto' } }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: { xs: '50%', sm: 'auto' } }}
            >
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
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};

export default StepAlgorithmCoin;
