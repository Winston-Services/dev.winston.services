import React from 'react';
import { Typography, Card, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
function InfoCardCol2({ data }) {
  return (
    <Grid
      container
      rowSpacing={2}
      mt={8}
      columnSpacing={{ xs: 2, md: 2, lg: 4 }}
    >
      {data?.map((item, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={6} key={index.toString()}>
            <Card
              sx={{
                borderRadius: '20px',
                background: `linear-gradient(133.68deg, #6151B0 1.19%, #42328C 50.1%)`,
                padding: '30px',
              }}
            >
              <Grid container>
                <Grid item sm={12} xs={12} lg={3}>
                  <img src={item.icon} />
                </Grid>
                <Grid item sm={12} xs={12} lg={9}>
                  <Typography variant={'h6'}>{item.title}</Typography>
                  <Typography variant={'subtitle2'} mt={2}>
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
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
