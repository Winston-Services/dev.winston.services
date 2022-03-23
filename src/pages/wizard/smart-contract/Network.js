import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import binance from './../../../assets/binance.svg';
import ethereum from './../../../assets/ethereum.svg';
import ethereumBlue from './../../../assets/ethereumBlue.svg';
import polygonMatic from './../../../assets/polygonMatic.svg';
import xDai from './../../../assets/xDai.svg';

function Network({ wizardData, setWizardData }) {
  wizardData = 'Smart Contract';
  let navigate = useNavigate();
  const networkData = [
    {
      title: 'Ethereum',
      icon: ethereum,
    },
    {
      title: 'Binance',
      icon: binance,
    },
    {
      title: 'Polygon Matic',
      icon: polygonMatic,
    },
    {
      title: 'XDai',
      icon: xDai,
    },
  ];

  const typeOfContract = [
    {
      title: '20',
      icon: ethereumBlue,
    },
    {
      title: '721',
      icon: ethereumBlue,
    },
    {
      title: '1155',
      icon: ethereumBlue,
    },
  ];

  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
    setWizardData({
      ...wizardData,
      network: 'Ethereum',
      typeOfContact: '20',
    });
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item sm={12} xs={12} lg={12}>
          {wizardData.workshop === 'Smart Contract' && (
            <Typography variant="h2">Smart Contract Workshop</Typography>
          )}
          {wizardData.workshop === 'Custom' && (
            <Grid>
              <Typography variant="h4">
                <span>1. Coin Workshop</span>
              </Typography>

              <Typography variant="h2">2. Smart Contract Workshop</Typography>
            </Grid>
          )}
          <Typography variant="h4">Network</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={5}
          sx={{ mb: { xs: 1, sm: 1 }, mt: { xs: 1, sm: 1 } }}
        >
          {networkData?.map((item, index) => {
            return (
              <Grid
                item
                sm={6}
                xs={12}
                md={4}
                lg={3}
                textAlign={'-webkit-center'}
                key={index.toString()}
                // order={{ xs: index + 1, md: index + 1 }}
              >
                <Card
                  className="wizardCard"
                  onClick={() => {
                    setWizardData({
                      ...wizardData,
                      network: item.title,
                    });
                  }}
                >
                  <CardContent>
                    <Grid item sm={12} xs={12} lg={3} mt={6}>
                      <img src={item.icon} alt="icon" />
                    </Grid>
                    <Grid item sm={12} xs={12} lg={9} mt={3} mb={6}>
                      <Typography variant={'h6'}>{item.title}</Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          <Grid item sm={12} xs={12} lg={12}>
            <Typography variant="h4">Type of Contract</Typography>
          </Grid>
          <Grid item xs={12} container spacing={5}>
            {typeOfContract?.map((item, index) => {
              return (
                <Grid
                  item
                  sm={6}
                  xs={12}
                  md={4}
                  lg={4}
                  textAlign={'-webkit-center'}
                  key={index.toString()}
                >
                  <Card
                    className="wizardCard"
                    onClick={() =>
                      setWizardData({
                        ...wizardData,
                        typeOfContact: item.title,
                      })
                    }
                  >
                    <CardContent>
                      <Grid item sm={12} xs={12} lg={3} mt={6}>
                        <img src={item.icon} alt="icon" />
                      </Grid>
                      <Grid item sm={12} xs={12} lg={9} mt={3} mb={6}>
                        <Typography variant={'h6'}>
                          {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                          {item.title}
                        </Typography>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          mt={4}
          display="flex"
          justifyContent="flex-end"
        >
          <Grid item>
            {/* {wizardData.workshop === 'Smart Contract' && ( */}
            <Button variant="outlined" onClick={() => navigate('/wizard/')}>
              Previous
            </Button>
            {/* )} */}
            {wizardData.workshop === 'Custom' && (
              <Button
                variant="outlined"
                onClick={() => navigate('/wizard/step-coin-custom-logo')}
              >
                Previous
              </Button>
            )}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/wizard/step-setting')}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

Network.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
};
export default Network;
