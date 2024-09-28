import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Grid,
  Container,
  Typography,
  Link,
  Chip,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// import AcademyDetailsImage from '../../assets/academy_details_image.svg';
import { coursesSelector } from '../../store/academy';
import CourseImage from './../../assets/course.png';
import AcademyAccordion from './components/AcademyAccordion';
import AcademySlider from './components/AcademySlider';

function AcademyDetails() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const  courses  = useSelector(coursesSelector);
  // console.log(courses, courseId);
  const course = courses.find((item) => item.id === courseId);
  // console.log('course', course);
  return (
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
            <Link
              variant="subtitle1"
              onClick={() => {
                navigate('/academy/courses');
              }}
            >
              Courses
            </Link>
            <Typography variant="subtitle1" mx={1.25}>
              /
            </Typography>
            <Typography variant="subtitle1" color="#FFD215" fontWeight={'700'}>
              Crypto Payments Explained
            </Typography>
          </Grid>
          <Grid my={2}>
            <Typography variant="h3" color="#FFD215">
              Complete crypto payment master class
            </Typography>
          </Grid>
          <Typography variant="subtitle2">
            Learn to Crypto like a Pro with Crypto. Start with Crypto
            Programming Basics and progress to a Crypto payment explained.
          </Typography>
          <Grid container gap={1.1} my={2.5}>
            <Chip color="primary" label="Programming" />
            <Chip color="primary" label="Development" />
          </Grid>
          <Grid container gap={1.1} my={2.5}>
            <Chip color="secondary" label="Blockchain" />
            <Chip color="secondary" label="Economics" />
          </Grid>
          <Grid container gap={2}>
            <Grid item display="flex" alignItems={'center'}>
              <StarIcon sx={{ color: '#FFD215' }} />
              <Typography variant="subtitle2" ml={0.7}>
                4.7 (120 reviews)
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
                251 viewers
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
        <Typography variant="h4">Course detail</Typography>
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
              2h 15m total length
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AcademyAccordion course={course?.lectures || []} />
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ height: '20px' }} />
        <Typography variant="h4" sx={{ marginTop: '16px' }}>
          Some other courses of interest.
        </Typography>
      </Grid>
      <Grid my={5} mx={2}>
        <AcademySlider />
      </Grid>
    </Container>
  );
}

export default AcademyDetails;
