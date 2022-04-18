import React from 'react';

import { Grid, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from './../../../../components/common/DropDown';
import TextField from './../../../../components/common/TextField';
function StepCoinName({ wizardCoinData, setWizardCoinData }) {
  const { previous, next } = useOutletContext();

  const handleSubmit = (values) => {
    setWizardCoinData(values);
    next();
  };

  const FORM_VALIDATION = Yup.object().shape({
    coinName: Yup.string()
      .required('The “Coin name” value cannot be empty.')
      .matches(
        /^[aA-zZ\s]+$/,
        'The “Coin name” value can only consist of alphabetical characters.'
      )
      .min(
        2,
        'The “Coin name” value must be at least 2 characters with a maximum of 255 characters.'
      )
      .max(
        255,
        'The “Coin name” value must be at least 2 characters with a maximum of 255 characters.'
      ),
    coinAbbreviation: Yup.string()
      .required('The “Coin abbreviation” value cannot be empty.')
      .matches(
        /^[aA-zZ\s]+$/,
        'The “Coin abbreviation” value can only consist of alphabetical characters.'
      )
      .min(
        2,
        'The “Coin abbreviation” value must be at least 2 characters with a maximum of 6 characters.'
      )
      .max(
        6,
        'The “Coin abbreviation” value must be at least 2 characters with a maximum of 6 characters.'
      ),
    coinUnit:
      wizardCoinData.coinAlgorithm !==
        'Scrypt- Proof of Work and Proof of Stack' &&
      Yup.string().required('The “Coin unit” value cannot be empty.'),
    timestamp:
      wizardCoinData.coinAlgorithm !==
        'Proof of Work and Proof of Stake + Masternode' &&
      Yup.string()
        .required('The “Verbal timestamp” value cannot be empty.')
        .min(
          3,
          'The “Verbal timestamp” value must be at least 3 characters with a maximum of 70 characters.'
        )
        .max(
          70,
          'The “Verbal timestamp” value must be at least 3 characters with a maximum of 70 characters.'
        ),
    websiteUrl:
      wizardCoinData.coinAlgorithm !==
        'Proof of Work and Proof of Stake + Masternode' &&
      Yup.string()
        .required('The “Website URL” value is not valid.')
        .url('The “Website URL” value is not valid.'),
    githubUrl:
      wizardCoinData.coinAlgorithm !==
        'Proof of Work and Proof of Stake + Masternode' &&
      Yup.string()
        .required('The “Github URL” value is not valid.')
        .url('The “Github URL” value is not valid.'),
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
              <TextField
                name="coinName"
                label={'Coin name'}
                placeholder={'Bitcoin'}
                helperText="Name of your coin."
                autoComplete="off"
              />
              <TextField
                name="coinAbbreviation"
                label={'Coin abbreviation'}
                placeholder={'BTC'}
                helperText="Abbreviation for your coin."
                autoComplete="off"
              />
              <DropDown
                name="addressLetter"
                label={'Address letter'}
                options={[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J',
                  'K',
                  'L',
                  'M',
                  'N',
                  'O',
                  'P',
                  'Q',
                  'R',
                  'S',
                  'T',
                  'U',
                  'V',
                  'W',
                  'X',
                  'Y',
                  'Z',
                ]}
                helperText="Starting letter for your public address."
              />
              <DropDown
                name="addressLetterTestnet"
                label={'Address letter testnet'}
                options={[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  'A',
                  'B',
                  'C',
                  'D',
                  'E',
                  'F',
                  'G',
                  'H',
                  'I',
                  'J',
                  'K',
                  'L',
                  'M',
                  'N',
                  'O',
                  'P',
                  'Q',
                  'R',
                  'S',
                  'T',
                  'U',
                  'V',
                  'W',
                  'X',
                  'Y',
                  'Z',
                ]}
                helperText="Starting letter for your public address."
              />

              {wizardCoinData.coinAlgorithm !==
                'Scrypt- Proof of Work and Proof of Stack' && (
                <TextField
                  name="coinUnit"
                  label={'Coin unit'}
                  placeholder={'Satoshi'}
                  helperText="Name of the smallest unit for your coin."
                  autoComplete="off"
                />
              )}

              {wizardCoinData.coinAlgorithm !==
                'Proof of Work and Proof of Stake + Masternode' && (
                <>
                  <TextField
                    name="timestamp"
                    label={'TimeStamp'}
                    placeholder={
                      'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
                    }
                    helperText="Unique sentence that is stored inside your genesis block."
                    autoComplete="off"
                  />
                  <TextField
                    name="websiteUrl"
                    label={'Website URL'}
                    placeholder={'https://bitcoin.org'}
                    helperText="URL in about dialog of your coin that points to your website."
                    autoComplete="off"
                  />
                  <TextField
                    name="githubUrl"
                    label={'Github URL'}
                    placeholder={'https://github.com/bitcoin/bitcoin'}
                    helperText="URL in about dialog of your coin that points to the GitHub page of your coin."
                    autoComplete="off"
                  />
                </>
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

StepCoinName.propTypes = {
  wizardData: PropTypes.object,
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};

export default StepCoinName;
