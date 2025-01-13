import React from 'react';

import { IconButton } from '@mui/material';

import config from '../config';
import { ReactComponent as Twitter } from './../assets/twitter_brands.svg';

function TwitterLink(props) {
  return (
    <IconButton href={config.twitterLink} target={'_blank'} {...props}>
      <Twitter />
    </IconButton>
  );
}

export default TwitterLink;
