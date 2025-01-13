import React from 'react';

import { IconButton } from '@mui/material';

import config from '../config';
import { ReactComponent as Discord } from './../assets/discord_brands.svg';


function DiscordLink(props) {
  return (
    <IconButton href={config.discordLink} target={'_blank'} {...props}>
      <Discord />
    </IconButton>
  );
}

export default DiscordLink;
