import React from 'react';

import {
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Container,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import DropDown from './../../components/common/DropDown';
import FormTextField from './../../components/common/TextField';
import SwapTable from './SwapTable';

const digitsOnly = (value) => /^\d+$/.test(value);

const FORM_VALIDATION = Yup.object().shape({
  token: Yup.string().required(' Token is required'),
  address: Yup.string().required(' Token is required'),
  amount: Yup.string().test(
    'Digits only',
    'The field should have digits only',
    digitsOnly
  ),
});

export default function Swapping() {
  const [initialValues1] = React.useState({
    network: 'Network',
    token: '',
    address: '',
    amount: '',
  });
  const [initialValues2] = React.useState({
    network: 'Network',
    token: '',
    address: '',
    amount: '',
  });
  return (
    <Container>
      <Grid container spacing={8} justifyContent={'center'}>
        <Grid item>
          <Typography variant="h3">Swapping</Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Formik
                initialValues={{
                  ...initialValues1,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Swap From</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 3, sm: 1.5, md: 0 } }}>
                      <DropDown
                        label="Network"
                        name="network"
                        options={['Network']}
                        placeholder="Network"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="token"
                        fullWidth
                        label="Token"
                        placeholder="Token"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="address"
                        fullWidth
                        label="Address"
                        placeholder="Token Address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="amount"
                        fullWidth
                        label="Amount"
                        placeholder="Amount"
                      />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Card>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Formik
                initialValues={{
                  ...initialValues2,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Swap To</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 3, sm: 1.5, md: 0 } }}>
                      <DropDown
                        label="Network"
                        name="network"
                        options={['Network']}
                        placeholder="Network"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="token"
                        fullWidth
                        label="Token"
                        placeholder="Token"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="address"
                        fullWidth
                        label="Address"
                        placeholder="Token Address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormTextField
                        name="amount"
                        fullWidth
                        label="Amount"
                        placeholder="Amount"
                      />
                    </Grid>
                    <Grid item xs={12} textAlign={'center'}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Confirm
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Card elevation={0}>
              <Grid
                item
                display={'flex'}
                alignItems="center"
                sx={{
                  flexDirection: { sm: 'row', xs: 'column' },
                  alignItems: { xs: 'start' },
                }}
                px={2}
                py={3}
              >
                <Grid item xs={12} sm={6} sx={{ px: { xs: 1.5, sm: 1.2 } }}>
                  <Typography variant="h5">Swap</Typography>
                </Grid>
                <Grid
                  item
                  sm={6}
                  display="flex"
                  justifyContent={'end'}
                  alignItems="center"
                  gap={1}
                  sx={{ px: { xs: 1.5, sm: 0 }, mt: { xs: 1.7, sm: 0 } }}
                >
                  <Typography>Filter:</Typography>
                  <TextField
                    sx={{ backgroundColor: '#271D5A', borderRadius: '5px' }}
                    variant="standard"
                    hiddenLabel
                    fullWidth
                    color="filled"
                    placeholder="From"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                  <TextField
                    sx={{ backgroundColor: '#271D5A', borderRadius: '5px' }}
                    variant="standard"
                    hiddenLabel
                    fullWidth
                    color="filled"
                    placeholder="To"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} pb={2}>
                <SwapTable />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
