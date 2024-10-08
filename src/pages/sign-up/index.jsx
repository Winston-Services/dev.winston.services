import React from 'react';

import { LoadingButton } from '@mui/lab';
import { Typography, Button, Box, Link, TextField } from '@mui/material';
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
          <Typography variant="h3">Your new wallet</Typography>
          <Typography variant="h2" sx={{ mt: 2 }}>
            Created
          </Typography>
          <Typography variant="subtitle2" sx={{ my: 6 }}>
            Your wallet is the key to accessing the platform. We want you to
            experience a new way to access the platform with a more secure way
            then before.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label={'Password'}
            required
            placeholder={'Enter your password'}
            // error={state.errors ? true : false}
            // color={state.errors ? 'red' : ''}
            // helperText={state.errors}
          />

          <Box component="div" sx={{ mt: 5 }}>
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
                Click here to login
              </Link>
            </Typography>
          )}
          <Typography variant="subtitle2" sx={{ my: 6 }}>
            Note : Don&apos;t lose your wallet key! you want to store your
            private key in safe place for accessing your wallet
          </Typography>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box>
          <Typography variant="h3">Create your new</Typography>
          <Typography variant="h2" sx={{ mt: 2, mb: 6 }}>
            Wallet
          </Typography>
          <TextField
            variant="outlined"
            label={'Password'}
            required
            fullWidth
            placeholder={'Enter your password'}
            // error={true}
            // helperText={'Your invalid password'}
          />
          <TextField
            sx={{ mt: 5 }}
            variant="outlined"
            label={'Confirm Password'}
            placeholder={'Enter your confirm password'}
            fullWidth
            required
            // error={state.errors ? true : false}
            // color={state.errors ? 'red' : ''}
            // helperText={state.errors}
          />
          <Box component="div" sx={{ mt: 5 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={createWallet}
            >
              Create your wallet
            </Button>
          </Box>
          <Typography sx={{ mt: 5 }}>
            Already have an wallet?
            <Link
              underline="none"
              onClick={() => navigate('/sign-in')}
              sx={{ ml: 1 }}
            >
              Login to your wallet
            </Link>
          </Typography>
        </Box>
      </>
    );
  }
}

export default SignUp;
