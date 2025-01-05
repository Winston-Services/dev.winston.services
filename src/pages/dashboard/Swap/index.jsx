import React from 'react';

import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import DropDown from '../../../components/common/DropDown';
import Form from '../../../components/common/Form';
import TextField from '../../../components/common/TextField';


export const Swap = ({ inProgress, setInProgress, handleCompleteItem }) => {
    const { row, item } = inProgress;
  
    const FORM_VALIDATION = yup.object().shape({
      network: yup.string().required('Network is required'),
      token: yup.string().required('Token is required'),
      address: yup.string().required('Address is required'),
      amount: yup.string().required('Amount is required'),
    });
  
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
  
    const handleClose = () => {
      setInProgress(false);
    };
  
    /* eslint-disable */
    const handleSubmit = () => {
      setInProgress(false);
      handleCompleteItem(row, item);
    };
    /* eslint-enable */
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [inProgress]);
  
    return (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 1 }}
      >
        <Grid item>
          <Typography variant="h3">
            Swap Across Winston{' '}
            <span style={{ float: 'right' }}>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </span>
          </Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Form
                initialValues={{
                  ...initialValues1,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
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
                    <TextField
                      name="token"
                      fullWidth
                      label="Token"
                      helperText="Token is required"
                      placeholder="Token"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="amount"
                      fullWidth
                      label="Amount"
                      helperText="Amount is required"
                      placeholder="Amount"
                    />
                  </Grid>
                  <Grid item xs={12} textAlign={'center'}>
                    <Button type="submit" variant="contained" color="secondary">
                      Approve
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Card>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Form
                initialValues={{
                  ...initialValues2,
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
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
                    <TextField
                      name="token"
                      fullWidth
                      label="Token"
                      helperText="Token is required"
                      placeholder="Token"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="amount"
                      fullWidth
                      label="Amount"
                      helperText="Amount is required"
                      placeholder="Amount"
                    />
                  </Grid>
                  <Grid item xs={12} textAlign={'center'}>
                    <Button type="submit" variant="contained" color="secondary">
                      Approve
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  Swap.propTypes = {
    setInProgress: PropTypes.func.isRequired,
    inProgress: PropTypes.object.isRequired,
    handleCompleteItem: PropTypes.func.isRequired,
  };

export default Swap;