import React, { useState } from 'react';

import {
  Typography,
  Button,
  Input,
  Box,
  Link,
  TextField,
  // Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../context/authContext';
import Wallet from './../../utils/wallet';
// import { useDispatch } from 'react-redux';
// import { setUserWallet } from '../../store/user';

function SignIn() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [error, setError] = useState({});
  const hiddenFileInput = React.useRef(null);
  // const dispatch = useDispatch();
  const login = (privateKey) => {
    let tempWallet = new Wallet();
    if (privateKey !== null) {
      if (privateKey.substr(0, 27) !== '-----BEGIN PRIVATE KEY-----') {
        return { error: 'Invalid Private Key, please try again.' };
      }
      try {
        tempWallet.setPrivateKey(privateKey);
      } catch (error) {
        return { error };
      }
      if (tempWallet.key.isPrivate()) {
        return { wallet: tempWallet };
      } else {
        return { error: 'Failed to load key.' };
      }
    } else {
      return { error: 'Invalid Browser Key' };
    }
  };

  const handleUploadFile = (event) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(fileUploaded);
    reader.onload = () => {
      const privateKey = reader.result;
      const loginResults = login(privateKey);
      if ('error' in loginResults) {
        setError(loginResults.error);
      } else {
        // dispatch(setUserWallet(loginResults.wallet));
        auth.setAuth(loginResults.wallet);
        navigate('/dashboard');
      }
    };
  };

  const loadKeyFromLocalStorage = (e) => {
    e.preventDefault();
    const loginResults = login(localStorage.getItem('privateKey'));
    if ('error' in loginResults) {
      setError(loginResults.error);
    } else {
      // dispatch(setUserWallet(loginResults.wallet));
      auth.setAuth(loginResults.wallet);
      navigate('/dashboard');
    }
  };
  const handleUploadClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.firstChild.click();
  };

  return (
    <Box>
      <Typography variant="h3">Sign in to</Typography>
      <Typography variant="h2" sx={{ mt: 2 }}>
        Your Wallet
      </Typography>
      <Typography variant="subtitle2" sx={{ my: 6 }}>
        Note : Don&apos;t lose your wallet key! You have to store your private
        key in safe place for accessing your wallet.
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label={'Password'}
        required
        placeholder={'Enter your password'}
        error={error.errors}
        color={error.errors ? 'red' : ''}
        helperText={error.errors}
      />

      <Box component="div" sx={{ mt: 5 }}>
        <Button
          variant="outlined"
          sx={{ mr: { xs: 2, md: 3 } }}
          onClick={loadKeyFromLocalStorage}
        >
          Browser Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          // startIcon={<LockIcon />}
          onClick={handleUploadClick}
        >
          Private Key
        </Button>
        <Input
          onChange={handleUploadFile}
          name="privateKeyFile"
          ref={hiddenFileInput}
          type="file"
          sx={{ display: 'none' }}
        />
      </Box>
      <Typography sx={{ mt: 5 }}>
        Don’t have an wallet?
        <Link
          underline="none"
          onClick={() => navigate('/sign-up')}
          sx={{ ml: 1 }}
        >
          Let’s create your wallet
        </Link>
      </Typography>
    </Box>
  );
}

export default SignIn;
