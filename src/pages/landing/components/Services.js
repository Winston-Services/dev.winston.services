import React from 'react';
import { Grid, Typography } from '@mui/material';
import nodeHosting from '../../../assets/node_hosting.svg';
import miningPool from '../../../assets/mining_pool_hosting.svg';
import masterNode from '../../../assets/master_node_hosting.svg';
import chainExplorer from '../../../assets/chain_explorer.svg';
import InfoCard4 from '../../../components/info-cards/infoCard4';
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
    <Grid container sx={{ mt: { xs: 10, lg: 0 } }}>
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h3" sx={{ mb: 3 }}>
          Services
        </Typography>
        <Typography textAlign="justify" sx={{ mb: 8 }}>
          Manage blockchain need and crypto in one location
        </Typography>
      </Grid>
      <InfoCard4 data={data} />
    </Grid>
  );
}
