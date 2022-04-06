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
  blockReward: Yup.string().required('Block reward is required'),
  blockHalving: Yup.string().required('Block halving is required'),
  coinSupplyWithoutPremine: Yup.string().required(
    'Coin supply without premine is required'
  ),
  fullPremine: Yup.boolean().oneOf([true]),
  premine: Yup.string().required('Premine is required'),
  premineAmount: Yup.string().required('Premine amount is required'),
  coinSupplyWithPremine: Yup.string().required(
    'Coin supply with premine is required'
  ),
});
function StepCoinBlockReward({ wizardCoinData, setWizardCoinData }) {
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

              <CheckBox
                name="fullPremine"
                label={'100% premine'}
                helperText="Your total coin supply is available after the mining of
                      block #1."
              />
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
StepCoinBlockReward.propTypes = {
  wizardData: PropTypes.object,
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};
export default StepCoinBlockReward;
