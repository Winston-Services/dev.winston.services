import React from 'react';

import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { coursesSelector } from './../../../store/academy';
import AcademyCard from './AcademyCard';
const settings = {
  className: 'slider variable-width',
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
export default function AcademySlider() {
  const academyData = useSelector(coursesSelector);

  return (
    <Slider {...settings}>
      {academyData.map((item, index) => (
        <div key={item.title + index} style={{ width: '410px' }}>
          <div style={{ width: '380px', height: '450px' }}>
            <AcademyCard item={item} />
          </div>
        </div>
      ))}
    </Slider>
  );
}
