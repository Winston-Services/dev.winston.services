import React from 'react';

import { Grid } from '@mui/material';
import Slider from 'react-slick/lib/slider';

function NewsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid container>
      <Slider {...settings}>
        {[1, 2, 3, 4].map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </Slider>
    </Grid>
  );
}

export default NewsSlider;
