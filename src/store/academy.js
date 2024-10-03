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
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: 'Complete crypto payment master class',
    description: 'Learn to Crypto like a Pro with Crypto.',
    difficultyLevel: 'Beginner',
    price: 0,
    currencySymbol: '$',
    duration: '1.5',
    rating: [
      {
        id: uuid(),
        stars: 4.5,
      },
    ],
    reviews: [
      {
        id: uuid(),
        review: 'A comprehensive guide to understanding and implementing crypto payments in your applications.',
      },
    ],
    viewers: 99,
    thumbnail: 'https://picsum.photos/561/341?random=1',
    skills: ['Programming'],
    tags: ['Blockchain'],
    summary:
      'A comprehensive guide to understanding and implementing crypto payments in your applications. Start with Crypto Programming Basics and progress to a Crypto payment explained.',
    discountPrice: '19.99',
    lectures: [
      {
        id: uuid(),
        name: 'Introduction to Crypto',
        lesson: [
          {
            id: uuid(),
            name: 'What is Crypto?',
            summary: 'Learn the basics of crypto and how it works.',
            skills: ['Programming'],
            tags: ['Blockchain'],
            isRequired: true,
            duration: '10',
            content: [
              {
                id: uuid(),
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'video',
                content: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=3',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=4',
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
      name: 'John Doe',
      image: 'https://picsum.photos/260/300?random=1',
    },
    progress: 0,
    isTemplate: false,
    isSubmitted: true,
    isReviewed: false,
    isApproved: false,
    isPublished: false,
    isRejected: false,
    isSaved: true,
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
                type: 'image',
                content: 'https://picsum.photos/260/300?random=1',
                config: null,
              },
              {
                id: uuid(),
                type: 'video',
                content: '',
                config: null,
              },
              {
                id: uuid(),
                type: 'wysiwyg',
                content:
                  '<h1>Winston Academy</h1>\n<p>This is the content of the lesson</p>\n',
                config: null,
              },
              {
                id: uuid(),
                type: 'image',
                content: '',
                config: null,
              },
              {
                id: uuid(),
                type: 'slider',
                content: [
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=1',
                  },
                  {
                    id: uuid(),
                    name: 'https://picsum.photos/260/300?random=2',
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
