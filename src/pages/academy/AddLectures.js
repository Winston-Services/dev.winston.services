import React from 'react';

import { Grid, Card, Container, Button, Typography, Box } from '@mui/material';
import { Form, Formik } from 'formik';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

// import AutoCompleteMultiple from './../../components/common/AutoCompleteMultiple';
import AutoCompleteMultiple from '../../components/common/AutoCompleteMultiple';
import FormikTextField from './../../components/common/FormikTextField';
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
const allTags = [
  'Blockchain',
  'Economics',
  'Math',
  'Engineering',
  'Art',
];
const FORM_VALIDATION = Yup.object().shape({
  thumbnail: Yup.string().required('Please select thumbnail'),
  title: Yup.string().required('Course title is required'),
  description: Yup.string().required('Description is required'),
  //skills: Yup.array().min(1).required(),
  //tags: Yup.array().min(1).required(),
  price: Yup.number().required('Please enter price'),
  summary: Yup.string().required('description is required'),
  discountPrice: Yup.number(),
});

function AddLectures() {
  const dispatch = useDispatch();
  const courseData = useSelector(courseSelector);
  // console.log(courseData);
  const setCourseData = (data) => {
    // console.log(data);
    dispatch(updateCourse(data));
  };

  return (
    <Container>
      <Formik
        initialValues={{
          ...courseData,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
          setCourseData(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Grid
              mb={3}
              display="flex"
              alignItems={'center'}
              justifyContent="space-between"
              height={30}
            >
              <Typography variant="h5">
                {values?.title || 'Course title'}
              </Typography>
              <Box>
                <Button sx={{ px: 2 }}>Preview</Button>
                <Button sx={{ px: 2, ml: 2 }} type="submit">
                  Save
                </Button>
                <Button sx={{ px: 2, ml: 2 }}>Submit for review</Button>
              </Box>
            </Grid>
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
                  <FormikTextField
                    name="title"
                    label="Course title"
                    placeholder="Course title Name"
                  />
                  <FormikTextField
                    multiline
                    rows={4}
                    name="description"
                    label="Short description"
                    placeholder="Description"
                  />

                  <FormikTextField
                    multiline
                    rows={8}
                    name="summary"
                    label="Summary"
                    placeholder="What is the course about?"
                  />
                  <AutoCompleteMultiple
                    name="skills"
                    options={allSkills}
                    label="Skills"
                    placeholder="Enter skill name and press enter"
                  />
                  <AutoCompleteMultiple
                    name="tags"
                    options={allTags}
                    label="Tags"
                    placeholder="Enter tag name and press enter"
                  />
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FormikTextField
                        name="price"
                        label="Price"
                        placeholder="Enter price"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormikTextField
                        name="discountPrice"
                        label="Discount price"
                        placeholder="Enter discount price"
                      />
                    </Grid>
                  </Grid>
                </Card>
                {/* Following two sections need to be after the form has been submitted (saved). */}
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
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddLectures;
