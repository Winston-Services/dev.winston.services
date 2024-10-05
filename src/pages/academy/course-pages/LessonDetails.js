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
  Skeleton,
} from '@mui/material/';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { coursesSelector } from '../../../store/academy';
// import LessonDetailsImage from './../../assets/lesson_details.svg';
import AcademyAccordion from '../components/AcademyAccordion';
// import RatingPage from './RatingPage';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
/*
const courses = [
  {
    image: 'https://picsum.photos/260/300?random=1',
    title: 'Crypto Payments Explained',
    description: 'Complete crypto payment master class',
    difficultyLevel: 'Beginner',
    price: 25,
    currencySymbol: '$',
    duration: '2:15 hour',
    rating: '4.7',
    reviews: [],
    viewers: 251,
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    thumbnail: '',
    skills: ['Programming', 'Development'],
    tags: ['Blockchain', 'Economics'],
    summary:
      'Learn to Crypto like a Pro with Winston. Start with Crypto Programming Basics and progress to a Crypto payment explained.',
    discountPrice: '',
    category: [
      {
        id: uuid(),
        name: 'Introduction',
        lesson: [
          {
            id: uuid(),
            name: 'Introduction how to design a NFT card',
            summary: 'Learn the basics of crypto and blockchain technology.',
            skills: ['Programming', 'Development'],
            isRequired: true,
            duration: '1:30 hour',
            content: [{
              component: 'video',
              url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
              component: 'markdown',
              content: 'This is the content of the lesson',
            },
            {
              component: 'image',
              image: 'https://picsum.photos/260/300?random=1',
            },              
            {
              component: 'markdown',
              content: 'This is the content of the lesson',
            },
            {
              component: 'slider',
              content: [
                {
                  image: 'https://picsum.photos/260/300?random=1',
                },
                {
                  image: 'https://picsum.photos/260/300?random=2',
                },
                {
                  image: 'https://picsum.photos/260/300?random=3',
                },
              ],
            },
            ],
            quiz: [
              {
                question: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin', 'Madrid'],
                correctAnswer: 'Paris',
              },
            ],
            answers: [
              {
                question: 0,                  
                answer: 'Paris',
                correct: true,
              },
            ],
            completed: false,
          },
        ],
      },
      {
        id: uuid(),
        name: 'How do crypto payments work?',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'Crypto cards for payments',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'What are the advantages of crypto payments?',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'What are the disadvantages of crypto payments?',
        lesson: [],
      },
    ],
    teacher: {
      name: 'Hattie H. Moore',
      image: 'https://picsum.photos/260/300?random=1',
    },
    progress: 0,
  },
  {
    image: 'https://picsum.photos/260/300?random=1',
    title: 'Crypto Payments Explained',
    description: 'Complete crypto payment master class',
    difficultyLevel: 'Beginner',
    price: 25,
    currencySymbol: '$',
    duration: '2:15 hour',
    rating: '4.7',
    reviews: [],
    viewers: 251,
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    thumbnail: '',
    skills: ['Programming', 'Development'],
    tags: ['Blockchain', 'Economics'],
    summary:
      'Learn to Crypto like a Pro with Winston. Start with Crypto Programming Basics and progress to a Crypto payment explained.',
    discountPrice: '',
    category: [
      {
        id: uuid(),
        name: 'Introduction',
        lesson: [
          {
            id: uuid(),
            name: 'Introduction how to design a NFT card',
            summary: 'Learn the basics of crypto and blockchain technology.',
            skills: ['Programming', 'Development'],
            isRequired: true,
            duration: '1:30 hour',
            content: [{
              component: 'video',
              url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
              component: 'markdown',
              content: 'This is the content of the lesson',
            },
            {
              component: 'image',
              image: 'https://picsum.photos/260/300?random=1',
            },              
            {
              component: 'markdown',
              content: 'This is the content of the lesson',
            },
            {
              component: 'slider',
              content: [
                {
                  image: 'https://picsum.photos/260/300?random=1',
                },
                {
                  image: 'https://picsum.photos/260/300?random=2',
                },
                {
                  image: 'https://picsum.photos/260/300?random=3',
                },
              ],
            },
            ],
            quiz: [
              {
                question: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin', 'Madrid'],
                correctAnswer: 'Paris',
              },
            ],
            answers: [
              {
                question: 0,                  
                answer: 'Paris',
                correct: true,
              },
            ],
            completed: false,
          },
        ],
      },
      {
        id: uuid(),
        name: 'How do crypto payments work?',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'Crypto cards for payments',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'What are the advantages of crypto payments?',
        lesson: [],
      },
      {
        id: uuid(),
        name: 'What are the disadvantages of crypto payments?',
        lesson: [],
      },
    ],
    teacher: {
      name: 'Hattie H. Moore',
      image: 'https://picsum.photos/260/300?random=1',
    },
    progress: 0,
  },
];
*/
function LessonDetails() {
  const { lessonId } = useParams();
  const courses = useSelector(coursesSelector);
  const course = courses.find((course) =>
    course.lectures.some((lecture) =>
      lecture.lesson.some((lesson) => lesson.id === lessonId)
    )
  );
  const lecture = course?.lectures.find((lecture) =>
    lecture.lesson.some((lesson) => lesson.id === lessonId)
  );
  const lesson = lecture?.lesson.find((lesson) => lesson.id === lessonId);

  // console.log(course);

  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
  ];
  
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!course) {
      navigate('/academy');
    }
    if (!lecture) {
      navigate(`/academy/details/${course.id}`);
    }
    if (!lesson) {
      navigate(`/academy/details/${course.id}/${lecture.id}`);
    }
  }, [course, navigate, lecture, lesson]);

  if (!course) {
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Skeleton variant="rectangular" width="100%" height={'45vh'} />
          </Grid>
        </Grid>
      </Container>
    );
  }
  const SliderContent = (content) => {
    const { content: contentData, ...props } = content;
    const slider = React.useRef();
    const prevHandle = () => {
      slider.current.slickPrev();
    };
    const nextHandle = () => {
      slider.current.slickNext();
    };
    //console.log(contentData);
    const imageData = contentData.map((item) => {
      return {
        image: item.name,
      };
    });
    // console.log(imageData);
    return (
      <Grid
        container
        display={'flex'}
        justifyContent="space-between"
        {...props}
        sx={{
          mt: 3,
          mb: 3,
        }}
      >
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
    );
  };

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'video':
          return (
            <Grid
              container
              display={'flex'}
              justifyContent="space-between"
              key={index}
              sx={{
                mt: 2,
              }}
            >
              <Grid item md={12} display="flex" alignItems={'center'}>
                <video width={'100%'} height="auto" controls>
                  {/* <source src={URL.createObjectURL(field.value)} type="video/mp4" /> */}
                  <source src={item.content} />
                </video>
              </Grid>
            </Grid>
          );
        case 'image':
          return (
            <Grid
              container
              display={'flex'}
              justifyContent="center"
              key={index}
              sx={{
                mt: 2,
              }}
            >
              <Grid item md={12} display="flex" alignItems={'center'}>
                <img
                  src={item.content}
                  alt={`content-image-${index}`}
                  width="100%"
                  height="320px"
                  style={{ borderRadius: '20px', objectFit: 'cover' }}
                />
              </Grid>
            </Grid>
          );
        case 'wysiwyg':
          return (
            <Grid
              container
              key={index}
              sx={{
                mt: 2,
              }}
            >
              <Grid item md={12} dangerouslySetInnerHTML={{ __html: item.content }} />
            </Grid>
          );
        case 'slider':
          return <SliderContent content={item.content} key={index} />;
        default:
          return (
            <Grid key={index}>
              <span>Content Card.</span>
            </Grid>
          );
      }
    });
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4.5}>
          <Card elevation={0}>
            <Link onClick={() => navigate(`/academy/details/${course.id}`)}>
              <Grid container alignItems="center" gap={1} p={3}>
                <ArrowBackIos fontSize="12px" />
                <Typography variant="h6">Back to home</Typography>
              </Grid>
            </Link>
            <Divider />
            <Grid p={3}>
              <Typography variant="h5">
                {course ? (
                  course.title
                ) : (
                  <Skeleton variant="text" width="100%" height={20} />
                )}
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
              <AcademyAccordion course={course?.lectures || []} />
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
          <Typography variant="h3">
            {course ? (
              course.title
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          <Typography variant="h4" mt={3}>
            {course ? (
              course.description
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          <Typography variant="h5" mt={2}>
            {course ? (
              course.summary
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          <Typography variant="h6" mt={3}>
            {lecture ? (
              lecture.name
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          <Typography variant="h6" mt={2}>
            {lesson ? (
              lesson.name
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          <Typography variant="body1" mt={3} mb={3}>
            {lesson ? (
              lesson.summary
            ) : (
              <Skeleton variant="text" width="100%" height={20} />
            )}
          </Typography>
          {renderContent(lesson.content)}
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
              Final Quiz
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
            <Grid item xs={12}>
              {/* <RatingPage /> */}
            </Grid>
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
