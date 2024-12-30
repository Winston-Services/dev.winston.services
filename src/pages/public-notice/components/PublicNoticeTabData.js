import React from 'react';

import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

import PublicNoticeCard from './PublicNoticeCard';

function PublicNoticeTabData({ data }) {
  return (
    <Grid container>
      {data.map((item, index) => {
        return (
          <Grid key={index} mt={2}>
            <PublicNoticeCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

PublicNoticeTabData.propTypes = {
  data: PropTypes.array,
};

export default PublicNoticeTabData;
