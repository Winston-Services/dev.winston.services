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
  // ArrowDownward,
  // VisibilityOff,
  // ContentCopy,
  // Delete,
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
} from '@mui/material';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

// import WysiwygEditor from '../../../components/common/Editor';
// import UploadImage from './../../../assets/upload_image.svg';
import UploadVideoImage from './../../../assets/upload_video_icon.png';
import AutoCompleteMultiple from './../../../components/common/AutoCompleteMultiple';
import TextField from './../../../components/common/TextField';
import { courseSelector } from './../../../store/academy';

const FORM_VALIDATION = Yup.object().shape({
  lessonName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lesson is required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long! 100 Characters only')
    .required('Description is required'),
  skills: Yup.array().min(1).required(),
});

const allSkills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];

function AddCategory() {
  const navigate = useNavigate();

  const courseData = useSelector(courseSelector);

  const [value, setValue] = React.useState();

  const [expanded, setExpanded] = React.useState('Untitled category');

  const [counter, setCounter] = React.useState(0);

  const [icon, setIcon] = React.useState(true);
  // const [showVideo, setShowVideo] = React.useState(false);
  // const [showEditor, setShowEditor] = React.useState(false);
  // const [showSlider, setShowSlider] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [initialValues] = React.useState({
    lessonName: '',
    description: '',
    skills: [],
  });

  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Container>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
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
                {courseData.category.map((accordionData, categoryIndex) => (
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
                      aria-controls={`${accordionData.name}-content`}
                    >
                      <Grid display={'flex'} alignItems={'center'}>
                        <IconButton>
                          <DragIndicator sx={{ color: '#4C3B9C' }} />
                        </IconButton>
                        <Typography variant="h6">
                          {accordionData.name}
                        </Typography>
                      </Grid>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pl: 5, pr: 2, py: 0, pb: 3 }}>
                      {accordionData.lesson &&
                      accordionData.lesson.length != 0 ? (
                        accordionData.lesson.map((item, lessonIndex) => (
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
                                {item.name}
                              </Typography>
                            </Grid>
                            <Grid display={'flex'} alignItems="center">
                              <IconButton>
                                <AddBox sx={{ color: '#C4C4C4' }} />
                              </IconButton>
                              <IconButton>
                                <Queue sx={{ color: '#C4C4C4' }} />
                              </IconButton>
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
                {/* {showVideo || showSlider || showEditor ? (
                  <>
                    <Grid container justifyContent={'end'} mt={2}>
                      <IconButton>
                        <ArrowDownward sx={{ color: '#C4C4C4' }} />
                      </IconButton>
                      <IconButton>
                        <VisibilityOff sx={{ color: '#C4C4C4' }} />
                      </IconButton>
                      <IconButton>
                        <ContentCopy sx={{ color: '#C4C4C4' }} />
                      </IconButton>
                      <IconButton>
                        <Delete sx={{ color: '#C4C4C4' }} />
                      </IconButton>
                    </Grid>
                  </>
                ) : (
                  <></>
                )} */}

                {Array.from(Array(counter)).map((c, index) => {
                  return (
                    <Card
                      key={index}
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
                      <Typography variant="subtitle2" sx={{ color: '#C4C4C4' }}>
                        You can upload maximum 100mb video
                      </Typography>
                      <input
                        type="file"
                        className="imageDragDrop"
                        onChange={() => {
                          setValue(URL.createObjectURL(event.target.files[0]));
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
                  );
                })}

                {/* {showVideo ? (
                  <>
                    {value ? (
                      <>
                        <video width={'100%'} height="auto" controls>
                          <source src={value} type="video/mp4" />
                        </video>
                      </>
                    ) : (
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
                          className="imageDragDrop"
                          onChange={() => {
                            setValue(
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
                    )}
                  </>
                ) : (
                  <></>
                )} */}

                {/* {showEditor ? (
                  <>
                    <WysiwygEditor />
                  </>
                ) : (
                  <></>
                )} */}

                {/* {showSlider ? (
                  <>
                    <Card
                      elevation={0}
                      className="dottedBorder"
                      sx={{
                        mt: 1,
                      }}
                    >
                      <Card
                        elevation={0}
                        sx={{
                          m: 2,
                          width: '150px',
                          py: 3.6,
                          textAlign: 'center',
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
                      </Card>
                    </Card>
                  </>
                ) : (
                  <></>
                )} */}

                <Grid container gap={2} alignItems="end">
                  <Grid
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
                    px={1.5}
                    py={0.7}
                    mt={3}
                    sx={{ cursor: 'pointer' }}
                  >
                    {icon ? (
                      <Grid mt={0.7}>
                        <Add />
                      </Grid>
                    ) : (
                      <Grid mt={0.7}>
                        <Close />
                      </Grid>
                    )}
                  </Grid>
                  {/* <IconButton
                    onClick={() => {
                      if (icon === true) {
                        setIcon(false);
                        setShowVideo(false);
                        setShowSlider(false);
                        setShowEditor(false);
                      } else {
                        setIcon(true);
                      }
                    }}
                    className={icon ? 'border1' : 'border2'}
                    sx={{ mt: 3, height: '50px', width: '50px' }}
                  >
                    {icon ? <Add /> : <Close />}
                  </IconButton> */}
                  {!icon ? (
                    <>
                      {' '}
                      <Button
                        sx={{ height: '50px' }}
                        startIcon={<PlayArrow />}
                        variant="outlined"
                        onClick={() => {
                          // setShowVideo(true);
                          setIcon(true);
                          setCounter(counter + 1);
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
                          // setShowSlider(true);
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
              <Button type="submit" variant="outlined">
                submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default AddCategory;
