import React from 'react';

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  FormHelperText,
} from '@mui/material';
import { Form, Formik, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import Checkbox from '../../components/common/CheckBox';
import TextField from '../../components/common/TextField';
import CampainImage from './../../assets/campain.svg';
import Logo from './../../assets/logo.svg';
import './index.css';

const FORM_VALIDATION = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Name is required'),
  country: Yup.string().required('Country is required'),
  pinCode: Yup.string().required(' PinCode is required'),
  tnc: Yup.boolean().oneOf([true], 'accept term and condition'),
});

const initialValues = {
  fullName: '',
  country: '',
  pinCode: '',
  tnc: false,
};

function Campain() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box
        className="campainGradient"
        component={'div'}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      />
      <Container maxWidth="xl" sx={{ margin: 'auto' }}>
        <Grid container sx={{ display: 'flex', msFlexDirection: 'column' }}>
          <Grid item md={12} lg={4}>
            <Box
              component="img"
              src={Logo}
              alt="crypto"
              onClick={() => {
                navigate('/');
              }}
              sx={{ mb: 10.5, mt: 14, height: '72px', cursor: 'pointer' }}
            />
            <Grid container display={'flex'} flexDirection="column">
              <Typography sx={{ fontSize: '50px' }}>
                Let’s Start with Basic
              </Typography>
              <Typography variant="subtitle2" mt={1}>
                We are here to guid you for Crowd Funding Journey
              </Typography>
              <Formik
                initialValues={{ ...initialValues }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                  navigate('/campaign/user-dashboard');
                }}
              >
                <Form>
                  <Grid container mt={4.6} gap={2}>
                    <TextField
                      fullWidth
                      name="fullName"
                      variant="outlined"
                      label="Full Name"
                      placeholder="Enter your name"
                    />
                    <TextField
                      fullWidth
                      name="country"
                      variant="outlined"
                      label="Country"
                      placeholder="Select your Country"
                    />
                    <TextField
                      fullWidth
                      name="pinCode"
                      variant="outlined"
                      label="Pincode"
                      placeholder="Select your PinCode"
                    />
                  </Grid>
                  <Grid
                    container
                    my={5}
                    display="flex"
                    alignItems={'start'}
                    flexDirection="column"
                  >
                    <Grid display={'flex'} alignItems="center">
                      <Checkbox name="tnc" />
                      <Grid item display="flex" gap={1}>
                        <Link>
                          <Typography variant="subtitle1">Terms</Typography>
                        </Link>
                        <Typography variant="subtitle1">&</Typography>
                        <Link>
                          <Typography variant="subtitle1">
                            Conditions
                          </Typography>
                        </Link>
                        <Typography variant="subtitle1">of Winston</Typography>
                      </Grid>
                    </Grid>
                    {initialValues.tnc === true ? (
                      <></>
                    ) : (
                      <FormHelperText error={true}>
                        <ErrorMessage name="tnc" />
                      </FormHelperText>
                    )}
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ width: { xs: '100%', md: 'auto' } }}
                  >
                    Next
                  </Button>
                </Form>
              </Formik>
            </Grid>
          </Grid>
          <Grid item md={0} lg={2}></Grid>
          <Grid
            item
            xs={12}
            sm={10.5}
            lg={6}
            display="flex"
            flexDirection="column"
            sx={{ alignItems: { xs: 'start', lg: 'end' } }}
          >
            <Grid item mt={14} sx={{ display: { xs: 'none', lg: 'block' } }}>
              <img src={CampainImage} alt="campain-image" width="100%" />
            </Grid>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                mt: { xs: 2, sm: 4.7 },
                mb: 2,
                width: { xs: '100%', md: 'auto' },
              }}
              onClick={() => navigate('/campaign/user-dashboard')}
            >
              Skip
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Campain;
