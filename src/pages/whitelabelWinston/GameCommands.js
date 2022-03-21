import React from 'react';
import { Grid, Typography } from '@mui/material';
// import Date from '../../assets/time_date.svg';
// import GetTrigger from '../../assets/get_trigger.svg';
// import InfoCardCol2 from './../../layouts/common/InfoCardCol2';

export default function GameCommands() {
  // const data = [
  //   {
  //     title: 'Tic-Tac-Toe',
  //     description:
  //       'Get the current system trigger that triggers Winston’s commands.',
  //     icon: GetTrigger,
  //   },
  //   {
  //     title: 'Monster-Mash',
  //     description:
  //       'Have Winston tell your the time or date the server is currently running at.',
  //     icon: Date,
  //   },
  // ];

  return (
    <Grid mt={8} sx={{ textAlign: 'center' }}>
      <Typography variant={'h2'} mt={15} sx={{ fontWeight: '800' }}>
        Game Commands
      </Typography>
      <Typography mt={2}>
        Each service connection has a basic set of commands to help you interact
        with Winston services.
      </Typography>
      {/* <InfoCardCol2 data={data} /> */}
    </Grid>
  );
}
