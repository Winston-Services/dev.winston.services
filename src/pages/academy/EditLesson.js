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
import PropTypes from 'prop-types';
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
} from '../../store/academy';
import { uuid } from './../../components/common/CommonFunction';
import ImageSliderCard from './components/ImageSliderCard';
import TextEditor from './components/TextEditor';
import VideoCard from './components/VideoCard';

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

const RenderContentComponent = ({ item, index, remove, insert }) => {
  console.log('render', item);
  switch (item.type) {
    case 'video':
      return (
        <VideoCard
          name={`content[${index}].content`}
          videoIndex={index}
          remove={remove}
          insert={insert}
          item={item}
        />
      );
    case 'slider':
      return (
        <DndProvider backend={HTML5Backend}>
          <ImageSliderCard
            name={`content[${index}].content`}
            sliderIndex={index}
            remove={remove}
            insert={insert}
            item={item}
          />
        </DndProvider>
      );
    case 'wysiwyg':
      return (
        <TextEditor
          name={`content[${index}].content`}
          editorIndex={index}
          remove={remove}
          insert={insert}
          item={item}
        />
      );
    default:
      return null;
  }
};

RenderContentComponent.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
  insert: PropTypes.func.isRequired,
};

function EditLesson() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allTags = useSelector(tagsSelector);
  const allSkills = useSelector(skillsSelector);
  const courseData = useSelector(courseEditSelector);
  const lectureData = useSelector(lectureEditSelector);
  const lessonData = useSelector(lessonEditSelector);
  const [content, setContent] = React.useState(lessonData?.content || []);
  // console.log(courseData, lectureData, lessonData);
  const [expanded, setExpanded] = React.useState(
    lectureData?.find(
      (lecture) =>
        lecture.lesson.find((lesson) => lesson.id === lessonData.id) !==
        undefined
    )?.id || 'Example Lesson'
  );

  const [icon, setIcon] = React.useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {
    if (!courseData || !lectureData || !lessonData) {
      navigate('/academy/add-course');
    }
  }, [courseData, lectureData, lessonData, navigate]);

  React.useEffect(() => {
    // eslint-disable-next-line no-constant-condition
    if (1 === 2) dispatch(() => lectureData);
  }, [lectureData, dispatch]);

  React.useEffect(() => {
    if (lessonData) {
      setContent(lessonData.content);
    }
  }, [lessonData]);

  if (!courseData || !lectureData || !lessonData) {
    return null;
  }

  const remove = (index) => {
    console.log('remove', index);
  };

  const insert = (index, item) => {
    console.log('insert', index, item);
  };

  return (
    <Container>
      <Formik
        initialValues={{ ...lessonData }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log('Edit lesson', values);
          dispatch(setLessonEdit(values));
          dispatch(setLectureEdit(lectureData));
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
            <Typography variant="h5">{courseData.title}</Typography>
            <Grid display="flex" gap={3}>
              <Link variant="subtitle2">Preview</Link>
              <Link type="submit" variant="subtitle2">
                Save
              </Link>
              <Link variant="subtitle2">Submit for review</Link>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card elevation={0}>
                <Link onClick={() => navigate(-1)}>
                  <Grid
                    display={'flex'}
                    p={3}
                    alignItems="center"
                    onClick={() => {
                      // Todo Fix back to course editor
                    }}
                  >
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
                    expanded={expanded === lecture.id}
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
              <Card elevation={0} sx={{ p: 3 }}>
                <Typography variant="h6" mt={2}>
                  Lesson
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Grid display={'flex'} flexDirection="column" gap={2}>
                  <TextField
                    name="name"
                    label="Lesson"
                    placeholder="Add lesson"
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
                {content.map((item, index) => (
                  <RenderContentComponent
                    key={index}
                    item={item}
                    index={index}
                    remove={remove}
                    insert={insert}
                  />
                ))}
                <FieldArray
                  name="content"
                  render={({ push }) => (
                    <div>
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
                              startIcon={<PlayArrow />}
                              variant="outlined"
                              onClick={() => {
                                push({
                                  id: uuid(),
                                  type: 'video',
                                  content: null,
                                  config: null,
                                });
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
                                push({
                                  id: uuid(),
                                  type: 'wysiwyg',
                                  content: null,
                                  config: null,
                                });
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
                                push({
                                  id: uuid(),
                                  type: 'slider',
                                  content: null,
                                  config: null,
                                });
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
                  )}
                />
              </Card>
              <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
                Save Lesson
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default EditLesson;
