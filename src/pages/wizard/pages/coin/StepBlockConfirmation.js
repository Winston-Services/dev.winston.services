import React from 'react';

import { Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import CheckBox from './../../../../components/common/CheckBox';
import TextField from './../../../../components/common/TextField';

function StepCoinBlockConfirmation({ wizardCoinData, setWizardCoinData }) {
  const { previous, next } = useOutletContext();
  const handleSubmit = (values) => {
    setWizardCoinData(values);
    next();
  };

  const FORM_VALIDATION = Yup.object().shape({
    minimumCoinAge:
      wizardCoinData.coinAlgorithm ===
        'Scrypt- Proof of Work and Proof of Stack' &&
      Yup.number()
        .required('The “Minimum coin age” value cannot be empty.')
        .min(
          1,
          'The “Minimum coin age” value must be a number between 1 and 1000.'
        )
        .max(
          1000,
          'The “Minimum coin age” value must be a number between 1 and 1000.'
        ),
    coinbaseMaturity: Yup.number()
      .required('The “Coinbase maturity” value cannot be empty.')
      .min(
        1,
        'The “Coinbase maturity” value must be a number between 1 and 100.'
      )
      .max(
        100,
        'The “Coinbase maturity” value must be a number between 1 and 100.'
      ),
    numberOfConfirmations: Yup.number()
      .required('The “Number of confirmations” value cannot be empty.')
      .min(
        1,
        'The “Number of confirmations” value must be a number between 1 and 100.'
      )
      .max(
        100,
        'The “Number of confirmations” value must be a number between 1 and 100.'
      ),
    targetSpacingInMinutes: Yup.number()
      .required('The “Target spacing in minutes” value cannot be empty.')
      .min(
        1,
        'The “Target spacing in minutes” value must be a number between 1 and 120.'
      )
      .max(
        120,
        'The “Target spacing in minutes” value must be a number between 1 and 120.'
      ),
    targetTimespanInMinutes: Yup.number()
      .required('The “Target timespan in minutes” value cannot be empty.')
      .min(
        1,
        'The “Target timespan in minutes” value must be a number between 1 and 120.'
      )
      .max(
        120,
        'The “Target timespan in minutes” value must be a number between 1 and 120.'
      ),
    masternodeAmount:
      [
        'X11 - Proof of Work + Masternode',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Masternode amount” value cannot be empty.')
        .min(
          1,
          'The “Masternode amount” value must be a number between 1 and 1000000000.'
        )
        .max(
          1000000000,
          'The “Masternode amount” value must be a number between 1 and 1000000000.'
        ),
    masternodeConfirmations:
      [
        'X11 - Proof of Work + Masternode',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Masternode confirmations” value cannot be empty.')
        .min(
          1,
          'The “Masternode confirmations” value must be a number between 1 and 1000.'
        )
        .max(
          1000,
          'The “Masternode confirmations” value must be a number between 1 and 1000.'
        ),
    node1:
      wizardCoinData.hardCodedNode &&
      Yup.string().required('The “Node 1” value cannot be empty.'),
  });

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
              {wizardCoinData.coinAlgorithm ===
                'Scrypt- Proof of Work and Proof of Stack' && (
                <TextField
                  name={'minimumCoinAge'}
                  label={'Minimum Coin Age'}
                  placeholder={'8'}
                  helperText="Number of hours before confirmed coins begin to stake."
                  autoComplete="off"
                />
              )}

              <TextField
                name={'coinbaseMaturity'}
                label={'Coinbase maturity'}
                placeholder={'50'}
                helperText="Number of coins received for mining a block with Proof of Work."
                autoComplete="off"
              />
              <TextField
                name={'numberOfConfirmations'}
                label={'Number of confirmations'}
                placeholder={'6'}
                helperText="Number of blocks before a transaction is confirmed."
                autoComplete="off"
              />
              <TextField
                name="targetSpacingInMinutes"
                label={'Target spacing in minutes'}
                placeholder={'5'}
                helperText="Number of minutes it should take to mine a block."
                autoComplete="off"
              />
              <TextField
                name="targetTimespanInMinutes"
                label={'Target timespan in minutes'}
                placeholder={'10'}
                helperText="Number of minutes before difficulty of the network is re-adjusted."
                autoComplete="off"
              />

              {[
                'X11 - Proof of Work + Masternode',
                'Proof of Work and Proof of Stake + Masternode',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <>
                  <TextField
                    name="masternodeAmount"
                    label={'Masternode amount'}
                    placeholder={'1000'}
                    helperText="Number of coins required to install a masternode."
                    autoComplete="off"
                  />
                  <TextField
                    name="masternodeConfirmations"
                    label={'Masternode confirmations'}
                    placeholder={'15'}
                    helperText="Number of confirmations before the masternode installation transaction is accepted."
                    autoComplete="off"
                  />
                </>
              )}

              <CheckBox
                name="hardCodedNode"
                label={'Hardcoded node'}
                helperText="Your wallet will automatically connect with a hardcoded
                    node."
                onChange={(value) =>
                  setWizardCoinData({ hardCodedNode: value })
                }
              />
              {wizardCoinData.hardCodedNode === true ? (
                <>
                  {' '}
                  <TextField
                    name={'node1'}
                    label={'Node 1'}
                    placeholder={'Node2.winston.services'}
                    helperText="Hostname/IP of server that will run a node for your coin."
                    autoComplete="off"
                  />
                  <TextField
                    name={'node2'}
                    label={'Node 2'}
                    placeholder={'Secondnode.winston.services'}
                    helperText="Hostname/IP of second server that will run a node for your coin."
                    autoComplete="off"
                  />
                </>
              ) : (
                <></>
              )}
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
StepCoinBlockConfirmation.propTypes = {
  wizardData: PropTypes.object,
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};
export default StepCoinBlockConfirmation;
