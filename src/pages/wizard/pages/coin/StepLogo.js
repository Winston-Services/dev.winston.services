import React, { useState } from 'react';

import {
  Typography,
  Button,
  Grid,
  Card,
  Box,
  Input,
  FormHelperText,
} from '@mui/material';
import { ErrorMessage, Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import customLogo from './../../../../assets/customLogo.svg';

const FORM_VALIDATION = Yup.object().shape({
  walletIcon: Yup.string().required('Wallet icon is required'),
  walletTestnetIcon: Yup.string().required('Testnet wallet icon is required'),
});
function StepCoinCustomLogo({ wizardData, wizardCoinData, setWizardCoinData }) {
  const { previous, next } = useOutletContext();
  const [image, setImage] = useState({
    walletIcon: wizardCoinData?.walletIcon || '',
    walletTestnetIcon: wizardCoinData?.walletTestnetIcon || '',
  });
  const handleSubmit = (values) => {
    setWizardCoinData(values);
    next();
    console.log(JSON.stringify(wizardCoinData, null, 2));
  };
  const handleUploadFile = (event, name, formik) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      formik.setFieldValue(name, reader.result);
      setImage({ ...image, [name]: reader.result });
    };
  };
  return (
    <Formik
      initialValues={{ ...wizardCoinData }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form style={{ width: '100%' }}>
            <Grid item xs={12}>
              <Card sx={{ p: 6 }} elevation={0}>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12} lg={6}>
                    <Typography>Wallet icon*</Typography>
                    <Grid container mt={3} columnSpacing={3}>
                      <Grid item sm={12} xs={12} lg={3}>
                        <Box
                          component={'img'}
                          src={
                            image?.walletIcon !== ''
                              ? image.walletIcon
                              : customLogo
                          }
                          alt="icon"
                          sx={{ width: '100%' }}
                        />
                      </Grid>
                      <Grid item sm={12} xs={12} lg={9}>
                        <Typography>
                          Select a PNG image for the icon of your wallet.
                        </Typography>
                        <Typography>
                          Preferred image size: W: 1024px | H: 1024px.
                        </Typography>
                        <Input
                          id={'walletIcon'}
                          onChange={(e) =>
                            handleUploadFile(e, 'walletIcon', formik)
                          }
                          accept="image/*"
                          type="file"
                          sx={{ display: 'none' }}
                        />
                        <Button
                          component={'label'}
                          htmlFor={'walletIcon'}
                          sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            mt: 2,
                          }}
                        >
                          Select Image
                        </Button>
                      </Grid>
                      <Grid item sm={12}>
                        <FormHelperText error={true}>
                          <ErrorMessage name="walletIcon" />
                        </FormHelperText>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm={6} xs={12} lg={6}>
                    <Typography>Wallet testnet icon*</Typography>
                    <Grid container mt={3} columnSpacing={3}>
                      <Grid item sm={12} xs={12} lg={3}>
                        <Box
                          component={'img'}
                          src={
                            image?.walletTestnetIcon !== ''
                              ? image.walletTestnetIcon
                              : customLogo
                          }
                          sx={{ width: '100%' }}
                          alt="icon"
                        />
                      </Grid>
                      <Grid item sm={12} xs={12} lg={9}>
                        <Typography>
                          Select a PNG image for the testnet icon of your
                          wallet.
                        </Typography>
                        <Typography>
                          Preferred image size: W: 1024px | H: 1024px.
                        </Typography>
                        <Input
                          onChange={(e) =>
                            handleUploadFile(e, 'walletTestnetIcon', formik)
                          }
                          id={'walletTestIcon'}
                          accept="image/*"
                          type="file"
                          sx={{ display: 'none' }}
                        />
                        <Button
                          component={'label'}
                          htmlFor={'walletTestIcon'}
                          sx={{
                            backgroundColor: 'white',
                            color: 'black',
                            mt: 2,
                          }}
                        >
                          Select Image
                        </Button>
                      </Grid>
                      <Grid item sm={12}>
                        <FormHelperText error={true}>
                          <ErrorMessage name="walletTestnetIcon" />
                        </FormHelperText>
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
        );
      }}
    </Formik>
  );
}
StepCoinCustomLogo.propTypes = {
  wizardData: PropTypes.object,
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};
export default StepCoinCustomLogo;
