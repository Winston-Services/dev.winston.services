import React from 'react';
import {
  Typography,
  Button,
  Input,
  useMediaQuery,
  Box,
  Link,
  // Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import TextBox from './../../components/common/TextBox';
import useAuth from '../../context/authContext';

function SignIn() {
  const matches = useMediaQuery('(min-width:768px)');
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = () => {
    // event.preventDefault();
    console.log('event', event);
    auth.setAuth(true);
    navigate('/dashboard');
  };
  return (
    <Box>
      <Typography variant="h3">Sign in to</Typography>
      <Typography variant="h2" sx={{ mt: 2, fontWeight: '600' }}>
        Your Wallet
      </Typography>
      <Typography variant="subtitle2" sx={{ my: 5 }}>
        Note : Don&apos;t lo se your wallet key! you want to store your private
        key in safe place for accessing your wallet
      </Typography>
      <TextBox
        label={'Password'}
        required
        placeholder={'Enter your password'}
        fullWidth
        // errorMsg={state.errors}
      />
      <div className={`${matches ? 'mt50' : 'mt30 dFlex'}`}>
        <Button
          variant="outlined"
          sx={{ mr: { xs: 2, md: 3 } }}
          onClick={handleSubmit}
        >
          Browser Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<LockIcon />}
          // onClick={handleUploadClick}
        >
          Private Key
        </Button>
        <Input
          // onChange={handleUploadFile}
          name="privateKeyFile"
          // ref={hiddenFileInput}
          type="file"
          sx={{ display: 'none' }}
        />
      </div>
      <Typography sx={{ mt: 5 }}>
        Don’t have an wallet?
        <Link onClick={() => navigate('/sign-up')} sx={{ ml: 1 }}>
          Let’s create your wallet
        </Link>
      </Typography>
    </Box>
  );
}

export default SignIn;
