import React from 'react';

import { Container, Card, Typography, Grid, Link, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import CheckBox from './../../../components/common/CheckBox';
import TextField from './../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Name is required'),
  country: Yup.string().required('Country is required'),
  goal: Yup.string().required(' goal is required'),
  tnc: Yup.boolean().oneOf([true], 'Message'),
});

function NFTForm() {
  return (
    <Container>
      <Grid container justifyContent={'center'}>
        <Grid item md={8} xs={12}>
          <Card elevation={0} sx={{ px: 5 }}>
            <Grid py={5}>
              <Typography variant="h5">
                Please fill the below Details
              </Typography>
              <Typography variant="subtitle2" mt={1}>
                We are here to guid you for Crowd Funding Journey
              </Typography>
            </Grid>
            <Grid pb={5}>
              <Formik
                initialValues={{
                  title: '',
                  country: '',
                  goal: '',
                  tnc: false,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container gap={2}>
                    <TextField
                      fullWidth
                      name="title"
                      variant="outlined"
                      label="Enter your title of Campaign*"
                      placeholder="Enter your Title"
                    />
                    <TextField
                      fullWidth
                      name="country"
                      variant="outlined"
                      label="Reason for Crowd Funding*"
                      placeholder="Select your Country"
                    />
                    <TextField
                      fullWidth
                      name="goal"
                      variant="outlined"
                      label="Enter your Goal"
                      placeholder="Enter your Goal if have any"
                    />
                  </Grid>
                  <Grid
                    container
                    mt={2}
                    mb={5}
                    display="flex"
                    alignItems={'center'}
                  >
                    <CheckBox name="tnc" />
                    <Grid item display="flex" gap={1}>
                      <Link>
                        <Typography variant="subtitle1">Terms</Typography>
                      </Link>
                      <Typography variant="subtitle1">&</Typography>
                      <Link>
                        <Typography variant="subtitle1">Conditions</Typography>
                      </Link>
                      <Typography noWrap variant="subtitle1">
                        of Winston
                      </Typography>
                    </Grid>
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
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NFTForm;
