import React from 'react';

import { Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import CheckBox from './../../../../components/common/CheckBox';
import DropDown from './../../../../components/common/DropDown';
import TextField from './../../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  coinbaseMaturity: Yup.string().required('Coinbase maturity is required'),
  numberOfConfirmations: Yup.string().required(
    'Number of confirmations is required'
  ),
  targetSpacingInMinutes: Yup.string().required(
    'Target spacing in minutes is required'
  ),
  targetTimespanInMinutes: Yup.string().required(
    'Target timespan in minutes is required'
  ),
  hardCodedNode: Yup.boolean().oneOf([true]),
  node1: Yup.string().required('Node 1 is required'),
  node2: Yup.string().required('Node 2 is required'),
});
function StepCoinBlockConfirmation({ wizardFormData, setWizardFormData }) {
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
                name={'coinbaseMaturity'}
                label={'Coinbase maturity'}
                placeholder={'50'}
                helperText="Number of coins received for mining a block with Proof of Work."
              />
              <TextField
                name={'numberOfConfirmations'}
                label={'Number of confirmations'}
                placeholder={'6'}
                helperText="Number of blocks before a transaction is confirmed."
              />
              <TextField
                name="targetSpacingInMinutes"
                label={'Target spacing in minutes'}
                placeholder={'5'}
                helperText="Number of minutes it should take to mine a block."
              />
              <DropDown
                name="targetTimespanInMinutes"
                label={'Target timespan in minutes'}
                options={[10, 20, 30]}
                helperText={'Target timespan in minutes'}
              />
              <CheckBox
                name="hardCodedNode"
                label={'Hardcoded node'}
                helperText="Your wallet will automatically connect with a hardcoded
                    node."
              />
              <TextField
                name={'node1'}
                label={'Node 1'}
                placeholder={'Node2.winston.services'}
              />
              <TextField
                name={'node2'}
                label={'Node 2'}
                placeholder={'Secondnode.winston.services'}
                helperText="(Hostname/IP of second server that will run a node for your coin.)"
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
StepCoinBlockConfirmation.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
export default StepCoinBlockConfirmation;
