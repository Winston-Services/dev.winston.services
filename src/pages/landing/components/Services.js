import React from 'react';

import { Grid, Typography } from '@mui/material';

/* eslint-disable */
import chainExplorer from '../../../assets/chain_explorer.svg';
import masterNode from '../../../assets/master_node_hosting.svg';
import miningPool from '../../../assets/mining_pool_hosting.svg';
import nodeHosting from '../../../assets/node_hosting.svg';
/* eslint-enable */
import InfoCardType1 from '../../../components/info-cards/InfoCardType1';
export default function Services() {
  let data = [
    {
      title: 'Winston',
      subTitle: 'Your personal assistant to all things blockchain.',
      description:
        'Winston is a personal assistant to all things blockchain. He can help you with your blockchain projects, and he can help you with your blockchain knowledge.',
      moreDescription:
        'Winston is a  Discord bot that can help you with your blockchain projects, with a wide range of blockchain features.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    {
      title: 'Winston Dashboard',
      subTitle: 'A multicore wallet and dashboard.',
      description: 'A distinctive perspective on your blockchain assets, providing a unique tool for asset management.',
      moreDescription: 'Winston Dashboard is a multicore wallet and dashboard. It allows you to manage your blockchain assets, and it allows you to learn about blockchain projects.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    
    {
      title: 'Winston Rewards',
      subTitle: 'Earn rewards for participating in the community.',
      description: 'Winston Rewards is a program that allows everyone to earn rewards for participating in the community driven rewards program.',
      moreDescription: 'Winston is a symbol of those driven to support education and reward others who do the same.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    
    {
      title: 'Winston Burn',
      subTitle: 'Burn your tokens to support the community.',
      description: 'Burn your tokens to support the community. Each burn decreases the total supply of Winston increasing the value of the remaining Winston.',
      moreDescription: 'Let\'s burn a passion for learning and reward others who do the same.',
      icon: 'https://winston.services/assets/winston.png',
      iconProps: {
        width: '96px',
        height: '96px',
      },
    },
    /*
    {
      title: 'NFT Marketplace',
      subTitle: 'A multichain marketplace for NFT\'s',
      description:
        'List your NFT collection assets to our multichain NFT marketplace, or find your next favorite one.',
      icon: masterNode,
    },
    {
      title: 'Chain Explorer',
      subTitle: 'Explore data stored on many blockchains networks',
      description:
        'We have block explorers for 12 different cores currently and plan to increase that to many more as we grow.',
      moreDescription:
        'We also offer anyone who creates a new coin with Winston Services, the ability to have a block explorer hosted for their new coins.A hassle way to get a new project started.',
      icon: chainExplorer,
    },
    {
      title: 'Mining pool hosting',
      subTitle: 'Hosting using your mining pool from your new coin',
      description:
        'Winston Mining pools allow anyone to join in a pool we have running. These pools will be setup for the initial 12 cores, and then we will add additional cores as we grow.',
      moreDescription:
        'On top of this when someone creates a new coin with Winston Services they can choose to add in a hosted mining pool for their new coin.',
      icon: miningPool,
    },
    */
  ];
  return (
    <Grid container sx={{ mt: { xs: 5, lg: 3 }, mb: { xs: 10, sm: 10 } }}>
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h2" sx={{ mb: 3 }}>
          Services
        </Typography>
        <Typography textAlign="left" sx={{ mb: 8, fontSize: 'xx-large' }}>
          Winston love&apos;s crypto. We want you to enjoy crypto as well. We
          are proud to include these great features in our service.
        </Typography>
      </Grid>
      <InfoCardType1 data={data} />
    </Grid>
  );
}
