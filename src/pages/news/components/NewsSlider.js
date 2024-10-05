import React from 'react';


import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Slider from 'react-slick/lib/slider';

import { topNewsSelector } from '../../../store/news';
import Image1 from './../../../assets/news_image_1.png';
import Image2 from './../../../assets/news_image_2.png';
import NewsSliderCard from './NewsSliderCard';

function NewsSlider() {
  const newsData = useSelector(topNewsSelector);
  /*
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
  */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Grid container display={'flex'} columnSpacing={5} mt={4}>
      <Grid item xs={12} sm={6} md={8}>
        <Slider {...settings}>
          {newsData.map((item, index) => {
            return (
              <div key={index}>
                <NewsSliderCard
                  item={{
                    ...item,
                    description: item.description.substring(0, 100),
                    image: item.image === 'ImageData1' ? Image1 : Image2,
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ my: { xs: 2, sm: 0 } }}>
        <NewsSliderCard
          item={{
            ...newsData[0],
            description: '',
            image: Image2,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default NewsSlider;
