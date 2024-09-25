import React from 'react';

import {
  ArrowBackIos,
  ArrowBackIosNew,
  ArrowForwardIos,
  ReportGmailerrorred,
} from '@mui/icons-material';
import {
  Container,
  Grid,
  Card,
  Checkbox,
  Typography,
  Link,
  Divider,
  LinearProgress,
  Button,
} from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import LessonDetailsImage from './../../assets/lesson_details.svg';
import Image1 from './../../assets/news_image_1.png';
import Image2 from './../../assets/news_image_2.png';
import AcademyAccordion from './components/AcademyAccordion';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    title: 'Analysis patterns may be classified into several categories:',
    description: [
      {
        list: 'The vocabulary category consists of patterns related to a problem description from the point of view of a user.',
      },
      {
        list: 'The error category covers general error distribution patterns. These patterns are related to error and failure messages, either explicitly stating an error or indirectly via an error code, abnormal function return value, or status values in the failure range.',
      },
      {
        list: 'We also consider whole traces (here we ignore trace or log message contents and treat all messages statistically), their large-scale structure (about the coarse grain structure of software traces and logs where the division unit is often a component or some high-level functionality), activity patterns related to various software activities we see in logs and traces (most of them involve time dependency), patterns related to individual trace message structure, patterns related to collections of messages (called blocks), and, finally, patterns related to several traces and logs as a collection of artifacts from software incident (called trace sets).',
      },
      {
        list: 'There are also memory, text, code, and data categories.',
      },
    ],
  },
];
const data1 = [
  {
    title: 'Analysis patterns may be classified into several categories:',
    description: [
      {
        list: 'The vocabulary category consists of patterns related to a problem description from the point of view of a user.',
      },
      {
        list: 'The error category covers general error distribution patterns. These patterns are related to error and failure messages, either explicitly stating an error or indirectly via an error code, abnormal function return value, or status values in the failure range.',
      },
      {
        list: 'We also consider whole traces (here we ignore trace or log message contents and treat all messages statistically), their large-scale structure (about the coarse grain structure of software traces and logs where the division unit is often a component or some high-level functionality), activity patterns related to various software activities we see in logs and traces (most of them involve time dependency), patterns related to individual trace message structure, patterns related to collections of messages (called blocks), and, finally, patterns related to several traces and logs as a collection of artifacts from software incident (called trace sets).',
      },
      {
        list: 'There are also memory, text, code, and data categories.',
      },
      {
        list: 'The error category covers general error distribution patterns. These patterns are related to error and failure messages, either explicitly stating an error or indirectly via an error code, abnormal function return value, or status values in the failure range.',
      },
      {
        list: 'We also consider whole traces (here we ignore trace or log message contents and treat all messages statistically), their large-scale structure (about the coarse grain structure of software traces and logs where the division unit is often a component or some high-level functionality), activity patterns related to various software activities we see in logs and traces (most of them involve time dependency), patterns related to individual trace message structure, patterns related to collections of messages (called blocks), and, finally, patterns related to several traces and logs as a collection of artifacts from software incident (called trace sets).',
      },
      {
        list: 'There are also memory, text, code, and data categories.',
      },
    ],
  },
];

const imageData = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
];

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function LessonDetails() {
  const slider = React.useRef();
  const prevHandle = () => {
    slider.current.slickPrev();
  };
  const nextHandle = () => {
    slider.current.slickNext();
  };
  // const renderArrows = () => {
  //   return (
  //     <Grid container display={'flex'} justifyContent="space-between">
  //       <Card sx={{ p: 2 }} onClick={() => prevHandle()}>
  //         <ArrowBackIosNew />
  //       </Card>
  //       <Card sx={{ p: 2 }} onClick={() => nextHandle()}>
  //         <ArrowForwardIos />
  //       </Card>
  //     </Grid>
  //   );
  // };
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
  ];
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4.5}>
          <Card elevation={0}>
            <Link onClick={() => navigate('/academy/details')}>
              <Grid container alignItems="center" gap={1} p={3}>
                <ArrowBackIos fontSize="12px" />
                <Typography variant="h6">Back to home</Typography>
              </Grid>
            </Link>
            <Divider />
            <Grid p={3}>
              <Typography variant="h5">
                Complete crypto payment master class
              </Typography>
              <Grid my={3}>
                <Grid container justifyContent="space-between">
                  <Typography fontSize="12px">30% complete</Typography>
                  <Typography fontSize="12px">Finish your course</Typography>
                </Grid>
                <LinearProgress
                  variant="determinate"
                  value={30}
                  sx={{ background: '#271D5A', mt: 1.5 }}
                />
              </Grid>
              <Divider />
              <AcademyAccordion />
              <Divider />
              <Grid mt={3} display="flex" justifyContent={'center'}>
                <Button variant="contained" color="secondary">
                  Mark as complete course
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Typography variant="h4">
            Complete crypto payment master class
          </Typography>
          {data.map((item, index) => {
            return (
              <Grid key={index}>
                <Typography variant="h5" mt={3}>
                  {item.title}
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  {item.description.map((listItem, listIndex) => {
                    return (
                      <div key={listIndex}>
                        <li key={listIndex}>{listItem.list}</li>
                        <br />
                      </div>
                    );
                  })}
                </ul>
              </Grid>
            );
          })}
          <Grid>
            <img src={LessonDetailsImage} alt="" width={'100%'} />
          </Grid>
          {data1.map((item, index) => {
            return (
              <Grid key={index}>
                <Typography variant="h5" mt={3}>
                  {item.title}
                </Typography>
                <ul style={{ paddingLeft: 20 }}>
                  {item.description.map((listItem, listIndex) => {
                    return (
                      <div key={listIndex}>
                        <li key={listIndex}>{listItem.list}</li>
                        <br />
                      </div>
                    );
                  })}
                </ul>
              </Grid>
            );
          })}

          <Grid container display={'flex'} justifyContent="space-between">
            <Grid item md={1} display="flex" alignItems={'center'}>
              <Card sx={{ px: 2, py: 1.5 }} onClick={() => prevHandle()}>
                <ArrowBackIosNew sx={{ mt: 0.5 }} />
              </Card>
            </Grid>
            <Grid item md={9.1}>
              <Slider ref={slider} {...settings}>
                {imageData.map((item, index) => {
                  return (
                    <Grid key={index}>
                      <img
                        src={item.image}
                        alt=""
                        width={'100%'}
                        height="255px"
                        style={{ borderRadius: '10px' }}
                      />
                    </Grid>
                  );
                })}
              </Slider>
            </Grid>
            <Grid item md={1} display="flex" alignItems={'center'}>
              <Card sx={{ px: 2, py: 1.5 }} onClick={() => nextHandle()}>
                <ArrowForwardIos sx={{ mt: 0.5 }} />
              </Card>
            </Grid>
          </Grid>

          {/* <div style={{ position: 'relative' }}>{renderArrows()}</div> */}
          <Grid container direction="column" mt={5}>
            <Typography variant="h4" mb={3}>
              Quiz
            </Typography>
            {quizData.map((quizItem, quizIndex) => (
              <Card key={quizIndex} sx={{ mb: 3, p: 2 }}>
                <Typography variant="h6" mb={2}>
                  {quizItem.question}
                </Typography>
                <ul>
                  {quizItem.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <Typography variant="body1">{option}</Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
          <Grid container direction="column" mt={5}>
            <Typography variant="h4" mb={3}>
              Answer the Quiz
            </Typography>
            {quizData.map((quizItem, quizIndex) => (
              <Card key={quizIndex} sx={{ mb: 3, p: 2 }}>
                <Typography variant="h6" mb={2}>
                  {quizItem.question}
                </Typography>
                <ul>
                  {quizItem.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <Checkbox />
                      <Typography variant="body1" display="inline">
                        {option}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
            <Button variant="contained" color="primary" sx={{ mt: 3 }}>
              Submit Answers
            </Button>
          </Grid>
          <Grid container justifyContent={'space-between'} mt={5}>
            <Grid
              item
              gap={1}
              p={{ xs: 1, sm: 0 }}
              display={'flex'}
              alignItems="center"
            >
              <ReportGmailerrorred />
              <Typography variant="subtitle1">Report an Issue</Typography>
            </Grid>
            <Grid
              item
              p={{ xs: 1, sm: 0 }}
              display={'flex'}
              alignItems="center"
            >
              <Checkbox {...label} />
              <Typography variant="subtitle1">Mark as completed</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={'space-between'} mt={3}>
            <Button
              variant="outlined"
              sx={{ width: { xs: '100%', sm: 'auto' }, m: { xs: 1, sm: 0 } }}
            >
              Previous lesson
            </Button>

            <Button
              variant="contained"
              color="secondary"
              sx={{ width: { xs: '100%', sm: 'auto' }, m: { xs: 1, sm: 0 } }}
            >
              Next lesson
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LessonDetails;
