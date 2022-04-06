import * as React from 'react';

import { Twitter, YouTube } from '@mui/icons-material';
import { Grid, Container, Box, Chip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import { setTheme } from '../store/themeColors';
import { ReactComponent as Discord } from './../assets/discord_brands.svg';
import Logo from './../assets/logo.svg';
import CryptoLandingImage from './../components/crypto-landing-image/index';
import './index.css';

function SignInLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Box
        className={'signInGradient'}
        component={'div'}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      />
      <Container maxWidth="xl" sx={{ margin: 'auto' }}>
        <Grid container justifyContent={'center'} alignItems="center">
          <Grid item sm={12} lg={4}>
            <Box
              component="img"
              src={Logo}
              alt="crypto"
              onClick={() => {
                navigate('/');
              }}
              sx={{ mb: 8, mt: 14, height: '72px', cursor: 'pointer' }}
            />
            <Box minHeight={'500px'}>
              <Outlet />
            </Box>
            <Grid container spacing={2} sx={{ my: 8 }}>
              <Grid item>
                <Discord />
              </Grid>
              <Grid item>
                <Twitter />
              </Grid>
              <Grid item>
                <YouTube />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={0} lg={2}></Grid>
          <Grid
            item
            sx={{ display: { xs: 'none', lg: 'block' } }}
            lg={5}
            container
            direction="column"
            justifyContent="center"
          >
            <CryptoLandingImage width="100%" />
            <Grid display="flex" justifyContent="flex-end">
              <Chip
                label="Security starts here"
                variant="outlined"
                size="medium"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SignInLayout;
