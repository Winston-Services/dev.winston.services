import React from 'react';

import {
  Paper,
  Typography,
  Button,
  Grid,
  Container,
  TextField,
  Rating,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { courseSelector } from '../../store/academy';
function RatingPage({ lessonId }) {
  const { course } = useSelector(courseSelector);
  if (lessonId) {
    const lesson = course.lessons.find((lesson) => lesson.id === lessonId);
    console.log(lesson);
  }

  return (
    <Container>
      <Grid container display={'flex'} justifyContent="center">
        <Grid item xs={12} sm={10}>
          <Paper elevation={0} sx={{ textAlign: 'center' }}>
            <Paper elevation={0} sx={{ background: '#483996' }}>
              <Typography variant="h5" py={4}>
                How did you like this Course ?
              </Typography>
            </Paper>

            <Typography variant="h5" mt={3}>
              Rate the Course
            </Typography>

            <Grid mt={1}>
              <Rating sx={{ fontSize: '50px' }} />
            </Grid>

            <Grid p={6}>
              <TextField
                fullWidth
                label="Your Feedback"
                multiline
                rows={12}
                placeholder="Please write your feedback in few words."
              />
            </Grid>

            <Grid display={'flex'} gap={2} justifyContent="center" pb={6}>
              <Button variant="contained" color="secondary">
                Rate Now
              </Button>
              <Button variant="outlined">May be later</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

RatingPage.propTypes = {
  lessonId: PropTypes.string,
};

export default RatingPage;
