import React from 'react';

import {
  Card,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { ethers } from 'ethers';

import logo from './../../assets/logo_footer.svg';
import './index.css';

function LinkAccount() {
  const [provider, setProvider] = React.useState(false);

  React.useEffect(() => {
    if (!provider) {
      let p = new ethers.providers.JsonRpcProvider(
        'https://bsc-dataseed.binance.org/'
      );
      setProvider(p);
    }
  }, [provider, setProvider]);


  return (
    <Container>
      <Grid textAlign={'center'}>
        <img src={logo} style={{ textAlign: 'center' }} />
      </Grid>
      <Typography variant="h3" textAlign={'center'} mt={8} mb={5}>
        Link Account
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} mb={2}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'}>
                  Server
                </Typography>
                <Typography variant="h4" mt={2} textAlign={'center'}>
                  SERVER_NAME
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'}>
                  User
                </Typography>
                <Typography variant="h4" mt={2} textAlign={'center'}>
                  DISCORD_USER_NAME
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'} color="#FFD215">
                  Link Account Now
                </Typography>
                <Button>
                  Click to Sign and Submit.
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LinkAccount;
