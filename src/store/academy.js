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
        lesson: [
          {
            id: uuid(),
            name: 'Lesson1',
            isRequired: true,
            description: '',
            content: [
              // {
              //   id: uuid(),
              //   type: 'video',
              //   content: [
              //     'https://www.youtube.com/watch?v=3xC0F9bj9FU',
              //     'https://www.youtube.com/watch?v=3xC0F9bj9FU',
              //   ],
              //   config: {},
              // },
              // {
              //   id: uuid(),
              //   type: 'slider',
              //   content: [
              //     'https://source.unsplash.com/random/300×300',
              //     'https://source.unsplash.com/random/300×300',
              //     'https://source.unsplash.com/random/300×300',
              //   ],
              //   config: {},
              // },
              // {
              //   id: uuid(),
              //   type: 'wysiwyg',
              //   content: 'https://www.youtube.com/watch?v=3xC0F9bj9FU',
              //   config: 'Hi There',
              // },
            ],
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
        state.currentLessonEdit = lesson;
      }
    },
    removeCurrentLessonEdit: (state) => {
      state.currentLessonEdit = null;
    },
    addLessonContent: (state, action) => {
      state.updateLessonContent.currentLessonEdit.content.push({
        id: uuid(),
        ...action.payload,
      });
    },
    updateLessonContent: (state, action) => {
      const index =
        state.updateLessonContent.currentLessonEdit.content.findIndex(
          (d) => d.id === action.payload.id
        );
      state.updateLessonContent.currentLessonEdit.content[index].content =
        action.payload.content;
    },
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
} = academySlice.actions;
export const courseSelector = (state) => state.academy.course;
export const lessonSelector = (state) => state.academy.currentLessonEdit;

const academy = academySlice.reducer;
export default academy;
