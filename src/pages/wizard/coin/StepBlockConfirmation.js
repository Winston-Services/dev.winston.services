import React from 'react';

import { Typography, Container, Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import WizardSteppers from '../WizardSteppers';
import CheckBox from './../../../components/common/CheckBox';
import DropDown from './../../../components/common/DropDown';
import TextField from './../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  // coinbaseMaturity: Yup.string().required('Coinbase maturity is required'),
  // numberOfConfirmations: Yup.string().required(
  //   'Number of confirmations is required'
  // ),
  // targetSpacingInMinutes: Yup.string().required(
  //   'Target spacing in minutes is required'
  // ),
  // targetTimespanInMinutes: Yup.string().required(
  //   'Target timespan in minutes is required'
  // ),
  // hardCodedNode: Yup.boolean().oneOf([true]),
  // node1: Yup.string().required('Node 1 is required'),
  // node2: Yup.string().required('Node 2 is required'),
});
function StepCoinBlockConfirmation({
  wizardData,
  wizardFormData,
  setWizardFormData,
}) {
  let navigate = useNavigate();
  const handleSubmit = (values) => {
    setWizardFormData(values);
    navigate('/wizard/step-coin-custom-logo');
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
          <WizardSteppers activeStepCount={3} from={'coin'} />
        </Grid>

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
                <Button
                  variant="outlined"
                  onClick={() => navigate('/wizard/step-coin-block-reward')}
                >
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
StepCoinBlockConfirmation.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
export default StepCoinBlockConfirmation;
