import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import AcademyIcon from './../../assets/academy_icon.svg';
import AcademyImage from './../../assets/academy_image.svg';
import BeginnerIcon from './../../assets/beginner_icon.svg';
import ExpertIcon from './../../assets/expert_icon.svg';
import IntermediateIcon from './../../assets/intermediate_icon.svg';
import Filter from './../../components/common/Filter';
import AcademyCard from './components/AcademyCard';

const filterPanels = [
  {
    summaryText: 'Topic',
    summaryCount: 0,
    detailsComponent: <Typography>Topic Filter Coming Soon...!</Typography>,
  },
  {
    summaryText: 'Difficulty',
    summaryCount: 0,
    detailsComponent: (
      <Typography>Difficulty Filter Coming Soon...!</Typography>
    ),
  },
  {
    summaryText: 'Price',
    summaryCount: 0,
    detailsComponent: (
      <>
        <Typography>Price Filter Coming Soon...!</Typography>
      </>
    ),
  },
  {
    summaryText: 'Rating',
    summaryCount: 0,
    detailsComponent: <Typography>Rating Filter Coming Soon...!</Typography>,
  },
];

const academyData = [
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    priceLevel: 25,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: IntermediateIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Expert',
    difficultyLevelIcon: ExpertIcon,
    priceLevel: 25,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan and How to Use It?',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Donec eget elit semper.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
];

function Academy() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
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
      <Grid container mt={5} columnSpacing={3}>
        <Grid item md={4}>
          <Filter
            toggleDrawer={toggleDrawer}
            openDrawer={openDrawer}
            filterPanels={filterPanels}
          />
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={3}>
            {academyData.map((item, index) => (
              <Grid item xs={12} sm={6} lg={4} key={item.title + index}>
                <AcademyCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Academy;
