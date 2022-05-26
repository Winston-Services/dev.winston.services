import React from 'react';

import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { coursesSelector } from './../../../store/academy';
import AcademyCard from './AcademyCard';
const settings = {
  className: 'slider variable-width',
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 3,
  variableWidth: true,
};
export default function AcademySlider() {
  const academyData = useSelector(coursesSelector);

  return (
    <Slider {...settings}>
      {academyData.map((item, index) => (
        <div key={item.title + index} style={{ width: '410px' }}>
          <div style={{ width: '380px' }}>
            <AcademyCard item={item} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
