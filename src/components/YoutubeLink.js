import React from 'react';

import { IconButton } from '@mui/material';

import config from '../config';
import { ReactComponent as Youtube } from './../assets/youtube_brands.svg';

function YoutubeLink(props) {
  return (
    <IconButton href={config.youtubeLink} target={'_blank'} {...props}>
      <Youtube width={'100%'} height={'100%'} />
    </IconButton>
  );
}

export default YoutubeLink;
