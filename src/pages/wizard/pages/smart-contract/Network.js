import React from 'react';

import { Typography, Container, Button, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';

import binance from './../../../../assets/binance.svg';
import ethereumBlue from './../../../../assets/ethereum_blue.svg';
import ethereum from './../../../../assets/ethereum_white.svg';
import polygonMatic from './../../../../assets/polygon_matic.svg';
import xDai from './../../../../assets/x_dai.svg';
import WizardCard from './../../components/WizardCard';
const networkData = [
  {
    title: 'Ethereum',
    subTitle: 'ERC',
    icon: ethereum,
  },
  {
    title: 'Binance',
    subTitle: 'BEP',
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
function Network({ wizardSmartContractData, setWizardSmartContractData }) {
  const { previous, next } = useOutletContext();

  return (
    <Container>
      <Grid container>
        <Grid item container spacing={4} sm={12} xs={12} lg={12} md={12}>
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
                    setWizardSmartContractData({
                      network: item,
                    });
                  }}
                  item={item}
                  activeNetwork={wizardSmartContractData?.network?.title}
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
                      setWizardSmartContractData({
                        typeOfContract: item.title,
                      });
                    }}
                    title={wizardSmartContractData.network.subTitle}
                    item={item}
                    wizardData={wizardSmartContractData}
                    activeContract={wizardSmartContractData?.typeOfContract}
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
            <Button variant="outlined" onClick={previous}>
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={next}>
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
  wizardSmartContractData: PropTypes.object,
  setWizardSmartContractData: PropTypes.func,
};
export default Network;
