import React from 'react';

import { Container, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import coinBase from './../../assets/coin_base.svg';
import coinBase1 from './../../assets/coin_base_1.svg';
import fortmatic from './../../assets/fort_matic.svg';
import kaikas from './../../assets/kaikas.svg';
import metaMask1 from './../../assets/meta_mask_1.svg';
import metaMask from './../../assets/metamask.svg';

const data = [
  {
    image: metaMask,
    title: 'MetaMask',
    subTitle: 'Popular',
  },
  {
    image: coinBase,
    title: 'Coinbase',
    subTitle: 'Popular',
  },
  {
    image: metaMask1,
    title: 'MetaMask',
  },
  {
    image: fortmatic,
    title: 'Fortmatic',
  },
  {
    image: kaikas,
    title: 'kaikas',
  },
  {
    image: coinBase1,
    title: 'Coinbase',
  },
];

function ConnectWallet() {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h3">Connect your wallet</Typography>
      <Typography variant="subtitle1" mt={1} mb={3}>
        Connect with one of our available wallet providers or create a new one.
      </Typography>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Paper elevation={0}>
              <Grid
                item
                display={'flex'}
                justifyContent="space-between"
                alignItems="center"
                p={3}
                onClick={() => {
                  navigate('/upload-nft');
                }}
                sx={{ cursor: 'pointer' }}
              >
                <Grid item display={'flex'} gap={3} alignItems="center">
                  <img
                    src={item.image}
                    alt="meta-mask"
                    height={'26px'}
                    width={'26px'}
                  />
                  <Typography sx={{ fontSize: '22px' }}>
                    {item.title}
                  </Typography>
                </Grid>
                <Typography variant="h6">{item.subTitle}</Typography>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ConnectWallet;
