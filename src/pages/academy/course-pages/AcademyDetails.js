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
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// import AcademyDetailsImage from '../../assets/academy_details_image.svg';
import CourseImage from '../../../assets/course.png';
import {
  coursesSelector,
  courseSelector,
  setActiveCourse,
} from '../../../store/academy';
import AcademyAccordion from '../components/AcademyAccordion';
import AcademySlider from '../components/AcademySlider';

function AcademyDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const courses = useSelector(coursesSelector);
  const activeCourse = useSelector(courseSelector);

  // console.log(courses, courseId);
  const course = courses.find((item) => item.id === courseId);

  const renderRating = () => {
    if (!course) return null;
    const rating =
      course?.rating.reduce((acc, rating) => acc + rating.stars, 0) || 0;
    const reviews = course?.reviews.length || 0;
    return (
      <Grid item display="flex" alignItems={'center'}>
        <StarIcon sx={{ color: '#FFD215' }} />
        <Typography variant="subtitle2" ml={0.7}>
          {rating} ({reviews} reviews)
        </Typography>
      </Grid>
    );
  };

  const renderDuration = () => {
    if (!course) return null;
    const duration = course?.duration || 0;
    return (
      <Grid item display="flex" alignItems={'center'}>
        <AccessTimeIcon />
        <Typography variant="subtitle2" ml={0.7}>
          {duration} hr(s)
        </Typography>
      </Grid>
    );
  };

  const renderViews = () => {
    if (!course) return null;
    const viewers = course?.viewers + 1 || 1;
    return (
      <Grid item display="flex" alignItems={'center'}>
        <VisibilityIcon />
        <Typography variant="subtitle2" ml={0.7}>
          {viewers} viewers
        </Typography>
      </Grid>
    );
  };

  const renderThumbnail = () => {
    return course ? (
      <img
        src={course?.thumbnail}
        alt={course?.title}
        width={560.99}
        height={341}
      />
    ) : (
      <img src={CourseImage} alt={course?.title} />
    );
  };

  React.useEffect(() => {
    if (course && !activeCourse) {
      dispatch(setActiveCourse(course));
    }
    return () => {
      return false;
    };
  }, [course, dispatch, activeCourse]);

  if (!course) {
    return (
      <Container>
        <Grid container spacing={4} justifyContent={'center'}>
          <Grid item md={6}>
            <Typography variant="h4">Course not found</Typography>
            <Typography variant="subtitle1">
              The course you are looking for does not exist.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/academy/all-courses')}
            >
              Go to courses
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }

  if (!activeCourse) {
    return (
      <Container>
        <Grid container spacing={4}>
          <Grid item md={12} display={'flex'} justifyContent={'center'}>
            <Typography variant="h4">Loading...</Typography>
            {/* Todo : Add Skeleton of Course page. */}
          </Grid>
        </Grid>
      </Container>
    );
  }

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
              {activeCourse?.title}
            </Typography>
          </Grid>
          <Grid my={2}>
            <Typography variant="h3" color="#FFD215">
              {activeCourse?.description}
            </Typography>
          </Grid>
          <Typography variant="subtitle2">{activeCourse?.summary}</Typography>
          <Grid container gap={1.1} my={2.5}>
            {activeCourse?.skills.map((skill) => (
              <Chip color="primary" label={skill} key={skill} />
            ))}
          </Grid>
          <Grid container gap={1.1} my={2.5}>
            {activeCourse?.tags.map((tag) => (
              <Chip color="secondary" label={tag} key={tag} />
            ))}
          </Grid>
          <Grid container gap={2}>
            {renderRating()}
            {renderDuration()}
            {renderViews()}
          </Grid>
          <Grid container mt={1.9}>
            <Typography mr={0.5}>Created by :</Typography>
            <Typography
              sx={{ color: '#FFD215', cursor: 'pointer' }}
              onClick={() => navigate('/academy/teacher-profile')}
            >
              {activeCourse?.teacher.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={6}>
          {renderThumbnail()}
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
              {activeCourse?.lectures.length} lectures
            </Typography>
          </Grid>
          <Grid item display={'flex'} alignItems="center">
            <CircleIcon sx={{ fontSize: '6px' }} />
            <Typography variant="subtitle1" ml={1}>
              {activeCourse?.duration} hr(s) total length
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AcademyAccordion course={activeCourse?.lectures || []} />
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
