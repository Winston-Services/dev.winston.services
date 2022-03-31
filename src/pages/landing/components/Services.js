import React from 'react';

import { Grid, Typography } from '@mui/material';

import chainExplorer from '../../../assets/chain_explorer.svg';
import masterNode from '../../../assets/master_node_hosting.svg';
import miningPool from '../../../assets/mining_pool_hosting.svg';
import nodeHosting from '../../../assets/node_hosting.svg';
import InfoCardType1 from '../../../components/info-cards/InfoCardType1';
let data = [
  {
    title: 'Node hosting',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    moreDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
    icon: nodeHosting,
  },
  {
    title: 'Masternode hosting',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    moreDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
    icon: masterNode,
  },
  {
    title: 'Chain Explorer',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    moreDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
    icon: chainExplorer,
  },
  {
    title: 'Mining pool hosting',
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    moreDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
    icon: miningPool,
  },
];
export default function Services() {
  return (
    <Grid container sx={{ mt: { xs: 10, lg: 0 }, mb: { xs: 20, sm: 20 } }}>
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h3" sx={{ mb: 3 }}>
          Services
        </Typography>
        <Typography textAlign="justify" sx={{ mb: 8 }}>
          Manage blockchain need and crypto in one location
        </Typography>
      </Grid>
      <InfoCardType1 data={data} />
    </Grid>
  );
}
