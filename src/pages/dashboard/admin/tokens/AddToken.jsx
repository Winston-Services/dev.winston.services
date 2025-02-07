import React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';

import TextField from '../../../../components/common/TextField';
import Form from '../../../../components/common/Form';
import UploadFile from '../../../../components/common/UploadFile';
import useApi from '../../../../hooks/useApi';
import useUser from '../../../../hooks/useUser';

export const AddToken = () => {
  const user = useUser();
  const [addToken, { isLoading, isError, error }] =
    useApi().endpoints.addToken.useMutation();
  console.log(user);
  const handleSubmit = async (values) => {
    console.log(values);
    const response = await addToken({ data: values, token: user.info.token });
    console.log(response);
    if (response.error) {
      console.log(response.error.data.message);
    } else {
      console.log(response.data);
    }
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
              address: '',
              symbol: '',
              decimals: '',
              type: 'ERC20',
              banner: '',
              website: '',
              description: '',
              tags: [],
              category: '',
              verified: false,
            }}
            validationSchema={yup.object().shape({
              chainId: yup.string().required('Chain ID is required'),
              address: yup.string().required('Token Address is required'),
              name: yup.string().required('Name is required'),
              symbol: yup.string().required('Symbol is required'),
              type: yup.string().required('Type is required'),
              decimals: yup.number().required('Decimals is required'),
            })}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Grid container spacing={2}>
              {isError && <Alert severity="error">{error.data.message}</Alert>}
              <Grid item xs={12}>
                <Typography variant="h6">Banner</Typography>
                <UploadFile name="banner" label="Banner" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="symbol" label="Symbol" />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Icon</Typography>
                <UploadFile name="icon" label="Icon" />
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
              >
                <Grid item xs={12}>
                  <TextField fullWidth name="chainId" label="Chain ID" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="address" label="Token Address" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="type" label="Type" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="decimals" label="Decimals" />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  disabled={isLoading}
                >
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
