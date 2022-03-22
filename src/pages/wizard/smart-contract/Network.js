import React, { useEffect } from 'react';
import { Paper, Typography, Container } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import binance from './../../../assets/binance.svg';
import ethereum from './../../../assets/ethereum.svg';
import ethereumBlue from './../../../assets/ethereumBlue.svg';
import polygonMatic from './../../../assets/polygonMatic.svg';
import xDai from './../../../assets/xDai.svg';
import ButtonNext from './../../../components/common/ButtonNext';
import ButtonPrev from './../../../components/common/ButtonPrev';

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
              <Typography
                variant="h4"
                className={`colorWhite service-text dFlex`}
              >
                <span>1. Coin Workshop</span>
              </Typography>

              <Typography variant="h2">2. Smart Contract Workshop</Typography>
            </Grid>
          )}
          <Typography variant="h4">Network</Typography>
        </Grid>
        <Grid container spacing={6}>
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
                order={{ xs: index + 1, md: index + 1 }}
              >
                <Paper
                  className={`w100 h300 br40 dFlex flexColumn alignItemsCenter p20 mAuto wizardCard bg-dark-pur hover-cursor-pointer justifyContentCenter`}
                  onClick={() => {
                    setWizardData({
                      ...wizardData,
                      network: item.title,
                    });
                  }}
                >
                  <img src={item.icon} alt="icon" />
                  <Typography
                    level={'h6'}
                    className="colorWhite"
                    style={{
                      fontSize: '22px',
                      fontWeight: 'bold',
                      marginTop: 45,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
          <Grid item sm={12} xs={12} lg={12}>
            <Typography variant="h4">Type of Contract</Typography>
          </Grid>
          <Grid container spacing={6}>
            {typeOfContract?.map((item, index) => {
              return (
                <Grid item sm={6} xs={12} lg={4} key={index.toString()}>
                  <Paper
                    className={`w100 h300 br40 dFlex flexColumn shadowNone alignItemsCenter p20 mAuto wizardCard `}
                    style={{
                      background: '#362A73',

                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      setWizardData({
                        ...wizardData,
                        typeOfContact: item.title,
                      })
                    }
                  >
                    <img src={item.icon} alt="icon" />
                    <Typography
                      level={'h6'}
                      className="colorWhite"
                      style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        marginTop: 45,
                      }}
                    >
                      {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                      {item.title}
                    </Typography>
                  </Paper>
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
            <ButtonPrev onClick={'/wizard/'} />
          </Grid>
          <Grid item>
            <ButtonNext onClick={'/wizard/step-coin-name'} />
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
