import React, { useState } from 'react';


import {
  Typography,
  Button,
  Box,
  Link,
  Alert,
  // Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from '../../components/common/Form';
import TextField from '../../components/common/TextField';
import useAuth from '../../context/authContext';
import useApi from '../../hooks/useApi';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
  .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
  .matches(/[0-9]/, 'Password must have at least one number')
  .matches(
    /[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`]/,
    'Password must have at least one special character'
  ),
});

function SignIn() {
  const navigate = useNavigate();
  const api = useApi();
  const [loginMutation, { isLoading: loginLoading }] =
    api.endpoints.login.useMutation();

  const auth = useAuth();
  const [error, setError] = useState(null);

  const handleSubmit = (values) => {
    setError(null);
    if (loginLoading) {
      return;
    }
    return loginMutation(values).unwrap().then(async (res) => {
      if (res.error) {
        setError('Unable to login');
        return;
      }
      const { data, message } = res;
      // console.log('res', data);
      const { email, token } = data;
      // console.log('success',  message);
      if (message === 'Success') {
        if (await auth.setAuth({ email, token })) {
          navigate('/dashboard');
        } else {
          setError('Unable to login');
        }
        return;
      } else {
        console.log('error', res.data);
        setError(message);
      }
    })
    .catch((err) => {
      console.log('err', err);
      setError(err.error);
    });
  };

  return (
    <Box>
      <Typography variant="h5">Sign in to</Typography>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Your Account
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Typography variant="subtitle2" sx={{ my: 6 }}>
        Note : Don&apos;t share your password with anyone.
      </Typography>
      <Form
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          label={'Email'}
          required
          placeholder={'Enter your email address'}
          sx={{ mb: 2 }}
        />
        <TextField
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          label={'Password'}
          required
          placeholder={'Enter your password'}
        />

        <Box component="div" sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            sx={{ mr: { xs: 1, md: 3 } }}
            type="submit"
            disabled={loginLoading}

          >
            Sign In
          </Button>
        </Box>
      </Form>

      <Typography sx={{ mt: 5 }}>
        Don’t have an account?
        <Link
          underline="none"
          onClick={() => navigate('/sign-up')}
          sx={{ ml: 1 }}
        >
          Let’s create your account!
        </Link>
      </Typography>
    </Box>
  );
}

export default SignIn;
