import React from 'react';

import {
  ExpandMore,
  ArrowBackIos,
  DragIndicator,
  AddBox,
  Queue,
  Add,
  Close,
  PlayArrow,
  TextFields,
  AddPhotoAlternate,
  Image,
} from '@mui/icons-material';
import {
  Container,
  Typography,
  Grid,
  Link,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Divider,
  Button,
  Tooltip,
} from '@mui/material';
import { FieldArray, Form, Formik } from 'formik';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import AutoCompleteMultiple from '../../components/common/AutoCompleteMultiple';
import TextField from '../../components/common/TextField';
import {
  courseEditSelector,
  lectureEditSelector,
  lessonEditSelector,
  tagsSelector,
  skillsSelector,
  setLectureEdit,
  setLessonEdit,
  setCourseEdit,
  addCourse,
} from '../../store/academy';
import { uuid } from './../../components/common/CommonFunction';
import LessonContentCard from './components/common/LessonContentCard';

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lesson is required'),
  summary: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long! 100 Characters only')
    .required('Description is required'),
  tags: Yup.array(),
  skills: Yup.array(),
  isRequired: Yup.boolean(),
  duration: Yup.string(),
  content: Yup.array(),
  answers: Yup.array(),
  quiz: Yup.array(),
  completed: Yup.boolean(),
});

function EditLesson() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allTags = useSelector(tagsSelector);
  const allSkills = useSelector(skillsSelector);
  const courseData = useSelector(courseEditSelector);
  const lectureData = useSelector(lectureEditSelector);
  const lessonData = useSelector(lessonEditSelector);
  const [expanded, setExpanded] = React.useState(true);
  const [icon, setIcon] = React.useState(true);

  // This method is set the lesson and expand the accordion.
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    if (!courseData || !lectureData || !lessonData) {
      navigate('/academy/add-course');
    }
  }, [courseData, lectureData, lessonData, navigate]);

  if (!courseData || !lectureData || !lessonData) {
    return null;
  }

  const handleSumbit = (values) => {
    // console.log('Running handleSumbit ', values);
    dispatch(setLessonEdit(values));
    // console.log('arrayfirst', values, lessonData);
    const lectureUpdate = lectureData.map((lecture) => {
      const lectureUpdated = {
        ...lecture,
        lesson: lecture.lesson.map((lesson) => {
          if (lesson.id === values.id) {
            return values;
          }
          return lesson;
        }),
      };
      return lectureUpdated;
    });
    dispatch(setLectureEdit(lectureUpdate));
    const courseUpdate = {
      ...courseData,
      lectures: lectureUpdate,
    };
    dispatch(setCourseEdit(courseUpdate));
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
        <Typography variant="h5">{courseData.title}</Typography>
        <Grid display="flex" gap={3}>
          <Link variant="subtitle2" onClick={() => navigate('/academy/preview-course')}>Preview</Link>
          <Link type="submit" variant="subtitle2">
            Save
          </Link>
          <Link variant="subtitle2" onClick={() => navigate('/academy/publish-course')}>Publish</Link>
          <Link variant="subtitle2" onClick={() => {
            dispatch(addCourse(courseData));

          }}>Test</Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card elevation={0}>
            <Link onClick={() => navigate(-1)}>
              <Grid display={'flex'} p={3} alignItems="center">
                <ArrowBackIos fontSize="12px" />
                <Typography variant="h6" ml={1}>
                  Back to course editor
                </Typography>
              </Grid>
            </Link>
            <Divider />
            {lectureData.map((lecture, lectureIndex) => (
              <Accordion
                disableGutters
                key={lectureIndex}
                elevation={0}
                expanded={expanded}
                onChange={handleChange(lectureIndex)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{ px: 2, py: 0.2 }}
                  aria-controls={`${lecture.name}-content`}
                >
                  <Grid display={'flex'} alignItems={'center'}>
                    <IconButton>
                      <DragIndicator sx={{ color: '#4C3B9C' }} />
                    </IconButton>
                    <Typography variant="h6">{lecture.name}</Typography>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{ pl: 5, pr: 2, py: 0, pb: 3 }}>
                  {lecture.lesson && lecture.lesson.length != 0 ? (
                    lecture.lesson.map((lesson, lessonIndex) => (
                      <Grid
                        container
                        key={lessonIndex}
                        alignItems="center"
                        justifyContent={'space-between'}
                      >
                        <Grid display={'flex'} alignItems="center">
                          <IconButton>
                            <DragIndicator sx={{ color: '#4C3B9C' }} />
                          </IconButton>
                          <Typography ml={1} variant="subtitle1">
                            {lesson.name}
                          </Typography>
                        </Grid>
                        <Grid display={'flex'} alignItems="center">
                          <Tooltip
                            placement="top"
                            arrow={true}
                            title={'Add lesson below'}
                          >
                            <IconButton
                              onClick={() => {
                                // Todo Fix add lesson below
                              }}
                            >
                              <AddBox sx={{ color: '#C4C4C4' }} />
                            </IconButton>
                          </Tooltip>
                          <Tooltip
                            placement="top"
                            arrow={true}
                            title={'Add lecture below'}
                          >
                            <IconButton
                              onClick={() => {
                                // Todo Fix add lecture below
                              }}
                            >
                              <Queue sx={{ color: '#C4C4C4' }} />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    ))
                  ) : (
                    <></>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Formik
            initialValues={{ ...lessonData }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              handleSumbit(values);
            }}
          >
            <Form>
              <Card elevation={0} sx={{ p: 3 }}>
                <Typography variant="h6" mt={2}>
                  Lesson
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Grid display={'flex'} flexDirection="column" gap={2}>
                  <TextField
                    name="name"
                    label="Lesson"
                    placeholder="Lesson name"
                  />
                  <TextField
                    multiline
                    rows={4}
                    name="summary"
                    label="Summary"
                    placeholder="Description"
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
                </Grid>
                <Divider />
                <Typography variant="h6" mt={2}>
                  Content
                </Typography>
                <Divider />
                <FieldArray
                  name="content"
                  render={(props) => {
                    // eslint-disable-next-line react/prop-types
                    const { form, insert } = props;
                    return (
                      <div>
                        <DndProvider backend={HTML5Backend}>
                          <LessonContentCard {...props} />
                        </DndProvider>
                        <Grid container gap={2} alignItems="end">
                          <IconButton
                            onClick={() => {
                              if (icon === true) {
                                setIcon(false);
                              } else {
                                setIcon(true);
                              }
                            }}
                            className={icon ? 'border1' : 'border2'}
                            sx={{ mt: 3, height: '50px', width: '50px' }}
                          >
                            {icon ? <Add /> : <Close />}
                          </IconButton>
                          {!icon ? (
                            <>
                              <Button
                                sx={{ height: '50px' }}
                                startIcon={<Image />}
                                variant="outlined"
                                onClick={() => {
                                  insert(lessonData.content.length, {
                                    id: uuid(),
                                    type: 'image',
                                    content: '',
                                    config: null,
                                  });
                                  // eslint-disable-next-line react/prop-types
                                  form.submitForm();
                                  setIcon(true);
                                }}
                              >
                                Add image
                              </Button>
                              <Button
                                sx={{ height: '50px' }}
                                startIcon={<PlayArrow />}
                                variant="outlined"
                                onClick={() => {
                                  insert(lessonData.content.length, {
                                    id: uuid(),
                                    type: 'video',
                                    content: '',
                                    config: null,
                                  });
                                  // eslint-disable-next-line react/prop-types
                                  form.submitForm();
                                  setIcon(true);
                                }}
                              >
                                Add video
                              </Button>
                              <Button
                                sx={{ height: '50px' }}
                                startIcon={<TextFields />}
                                variant="outlined"
                                onClick={() => {
                                  insert(lessonData.content.length, {
                                    id: uuid(),
                                    type: 'wysiwyg',
                                    content: 'Replace this content.',
                                    config: null,
                                  });
                                  // eslint-disable-next-line react/prop-types
                                  form.submitForm();
                                  setIcon(true);
                                }}
                              >
                                Add mark down editor
                              </Button>
                              <Button
                                sx={{ height: '50px' }}
                                startIcon={<AddPhotoAlternate />}
                                variant="outlined"
                                onClick={() => {
                                  insert(lessonData.content.length, {
                                    id: uuid(),
                                    type: 'slider',
                                    content: [{ id: uuid(), image: '' }],
                                    config: null,
                                  });
                                  // eslint-disable-next-line react/prop-types
                                  form.submitForm();
                                  setIcon(true);
                                }}
                              >
                                Add slider
                              </Button>
                            </>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </div>
                    );
                  }}
                />
              </Card>
              <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
                Save Lesson
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditLesson;
