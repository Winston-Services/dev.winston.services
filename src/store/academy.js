import { createSlice } from '@reduxjs/toolkit';

import { uuid } from '../components/common/CommonFunction';

const initialState = {
  course: {
    id: uuid(),
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
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
        lesson: [{ id: uuid(), name: 'Lesson1', isRequired: true }],
      },
      {
        id: uuid(),
        name: 'Untitled category2',
        lesson: [{ id: uuid(), name: 'Lesson2', isRequired: true }],
      },
      {
        id: uuid(),
        name: 'Untitled category3',
        lesson: [{ id: uuid(), name: 'Lesson3', isRequired: true }],
      },
      {
        id: uuid(),
        name: 'Untitled category4',
        lesson: [
          { id: uuid(), name: 'Lesson4', isRequired: true },
          { id: uuid(), name: 'Lesson5', isRequired: true },
        ],
      },
    ],
  },
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
  },
});

export const {
  updateCourse,
  setCategory,
  updateCategory,
  updateLesson,
  addCategory,
  addLesson,
  splitCategory,
  deleteCategory,
  deleteLesson,
} = academySlice.actions;
export const courseSelector = (state) => state.academy.course;

const academy = academySlice.reducer;
export default academy;
