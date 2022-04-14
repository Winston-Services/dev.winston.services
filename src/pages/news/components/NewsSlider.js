import React from 'react';

import { Grid, Typography } from '@mui/material';
import Slider from 'react-slick/lib/slider';

import Image1 from './../../../assets/news_image_1.png';
import Image2 from './../../../assets/news_image_2.png';
import NewsSliderCard from './NewsSliderCard';

function NewsSlider() {
  const newsData = [
    {
      image: Image1,
      date: 'March 18, 2022',
      description:
        'The Non-Fungible Token Bible Everything you need to know about NFTs',
    },
    {
      image: Image2,
      date: 'March 18, 2022',
      description: 'The Non-Fungible Token Bible',
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid container display={'flex'} columnSpacing={5} mt={4}>
      <Grid item xs={12} sm={6} md={8}>
        <Slider {...settings}>
          {newsData.map((item, index) => {
            return (
              <div key={index}>
                <NewsSliderCard item={item} />
              </div>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ my: { xs: 2, sm: 0 } }}>
        <Grid>
          <img
            src={Image2}
            style={{
              width: '100%',
              height: '260px',
              borderRadius: '20px',
              objectFit: 'cover',
            }}
          ></img>
          <Grid my={1.5}>
            <Typography variant="subtitle1">March 18,2022</Typography>
          </Grid>
          <Grid my={1.5}>
            <Typography variant="h5">The Non-Fungible Token Bible</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NewsSlider;
