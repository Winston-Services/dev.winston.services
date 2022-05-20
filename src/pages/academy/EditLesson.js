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
  ArrowDownward,
  VisibilityOff,
  ContentCopy,
  Delete,
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
  FormHelperText,
} from '@mui/material';
import { Form, Formik, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

// import WysiwygEditor from '../../../components/common/Editor';
import AutoCompleteMultiple from '../../components/common/AutoCompleteMultiple';
import TextField from '../../components/common/TextField';
import {
  courseSelector,
  addLesson,
  addCategory,
  splitCategory,
} from '../../store/academy';
import UploadImage from './../../assets/upload_image.svg';
import UploadVideoImage from './../../assets/upload_video_icon.png';
import { uuid } from './../../components/common/CommonFunction';

const FORM_VALIDATION = Yup.object().shape({
  lessonName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lesson is required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long! 100 Characters only')
    .required('Description is required'),
  skills: Yup.array().min(1).required('At least one skill required'),
  // videoFile: Yup.string().required('Video File is required'),
  // imageFile: Yup.string().required('Image File is required'),
});

const allSkills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];

function EditLesson() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { pathname } = useLocation();

  // console.log('pathname', pathname);

  const courseData = useSelector(courseSelector);

  const [videoValue, setVideoValue] = React.useState();
  const [imageValue] = React.useState([]);

  const [expanded, setExpanded] = React.useState('Untitled category');

  const [icon, setIcon] = React.useState(true);
  const [showVideo, setShowVideo] = React.useState(false);
  // const [showEditor, setShowEditor] = React.useState(false);
  const [showSlider, setShowSlider] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [initialValues] = React.useState({
    lessonName: 'Lesson1',
    description: 'Dummy data',
    skills: ['sss'],
    videoFile: '',
    imageFile: [],
  });

  {
    return (
      <Container>
        <Formik
          initialValues={{ ...initialValues }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(value) => {
            console.log(value);
            navigate('/academy/upload-success');
          }}
        >
          {(props) => {
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
                        <Grid display={'flex'} p={3} alignItems="center">
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
                          name="lessonName"
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

                      {showVideo ? (
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
                      )}

                      {/* {showEditor ? (
                  <>
                    <WysiwygEditor />
                  </>
                ) : (
                  <></>
                )} */}

                      {showSlider ? (
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
                                    console.log(
                                      URL.createObjectURL(e.target.files[key])
                                    );
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
                      )}

                      <Grid container gap={2} alignItems="end">
                        <IconButton
                          onClick={() => {
                            if (icon === true) {
                              setIcon(false);
                              // setShowVideo(false);
                              // setShowSlider(false);
                              // setShowEditor(false);
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
                            {' '}
                            <Button
                              sx={{ height: '50px' }}
                              startIcon={<PlayArrow />}
                              variant="outlined"
                              onClick={() => {
                                setShowVideo(true);
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
                                // setShowEditor(true);
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
                                setShowSlider(true);
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
