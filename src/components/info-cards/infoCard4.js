import React from 'react';
import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import SectionCard from './../../pages/landing/components/SectionCard';
export default function InfoCard4({ data }) {
  const [open, setOpen] = React.useState({});
  const setOpenCard = (index, value) => {
    setOpen({ ...open, [index]: !!value });
  };
  return (
    <Grid container sx={{ mt: { xs: 10, lg: 0 } }}>
      <Grid item xs={12} container spacing={5} sx={{ mb: { xs: 20, sm: 20 } }}>
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
            <SectionCard
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

InfoCard4.propTypes = {
  data: PropTypes.element,
};
