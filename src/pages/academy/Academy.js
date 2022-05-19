import React from 'react';

import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';

import AutoCompleteSearchBar from '../../components/common/AutoCompleteSearchBar';
import AcademyIcon from './../../assets/academy_icon.svg';
import AcademyImage from './../../assets/academy_image.svg';
import BeginnerIcon from './../../assets/beginner_icon.svg';
import ExpertIcon from './../../assets/expert_icon.svg';
import IntermediateIcon from './../../assets/intermediate_icon.svg';
import Filter from './../../components/common/Filter';
import AcademyCard from './components/AcademyCard';

const topicFilter = [
  'Altcoin',
  'Music',
  'Domain Names',
  'Music',
  'Photography',
  'Sports',
  'Trading Cards',
  'Utility',
  'Virtual Worlds',
];

const filterPanels = [
  {
    summaryText: 'Sort',
    summaryCount: 0,
    detailsComponent: <Typography>Sort Filter Coming Soon...!</Typography>,
  },
  {
    summaryText: 'Topic',
    summaryCount: 0,
    detailsComponent: (
      <>
        {topicFilter.map((item, index) => (
          <Chip
            variant="filled"
            key={item + index}
            label={item}
            onClick={() => {
              console.log('first');
            }}
            sx={{ mr: 1.25, mt: 1.25 }}
          />
        ))}
      </>
    ),
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
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elitr.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    priceLevel: 25,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan1 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: IntermediateIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan2 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Expert',
    difficultyLevelIcon: ExpertIcon,
    priceLevel: 25,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan3 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan4 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan5 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan6 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan7 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
  {
    image: AcademyImage,
    title: 'What Is SolScan8 and How to Use It?',
    description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: BeginnerIcon,
    duration: '2 hour 15 min',
    rating: '4.7',
  },
];

function Academy() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [searchData, setSearchData] = React.useState(academyData);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Container>
        <Grid container columnSpacing={3} alignItems="center">
          <Grid item md={4} display="flex">
            <Typography variant="h3" textAlign="center">
              Academy
            </Typography>
          </Grid>
          <Grid item md={8}>
            <AutoCompleteSearchBar
              data={academyData}
              searchBy="title"
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              setSearchData={setSearchData}
            />
          </Grid>
        </Grid>
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
              {searchData && searchData.length !== 0 ? (
                searchData.map((item, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={item.title + index}>
                    <AcademyCard item={item} />
                  </Grid>
                ))
              ) : (
                <Typography textAlign={'center'} width="100%">
                  No results for &apos;{searchInput}&apos;
                </Typography>
              )}
            </Grid>
            <Grid container justifyContent={'center'} mt={5}>
              <Button variant="outlined">Load more videos</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Paper elevation={0} sx={{ py: 10, mt: 10 }}>
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
                sx={{
                  mt: { xs: 5, md: 12.4 },
                  mb: 5,
                  width: { xs: '100%', sm: 'auto' },
                }}
                onClick={() => navigate('/academy/add-course')}
              >
                Start uploading video
              </Button>
            </Grid>
            <Grid item md={5.5}>
              <img src={AcademyIcon} style={{ width: '100%' }} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}

export default Academy;
