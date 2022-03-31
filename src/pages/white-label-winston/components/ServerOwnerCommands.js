import React from 'react';

import GetTrigger from './../../../assets/get_trigger.svg';
import Hello from './../../../assets/hello_icon.svg';
import Ping from './../../../assets/ping_icon.svg';
import Date from './../../../assets/time_date.svg';
import InfoCard from './../../../components/info-cards/index';

export default function ServerOwnerCommands() {
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
    <InfoCard
      listData={data}
      title={'Server Owner Commands'}
      description={
        'Each service connection has a basic set of commands to help you interact with Winston services.'
      }
      listLayoutType={'col4'}
    />
  );
}
