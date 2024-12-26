import React from 'react';

import { LoadingButton } from '@mui/lab';
import { Typography, Button, Box, Link, TextField, Alert } from '@mui/material';
import fileDownload from 'js-file-download';
import { useNavigate } from 'react-router-dom';

import Wallet from './../../utils/wallet';

function SignUp() {
  const navigate = useNavigate();
  const [created, setCreated] = React.useState({ init: false, wallet: null });
  const [saveToBrowser, setSaveToBrowser] = React.useState(false);
  const saveToLocalStorage = () => {
    setSaveToBrowser(true);
    localStorage.setItem('privateKey', created.wallet.walletPrivateKey);
  };

  const downloadFile = () => {
    setSaveToBrowser(true);
    fileDownload(created.wallet.walletPrivateKey, 'Wallet.pem');
  };

  const createWallet = () => {
    const newWallet = new Wallet();
    newWallet.generateKeyPair();
    setCreated({
      wallet: newWallet,
      init: true,
    });
  };
  if (created.init) {
    return (
      <>
        <Box>
          <Box sx={{ mb: 3 }}>
            <Alert severity="success">
              Your account has been created. You can now login to the platform.
            </Alert>
          </Box>
          <Typography variant="h5">Welcome to the Winston Community</Typography>
          <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
            Account Created
          </Typography>
          <Alert severity="warning">
            KEEP YOUR PRIVATE KEY SAFE AND SECURE.
          </Alert>
          <Typography variant="subtitle2" sx={{ my: 3 }}>
            This key is your only access to unlocking your account. Please keep
            it safe.
          </Typography>

          <Box component="div" sx={{ mt: 3 }}>
            <LoadingButton
              variant="outlined"
              sx={{ mr: { xs: 2, md: 3 } }}
              onClick={saveToLocalStorage}
              disabled={saveToBrowser}
            >
              {saveToBrowser ? 'Saved' : 'Save to Browser'}
            </LoadingButton>
            <Button
              variant="contained"
              color="secondary"
              // startIcon={<LockIcon />}
              onClick={downloadFile}
              size="large"
            >
              Download Key
            </Button>
          </Box>
          {saveToBrowser && (
            <Typography sx={{ mt: 5 }}>
              Your key is saved successfully.
              <Link
                underline="none"
                onClick={() => navigate('/sign-in')}
                sx={{ ml: 1 }}
              >
                Click here to sign in
              </Link>
            </Typography>
          )}
          <Typography variant="subtitle2" sx={{ my: 2 }}>
            Note : You want to store your private key in a safe place for
            accessing the platforms features.
          </Typography>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box>
          <Typography variant="h5">Join the Winston Community</Typography>
          <Typography variant="h4" sx={{ mt: 2, mb: 6 }}>
            Create your account.
          </Typography>

          <TextField
            variant="outlined"
            label={'Email'}
            type="email"
            required
            fullWidth
            placeholder={'Enter your email'}
          />

          <TextField
            sx={{ mt: 3 }}
            variant="outlined"
            label={'Password'}
            type="password"
            required
            fullWidth
            placeholder={'Enter your password'}
            // error={true}
            // helperText={'Your invalid password'}
          />
          <TextField
            sx={{ mt: 3 }}
            variant="outlined"
            label={'Confirm Password'}
            type="password"
            placeholder={'Enter your confirm password'}
            fullWidth
            required
            // error={state.errors ? true : false}
            // color={state.errors ? 'red' : ''}
            // helperText={state.errors}
          />
          <Box component="div" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={createWallet}
            >
              Create your account
            </Button>
          </Box>
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
