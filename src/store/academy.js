import { createSlice } from '@reduxjs/toolkit';

import { uuid } from '../components/common/CommonFunction';

const initialState = {
  courses: [
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
  ],
  course: {
    id: uuid(),
    step1: '',
    step2: '',
    step3: '',
    thumbnail: '',
    title: '',
    description: '',
    skills: [],
    tags: [],
    summary: '',
    price: '',
    discountPrice: '',
    category: [
      {
        id: uuid(),
        name: 'Untitled category1',
        lesson: [
          {
            id: uuid(),
            name: 'Lesson1',
            isRequired: true,
            summary: '',
            skills: [],
            content: [],
          },
        ],
      },
    ],
  },
  currentLessonEdit: null,

};

export const academySlice = createSlice({
  name: 'academy',
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      state.course = { ...state.course, ...action.payload };
    },
    setCategory: (state, action) => {
      state.course.category = action.payload;
    },
    updateCategory: (state, action) => {
      state.course.category[action.payload.categoryIndex].name =
        action.payload.name;
    },
    updateLesson: (state, action) => {
      state.course.category[action.payload.categoryIndex].lesson[
        action.payload.lessonIndex
      ] = {
        ...state.course.category[action.payload.categoryIndex].lesson[
          action.payload.lessonIndex
        ],
        ...action.payload.data,
      };
    },
    addCategory: (state, action) => {
      state.course.category.splice(
        action.payload.categoryIndex + 1,
        0,
        action.payload.categoryData
      );
    },
    splitCategory: (state, action) => {
      state.course.category.splice(action.payload.categoryIndex + 1, 0, {
        id: uuid(),
        name: 'Untitled category',
        lesson: state.course.category[
          action.payload.categoryIndex
        ].lesson.splice(action.payload.lessonIndex + 1),
      });
    },
    addLesson: (state, action) => {
      state.course.category[action.payload.categoryIndex].lesson.splice(
        action.payload.lessonIndex + 1,
        0,
        action.payload.lessonData
      );
    },
    deleteCategory: (state, action) => {
      state.course.category.splice(action.payload, 1);
    },
    deleteLesson: (state, action) => {
      state.course.category[action.payload.categoryIndex].lesson.splice(
        action.payload.lessonIndex,
        1
      );
    },
    addCurrentLessonEdit: (state, action) => {
      const lesson = state.course.category[
        action.payload.categoryIndex
      ].lesson.find((lessonId) => lessonId.id === action.payload.id);
      if (lesson) {
        state.currentLessonEdit = {
          ...lesson,
          categoryId: action.payload.categoryId,
        };
        // state.currentLessonEdit = lesson;
      }
    },
    removeCurrentLessonEdit: (state) => {
      state.currentLessonEdit = null;
    },
    updateLessonContent: (state, action) => {
      state.currentLessonEdit = {
        ...state.currentLessonEdit,
        ...action.payload.data,
      };
    },
    updateLessonContentData: (state, action) => {
      const categoryId = state.course.category.findIndex(
        (cid) => cid.id === action.payload.category_id
      );
      const lessonId = state.course.category[categoryId].lesson.findIndex(
        (lid) => lid.id === action.payload.lesson_id
      );
      state.course.category[categoryId].lesson[lessonId] = {
        ...state.course.category[categoryId].lesson[lessonId],
        ...action.payload.data,
      };
    },
    // deleteVideoCard: (state, action) => {
    //   const categoryId = state.course.category.findIndex(
    //     (cid) => cid.id === action.payload.category_id
    //   );
    //   const lessonId = state.course.category[categoryId].lesson.findIndex(
    //     (lid) => lid.id === action.payload.lesson_id
    //   );
    //   state.course.category[categoryId].lesson[lessonId].content.splice(
    //     action.payload.contentId,
    //     1
    //   );
    //   console.log(categoryId, lessonId);
    // },
  },
});

export const {
  updateCourse,
  setCategory,
  updateCategory,
  updateLesson,
  addLessonContent,
  updateLessonContent,
  addCategory,
  addLesson,
  splitCategory,
  deleteCategory,
  deleteLesson,
  addCurrentLessonEdit,
  removeCurrentLessonEdit,
  updateLessonContentData,
  // deleteVideoCard,
} = academySlice.actions;
export const coursesSelector = (state) => state.academy.courses;
export const courseSelector = (state) => state.academy.course;
export const lessonSelector = (state) => state.academy.currentLessonEdit;

const academy = academySlice.reducer;
export default academy;
