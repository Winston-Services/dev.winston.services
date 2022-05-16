import React from 'react';

import {
  AddBox,
  ContentCopy,
  Queue,
  Delete,
  DragIndicator,
  Edit,
  InsertLink,
} from '@mui/icons-material';
import {
  Grid,
  Card,
  Container,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import TextField from '../../components/common/TextField';
import AutoCompleteMultiple from './../../components/common/AutoCompleteMultiple';
import UploadFile from './../../components/common/UploadFile';
import { updateCourse, courseSelector } from './../../store/academy';

const allSkills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];

const FORM_VALIDATION = Yup.object().shape({
  thumbnail: Yup.string().required('Please select thumbnail'),
  title: Yup.string().required('Course title is required'),
  description: Yup.string().required('Description is required'),
  skills: Yup.array().min(1).required(),
  tags: Yup.array().min(1).required(),
  price: Yup.number().required('Please enter price'),
  summary: Yup.string().required('description is required'),
  discountPrice: Yup.number(),
});

function AddLectures() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('Course Title');
  const courseData = useSelector(courseSelector);
  const setCourseData = (data) => {
    dispatch(updateCourse(data));
  };
  return (
    <Container>
      <Grid
        mb={3}
        display="flex"
        alignItems={'center'}
        justifyContent="space-between"
        height={30}
      >
        <Typography variant="h5">{title}</Typography>
        <Grid display="flex" gap={3}>
          <Link variant="subtitle2">Preview</Link>
          <Link variant="subtitle2">Save</Link>
          <Link variant="subtitle2">Submit for review</Link>
        </Grid>
      </Grid>
      <Formik
        initialValues={{
          ...courseData,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          setCourseData(values);
        }}
      >
        {() => {
          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Card
                    elevation={0}
                    sx={{
                      p: 3.75,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2.5,
                    }}
                  >
                    <TextField
                      name="title"
                      label="Course title"
                      placeholder="Course title Name"
                      onChange={(value) => setTitle(value)}
                    />
                    <TextField
                      multiline
                      rows={4}
                      name="description"
                      label="Short description"
                      placeholder="Description"
                    />
                    <AutoCompleteMultiple
                      name="skills"
                      options={allSkills}
                      label="Skills"
                      placeholder="Enter skill name and press enter to add more skills"
                    />
                    {/* <AutoCompleteMultiple
                      name="tags"
                      options={allSkills}
                      label="Tags"
                      placeholder="Enter tag name and press enter to add more tags"
                    /> */}

                    <TextField
                      multiline
                      rows={8}
                      name="summary"
                      label="Summary"
                      placeholder="What is the course about?"
                    />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="price"
                          label="Price"
                          placeholder="Enter price"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="discountPrice"
                          label="Discount price"
                          placeholder="Enter discount price"
                        />
                      </Grid>
                    </Grid>
                  </Card>

                  <Typography variant="h5" my={3}>
                    Course Contents
                  </Typography>
                  <Card
                    elevation={0}
                    sx={{
                      p: 2.5,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                    }}
                  >
                    {courseData.category.map((category) => (
                      <Grid
                        key={category.name}
                        display="flex"
                        flexDirection={'column'}
                        gap={1}
                      >
                        <Grid
                          display={'flex'}
                          alignItems="center"
                          justifyContent={'space-between'}
                        >
                          <Grid display={'flex'} alignItems="center" gap={1}>
                            <IconButton>
                              <DragIndicator sx={{ color: '#4C3B9C' }} />
                            </IconButton>
                            <Typography variant="h6">
                              {category.name}
                            </Typography>
                            <IconButton>
                              <Edit sx={{ color: '#C4C4C4' }} />
                            </IconButton>
                          </Grid>
                          <IconButton>
                            <ContentCopy sx={{ color: '#C4C4C4' }} />
                          </IconButton>
                        </Grid>
                        {category.lesson.map((lesson) => (
                          <Grid
                            key={lesson.name}
                            display={'flex'}
                            alignItems="center"
                            justifyContent={'space-between'}
                            pl={3}
                          >
                            <Grid display={'flex'} alignItems="center" gap={1}>
                              <IconButton>
                                <DragIndicator sx={{ color: '#4C3B9C' }} />
                              </IconButton>
                              <Typography variant="subtitle1">
                                {lesson.name}
                              </Typography>
                            </Grid>
                            <Grid display="flex" alignItems={'center'}>
                              <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Required"
                              />
                              <IconButton>
                                <Edit sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <ContentCopy sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <InsertLink sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <Delete sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <AddBox sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <Queue sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    ))}
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <UploadFile
                    name="thumbnail"
                    title="Upload thumbnail"
                    subtitle="You can upload maximum 200kb"
                    height="320px"
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ mt: 3 }}
              >
                submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default AddLectures;
