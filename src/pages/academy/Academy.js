import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import AcademyIcon from './../../assets/academy_icon.svg';
import AcademyImage from './../../assets/academy_image.svg';
import { ReactComponent as BeginnerIcon } from './../../assets/beginner_icon.svg';
import { ReactComponent as ExpertIcon } from './../../assets/expert_icon.svg';
import { ReactComponent as IntermediateIcon } from './../../assets/intermediate_icon.svg';
import DropDown2 from './../../components/common/DropDown2';
import AcademyCard from './components/AcademyCard';

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

function Academy() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid
        container
        rowSpacing={6}
        columnSpacing={3}
        display="flex"
        alignItems="center"
      >
        <Grid item md={6.5}>
          <Typography variant="h3">Upload video</Typography>
          <Typography variant="subtitle1" mt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            sollicitudin venenatis feugiat magna feugiat urna cursus turpis.
            Consectetur arcu quis vel nec, nibh id nisl praesent ac. Neque.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 12.5, width: { xs: '100%', sm: 'auto' } }}
            onClick={() => navigate('/academy/add-course')}
          >
            Start uploading video
          </Button>
        </Grid>
        <Grid item md={5.5}>
          <img src={AcademyIcon} style={{ width: '100%' }} />
        </Grid>
      </Grid>

      <Typography variant="h3" mt={12.5} textAlign="center">
        Academy
      </Typography>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={12} sm={6} md={4}>
          <DropDown2
            options={[
              'Altcoin',
              'Binance',
              'Bitcoin',
              'Blockchain',
              'Consensus',
              'Cryptography',
              'DeFi',
            ]}
            placeholder={'Select Topics'}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DropDown2
            options={['Beginner', 'Intermediate', 'Expert']}
            placeholder={'Select Difficulty'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container columnSpacing={3}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: '100%' }}
              >
                Apply Filter
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%' }}
              >
                Clear Filter
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {academyData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={item.title + index}>
            <AcademyCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Academy;
