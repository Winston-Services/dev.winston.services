import React from 'react';

import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { JsonRpcProvider, Contract, Wallet, InfuraProvider, parseUnits } from 'ethers';

import logo from './../../assets/logo_footer.svg';
import './index.css';

const provider = new JsonRpcProvider('https://bsc-dataseed.binance.org/');
const pancakeSwapContract = {
  factory: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', // PancakeSwap V2 factory
  router: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // PancakeSwap V2 router
};

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
    name: 'RKL',
    price: 12,
  },
  {
    image: './assets/icons/field.svg',
    name: 'FIELD',
    price: 20,
  },
  {
    image: './assets/icons/wmue.svg',
    name: 'WMUE',
    price: 0.00237,
  },
];

const tokens = {
  BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  RKL: '0xeca15e1bbff172d545dd6325f3bae7b737906737',
  WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  WIN: '0x75578ebBefe274F240B8E1b5859cA34f342157D9',
  FIELD: '0x04D50c032F16a25d1449Ef04D893e95Bcc54d747',
  WMUE: '0x00abaA93fAF8fDc4f382135a7A56F9Cf7C3EdD21',
};
const router = new Contract(
  pancakeSwapContract.router,
  [
    'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
  ],
  provider
);

const priceHandler = async (token, token2) => {
  if (token.indexOf('0x') === -1) {
    token = tokens[token.toUpperCase()];
  }
  if (token2.indexOf('0x') === -1) {
    token2 = tokens[token2.toUpperCase()];
  }
  if (token) {
    // console.log(token, 'TOKENS', token2);
    const price = await getPrice(token, token2);
    return { status: 'success', token2: price };
  } else {
    return await new Promise.resolve(() => {
      return {
        status: 'error',
        BUSD: 0,
      };
    });
  }
};

async function getPrice(inputCurrency, outputCurrency) {
  const amounts = await router.getAmountsOut(parseUnits('1', 18), [
    inputCurrency,
    outputCurrency,
  ]);
  return amounts[1].toString() / 1e18;
}

function Ico() {
  const [selectedPayment, SetSelectedPayment] = React.useState();
  const [amount, setAmount] = React.useState(1);
  const [winstonCoin, setWinstonCoin] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingPurchase, setIsLoadingPurchase] = React.useState(false);

  const tokenTransactionExecuter = async (
    to_address,
    coin_name,
    send_token_amount
  ) => {
    setIsLoadingPurchase(true);
    window.ethersProvider = new InfuraProvider('ropsten');
    const privateKEY =
      'ad9483ce666c5abab10d164deb7c3d60e25bc260070c2bba846507f3e3ce0a99';
    let wallet = new Wallet(privateKEY);
    let walletSigner = wallet.connect(window.ethersProvider);
    let abiResponse;
    await fetch(
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
        abiResponse = response;
        // console.log(abiResponse.abiFile);
      })
      .catch(() => {
        console.log('error');
      });
    const tokenRouter = new Contract(
      tokens[coin_name],
      abiResponse.abiFile,
      walletSigner
    );
    // console.log(tokenRouter);
    const transactionExecutor = async () => {
      const abc = await tokenRouter.functions.transfer(
        to_address,
        send_token_amount
      );
      setIsLoadingPurchase(false);
      console.log(abc);
    };
    transactionExecutor();
  };

  const checker = async (name) => {
    setIsLoading(true);
    if (name === 'RKL') {
      const WIN = await priceHandler(name, 'WIN');
      // console.log(WIN, WIN.token2);
      setWinstonCoin(WIN.token2);
    } else if (name === 'BUSD') {
      const RKL = await priceHandler(name, 'RKL');
      const WIN = await priceHandler('RKL', 'WIN');
      // console.log(RKL, WIN, RKL.token2 * WIN.token2);
      setWinstonCoin(RKL.token2 * WIN.token2);
    } else {
      const BUSD = await priceHandler(name, 'BUSD');
      const RKL = await priceHandler('BUSD', 'RKL');
      const WIN = await priceHandler('RKL', 'WIN');
      // console.log(BUSD, RKL, WIN, BUSD.token2 * RKL.token2 * WIN.token2);
      setWinstonCoin(BUSD.token2 * RKL.token2 * WIN.token2);
    }
    setIsLoading(false);
  };

  const handleClick = () => {
    tokenTransactionExecuter(
      '0x65DB374cfE32aF9acd9D94771F7617440455be48',
      selectedPayment.name,
      amount
    );
  };
  React.useEffect(() => {
    if (amount < 0) setAmount(0);
  }, [amount]);
  React.useEffect(() => {
    selectedPayment && checker(selectedPayment?.name);
  }, [selectedPayment]);

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
              <Grid mt={3}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Typography variant="h5">
                    {amount * winstonCoin} WIN
                  </Typography>
                )}
              </Grid>
              <Button
                fullWidth
                disabled={isLoading || isLoadingPurchase}
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
                onClick={handleClick}
              >
                {isLoadingPurchase && (
                  <CircularProgress size={24} sx={{ mr: 2 }} />
                )}
                Confirm purchase
              </Button>
            </Grid>
          </Grid>
        </Card>
      )}
    </Container>
  );
}

export default Ico;
