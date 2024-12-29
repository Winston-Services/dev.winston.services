import React from 'react';

import { Typography, Button, Box, Link, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from '../../components/common/Form';
import TextField from '../../components/common/TextField';
import useAuth from '../../context/authContext';
import useApi from '../../hooks/useApi';
// import Wallet from './../../utils/wallet';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[0-9]/, 'Password must have at least one number')
    .matches(
      /[\^$*.[\]{}()?\-"!@#%&/,><':;|_~`]/,
      'Password must have at least one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const [createUserMutation, { isLoading: createUserLoading }] =
    useApi().endpoints.createUser.useMutation();
  const [created, setCreated] = React.useState({ init: false, user: null });
  
  const handleSubmit = (values) => {
    setError(null);
    if (createUserLoading) {
      return;
    }
    return createUserMutation(values)
      .then((res) => {
        // console.log('res', values, res);
        if (res.error) {
          setError('Unable to create user');
          return;
        }
        const { user, success, message } = res.data.data;
        // console.log('success',  res.data.data.success);
        if (success) {
          createUser(user);
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

  const createUser = (user) => {
    setCreated({
      user,
      init: true,
    });
  };

  React.useEffect(() => {
    if (auth.authenticated) {
      navigate('/dashboard');
    }
  }, []);

  if (created.init) {
    return (
      <>
        <Box>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="h5">Welcome to the Winston Community</Typography>
          <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
            Account Created
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Alert severity="success">
              Your account has been created. You can now login to the platform.
            </Alert>
          </Box>

          <Typography sx={{ mt: 5 }}>
            Your key is saved successfully.
            <Link onClick={() => navigate('/sign-in')} sx={{ ml: 1 }}>
              Click here to sign in
            </Link>
          </Typography>

          <Typography variant="subtitle2" sx={{ my: 2 }}>
            Note : You want to store your private key in a safe place for
            accessing the platforms features.
          </Typography>
          <Alert severity="warning">
            KEEP YOUR PRIVATE KEY SAFE AND SECURE.
          </Alert>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box>
          {error && <Alert severity="error">{error}</Alert>}
          <Typography variant="h5">Join the Winston Community</Typography>
          <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            Create your account.
          </Typography>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              variant="outlined"
              label={'Email'}
              type="email"
              required
              fullWidth
              placeholder={'Enter your email'}
            />

            <TextField
              name="password"
              sx={{ mt: 3 }}
              variant="outlined"
              label={'Password'}
              type="password"
              required
              fullWidth
              placeholder={'Enter your password'}
            />
            <TextField
              name="confirmPassword"
              sx={{ mt: 3 }}
              variant="outlined"
              label={'Confirm Password'}
              type="password"
              placeholder={'Enter your confirm password'}
              fullWidth
              required
            />
            <Box component="div" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={createUserLoading}
              >
                {createUserLoading
                  ? 'Creating your account...'
                  : 'Create your account'}
              </Button>
            </Box>
          </Form>
          <Typography sx={{ mt: 5 }}>
            Already have an account?
            <Link
              underline="none"
              onClick={() => navigate('/sign-in')}
              sx={{ ml: 1 }}
            >
              Login to your account
            </Link>
          </Typography>
        </Box>
      </>
    );
  }
}

export default SignUp;
