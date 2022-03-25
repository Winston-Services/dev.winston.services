import React, { useEffect } from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import binance from './../../../assets/binance.svg';
import ethereum from './../../../assets/ethereum_white.svg';
import ethereumBlue from './../../../assets/ethereum_blue.svg';
import polygonMatic from './../../../assets/polygon_matic.svg';
import xDai from './../../../assets/x_dai.svg';
import WizardCard from './../components/WizardCard';

function Network({ wizardData, setWizardData }) {
  const navigate = useNavigate();
  const networkData = [
    {
      title: 'Ethereum',
      subTitle: 'ERC',
      icon: ethereum,
    },
    {
      title: 'Binance',
      subTitle: 'BRC',
      icon: binance,
    },
    {
      title: 'Polygon Matic',
      subTitle: 'ERC',
      icon: polygonMatic,
    },
    {
      title: 'XDai',
      subTitle: 'ERC',
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
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid item container spacing={4} sm={12} xs={12} lg={12} md={12}>
          {wizardData.workshop === 'Smart Contract' && (
            <Grid item sm={12} xs={12} lg={12} md={12}>
              <Typography variant="h3">Smart Contract Workshop</Typography>
            </Grid>
          )}
          {wizardData.workshop === 'Custom' && (
            <Grid container spacing={8}>
              <Grid item>
                <Typography variant="h3" sx={{ opacity: '0.5' }}>
                  1. Coin Workshop
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    borderBottom: 'solid',
                    borderImageSlice: 1,
                    borderImageSource:
                      'linear-gradient(90deg, #EA7A8F 0.64%, #E452C8 99.36%)',
                  }}
                  variant="h3"
                >
                  2. Smart Contract Workshop
                </Typography>
              </Grid>
            </Grid>
          )}

          <Grid item sm={12} xs={12} lg={12} md={12}>
            <Typography variant="h4">Network</Typography>
          </Grid>
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
                key={index.toString()}
                // order={{ xs: index + 1, md: index + 1 }}
              >
                <WizardCard
                  onClick={() => {
                    setWizardData({
                      ...wizardData,
                      network: item,
                    });
                  }}
                  item={item}
                  activeNetwork={wizardData?.network?.title}
                />
              </Grid>
            );
          })}
          <Grid item sm={12} xs={12} lg={12} md={12}>
            <Typography variant="h4">Type of Contract</Typography>
          </Grid>
          <Grid item xs={12} container spacing={5}>
            {typeOfContract?.map((item, index) => {
              return (
                <Grid item sm={6} xs={12} md={4} lg={4} key={index.toString()}>
                  <WizardCard
                    onClick={() => {
                      setWizardData({
                        ...wizardData,
                        typeOfContact: item.title,
                      });
                    }}
                    title={wizardData.network.subTitle}
                    item={item}
                    wizardData={wizardData}
                    activeContract={wizardData?.typeOfContact}
                  />
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
            {wizardData.workshop === 'Smart Contract' && (
              <Button variant="outlined" onClick={() => navigate('/wizard/')}>
                Previous
              </Button>
            )}
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
