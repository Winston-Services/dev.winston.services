import React from 'react';
import { Typography } from '@mui/material';
import Date from '../../assets/date.svg';
import GetTrigger from '../../assets/get_trigger.svg';
import Hello from '../../assets/hello.svg';
import Ping from '../../assets/ping.svg';
import InfoCardCol4 from './../../layouts/common/InfoCardCol4';
export default function ServerOwnerCommands() {
  const data = [
    {
      title: 'Get Trigger',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      icon: GetTrigger,
    },
    {
      title: 'Ping',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      icon: Ping,
    },
    {
      title: 'Time/Date',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      icon: Date,
    },
    {
      title: 'Hello',
      description:
        'Get the current system trigger that triggers Winston’s commands.',
      icon: Hello,
    },
  ];

  return (
    <div className={`textAlignCenter pRelative mt100`}>
      <Typography className={`colorWhite fw800 mt30  fs50`}>
        Server Owner Commands
      </Typography>
      <Typography className={`mt10 colorWhite fw500 fontSize16`}>
        Each service connection has a basic set of commands to help you interact
        with Winston services.
      </Typography>
      <div className={'mt80'}>
        <InfoCardCol4 data={data} />
      </div>
    </div>
  );
}
