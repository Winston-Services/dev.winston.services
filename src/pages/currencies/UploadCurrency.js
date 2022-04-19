import React, { useState } from 'react';

import { Container, Typography, Grid, Card } from '@mui/material';

import binance from './../../assets/binance.svg';
import ethereum from './../../assets/ethereum_white.svg';
import polygonMatic from './../../assets/polygon_matic.svg';
import xDai from './../../assets/x_dai.svg';
import WizardCard from './../wizard/components/WizardCard';

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

function UploadCurrency() {
  const [value, setValue] = useState();
  return (
    <Container>
      <Typography variant="h3" textAlign={'center'}>
        Pick your network
      </Typography>
      <Grid container mt={8} spacing={5}>
        {networkData.map((item) => (
          <Grid
            key={item.title}
            item
            xs={12}
            sx={6}
            md={4}
            lg={3}
            className={item.title === value ? 'popper-card-arrow1' : ''}
            position={'relative'}
          >
            <WizardCard
              onClick={() => {
                setValue(item.title);
              }}
              item={item}
              activeNetwork={value}
            />
          </Grid>
        ))}
      </Grid>
      {value && (
        <Grid mt={3}>
          <Card elevation={0} sx={{ p: 5 }}>
            <Grid container>
              <Grid item md={6}>
                <Grid display="flex" alignItems={'center'} gap={2}>
                  <img src={ethereum} width={25} />
                  <Typography variant="h5">Contract Details</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      )}
    </Container>
  );
}

export default UploadCurrency;
