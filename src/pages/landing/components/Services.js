import React from 'react';

import { Grid, Typography } from '@mui/material';

import chainExplorer from '../../../assets/chain_explorer.svg';
import masterNode from '../../../assets/master_node_hosting.svg';
import miningPool from '../../../assets/mining_pool_hosting.svg';
import nodeHosting from '../../../assets/node_hosting.svg';
import InfoCardType1 from '../../../components/info-cards/InfoCardType1';
let data = [
  {
    title: 'Winston Dashboard',
    subTitle: 'A multicore wallet and dashboard.',
    description: 'A unique purspective of your assets on blockchains.',
    icon: nodeHosting,
  },
  {
    title: 'Masternode hosting',
    subTitle: 'Full managed masternode hosting with secure connection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
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
];
export default function Services() {
  return (
    <Grid container sx={{ mt: { xs: 5, lg: 0 }, mb: { xs: 10, sm: 10 } }}>
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h3" sx={{ mb: 3 }}>
          Services
        </Typography>
        <Typography textAlign="justify" sx={{ mb: 8, fontSize:'xx-large' }}>
          Winston love&apos;s crypto, and we support many projects. We want you
          to enjoy crypto as well. So we try to offer as many crypto related
          services as we can. We are proud to include all of these great
          features in our service so that our customer&apos;s experience remains
          hassle free.
        </Typography>
      </Grid>
      <InfoCardType1 data={data} />
    </Grid>
  );
}
