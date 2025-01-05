import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';

import Form from '../../../../components/common/Form';

export const AddToken = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Add Token
          </Typography>
          <Form
            initialValues={{
              chainId: '',
              name: '',
              symbol: '',
              decimals: '',
              token: '',
              type: 'ERC20',
              banner: '',
              website: '',
              description: '',
              tags: [],
              category: '',
              verified: false,
              icon: '',
              enable: true,
            }}
            validationSchema={yup.object().shape({
              chainId: yup.string().required('Chain ID is required'),
              name: yup.string().required('Name is required'),
              symbol: yup.string().required('Symbol is required'),
              decimals: yup.number().required('Decimals is required'),
              token: yup.string().required('Token Address is required'),
            })}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth name="chainId" label="Chain ID" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="symbol" label="Symbol" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="token" label="Token Address" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="decimals" label="Decimals" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="type" label="Type" />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="secondary">
                  Add Token
                </Button>
              </Grid>
            </Grid>
          </Form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddToken;