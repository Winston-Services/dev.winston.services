import React from 'react';
import { Typography, Button, Input, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import TextBox from './../../components/common/TextBox';

function SignIn() {
  const matches = useMediaQuery('(min-width:768px)');
  const navigate = useNavigate();
  return (
    <div className={`mb80`}>
      <div className={`${matches ? 'mt100' : 'mt50'}`}>
        <Typography className={`${'lh78'} ${matches ? 'fs60' : 'fs35'}`}>
          Sign in to <br />
          <span className={`fw700`}>Your Wallet</span>
        </Typography>
        <Typography className={`fs14 fw400 mt30`}>
          Note : Don&apos;t lo se your wallet key! you want to store your
          private key in safe place for accessing your wallet
        </Typography>
      </div>
      <div className={`${matches ? 'mt50' : 'mt70'}`}>
        <TextBox
          label={'Password'}
          placeholder={'Enter your password'}
          // errorMsg={state.errors}
        />
      </div>

      <div className={`${matches ? 'mt50' : 'mt30 dFlex'}`}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mr: { xs: 2, md: 4 } }}
          // onClick={loadKeyFromLocalStorage}
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
          color="primary"
          size="medium"
          // onChange={handleUploadFile}
          name="privateKeyFile"
          // ref={hiddenFileInput}
          type="file"
          style={{ display: 'none' }}
        />
      </div>

      <div className={` dFlex ${matches ? 'mt50' : 'mt100'}`}>
        <Typography className={`fs16 fw500 mr10`}>
          Don’t have an wallet?
        </Typography>

        <Typography
          className={`colorYellow fs16 fw600 textDecorationUnderline cursorPointer`}
          onClick={() => navigate('/wallet/create')}
        >
          Let’s create your wallet
        </Typography>
      </div>
    </div>
  );
}

export default SignIn;
