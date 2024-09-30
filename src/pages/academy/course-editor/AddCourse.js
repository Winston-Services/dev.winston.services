import React from 'react';

import {
  Container,
  Typography,
  Grid,
  LinearProgress,
  Button,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import * as Yup from 'yup';

import MonitorImage from '../../../assets/moniter.svg';
import {
  setCourseEdit,
  courseEditSelector,
  courseTemplateSelector,
} from '../../../store/academy';
import StepAddCourse from '../components/StepAddCourse';

function AddCourse() {
  const steps = [
    {
      title: 'Share your knowledge',
      description:
        'Not everyone has the time or money to go to school. Winston Academy is here to help you share your knowledge with the world.',
      question: 'What kind of teching have you done before?',
      options: [
        'In person, informally',
        'In person, professionally',
        'Online',
        'Other',
      ],
    },
    {
      title: 'Create a course',
      description:
        'Winston Academy is here to help you share your knowledge with the world.',
      question: 'How much of a ”pro” are you?',
      options: [
        'I am a beginner',
        'I have some knowledge',
        'I am experienced',
        'I have videos ready to upload',
      ],
    },
    {
      title: 'Expand your reach',
      description:
        'Connecting with an audience is key to sharing your knowledge.',
      question: 'Do you have an audience to share your course with?',
      options: [
        'Not at the moment',
        'I have small following',
        'I have sizeable following',
        'To everyone',
      ],
    },
  ];
  const dispatch = useDispatch();
  const courseTemplateData = useSelector(courseTemplateSelector);
  const newCourseData = useSelector(courseEditSelector);
  const slider = React.useRef(null);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    draggable: false,
    swipe: false,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const courseData = newCourseData || courseTemplateData;

  const handleSubmit = (values) => {
    if (slideIndex === 2) {
      //console.log('courseData', courseData, values);
      dispatch(setCourseEdit({ ...courseData, ...values, isTemplate: false }));
      navigate('/academy/create-course');
    } else slider?.current?.slickNext();
  };

  const FORM_VALIDATION = Yup.object().shape({
    step1: Yup.string().required('Required'),
    step2: Yup.string().required('Required'),
    step3: Yup.string().required('Required'),
  });

  React.useEffect(() => {
    // console.log('courseData', courseData);
    if (courseData.isTemplate) {
      dispatch(setCourseEdit({ ...courseData, isTemplate: false }));
    }
  }, [courseData, dispatch]);

  return (
    <Container>
      <Grid
        display={'flex'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography variant="h3">Add your course</Typography>
        <Typography variant="subtitle1">Exit</Typography>
      </Grid>
      <Typography variant="subtitle1" mt={{ xs: 3, sm: 6 }}>
        Step {slideIndex + 1} of 3
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(slideIndex + 1) * 33.33}
        sx={{ mt: { xs: 1, sm: 2 } }}
      />

      <Grid
        container
        mt={0}
        spacing={6}
        display="flex"
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        alignItems={'center'}
      >
        <Grid item md={6.5}>
          <Formik
            initialValues={{ ...courseData }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form>
              <Slider ref={slider} {...settings}>
                {steps.map((step, index) => (
                  <Grid key={step.title}>
                    <StepAddCourse name={'step' + (index + 1)} data={step} />
                  </Grid>
                ))}
              </Slider>
              <Grid
                sx={{ mt: { xs: 2.5, sm: 5 } }}
                display="flex"
                gap={2}
                justifyContent={'space-between'}
              >
                <Button
                  sx={{
                    ...(slideIndex === 0 && { visibility: 'hidden' }),
                    width: { xs: '50%', sm: 'auto' },
                  }}
                  variant="outlined"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  Previous
                </Button>
                <Button
                  sx={{ width: { xs: '50%', sm: 'auto' } }}
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Next
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
        <Grid item md={5}>
          <img src={MonitorImage} width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddCourse;
