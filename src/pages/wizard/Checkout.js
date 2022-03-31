import React from 'react';

import {
  Grid,
  Card,
  Typography,
  Button,
  Container,
  CardContent,
  Box,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import coin from './../../assets/coin.svg';
import smartContract from './../../assets/smart_contract.svg';
import verification from './../../assets/verification.svg';
// import verification1 from '../../assets/verification1.png';
// import { useNavigate } from 'react-router-dom';
import { wizardDataSelector } from './../../store/wizard';

const CheckoutCard = ({ data }) => {
  // let navigate = useNavigate();
  return (
    <Card
      className="wizardCard"
      sx={{
        p: 6,
        height: '100%',
      }}
      elevation={0}
    >
      <CardContent sx={{ height: '100%' }}>
        <Box
          display={'flex'}
          sx={{ height: '100%' }}
          flexDirection="column"
          gap={3}
        >
          <Typography variant={'h5'}>{data.title}</Typography>
          <Typography variant={'h4'} sx={{ mb: 3 }}>
            {data.price}
          </Typography>

          {data?.duration ? (
            <Typography variant={'h6'} display={'flex'} alignItems={'center'}>
              <Box component={'img'} sx={{ mr: 1 }} src={verification} />
              {data.duration}
            </Typography>
          ) : null}

          <Typography variant={'subtitle2'} sx={{ flexGrow: 1 }}>
            {data.text}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className="purchase-button"
            // onClick={() => {
            //   // setPurchaseType('Smart Contract');
            //   navigate('/wizard/certificate');
            // }}
          >
            {data.buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

CheckoutCard.propTypes = {
  data: PropTypes.object,
};

function Checkout() {
  const wizardData = useSelector(wizardDataSelector);
  const checkoutData = [
    {
      title: 'Coin name',
      icon: coin,
      isActive: () => {
        wizardData.workshop === 'Coin' || wizardData.workshop === 'custom';
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est',
      items: [
        {
          title: 'Monthly Hosting',
          price: '$XX/month',
          duration: 'First 1 month free',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est',
          buttonText: 'Subscribe',
        },
        {
          title: 'Purchase Coin',
          price: '$XX/one time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Purchase Coin $99',
        },
      ],
    },
    {
      title: 'Smart contract',
      icon: smartContract,
      isActive: () => {
        wizardData.workshop === 'Smart Contract' ||
          wizardData.workshop === 'custom';
      },
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est',

      items: [
        {
          title: 'Download it’s free',
          price: '$XX/month',
          duration: 'First 1 month free',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Download it’s free',
        },
        {
          title: 'Launch to Network',
          price: '$XX/one time',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.',
          buttonText: 'Purchase',
        },
      ],
    },
  ];

  return (
    <Container>
      {checkoutData.map((obj) =>
        obj.isActive ? (
          <Grid key={obj.title} container spacing={4} sx={{ mb: 10 }}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component={'img'} sx={{ mr: 3 }} src={obj.icon} alt="icon" />
              <Typography variant={'h3'} sx={{ flexGrow: 1 }}>
                {obj.title}
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <Typography>{obj.description}</Typography>
            </Grid>
            <Grid item container spacing={4}>
              {obj.items?.map((itemObj) => {
                return (
                  <Grid key={itemObj.title} item xs={12} md={6} lg={6}>
                    <CheckoutCard data={itemObj} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        ) : null
      )}
    </Container>
  );
}

export default Checkout;
