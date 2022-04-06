import React from 'react';

import { Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

import InfoCardType1 from './InfoCardType1';
import InfoCardType2 from './InfoCardType2';
export default function InfoCard({
  listLayoutType,
  listData,
  title,
  subTitle,
  description,
}) {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 8, textAlign: 'center' }}>
        {title ? (
          <Typography variant={'h3'} sx={{ mt: 8, fontWeight: '800' }}>
            {title}
          </Typography>
        ) : null}
        {subTitle ? (
          <Typography id="servicesTitle" variant="h4" sx={{ mt: 6 }}>
            {subTitle}
          </Typography>
        ) : null}
        {description ? (
          <Typography sx={{ mt: 3 }}>{description}</Typography>
        ) : null}
      </Grid>
      {listLayoutType === 'col4' ? (
        <InfoCardType1 data={listData} />
      ) : (
        <InfoCardType2 data={listData} />
      )}
    </Grid>
  );
}

InfoCard.propTypes = {
  listData: PropTypes.array,
  listLayoutType: PropTypes.oneOf(['col2', 'col4']),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
};
