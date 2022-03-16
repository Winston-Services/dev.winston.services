import React from 'react';
import { Typography, Button, Box, Link, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

function SignUp() {
  const navigate = useNavigate();
  const [created, setCreated] = React.useState(false);
  const [saveToBrowser, setSaveToBrowser] = React.useState(false);
  if (created) {
    return (
      <>
        <Box>
          <Typography variant="h3">Your new wallet</Typography>
          <Typography variant="h2" sx={{ mt: 2, fontWeight: '600' }}>
            Created
          </Typography>
          <Typography variant="subtitle2" sx={{ my: 6 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu
            dui tincidunt, accumsan ligula sit amet, dignissim tortor. Curabitur
            tincidunt nulla mi, sit amet accumsan elit porttitor vitae.
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
              loading={saveToBrowser}
              variant="outlined"
              sx={{ mr: { xs: 2, md: 3 } }}
              onClick={() => setSaveToBrowser(!saveToBrowser)}
            >
              {saveToBrowser ? 'Saved' : 'Save to Browser'}
            </LoadingButton>
            <Button
              variant="contained"
              color="secondary"
              // startIcon={<LockIcon />}
              // onClick={handleUploadClick}
            >
              Download Key
            </Button>
          </Box>
          {saveToBrowser && (
            <Typography sx={{ mt: 5 }}>
              Your key is saved successfully.
              <Link onClick={() => navigate('/sign-in')} sx={{ ml: 1 }}>
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
          <Typography variant="h2" sx={{ mt: 2, mb: 6, fontWeight: '600' }}>
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
              onClick={() => setCreated(true)}
            >
              Create your wallet
            </Button>
          </Box>
          <Typography sx={{ mt: 5 }}>
            Already have an wallet?
            <Link onClick={() => navigate('/sign-in')} sx={{ ml: 1 }}>
              Login to your wallet
            </Link>
          </Typography>
        </Box>
      </>
    );
  }
}

export default SignUp;
