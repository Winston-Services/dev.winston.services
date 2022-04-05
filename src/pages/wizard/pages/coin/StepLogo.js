import React from 'react';

import { Typography, Button, Grid, Card, Input } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as yup from 'yup';

import customLogo from './../../../../assets/customLogo.svg';

const FORM_VALIDATION = yup.object().shape({
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
function StepCoinCustomLogo({ wizardData, wizardFormData, setWizardFormData }) {
  const { previous, next } = useOutletContext();
  const handleSubmit = (values) => {
    setWizardFormData(values);
    next();
  };
  const handleUploadFile = (event) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(fileUploaded);
    reader.onload = () => {
      console.log(reader.result);
    };
  };
  return (
    <Formik
      initialValues={{ ...wizardFormData }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      <Form style={{ width: '100%' }}>
        <Grid item xs={12}>
          <Card sx={{ p: 6 }} elevation={0}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12} lg={6}>
                <Typography>Wallet icon</Typography>
                <Grid container mt={3}>
                  <Grid item sm={12} xs={12} lg={3}>
                    <img src={customLogo} alt="icon" />
                  </Grid>
                  <Grid item sm={12} xs={12} lg={9} pl={1}>
                    <Typography>
                      Select a PNG image for the icon of your wallet.
                    </Typography>
                    <Typography>
                      Preferred image size: W: 1024px | H: 1024px.
                    </Typography>
                    <Input
                      id={'walletIcon'}
                      onChange={handleUploadFile}
                      name="walletIcon"
                      type="file"
                      sx={{ display: 'none' }}
                    />
                    <Button
                      component={'label'}
                      htmlFor={'walletIcon'}
                      sx={{ backgroundColor: 'white', color: 'black', mt: 2 }}
                    >
                      Select Image
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6} xs={12} lg={6}>
                <Typography>Wallet testnet icon</Typography>
                <Grid container mt={3}>
                  <Grid item sm={12} xs={12} lg={3}>
                    <img src={customLogo} alt="icon" />
                  </Grid>
                  <Grid item sm={12} xs={12} lg={9} pl={1}>
                    <Typography>
                      Select a PNG image for the testnet icon of your wallet.
                    </Typography>
                    <Typography>
                      Preferred image size: W: 1024px | H: 1024px.
                    </Typography>
                    <Input
                      onChange={handleUploadFile}
                      id={'walletTestIcon'}
                      name="walletTestnetIcon"
                      type="file"
                      sx={{ display: 'none' }}
                    />
                    <Button
                      component={'label'}
                      htmlFor={'walletTestIcon'}
                      sx={{ backgroundColor: 'white', color: 'black', mt: 2 }}
                    >
                      Select Image
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid
          container
          spacing={2}
          mt={4}
          display="flex"
          justifyContent="flex-end"
        >
          <Grid item>
            <Button variant="outlined" onClick={previous}>
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="secondary">
              {wizardData.workshop === 'Custom' ? 'Next' : 'Checkout'}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
StepCoinCustomLogo.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
export default StepCoinCustomLogo;
