import React from 'react';
import { Grid, Typography } from '@mui/material';
import Date from '../../assets/Date.svg';
import GetTrigger from '../../assets/GetTrigger.svg';
import InfoCardCol2 from './../../layouts/common/InfoCardCol2';

export default function GameCommands() {
  const data = [
    {
      title: 'Tic-Tac-Toe',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      icon: GetTrigger,
    },
    {
      title: 'Monster-Mash',
      description:
        'Have Winston tell your the time or date the server is currently running at.',
      icon: Date,
    },
  ];

  return (
    <Grid mt={8} sx={{ textAlign: 'center' }}>
      <Typography className={`colorWhite fw800 fs50`}>Game Commands</Typography>
      <Typography className={`mt10 colorWhite fw500 fontSize16`}>
        Each service connection has a basic set of commands to help you interact
        with Winston services.
      </Typography>
      <div className={`mt80`}>
        <InfoCardCol2 data={data} />
      </div>
    </Grid>
  );
}
