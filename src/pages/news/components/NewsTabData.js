import React from 'react';

import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

import NewsCard from './NewsCard';

function NewsTabData({ data }) {
  return (
    <Grid container>
      {data.map((item, index) => {
        return (
          <Grid key={index} mt={2}>
            <NewsCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}

NewsTabData.propTypes = {
  data: PropTypes.array,
};

export default NewsTabData;
