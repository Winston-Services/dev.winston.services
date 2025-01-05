import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { coursesSelector } from '../../../store/academy';

function ActiveCourses() {
  const navigate = useNavigate();
  const courseData = useSelector(coursesSelector);

  return (
    <Container>
      <Typography variant="h4">Active Courses</Typography>
      <Grid container spacing={3} mt={3}>
        {courseData && courseData.length !== 0 ? (
          <>
            {courseData.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ cursor: 'pointer' }}
              >
                <Paper
                  elevation={0}
                  sx={{ p: 3 }}
                  onClick={() => navigate(`/academy/details/${item.id}`)}
                >
                  <Grid container gap={2} alignItems="center">
                    <img src={item.image} alt="" width="54px" />
                    <Grid>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="subtitle2" mt={1}>
                        {' Published on  ' + item.date + '  |  ' + item.time}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container mt={3} justifyContent="space-between">
                    <Typography fontSize="12px">
                      {item.progress + '% complete'}
                    </Typography>
                    <Typography fontSize="12px">Finish your course</Typography>
                  </Grid>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={{ background: '#271D5A', mt: 1 }}
                  />
                </Paper>
              </Grid>
            ))}
            <Paper
              onClick={() => navigate('/academy/add-course')}
              elevation={0}
              sx={{
                mt: 3,
                mx: 3,
                px: 4,
                height: '164px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <AddIcon sx={{ fontSize: '28px', mb: 2 }} />
              <Typography textAlign={'center'} variant="subtitle2">
                Create new course
              </Typography>
            </Paper>
          </>
        ) : (
          <Grid container justifyContent={'center'}>
            <Typography>No active courses found.</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default ActiveCourses;
