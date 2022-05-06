import React from 'react';

import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';

import BnbIcon from './../../assets/bnb_icon.svg';
import logo from './../../assets/logo_footer.svg';
import './index.css';

const paymentTypes = [
  {
    image: BnbIcon,
    name: 'WBNB',
    price: 405.18,
  },
  {
    image: BnbIcon,
    name: 'BUSD',
    price: 1,
  },
  {
    image: BnbIcon,
    name: 'RICKEL',
    price: 12,
  },
  {
    image: BnbIcon,
    name: 'FIELD',
    price: 20,
  },
  {
    image: BnbIcon,
    name: 'WMUE',
    price: 0.00237,
  },
];

function Ico() {
  const [selectedPayment, SetSelectedPayment] = React.useState();
  const [amount, setAmount] = React.useState(0);
  const [winstonCoin, setWinstonCoin] = React.useState(0);
  const winstonCoinPrice = 150;

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
          <Grid item key={item.name + index} xs={12} sm={6} md={4} lg={3}>
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
              <Grid
                sx={{
                  background: '#58435f',
                  p: 3,
                  borderRadius: '100%',
                  lineHeight: 0,
                }}
              >
                <img
                  className="icoIcon"
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
                label="Amount"
                placeholder={`0.00 ${selectedPayment?.name}`}
              />
              <Typography variant="h4" mt={3}>
                {winstonCoin} WIN
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
              >
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
