import React from 'react';

<<<<<<< HEAD
import { Container, Typography, Grid, LinearProgress } from '@mui/material';
=======
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Container, Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { ReactComponent as AddCourseIcon } from './../../assets/add_course_icon.svg';
import { ReactComponent as BeginnerIcon } from './../../assets/beginner_icon.svg';
import { ReactComponent as ExpertIcon } from './../../assets/expert_icon.svg';
import { ReactComponent as IntermediateIcon } from './../../assets/intermediate_icon.svg';

const topics = [
  'Altcoin1',
  'Altcoin2',
  'Altcoin3',
  'Altcoin4',
  'Altcoin5',
  'Altcoin6',
  'Binance1',
  'Binance2',
  'Binance3',
  'Binance4',
  'Binance5',
  'Binance6',
];

const levels = [
  {
    difficultyLevel: 'Beginner',
    difficultyLevelIcon: <BeginnerIcon />,
  },
  {
    difficultyLevel: 'Intermediate',
    difficultyLevelIcon: <IntermediateIcon />,
  },
  {
    difficultyLevel: 'Expert',
    difficultyLevelIcon: <ExpertIcon />,
  },
];
>>>>>>> 4ad52460422894f98961184c668325af2cb9760b

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
