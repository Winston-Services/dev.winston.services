import React from 'react';

import { IconButton } from '@mui/material';

import config from '../config';
import { ReactComponent as Discord } from './../assets/discord_brands.svg';

function DiscordLink() {
  return (
    <IconButton href={config.discordLink} target={'_blank'}>
      <Discord width={'100%'} height={'100%'} />
    </IconButton>
  );
}

export default DiscordLink;
