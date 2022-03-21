import React from 'react';
import { Grid, Typography } from '@mui/material';
import nodeHosting from '../../../assets/node-hosting.svg';
import miningPool from '../../../assets/mining-pool-hosting.svg';
import masterNode from '../../../assets/master-node-hosting.svg';
import chainExplorer from '../../../assets/chain-explorer.svg';
import SectionCard from './SectionCard';
let services = [
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
  const [open, setOpen] = React.useState({});
  const setOpenCard = (index, value) => {
    setOpen({ ...open, [index]: !!value });
  };
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
      <Grid item xs={12} container spacing={5} sx={{ mb: { xs: 20, sm: 20 } }}>
        {services.map((service, index) => (
          <Grid
            className={
              Object.values(open).includes(true)
                ? 'serviceCardWrap active'
                : 'serviceCardWrap'
            }
            key={service.title}
            item
            xs={12}
            md={6}
            lg={3}
          >
            <SectionCard
              item={service}
              index={index}
              setOpen={setOpenCard}
              isOpen={open[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
