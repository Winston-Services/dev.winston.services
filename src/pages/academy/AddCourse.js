import React from 'react';

import {
  Container,
  Typography,
  Grid,
  LinearProgress,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

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

function AddCourse() {
  const slider = React.useRef(null);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    beforeChange: (current, next) => setSlideIndex(next),
  };
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
      <Typography variant="subtitle1" mt={6}>
        Step {slideIndex + 1} of 4
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(slideIndex + 1) * 25}
        sx={{ mt: 2 }}
      />

      <Grid container mt={0} spacing={6} display="flex" alignItems={'center'}>
        <Grid item md={6.5}>
          <Slider ref={slider} {...settings}>
            {steps.map((step) => (
              <Grid key={step.title} px={2}>
                <StepAddCourse data={step} />
              </Grid>
            ))}

            <Grid px={2}>
              <StepTitle />
            </Grid>
          </Slider>
          <Grid mt={5.5} display="flex" justifyContent={'space-between'}>
            <Button
              sx={{ ...(slideIndex === 0 && { visibility: 'hidden' }) }}
              variant="outlined"
              onClick={() => slider?.current?.slickPrev()}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                slideIndex === 3
                  ? navigate('/academy/add-lecture')
                  : slider?.current?.slickNext()
              }
            >
              Next
            </Button>
          </Grid>
        </Grid>
        <Grid item md={5}>
          <img src={MonitorImage} width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddCourse;
