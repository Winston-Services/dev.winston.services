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
import { PropTypes } from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import AutoCompleteMultiple from '../../components/common/AutoCompleteMultiple';
import TextField from '../../components/common/TextField';
import {
  courseSelector,
  addLesson,
  addCategory,
  splitCategory,
  lessonSelector,
  removeCurrentLessonEdit,
} from '../../store/academy';
import { uuid } from './../../components/common/CommonFunction';
import ImageSliderCard from './components/ImageSliderCard';
import VideoCard from './components/VideoCard';

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lesson is required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long! 100 Characters only')
    .required('Description is required'),
  skills: Yup.array().min(1).required('At least one skill required'),
});

const allSkills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];
const RenderContentComponent = (item, index) => {
  switch (item.type) {
    case 'video':
      return <VideoCard name={`content[${index}].content`} index />;
    case 'slider':
      return (
        <DndProvider backend={HTML5Backend}>
          <ImageSliderCard name={`content[${index}].content`} index />
        </DndProvider>
      );
    case 'wysiwyg':
      return <div>WYSIWYG</div>;
    default:
      return null;
  }
};
function EditLesson() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseData = useSelector(courseSelector);
  const lessonData = useSelector(lessonSelector);

  const [expanded, setExpanded] = React.useState('Untitled category');

  const [icon, setIcon] = React.useState(true);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  {
    return (
      <Container>
        <Formik
          initialValues={{ ...lessonData }}
          validationSchema={FORM_VALIDATION}
          onSubmit={() => {
            // console.log(value);
            // navigate('/academy/upload-success');
          }}
        >
          {({ values }) => {
            console.log('main', values);
            return (
              <Form>
                <Grid
                  mb={3}
                  display="flex"
                  alignItems={'center'}
                  justifyContent="space-between"
                  height={30}
                >
                  <Typography variant="h5">Untitled category</Typography>
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
                            dispatch(removeCurrentLessonEdit());
                          }}
                        >
                          <ArrowBackIos fontSize="12px" />
                          <Typography variant="h6" ml={1}>
                            Back to course editor
                          </Typography>
                        </Grid>
                      </Link>
                      <Divider />
                      {courseData.category.map((category, categoryIndex) => (
                        <Accordion
                          disableGutters
                          key={categoryIndex}
                          elevation={0}
                          expanded={expanded === categoryIndex}
                          onChange={handleChange(categoryIndex)}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMore />}
                            sx={{ px: 2, py: 0.2 }}
                            aria-controls={`${category.name}-content`}
                          >
                            <Grid display={'flex'} alignItems={'center'}>
                              <IconButton>
                                <DragIndicator sx={{ color: '#4C3B9C' }} />
                              </IconButton>
                              <Typography variant="h6">
                                {category.name}
                              </Typography>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails sx={{ pl: 5, pr: 2, py: 0, pb: 3 }}>
                            {category.lesson && category.lesson.length != 0 ? (
                              category.lesson.map((lesson, lessonIndex) => (
                                <Grid
                                  container
                                  key={lessonIndex}
                                  alignItems="center"
                                  justifyContent={'space-between'}
                                >
                                  <Grid display={'flex'} alignItems="center">
                                    <IconButton>
                                      <DragIndicator
                                        sx={{ color: '#4C3B9C' }}
                                      />
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
                                        <AddBox sx={{ color: '#C4C4C4' }} />
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip
                                      placement="top"
                                      arrow={true}
                                      title={'Add category below'}
                                    >
                                      <IconButton
                                        onClick={() =>
                                          category.lesson.length - 1 ===
                                          lessonIndex
                                            ? dispatch(
                                                addCategory({
                                                  categoryIndex,
                                                  categoryData: {
                                                    id: uuid(),
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
                                              )
                                        }
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
                      <Grid display={'flex'} flexDirection="column" gap={2}>
                        <TextField
                          name="name"
                          label="Lesson"
                          placeholder="Add lesson"
                        />
                        <TextField
                          multiline
                          rows={4}
                          name="description"
                          label="Summary"
                          placeholder="Description"
                        />
                        <AutoCompleteMultiple
                          name="skills"
                          options={allSkills}
                          label="Skills"
                          placeholder="Enter skill name and press enter"
                        />
                      </Grid>
                      <FieldArray
                        name="content"
                        render={({ push }) => (
                          <div>
                            {values.content && values.content.length > 0
                              ? values.content.map((contentObj, index) => (
                                  <div key={index}>
                                    {RenderContentComponent(contentObj, index)}
                                  </div>
                                ))
                              : null}
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

                      {/* {showVideo ? (
                        <>
                          {videoValue ? (
                            <>
                              <video width={'100%'} height="auto" controls>
                                <source src={videoValue} type="video/mp4" />
                              </video>
                            </>
                          ) : (
                            <>
                              <Card
                                elevation={0}
                                className="dottedBorder"
                                sx={{
                                  mt: 1,
                                  textAlign: 'center',
                                  pt: 5,
                                  pb: 3.4,
                                  position: 'relative',
                                }}
                              >
                                <img src={UploadVideoImage} alt="" />
                                <Typography variant="subtitle1">
                                  Upload a video
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  sx={{ color: '#C4C4C4' }}
                                >
                                  You can upload maximum 100mb video
                                </Typography>
                                <input
                                  type="file"
                                  accept="video/*"
                                  className="imageDragDrop"
                                  onChange={() => {
                                    setVideoValue(
                                      URL.createObjectURL(event.target.files[0])
                                    );
                                    props.setFieldValue(
                                      'videoFile',
                                      URL.createObjectURL(event.target.files[0])
                                    );
                                    return;
                                  }}
                                  style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    opacity: 0,
                                    top: 0,
                                    left: 0,
                                  }}
                                />
                              </Card>
                              <Grid container ml={2}>
                                <FormHelperText error={true}>
                                  <ErrorMessage name="videoFile" />
                                </FormHelperText>
                              </Grid>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )} */}

                      {/* {showSlider ? (
                        <>
                          <Grid container justifyContent={'end'} mt={2}>
                            <IconButton>
                              <ArrowDownward
                                sx={{
                                  color: '#C4C4C4',
                                  height: '20px',
                                  width: '20px',
                                }}
                              />
                            </IconButton>
                            <IconButton>
                              <VisibilityOff
                                sx={{
                                  color: '#C4C4C4',
                                  height: '20px',
                                  width: '20px',
                                }}
                              />
                            </IconButton>
                            <IconButton>
                              <ContentCopy
                                sx={{
                                  color: '#C4C4C4',
                                  height: '20px',
                                  width: '20px',
                                }}
                              />
                            </IconButton>
                            <IconButton>
                              <Delete
                                sx={{
                                  color: '#C4C4C4',
                                  height: '20px',
                                  width: '20px',
                                }}
                              />
                            </IconButton>
                          </Grid>
                          <Card
                            elevation={0}
                            className="dottedBorder"
                            sx={{
                              mt: 1,
                              display: 'flex',
                            }}
                          >
                            <Grid display={'flex'} sx={{ overflowX: 'auto' }}>
                              {imageValue.map((image) => (
                                <Grid key={image} pt={2} pb={1} px={2}>
                                  <img
                                    style={{ borderRadius: '10px' }}
                                    src={image}
                                    alt=""
                                    height="150px"
                                    width="150px"
                                  />
                                </Grid>
                              ))}
                            </Grid>
                            <Card
                              elevation={0}
                              sx={{
                                width: '150px',
                                py: 3.6,
                                textAlign: 'center',
                                position: 'relative',
                              }}
                              className="dottedBorder"
                            >
                              <img
                                src={UploadImage}
                                alt=""
                                height="45px"
                                width="42px"
                              />
                              <Typography variant="subtitle2" mt={1.5}>
                                Upload image
                              </Typography>
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="imageDragDrop"
                                onChange={(e) => {
                                  Object.keys(e.target.files).map((key) => {
                                    // console.log(
                                    //   URL.createObjectURL(e.target.files[key])
                                    // );
                                    imageValue.push(
                                      URL.createObjectURL(e.target.files[key])
                                    );
                                    props.setFieldValue(
                                      'imageFile',
                                      imageValue
                                    );
                                  });
                                  return;
                                }}
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  opacity: 0,
                                  top: 0,
                                  left: 0,
                                }}
                              />
                            </Card>
                          </Card>
                        </>
                      ) : (
                        <></>
                      )} */}
                    </Card>
                    <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Container>
    );
  }
}

EditLesson.propTypes = {
  setFieldValue: PropTypes.func,
};

export default EditLesson;
