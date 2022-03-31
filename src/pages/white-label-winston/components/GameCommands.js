import React from 'react';

import GetTrigger from './../../../assets/get_trigger.svg';
import Date from './../../../assets/time_date.svg';
import InfoCard from './../../../components/info-cards/index';

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
    <InfoCard
      listData={data}
      title={'Game Commands'}
      description={
        'Each service connection has a basic set of commands to help you interact with Winston services.'
      }
      listLayoutType={'col2'}
    />
  );
}
