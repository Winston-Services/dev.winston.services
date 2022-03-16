import React from 'react';
import { Typography, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
function InfoCardCol2({ data }) {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
      {data?.map((item, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index.toString()}>
            <Paper
              sx={{ borderRadius: '20px' }}
              style={{
                background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
              }}
            >
              <Grid container>
                <Grid item sm={12} xs={12} lg={3}>
                  <img src={item.icon} />
                </Grid>
                <Grid item sm={12} xs={12} lg={9}>
                  <Typography variant={'h6'} className="colorWhite">
                    {item.title}
                  </Typography>
                  <Typography variant={'subtitle2'} mt={2}>
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

InfoCardCol2.propTypes = {
  data: PropTypes.element,
};
export default InfoCardCol2;
