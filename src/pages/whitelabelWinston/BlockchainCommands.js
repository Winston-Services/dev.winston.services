import React from 'react';
import { Grid, Typography } from '@mui/material';
import Date from '../../assets/time_date.svg';
import GetTrigger from '../../assets/get_trigger.svg';
import Hello from '../../assets/hello_icon.svg';
import Ping from '../../assets/ping_icon.svg';
import InfoCard4 from './../../components/info-cards/infoCard4';
export default function BlockchainCommands() {
  const data = [
    {
      title: 'Get Trigger',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      moreDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
      icon: GetTrigger,
    },
    {
      title: 'Ping',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      moreDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
      icon: Ping,
    },
    {
      title: 'Time/Date',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      moreDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
      icon: Date,
    },
    {
      title: 'Hello',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      moreDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet adipiscing ipsum placerat nulla gravida elit, non. Mauris neque egestas in.',
      icon: Hello,
    },
  ];

  return (
    <Grid container sx={{ mt: { xs: 10, lg: 0 }, textAlign: 'center' }}>
      <Grid item xs={12}>
        <Typography id="servicesTitle" variant="h3" sx={{ mb: 3 }}>
          Blockchain Commands
        </Typography>
        <Typography sx={{ mb: 8 }}>
          Each service connection has a basic set of commands to help you
          interact with Winston services.
        </Typography>
      </Grid>
      <InfoCard4 data={data} />
    </Grid>
  );
}
