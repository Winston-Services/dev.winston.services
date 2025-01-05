import React from 'react';

import { Container, Grid, Typography, Button, Alert } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import useApi from '../../hooks/useApi';
import ContactUsIcon from './../../assets/contact_us.svg';
import TextField from './../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required(' Message is required'),
});

function ContactUs() {
  const [hasError, setHasError] = React.useState(false);
  const [postContactUs, { isLoading, error }] =
    useApi().endpoints.postContactUs.useMutation();

  const handleSubmit = async (values, actions) => {
    if (isLoading) return;
    try {
      await postContactUs(values);
      actions.resetForm();
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return (
    <Container>
      <Typography variant="h3">Contact us</Typography>
      <Grid
        container
        columnSpacing={3}
        display="flex"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        alignItems="center"
      >
        <Grid item xs={12} md={6} width="100%">
          <Typography variant="h5" mt={5}>
            Quick query form
          </Typography>
          <Typography variant="subtitle2">
            by filling this form we will contact you soon
          </Typography>
          {hasError && (
            <Alert severity="error">
              Something went wrong <br /> {error.message}
            </Alert>
          )}
          <Grid mt={{ xs: 3, sm: 5 }}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, actions) => {
                console.log(values);
                handleSubmit(values, actions);
              }}
            >
              <Form>
                <Grid display={'flex'} flexDirection={'column'} gap={2}>
                  <TextField
                    fullWidth
                    name="name"
                    variant="outlined"
                    label="Your Name"
                    placeholder="Enter your name"
                  />
                  <TextField
                    fullWidth
                    name="email"
                    variant="outlined"
                    label={'Email Id'}
                    placeholder={'Enter your email ID'}
                  />
                  <TextField
                    fullWidth
                    name="message"
                    variant="outlined"
                    multiline={true}
                    rows={4}
                    label={'Message'}
                    placeholder={'Type you Query Here'}
                  />
                  <Grid mt={{ xs: 3, sm: 5 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      sx={{ width: { xs: '100%', sm: 'auto' } }}
                      disabled={isLoading}
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={ContactUsIcon} style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
