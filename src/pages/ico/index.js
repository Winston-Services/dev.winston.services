import React from 'react';

import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormHelperText,
} from '@mui/material';
import { ethers } from 'ethers';

import logo from './../../assets/logo_footer.svg';
import './index.css';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const paymentTypes = [
  {
    image: './assets/icons/wbnb.svg',
    name: 'WBNB',
    price: 405.18,
  },
  {
    image: './assets/icons/busd.svg',
    name: 'BUSD',
    price: 1,
  },
  {
    image: './assets/icons/rickel.svg',
    name: 'RICKEL',
    price: 12,
  },
  {
    image: './assets/icons/wbnb.svg',
    name: 'FIELD',
    price: 20,
  },
  {
    image: './assets/icons/wmue.svg',
    name: 'WMUE',
    price: 0.00237,
  },
];

function Ico() {
  const [abiResponse, setAbiResponse] = React.useState(null);
  const [selectedPayment, SetSelectedPayment] = React.useState();
  const [amount, setAmount] = React.useState(0);
  const [winstonCoin, setWinstonCoin] = React.useState(0);
  const winstonCoinPrice = 150;

  const [errorMessage, setErrorMessage] = React.useState(null);
  const [account, setAccount] = React.useState(null);
  const [balance, setBalance] = React.useState(null);

  React.useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accountsChanged);
      window.ethereum.on('chainChanged', chainChanged);
    }
  }, []);

  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage('There was a problem connecting to MetaMask');
      }
    } else {
      setErrorMessage('Install MetaMask');
    }
  };

  // const disConnectHandler = async () => {
  //   setAccount(null);
  //   setBalance(null);
  // };

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [newAccount.toString(), 'latest'],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage('There was a problem connecting to MetaMask');
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  React.useEffect(() => {
    fetch(
      'https://api.bscscan.com/api?module=contract&action=getabi&address=0xb5e7ff9a2f33a8a1e31eb79dc14659111f3dd51c&apikey=HH5C3ZYPGVQUT8FIVNIJXGDHQPNXUEC89U',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const response = { isError: true, message: res.result };
        if (res.status === '1' && res.message === 'OK') {
          response.abiFile = JSON.parse(res.result);
          response.isError = false;
        }
        setAbiResponse(response);
        // setIsAbiLoading(false);
      })
      .catch(() => {
        setAbiResponse({
          isError: true,
          message: 'something went wrong while connecting to contract',
        });
        // setIsAbiLoading(false);
      });
  }, []);

  const handleClick = async () => {
    try {
      await provider.send('eth_requestAccounts', []);

      const signer = provider.getSigner();

      const daiContract = new ethers.Contract(
        '0xb5e7ff9a2f33a8a1e31eb79dc14659111f3dd51c',
        abiResponse.abiFile,
        signer
      );
      console.log(daiContract);
      await daiContract.swap(
        '010000000000000000',
        '100000000000000000',
        '0xbec7CB5896A41FeA1829d31b8d9206B547B6D414',
        []
      );
      // setIsContractLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (amount < 0) setAmount(0);
    setWinstonCoin((amount * selectedPayment?.price) / winstonCoinPrice);
  }, [amount, selectedPayment?.price]);

  return (
    <Container>
      <Grid textAlign={'center'}>
        <img src={logo} style={{ textAlign: 'center' }} />
      </Grid>
      <Typography variant="h3" textAlign={'center'} mt={8} mb={5}>
        Initial Coin Offering
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} mb={2}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'}>
                  Price
                </Typography>
                <Typography variant="h4" mt={2} textAlign={'center'}>
                  $150.00 USD
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'}>
                  Goal
                </Typography>
                <Typography variant="h4" mt={2} textAlign={'center'}>
                  $1,500,000.00 USD
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={'center'} color="#FFD215">
                  Raised
                </Typography>
                <Typography
                  variant="h4"
                  mt={2}
                  textAlign={'center'}
                  color="#FFD215"
                >
                  $0.00 USD
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {paymentTypes.map((item, index) => (
          <Grid item key={item.name + index} xs={12} sm={6} md={4} lg={2.4}>
            <Card
              className={`icoCard ${
                selectedPayment?.name === item.name && 'activeIcoCard'
              }`}
              onClick={() => SetSelectedPayment(item)}
              elevation={0}
              sx={{
                py: { xs: 2.5, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Grid>
                <img
                  src={item.image}
                  style={{
                    borderRadius: '100px',
                  }}
                />
              </Grid>
              <Typography variant="h6" textAlign={'center'} mt={2}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" textAlign={'center'}>
                1 {item.name} ~= ${item.price} USD
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedPayment && (
        <Card elevation={0} sx={{ mt: 6, p: 5, textAlign: 'center' }}>
          <Grid container display="flex" justifyContent={'center'}>
            <Grid item xs={12} sm={8} md={6} lg={5}>
              <TextField
                fullWidth
                type={'number'}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                InputProps={{ inputProps: { min: 0 } }}
                variant="outlined"
                label={selectedPayment?.name}
                placeholder={`0.00 ${selectedPayment?.name}`}
              />
              <Typography variant="h4" mt={3}>
                {winstonCoin} WIN
              </Typography>

              <Button
                fullWidth
                onClick={
                  account
                    ? balance >= amount
                      ? handleClick
                      : null
                    : connectHandler
                }
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
              >
                {account
                  ? balance >= amount
                    ? 'Confirm purchase'
                    : 'Insufficient balance'
                  : 'Connect wallet'}
              </Button>
              <FormHelperText error>{errorMessage}</FormHelperText>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
}

export default Ico;
