import React from 'react';

import {
  Container,
  Typography,
  Grid,
  LinearProgress,
  Button,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import * as Yup from 'yup';

import MonitorImage from './../../assets/moniter.svg';
import StepAddCourse from './components/StepAddCourse';
import StepTitle from './components/StepTitle';

const steps = [
  {
    title: 'Share your knowledge',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam ipsum ut potenti ut. Facilisi est facilisi elementum duis tellus porttitor ac. Sagittis etiam penatibus urna sit porta lectus. Tortor eu nisi velit magna lorem non dui.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam ipsum ut potenti ut. Facilisi est facilisi elementum duis tellus porttitor ac. Sagittis etiam penatibus urna sit porta lectus. Tortor eu nisi velit magna lorem non dui.',
    question: 'How much of a video”pro” are you?',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam ipsum ut potenti ut. Facilisi est facilisi elementum duis tellus porttitor ac. Sagittis etiam penatibus urna sit porta lectus. Tortor eu nisi velit magna lorem non dui.',
    question: 'Do you have an audience to share your course with?',
    options: [
      'Not at the moment',
      'I have small following',
      'I have sizeable following',
      'To everyone',
    ],
  },
];

function AddCourse({ addCourseData, setAddCourseData }) {
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

  const handleSubmit = (values) => {
    if (slideIndex === 3) {
      setAddCourseData(values);
      navigate('/academy/add-lecture');
    } else slider?.current?.slickNext();
  };

  const FORM_VALIDATION = Yup.object().shape({
    title: slideIndex === 3 && Yup.string().required('Title is required'),
    category: slideIndex === 3 && Yup.string().required('Select category'),
  });
  return (
    <Container>
      <Grid
        display={'flex'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Typography variant="h3">Add your courses</Typography>
        <Typography variant="subtitle1">Exit</Typography>
      </Grid>
      <Typography variant="subtitle1" mt={{ xs: 3, sm: 6 }}>
        Step {slideIndex + 1} of 4
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(slideIndex + 1) * 25}
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
            initialValues={{ ...addCourseData }}
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
                <StepTitle />
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

AddCourse.propTypes = {
  addCourseData: PropTypes.object,
  setAddCourseData: PropTypes.func,
};

export default AddCourse;
