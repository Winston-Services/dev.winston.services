import * as React from 'react';
import { Grid, Button, Container, Box } from '@mui/material';
import { ReactComponent as CryptoImg } from '../assets/Crypto.svg';
import Logo from '../assets/logo.svg';
import { useNavigate, Outlet } from 'react-router-dom';
import { Twitter, YouTube } from '@mui/icons-material';
import { ReactComponent as Discord } from '../assets/discord.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    color: 'white',
    textTransform: 'inherit',
    border: '1px solid white',
    borderRadius: 25,
    padding: '16px 32px',
    lineHeight: 'normal',
  },
});

function SignInLayout() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <Box
        className={`signInGradient`}
        component={'div'}
        sx={{ display: { xs: 'none', lg: 'block' } }}
      />
      <Container maxWidth="xl" alignItems="center" sx={{ margin: 'auto' }}>
        <Grid container justifyContent={'center'} alignItems="center">
          <Grid item sm={12} lg={4}>
            <Box
              component="img"
              src={Logo}
              alt="crypto"
              onClick={() => {
                navigate('/');
              }}
              sx={{ mb: '100px', height: '72px' }}
            />
            <Outlet />
            <Grid container spacing={2} sx={{ mt: '85px' }}>
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
            <CryptoImg width="100%" />
            <Grid display="flex" justifyContent="end">
              <Button className={classes.button}>Security starts here</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignInLayout;
