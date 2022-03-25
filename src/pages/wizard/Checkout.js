import React, { useEffect } from 'react';
import {
  Grid,
  Card,
  Typography,
  Button,
  Container,
  CardContent,
} from '@mui/material';
import verification from './../../assets/verification.svg';
// import verification1 from '../../assets/verification1.png';
import coin from './../../assets/coin.svg';
import smartContract from './../../assets/smart_contract.svg';
import { useNavigate } from 'react-router-dom';

function checkout({ wizardData }) {
  let navigate = useNavigate();
  const [imageIcon, setImageIcon] = React.useState(verification);
  const purchaseType = 'Coin';
  // const [purchaseType, setPurchaseType] = React.useState(wizardData.workshop);

  const coinData = [
    {
      title: 'Monthly Hosting',
      price: '$XX/mo',
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
  ];

  const smartContractData = [
    {
      title: 'Download it’s free',
      price: '$XX/mo',
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
  ];

  useEffect(() => {
    if (wizardData.workshop === '') {
      // navigate('/wizard');
    }
  }, []);

  return (
    <>
      {purchaseType === 'Coin' || purchaseType === 'Custom' ? (
        <Container>
          <Grid container spacing={8}>
            <Grid item lg={1}>
              <Grid item>
                <img src={coin} alt="icon" />
              </Grid>
            </Grid>
            <Grid item container lg={10} spacing={2} ml={1}>
              <Grid item alignSelf={'center'}>
                <Typography variant={'h3'}>Coin Name</Typography>
              </Grid>
              <Grid item>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent dignissim lorem a purus semper volutpat. Nam non
                  nulla augue. Curabitur dignissim velit a tortor blandit, at
                  vehicula libero gravida. Proin faucibus, nisl vel condimentum
                  fringilla, arcu neque gravida nulla, id euismod tortor dolor
                  eu sem. Sed blandit tincidunt velit ac vulputate. Mauris
                  consequat efficitur lobortis. Sed nec congue est
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={4}>
              {coinData?.map((item) => {
                return (
                  <Grid key={item.title} item xs={12} md={6} lg={6}>
                    <Card
                      className="wizardCard"
                      sx={{
                        p: 6,
                        height: '100%',
                      }}
                      onMouseOver={() =>
                        item.duration ? setImageIcon(verification) : ''
                      }
                      onMouseOut={() =>
                        item.duration ? setImageIcon(verification) : ''
                      }
                    >
                      <CardContent sx={{ height: '100%' }}>
                        <Grid
                          container
                          sx={{ height: '100%' }}
                          direction="column"
                          justifyContent="space-between"
                        >
                          <Grid item xs>
                            <Typography variant={'h5'}>{item.title}</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography variant={'h4'}>{item.price}</Typography>
                          </Grid>

                          {item?.duration ? (
                            <Grid item container spacing={2}>
                              <Grid item>
                                <img src={imageIcon} />
                              </Grid>
                              <Grid item>
                                <Typography variant={'h5'}>
                                  {item?.duration}
                                </Typography>
                              </Grid>
                            </Grid>
                          ) : null}

                          <Grid item xs>
                            <Typography variant={'subtitle2'}>
                              {item.text}
                            </Typography>
                          </Grid>
                          <Grid item xs>
                            <Button
                              fullWidth
                              variant="contained"
                              color="secondary"
                              className="purchase-button"
                              onClick={() => {
                                // setPurchaseType('Smart Contract');
                                navigate('/wizard/certificate');
                              }}
                            >
                              {item.buttonText}
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      ) : null}

      {purchaseType === 'Smart Contract' ? (
        <Container>
          <Grid container>
            <Grid item>
              <img src={smartContract} alt="icon" />
            </Grid>
            <Grid item>
              <Typography>Smartcontract</Typography>
            </Grid>
            <Grid item>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent dignissim lorem a purus semper volutpat. Nam non nulla
                augue. Curabitur dignissim velit a tortor blandit, at vehicula
                libero gravida. Proin faucibus, nisl vel condimentum fringilla,
                arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed
                blandit tincidunt velit ac vulputate. Mauris consequat efficitur
                lobortis. Sed nec congue est
              </Typography>
            </Grid>

            <Grid container spacing={6}>
              {smartContractData?.map((item, index) => {
                return (
                  <Grid item sm={6} xs={12} lg={6} key={index.toString()}>
                    <Card
                      onMouseOver={() =>
                        item.duration ? setImageIcon(verification) : ''
                      }
                      onMouseOut={() =>
                        item.duration ? setImageIcon(verification) : ''
                      }
                    >
                      <Grid>
                        <Typography variant={'h6'}>{item.title}</Typography>
                        <Typography variant={'h6'}>{item.price}</Typography>
                        {item?.duration ? (
                          <Grid>
                            <img src={imageIcon} />

                            <Typography variant={'h6'}>
                              {item?.duration}
                            </Typography>
                          </Grid>
                        ) : null}
                        <Typography variant={'h6'}>{item.text}</Typography>
                      </Grid>
                      <Grid>
                        <Button
                          onClick={() => {
                            navigate('/wizard/certificate');
                          }}
                        >
                          Subscribe
                        </Button>
                      </Grid>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
}

export default checkout;
