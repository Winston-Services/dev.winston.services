import React from 'react';

import { Button, Container, Grid, Paper, Typography } from '@mui/material';

import blockAtlas from './../../assets/block_atlas.svg';
import walletConnect from './../../assets/wallet_connect.svg';
import walletCore from './../../assets/wallet_core.svg';
import winstonLogo from './../../assets/winston_logo.svg';
import WinstonApp from './../../components/common/WinstonApp';

function Developers() {
  const developersData = [
    {
      image: walletCore,
      title: 'Wallet core',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada a posuere nunc cras pretium. Mauris eu faucibus dignissim felis. Cursus commodo blandit maecenas porta. Viverra ullamcorper tellus varius iaculis.',
    },
    {
      image: walletConnect,
      title: 'WalletConnect',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada a posuere nunc cras pretium. Mauris eu faucibus dignissim felis. Cursus commodo blandit maecenas porta. Viverra ullamcorper tellus varius iaculis.',
    },
    {
      image: winstonLogo,
      title: 'Digital Assets',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada a posuere nunc cras pretium. Mauris eu faucibus dignissim felis. Cursus commodo blandit maecenas porta. Viverra ullamcorper tellus varius iaculis.',
    },
    {
      image: blockAtlas,
      title: 'Block Atlas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada a posuere nunc cras pretium. Mauris eu faucibus dignissim felis. Cursus commodo blandit maecenas porta. Viverra ullamcorper tellus varius iaculis.',
    },
  ];
  return (
    <>
      <Container>
        <Grid textAlign="center">
          <Typography variant="h3">Developers</Typography>
          <Typography variant="subtitle1" my={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada a
            posuere nunc cras pretium. Mauris eu faucibus dignissim felis.
            Cursus commodo blandit maecenas porta. Viverra ullamcorper tellus
            varius iaculis.
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={4}>
          {developersData.map((item, index) => {
            return (
              <Grid item key={index} xs={12} md={6} lg={4} textAlign="center">
                <Paper elevation={0}>
                  <Grid item pt={5}>
                    <img src={item.image} height="80px" width="80px"></img>
                  </Grid>
                  <Typography variant="h6" py={1}>
                    {item.title}
                  </Typography>
                  <Grid px={4}>
                    <Typography variant="subtitle1">
                      {item.description}
                    </Typography>
                  </Grid>

                  <Button variant="contained" color="secondary" sx={{ my: 6 }}>
                    Read More
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <WinstonApp />
    </>
  );
}

export default Developers;
