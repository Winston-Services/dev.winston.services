import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import {
  Grid,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Container,
  Button,
  Typography,
  Box,
  CardMedia,
  Chip,
  Switch,
  LinearProgress,
  Skeleton,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import {
  courseEditSelector,
  setCourseEdit,
  // addCourse,
  lectureEditSelector,
} from '../../../store/academy';
import CourseCard from '../components/CourseCard';

const FORM_VALIDATION = Yup.object().shape({});

function AddLectures() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseData = useSelector(courseEditSelector);
  const lectures = useSelector(lectureEditSelector);
  // console.log('courseData', courseData);

  React.useEffect(() => {
    if (courseData === null) {
      navigate('/academy/add-course');
    }
    return () => {
      return false;
    };
  }, [courseData, navigate]);

  if (courseData === null) {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">Winston Academy Course Editor</Typography>
            <Typography variant="h5" mb={2}>
              This is the course editor for Winston Academy.
            </Typography>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={200} />
            </Card>
            <Typography variant="body1" mt={2}>
              This is the course editor for Winston Academy. It is a work in
              progress.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="h5">Learn to Earn</Typography>
              <Typography variant="h5">admin@winston.ser</Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              flexDirection={'column'}
              mt={2}
            >
              <Typography variant="h5">
                Price:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Discount Price:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Tags:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Skills:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Progress:{' '}
                <Box width="100%" height={10} mt={1}>
                  <Skeleton variant="rectangular" width="100%" height={10} />
                </Box>
              </Typography>
              <Typography variant="h5">
                Template:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Submitted:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Reviewed:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Approved:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Published:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Rejected:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
              <Typography variant="h5">
                Saved:{' '}
                <span style={{ float: 'right' }}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">{courseData.title}</Typography>
          <Typography variant="h5" mb={2}>
            {courseData.description}
          </Typography>
          <Card>
            <CardMedia
              component="img"
              image={courseData.thumbnail}
              alt={courseData.title}
            />
          </Card>
          <Typography variant="body1" mt={2}>
            {courseData.summary}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Typography variant="h5">{courseData?.teacher?.name}</Typography>
            <Typography variant="h5">{courseData?.teacher?.email}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={'column'}
            mt={2}
          >
            <Typography variant="h5">
              Price:{' '}
              <span style={{ float: 'right' }}>
                {courseData.price > 0 ? (
                  <>
                    {courseData.currencySymbol}
                    <span style={{ fontWeight: 'bold', color: 'lightgreen' }}>
                      {courseData.price}
                    </span>
                  </>
                ) : (
                  <>FREE</>
                )}
              </span>
            </Typography>
            <Typography variant="h5">
              Discount Price:{' '}
              {courseData.discountPrice > 0 ? (
                <span style={{ float: 'right' }}>
                  {courseData.currencySymbol}
                  <span style={{ fontWeight: 'bold', color: 'red' }}>
                    {courseData.discountPrice}
                  </span>
                </span>
              ) : (
                <span style={{ float: 'right' }}>None</span>
              )}
            </Typography>
            <Typography variant="h5">
              Tags:{' '}
              <span style={{ float: 'right' }}>
                {courseData.tags.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </span>
            </Typography>
            <Typography variant="h5">
              Skills:{' '}
              <span style={{ float: 'right' }}>
                {courseData.skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </span>
            </Typography>
            <Typography variant="h5">
              Progress:{' '}
              <Box width="100%" height={10} mt={1}>
                <LinearProgress
                  variant="determinate"
                  value={courseData.progress + 1}
                  color="info"
                />
              </Box>
            </Typography>
            <Typography variant="h5">
              Template:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isTemplate} />
              </span>
            </Typography>
            <Typography variant="h5">
              Submitted:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isSubmitted} />
              </span>
            </Typography>
            <Typography variant="h5">
              Reviewed:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isReviewed} />
              </span>
            </Typography>
            <Typography variant="h5">
              Approved:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isApproved} />
              </span>
            </Typography>
            <Typography variant="h5">
              Published:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isPublished} />
              </span>
            </Typography>
            <Typography variant="h5">
              Rejected:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isRejected} />
              </span>
            </Typography>
            <Typography variant="h5">
              Saved:{' '}
              <span style={{ float: 'right' }}>
                <Switch checked={courseData.isSaved} />
              </span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Formik
        initialValues={{
          ...courseData,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log('lectures', lectures);
          console.log('courseData', courseData);
          console.log('values', values);
          dispatch(
            setCourseEdit({
              ...courseData,
              lectures: lectures,
            })
          );
        }}
      >
        <Form>
          <Grid
            mb={3}
            display="flex"
            alignItems={'center'}
            justifyContent="space-between"
            height={30}
          >
            <Typography variant="h5">Course Contents</Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <DndProvider backend={HTML5Backend}>
                <CourseCard editMode={true} />
              </DndProvider>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button sx={{ px: 2, ml: 2 }} type="submit" fullWidth>
                  Save
                </Button>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="h5">Course Index</Typography>
                <List>
                  {courseData?.lectures?.map((lecture) => (
                    <React.Fragment key={lecture.id}>
                      <ListItem>
                        <ListItemText primary={lecture.name} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <List component="div" disablePadding>
                        {lecture?.lesson?.map((lesson) => (
                          <ListItem sx={{ pl: 4 }} key={lesson.id}>
                            <ListItemText primary={lesson.name} />
                            <ListItemSecondaryAction>
                              <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </List>
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default AddLectures;
