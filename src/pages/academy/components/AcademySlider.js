import React from 'react';

import Slider from 'react-slick';

import AcademyImage from './../../../assets/academy_image.svg';
import { ReactComponent as BeginnerIcon } from './../../../assets/beginner_icon.svg';
import { ReactComponent as ExpertIcon } from './../../../assets/expert_icon.svg';
import { ReactComponent as IntermediateIcon } from './../../../assets/intermediate_icon.svg';
import AcademyCard from './AcademyCard';

export default function AcademySlider() {
  const academyData = [
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Beginner',
      difficultyLevelIcon: <BeginnerIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Intermediate',
      difficultyLevelIcon: <IntermediateIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Expert',
      difficultyLevelIcon: <ExpertIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Beginner',
      difficultyLevelIcon: <BeginnerIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Beginner',
      difficultyLevelIcon: <BeginnerIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
    {
      image: AcademyImage,
      title: 'What Is SolScan and How to Use It?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget elit semper, feugiat nulla in, euismod neque. Ut aliquet volutpat neque eu posuere.',
      difficultyLevel: 'Beginner',
      difficultyLevelIcon: <BeginnerIcon />,
      duration: '2 hour 15 min',
      rating: '4.7',
    },
  ];
  var settings = {
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
