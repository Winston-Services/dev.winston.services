import React from 'react';

import { IconButton } from '@mui/material';

import config from '../config';
import { ReactComponent as Twitter } from './../assets/twitter_brands.svg';

function TwitterLink() {
  return (
    <IconButton href={config.twitterLink} target={'_blank'}>
      <Twitter width={'100%'} height={'100%'} />
    </IconButton>
  );
}

export default TwitterLink;
