import React from 'react';

import { ArrowBackIos, IosShare } from '@mui/icons-material';
import {
  Container,
  Grid,
  Card,
  Typography,
  Link,
  Divider,
  LinearProgress,
  Button,
  IconButton,
} from '@mui/material/';
import { useNavigate } from 'react-router-dom';

import LessonDetailsImage from './../../assets/lesson_details.svg';
import AcademyAccordion from './components/AcademyAccordion';

function LessonDetails() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4.5}>
          <Card elevation={0}>
            <Link onClick={() => navigate('/academy/details')}>
              <Grid display={'flex'} alignItems="center" p={3}>
                <ArrowBackIos fontSize="12px" />
                <Typography variant="h6">Back to home</Typography>
              </Grid>
            </Link>
            <Divider />
            <Grid p={3}>
              <Typography variant="h5">
                Complete crypto payment master class
              </Typography>
              <Grid my={3}>
                <Grid container justifyContent="space-between">
                  <Typography fontSize="12px">30% complete</Typography>
                  <Typography fontSize="12px">Finish your course</Typography>
                </Grid>
                <LinearProgress
                  variant="determinate"
                  value={30}
                  sx={{ background: '#271D5A', mt: 1.5 }}
                />
              </Grid>
              <Divider />
              <AcademyAccordion />
              <Divider />
              <Grid mt={3} display="flex" justifyContent={'center'}>
                <Button variant="contained" color="secondary">
                  Mark as complete course
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Grid>
            <img src={LessonDetailsImage} width="100%" />
          </Grid>
          <Grid
            mt={2}
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <Typography variant="h4">
              Complete crypto payment master class
            </Typography>
            <IconButton>
              <IosShare />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LessonDetails;
