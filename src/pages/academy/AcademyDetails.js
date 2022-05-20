import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid, Container, Typography, Link, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// import AcademyDetailsImage from '../../assets/academy_details_image.svg';
import CourseImage from './../../assets/course.png';
import AcademyAccordion from './components/AcademyAccordion';
import AcademySlider from './components/AcademySlider';

function AcademyDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Grid container item xs={12} display={'flex'}>
              <Link
                variant="subtitle1"
                onClick={() => {
                  navigate('/');
                }}
              >
                Home
              </Link>
              <Typography variant="subtitle1" mx={1.25}>
                /
              </Typography>
              <Link
                variant="subtitle1"
                onClick={() => {
                  navigate('/academy');
                }}
              >
                Academy
              </Link>
              <Typography variant="subtitle1" mx={1.25}>
                /
              </Typography>
              <Link variant="subtitle1">Articles</Link>
              <Typography variant="subtitle1" mx={1.25}>
                /
              </Typography>
              <Typography
                variant="subtitle1"
                color="#FFD215"
                fontWeight={'700'}
              >
                Crypto Payments Explained
              </Typography>
            </Grid>
            <Grid my={2}>
              <Typography variant="h3" color="#FFD215">
                Complete crypto payment masterclass
              </Typography>
            </Grid>
            <Typography variant="subtitle2">
              Learn to Crypto like a Pro with Crypto. Start with Crypto
              Programming Basics and progress to a Crypto payment explained.
            </Typography>
            <Grid container gap={1.1} my={2.5}>
              <Chip color="secondary" label="Blockchain" />
              <Chip color="secondary" label="Economics" />
            </Grid>
            <Grid container gap={2}>
              <Grid item display="flex" alignItems={'center'}>
                <StarIcon sx={{ color: '#FFD215' }} />
                <Typography variant="subtitle2" ml={0.7}>
                  4.7 (120 review)
                </Typography>
              </Grid>
              <Grid item display="flex" alignItems={'center'}>
                <AccessTimeIcon />
                <Typography variant="subtitle2" ml={0.7}>
                  2 hour 15 min
                </Typography>
              </Grid>
              <Grid item display="flex" alignItems={'center'}>
                <VisibilityIcon />
                <Typography variant="subtitle2" ml={0.7}>
                  251 viewer
                </Typography>
              </Grid>
            </Grid>
            <Grid container mt={1.9}>
              <Typography mr={0.5}>Created by :</Typography>
              <Typography
                sx={{ color: '#FFD215', cursor: 'pointer' }}
                onClick={() => navigate('/academy/teacher-profile')}
              >
                Hattie H. Moore{' '}
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <img src={CourseImage} alt="img" height="341px" width="100%" />
          </Grid>
        </Grid>
        <Grid
          container
          item
          display={'flex'}
          alignItems="center"
          justifyContent={'space-between'}
          mt={10}
          xs={12}
        >
          <Typography variant="h5">Course detail</Typography>
          <Grid item display={'flex'} gap={2} sx={{ my: { xs: 1.5 } }}>
            <Grid item display={'flex'} alignItems="center">
              <CircleIcon sx={{ fontSize: '6px' }} />
              <Typography variant="subtitle1" ml={1}>
                84 lectures
              </Typography>
            </Grid>
            <Grid item display={'flex'} alignItems="center">
              <CircleIcon sx={{ fontSize: '6px' }} />
              <Typography variant="subtitle1" ml={1}>
                9h 43m total length
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AcademyAccordion />
        </Grid>

        {/* <Grid mt={10} height="440px">
          <Grid position="absolute" left={0} p={2.5}>
            <AcademySlider />
          </Grid>
        </Grid> */}
      </Container>

      <Grid my={5} mx={2}>
        <AcademySlider />
      </Grid>
    </>
  );
}

export default AcademyDetails;
