import { createSlice } from '@reduxjs/toolkit';

import { uuid } from '../components/common/CommonFunction';
const skills = [
  'Photoshop',
  'Programming',
  'Gaming',
  'Development',
  'Designing',
];
const tags = ['Blockchain', 'Economics', 'Math', 'Engineering', 'Art'];

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
    lectures: [
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
            content: [
              {
                id: uuid(),
                component: 'video',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              },
              {
                id: uuid(),
                component: 'markdown',
                content: 'This is the content of the lesson',
              },
              {
                id: uuid(),
                component: 'image',
                image: 'https://picsum.photos/260/300?random=1',
              },
              {
                id: uuid(),
                component: 'markdown',
                content: 'This is the content of the lesson',
              },
              {
                id: uuid(),
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
                id: uuid(),
                question: 'What is the capital of France?',
                options: ['Paris', 'London', 'Berlin', 'Madrid'],
                correctAnswer: 'Paris',
              },
            ],
            answers: [
              {
                id: uuid(),
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

const initialState = {
  courses: courses,
  activeCourse: null,
  activeLecture: null,
  activeLesson: null,
  courseEdit: null,
  lectureEdit: null,
  lessonEdit: null,
  lessonQuiz: null,
  lessonQuizAnswer: null,
  lessonContent: null,
  courseTemplate: {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: '',
    description: '',
    difficultyLevel: '',
    price: 0,
    currencySymbol: '$',
    duration: '',
    rating: '',
    reviews: [],
    viewers: 0,
    thumbnail: '',
    skills: [],
    tags: [],
    summary: '',
    discountPrice: '',
    lectures: [
      {
        id: uuid(),
        name: 'Example Lecture',
        lesson: [
          {
            id: uuid(),
            name: 'Example Lesson',
            summary: 'Example Lesson Summary',
            skills: ['Example Skill'],
            tags: ['Example Tag'],
            isRequired: false,
            duration: '',
            content: [
              {
                id: uuid(),
                type: 'video',
                content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content: 'This is the content of the lesson',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    image: 'https://picsum.photos/260/300?random=1',
                  },
                ],
                config: null,
              },
            ],
            quiz: [
              {
                id: uuid(),
                question: '',
                options: [],
                correctAnswer: '',
              },
            ],
            answers: [
              {
                id: uuid(),
                question: 0,
                answer: '',
                correct: false,
              },
            ],
            completed: false,
          },
        ],
      },
    ],
    teacher: {
      name: '',
      image: '',
    },
    progress: 0,
    isTemplate: true,
    isSubmitted: false,
    isReviewed: false,
    isApproved: false,
    isPublished: false,
    isRejected: false,
    isSaved: false,
  },
  skills,
  tags,
};

export const academySlice = createSlice({
  name: 'academy',
  initialState,
  reducers: {
    setActiveCourse: (state, action) => {
      state.activeCourse = action.payload;
    },
    setActiveLecture: (state, action) => {
      state.activeLecture = action.payload;
    },
    setActiveLesson: (state, action) => {
      state.activeLesson = action.payload;
    },
    setCourseEdit: (state, action) => {
      state.courseEdit = action.payload;
    },
    setLectureEdit: (state, action) => {
      state.lectureEdit = action.payload;
    },
    setLessonEdit: (state, action) => {
      state.lessonEdit = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    addLecture: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      course.lectures.push(action.payload.lecture);
    },
    addLesson: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      lecture.lesson.push(action.payload.lesson);
    },
    addLessonContent: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.content.push(action.payload.content);
    },
    addLessonQuiz: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.quiz.push(action.payload.quiz);
    },
    addLessonQuizAnswer: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.courseId
      );
      const lecture = course.lectures.find(
        (lecture) => lecture.id === action.payload.lectureId
      );
      const lesson = lecture.lesson.find(
        (lesson) => lesson.id === action.payload.lessonId
      );
      lesson.quiz.push(action.payload.quiz);
    },
    updateCourse: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload.id
      );
      course.title = action.payload.title;
      course.description = action.payload.description;
      course.difficultyLevel = action.payload.difficultyLevel;
      course.price = action.payload.price;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateTags: (state, action) => {
      state.tags = action.payload;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    removeTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
  },
});

export const {
  setActiveCourse,
  setActiveLecture,
  setActiveLesson,
  setCourseEdit,
  setLectureEdit,
  setLessonEdit,
  addCourse,
  addLecture,
  addLesson,
  addLessonContent,
  addLessonQuiz,
  addLessonQuizAnswer,
  createCourseFromTemplateAndEdit,
  updateCourse,
  updateSkills,
  updateTags,
  addSkill,
  addTag,
  removeSkill,
  removeTag,
} = academySlice.actions;
export const coursesSelector = (state) => state.academy.courses;
export const courseSelector = (state) => state.academy.activeCourse;
export const lectureSelector = (state) => state.academy.activeLecture;
export const lessonSelector = (state) => state.academy.activeLesson;
export const courseEditSelector = (state) => state.academy.courseEdit;
export const lectureEditSelector = (state) => state.academy.lectureEdit;
export const lessonEditSelector = (state) => state.academy.lessonEdit;
export const lessonQuizSelector = (state) => state.academy.lessonQuiz;
export const lessonQuizAnswerSelector = (state) =>
  state.academy.lessonQuizAnswer;
export const lessonContentSelector = (state) => state.academy.lessonContent;
export const courseTemplateSelector = (state) => state.academy.courseTemplate;
export const skillsSelector = (state) => state.academy.skills;
export const tagsSelector = (state) => state.academy.tags;

const academy = academySlice.reducer;
export default academy;
