import React from 'react';

import { Container, Typography, Grid, LinearProgress } from '@mui/material';

function AddCourse() {
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
        Step 1 of 4
      </Typography>
      <LinearProgress variant="determinate" value={25} sx={{ mt: 2 }} />

      <Grid container mt={6}>
        <Grid item md={6}>
          <Typography variant="h4">Share your knowledge</Typography>
          <Typography variant="subtitle1" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            ipsum ut potenti ut. Facilisi est facilisi elementum duis tellus
            porttitor ac. Sagittis etiam penatibus urna sit porta lectus. Tortor
            eu nisi velit magna lorem non dui.
          </Typography>
          <Typography variant="h6" mt={6} fontWeight={700}>
            What kind of teching have you done before?
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddCourse;
