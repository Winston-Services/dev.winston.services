import React from 'react';

import { Grid, Typography, Container, Card, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import DropDown from './../../../components/common/DropDown';
import TextField from './../../../components/common/TextField';
import WizardSteppers from './../WizardSteppers';

const FORM_VALIDATION = Yup.object().shape({
  // coinName: Yup.string().required('Coin name is required'),
  // coinAbbreviation: Yup.string().required('Coin abbreviation is required'),
  // addressLetter: Yup.string().required('Address letter is required'),
  // addressLetterTestnet: Yup.string().required(
  //   'Address letter testnet is required'
  // ),
  // coinUnit: Yup.string().required('Coin unit is required'),
  // timestamp: Yup.string().required('Timestamp is required'),
  // websiteUrl: Yup.string()
  //   .required('Website URL is required')
  //   .url('Invalid URL'),
  // githubUrl: Yup.string().required('Github URL is required').url('Invalid URL'),
});

function StepCoinName({ wizardData, wizardFormData, setWizardFormData }) {
  let navigate = useNavigate();

  const handleSubmit = (values) => {
    setWizardFormData(values);
    navigate('/wizard/step-coin-block-reward');
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
          <WizardSteppers activeStepCount={1} from={'coin'} />
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
                    name="coinName"
                    label={'Coin name'}
                    placeholder={'Bitcoin'}
                    helperText="Name of your coin."
                  />
                  <TextField
                    name="coinAbbreviation"
                    label={'Coin abbreviation'}
                    placeholder={'BTC'}
                    helperText="Abbreviation for your coin."
                  />
                  <DropDown
                    name="addressLetter"
                    label={'Address letter'}
                    options={[1, 2, 3]}
                    helperText="Starting letter for your public address."
                  />
                  <DropDown
                    name="addressLetterTestnet"
                    label={'Address letter testnet'}
                    options={['A', 'B', 'C']}
                    helperText="Starting letter for your public address."
                  />
                  <TextField
                    name="coinUnit"
                    label={'Coin unit'}
                    placeholder={'Satoshi'}
                    helperText="Name of the smallest unit for your coin."
                  />
                  <TextField
                    name="timestamp"
                    label={'TimeStamp'}
                    placeholder={
                      'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
                    }
                    helperText="Unique sentence that is stored inside your genesis block."
                  />
                  <TextField
                    name="websiteUrl"
                    label={'Website URL'}
                    placeholder={'https://bitcoin.org'}
                    helperText="URL in about dialog of your coin that points to your website."
                  />
                  <TextField
                    name="githubUrl"
                    label={'Github URL'}
                    placeholder={'https://github.com/bitcoin/bitcoin'}
                    helperText="URL in about dialog of your coin that points to the GitHub page of your coin."
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

StepCoinName.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepCoinName;
