import React from 'react';

import { Grid, Card, Container, Button, Typography, Link } from '@mui/material';
import { Form, Formik } from 'formik';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import TextFieldForm from '../../components/common/TextField';
import AutoCompleteMultiple from './../../components/common/AutoCompleteMultiple';
import UploadFile from './../../components/common/UploadFile';
import { courseSelector, updateCourse } from './../../store/academy';
import CourseCard from './components/CourseCard';

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
  // const [categoryData, setCategoryData] = React.useState(courseData);
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
          // console.log(values);
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
                    <TextFieldForm
                      name="title"
                      label="Course title"
                      placeholder="Course title Name"
                      onChange={(value) => setTitle(value)}
                    />
                    <TextFieldForm
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
                    <AutoCompleteMultiple
                      name="tags"
                      options={allSkills}
                      label="Tags"
                      placeholder="Enter tag name and press enter to add more tags"
                    />

                    <TextFieldForm
                      multiline
                      rows={8}
                      name="summary"
                      label="Summary"
                      placeholder="What is the course about?"
                    />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextFieldForm
                          name="price"
                          label="Price"
                          placeholder="Enter price"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextFieldForm
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
                  <DndProvider backend={HTML5Backend}>
                    <CourseCard />
                  </DndProvider>
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
