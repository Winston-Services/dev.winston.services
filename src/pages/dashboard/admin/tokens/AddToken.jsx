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
import UploadFile from '../../../../components/common/UploadFile';

export const AddToken = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            List Token
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
              type: yup.string().required('Type is required'),
              banner: yup.mixed(),
              website: yup.string(),
              description: yup.string(),
              tags: yup.array(),
              category: yup.string(),
              verified: yup.boolean(),
              icon: yup.mixed().required('Icon is required'),
              enable: yup.boolean(),
            })}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Banner</Typography>
                <UploadFile name="banner" label="Banner" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="description" label="Description" />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Icon</Typography>
                <UploadFile name="icon" label="Icon" />
              </Grid>
              <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="secondary" fullWidth>
                  List Token
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
