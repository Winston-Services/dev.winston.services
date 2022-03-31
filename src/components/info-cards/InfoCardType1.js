import React from 'react';

import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';

import CardType1 from './CardType1';
export default function InfoCardType1({ data }) {
  const [open, setOpen] = React.useState({});
  const setOpenCard = (index, value) => {
    setOpen({ ...open, [index]: !!value });
  };
  return (
    <Grid container sx={{ mt: { xs: 10, lg: 0 } }}>
      <Grid item xs={12} container spacing={5}>
        {data.map((service, index) => (
          <Grid
            className={
              Object.values(open).includes(true)
                ? 'serviceCardWrap active'
                : 'serviceCardWrap'
            }
            key={service.title}
            item
            xs={12}
            md={6}
            lg={3}
          >
            <CardType1
              item={service}
              index={index}
              setOpen={setOpenCard}
              isOpen={open[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

InfoCardType1.propTypes = {
  data: PropTypes.array,
};
