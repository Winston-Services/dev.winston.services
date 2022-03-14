import * as React from 'react';
import { Grid, Button, useMediaQuery, Container } from '@mui/material';
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
  const matches = useMediaQuery('(min-width:600px)');
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={`w100p`}>
      {matches ? <div className={`signInGradient`} /> : null}
      <Container className={`mt50 mb50`}>
        <Grid container>
          <Grid
            item
            sm={12}
            lg={5}
            display="flex"
            direction="column"
            justifyContent="center"
          >
            <img
              src={Logo}
              alt="crypto"
              onClick={() => {
                navigate('/');
              }}
              className={`cursorPointer w50p`}
            />
            <Outlet />
            <div>
              <Discord className={`mr25`} />
              <Twitter className={`mr25`} />
              <YouTube />
            </div>
          </Grid>
          {matches ? (
            <>
              <Grid item sm={12} lg={2}></Grid>
              <Grid
                item
                sm={12}
                lg={5}
                display="flex"
                direction="column"
                justifyContent="center"
                className={`mh100vh`}
              >
                <CryptoImg className={`w125p`} />
                <Grid display="flex" justifyContent="end">
                  <Button className={classes.button}>
                    Security starts here
                  </Button>
                </Grid>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Container>
    </div>
  );
}

export default SignInLayout;
