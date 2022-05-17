import React from 'react';

import {
  AddBox,
  ContentCopy,
  Queue,
  Delete,
  DragIndicator,
  Edit,
  InsertLink,
  Done,
  BorderColor,
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
  TextField,
  Tooltip,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { uuid } from '../../components/common/CommonFunction';
import TextFieldForm from '../../components/common/TextField';
import AutoCompleteMultiple from './../../components/common/AutoCompleteMultiple';
import UploadFile from './../../components/common/UploadFile';
import {
  updateCourse,
  updateCategory,
  updateLesson,
  addCategory,
  addLesson,
  splitCategory,
  deleteCategory,
  deleteLesson,
  courseSelector,
} from './../../store/academy';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('Course Title');
  const courseData = useSelector(courseSelector);
  // const [categoryData, setCategoryData] = React.useState(courseData);
  const setCourseData = (data) => {
    dispatch(updateCourse(data));
  };
  const [editCategory, setEditCategory] = React.useState({
    categoryIndex: -1,
    name: '',
  });

  const [editLesson, setEditLesson] = React.useState({
    lessonIndex: -1,
    categoryIndex: -1,
    name: '',
  });

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
                    {/* <AutoCompleteMultiple
                      name="tags"
                      options={allSkills}
                      label="Tags"
                      placeholder="Enter tag name and press enter to add more tags"
                    /> */}

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
                  <Card
                    elevation={0}
                    sx={{
                      p: 2.5,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                    }}
                  >
                    {courseData.category.map((category, categoryIndex) => (
                      <Grid
                        key={category.name + categoryIndex}
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
                            {editCategory.categoryIndex === categoryIndex ? (
                              <>
                                <TextField
                                  inputProps={{ style: { fontSize: 20 } }}
                                  sx={{ width: 'auto' }}
                                  variant="standard"
                                  value={editCategory.name}
                                  onChange={(e) =>
                                    setEditCategory({
                                      ...editCategory,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </>
                            ) : (
                              <>
                                <Typography variant="h6">
                                  {category.name}
                                </Typography>
                              </>
                            )}
                            {editCategory.categoryIndex === categoryIndex ? (
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Update category name'}
                              >
                                <IconButton
                                  onClick={() => {
                                    setEditCategory({
                                      ...editCategory,
                                      categoryIndex: -1,
                                    });
                                    dispatch(
                                      updateCategory({
                                        categoryIndex,
                                        name: editCategory.name,
                                      })
                                    );
                                  }}
                                >
                                  <Done sx={{ color: '#C4C4C4' }} />
                                </IconButton>
                              </Tooltip>
                            ) : (
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Edit Category Name'}
                              >
                                <IconButton
                                  onClick={() => {
                                    setEditCategory({
                                      name: category.name,
                                      categoryIndex,
                                    });
                                  }}
                                >
                                  <BorderColor
                                    sx={{
                                      color: '#C4C4C4',
                                      height: '20px',
                                      width: '20px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                            )}
                          </Grid>
                          <Grid>
                            <Tooltip
                              placement="top"
                              arrow={true}
                              title={'Copy Category'}
                            >
                              <IconButton
                                onClick={() =>
                                  dispatch(
                                    addCategory({
                                      categoryIndex,
                                      categoryData: category,
                                    })
                                  )
                                }
                              >
                                <ContentCopy
                                  sx={{
                                    color: '#C4C4C4',
                                    height: '20px',
                                    width: '20px',
                                  }}
                                />
                              </IconButton>
                            </Tooltip>
                            {courseData.category.length > 1 ? (
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Delete Category'}
                              >
                                <IconButton
                                  onClick={() =>
                                    dispatch(deleteCategory(categoryIndex))
                                  }
                                >
                                  <Delete
                                    sx={{
                                      color: '#C4C4C4',
                                      height: '20px',
                                      width: '20px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                            ) : null}
                          </Grid>
                        </Grid>
                        {category.lesson.map((lesson, lessonIndex) => (
                          <Grid
                            key={lesson.name + lessonIndex}
                            display={'flex'}
                            alignItems="center"
                            justifyContent={'space-between'}
                            pl={3}
                          >
                            <Grid display={'flex'} alignItems="center" gap={1}>
                              <IconButton>
                                <DragIndicator sx={{ color: '#4C3B9C' }} />
                              </IconButton>
                              {editLesson.lessonIndex == lessonIndex &&
                              editLesson.categoryIndex === categoryIndex ? (
                                <>
                                  <TextField
                                    inputProps={{ style: { fontSize: 17 } }}
                                    sx={{ width: 'auto' }}
                                    variant="standard"
                                    value={editLesson.name}
                                    onChange={(e) =>
                                      setEditLesson({
                                        ...editLesson,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </>
                              ) : (
                                <Typography variant="subtitle1">
                                  {lesson.name}
                                </Typography>
                              )}

                              {editLesson.lessonIndex == lessonIndex &&
                              editLesson.categoryIndex === categoryIndex ? (
                                <Tooltip
                                  placement="top"
                                  arrow={true}
                                  title={'Update lesson name'}
                                >
                                  <IconButton
                                    onClick={() => {
                                      dispatch(
                                        updateLesson({
                                          lessonIndex,
                                          categoryIndex,
                                          data: { name: editLesson.name },
                                        })
                                      );
                                      setEditLesson({
                                        ...editLesson,
                                        lessonIndex: -1,
                                        categoryIndex: -1,
                                      });
                                    }}
                                  >
                                    <Done sx={{ color: '#C4C4C4' }} />
                                  </IconButton>
                                </Tooltip>
                              ) : (
                                <Tooltip
                                  placement="top"
                                  arrow={true}
                                  title={'Edit lesson name'}
                                >
                                  <IconButton
                                    onClick={() => {
                                      setEditLesson({
                                        name: lesson.name,
                                        categoryIndex,
                                        lessonIndex,
                                      });
                                    }}
                                  >
                                    <BorderColor
                                      sx={{
                                        color: '#C4C4C4',
                                        width: '18px',
                                        height: '18px',
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              )}
                            </Grid>
                            <Grid display="flex" alignItems={'center'}>
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Count lesson for course completion'}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      defaultChecked={lesson.isRequired}
                                      sx={{
                                        '& .MuiSvgIcon-root': {
                                          fontSize: 18,
                                          color: '#FFD215',
                                        },
                                      }}
                                      onChange={(e) => {
                                        const { checked } = e.target;
                                        dispatch(
                                          updateLesson({
                                            lessonIndex,
                                            categoryIndex,
                                            data: { isRequired: checked },
                                          })
                                        );
                                        console.log(checked);
                                      }}
                                    />
                                  }
                                  label="Required"
                                />
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Edit lesson'}
                              >
                                <IconButton
                                  onClick={() =>
                                    navigate('/academy/add-lecture/edit/')
                                  }
                                >
                                  <Edit
                                    sx={{
                                      color: '#C4C4C4',
                                      width: '18px',
                                      height: '18px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Copy lesson'}
                              >
                                <IconButton
                                  onClick={() =>
                                    dispatch(
                                      addLesson({
                                        lessonIndex,
                                        categoryIndex,
                                        lessonData: { ...lesson, id: uuid() },
                                      })
                                    )
                                  }
                                >
                                  <ContentCopy
                                    sx={{
                                      color: '#C4C4C4',
                                      width: '18px',
                                      height: '18px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Lesson link'}
                              >
                                <IconButton>
                                  <InsertLink
                                    sx={{
                                      color: '#C4C4C4',
                                      width: '18px',
                                      height: '18px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                              {category.lesson.length > 1 ? (
                                <Tooltip
                                  placement="top"
                                  arrow={true}
                                  title={'Delete lesson'}
                                >
                                  <IconButton
                                    onClick={() =>
                                      dispatch(
                                        deleteLesson({
                                          categoryIndex,
                                          lessonIndex,
                                        })
                                      )
                                    }
                                  >
                                    <Delete
                                      sx={{
                                        color: '#C4C4C4',
                                        width: '18px',
                                        height: '18px',
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              ) : null}
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Add lesson below'}
                              >
                                <IconButton
                                  onClick={() =>
                                    dispatch(
                                      addLesson({
                                        lessonIndex,
                                        categoryIndex,
                                        lessonData: {
                                          id: uuid(),
                                          name: 'Untitled lesson',
                                          isRequired: false,
                                        },
                                      })
                                    )
                                  }
                                >
                                  <AddBox
                                    sx={{
                                      color: '#C4C4C4',
                                      width: '18px',
                                      height: '18px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
                              <Tooltip
                                placement="top"
                                arrow={true}
                                title={'Add category below'}
                              >
                                <IconButton
                                  onClick={() => {
                                    category.lesson.length - 1 === lessonIndex
                                      ? dispatch(
                                          addCategory({
                                            categoryIndex,
                                            categoryData: {
                                              name: 'Untitled category',
                                              lesson: [
                                                {
                                                  id: uuid(),
                                                  name: 'Untitled lesson',
                                                  isRequired: false,
                                                },
                                              ],
                                            },
                                          })
                                        )
                                      : dispatch(
                                          splitCategory({
                                            categoryIndex,
                                            lessonIndex,
                                          })
                                        );
                                  }}
                                >
                                  <Queue
                                    sx={{
                                      color: '#C4C4C4',
                                      width: '18px',
                                      height: '18px',
                                    }}
                                  />
                                </IconButton>
                              </Tooltip>
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
