import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  course: {
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
        name: 'Untitled category1',
        lesson: [
          { name: 'Lesson1', isRequired: true, link: '' },
          { name: 'Lesson2', isRequired: true, link: '' },
        ],
      },
      {
        name: 'Untitled category2',
        lesson: [{ name: 'Lesson1', isRequired: true, link: '' }],
      },
    ],
  },
  addCourse: {
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: '',
    category: 'Category3',
  },
  section: [
    {
      name: 'section1',
      lecture: [
        {
          name: 'lecture1',
          description: '',
          externalResource: [],
        },
      ],
    },
  ],
};

export const academySlice = createSlice({
  name: 'academy',
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      state.course = { ...state.course, ...action.payload };
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
        action.payload.categoryIndex,
        0,
        action.payload.categoryData
      );
    },
    addLesson: (state, action) => {
      state.course.category[action.payload.categoryIndex].lesson.splice(
        action.payload.lessonIndex,
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

    updateAddCourse: (state, action) => {
      state.addCourse = { ...state.addCourse, ...action.payload };
    },
    addSection: (state, action) => {
      state.section.splice(
        action.payload.sectionIndex,
        0,
        action.payload.sectionData
      );
    },
    updateSection: (state, action) => {
      state.section[action.payload.sectionIndex].name = action.payload.name;
    },
    deleteSection: (state, action) => {
      state.section.splice(action.payload, 1);
    },
    addLecture: (state, action) => {
      state.section[action.payload.sectionIndex].lecture.splice(
        action.payload.lectureIndex,
        0,
        action.payload.lectureData
      );
    },
    updateLecture: (state, action) => {
      state.section[action.payload.sectionIndex].lecture[
        action.payload.lectureIndex
      ].name = action.payload.name;
    },
    deleteLecture: (state, action) => {
      state.section[action.payload.sectionIndex].lecture.splice(
        action.payload.lectureIndex,
        1
      );
    },
    addExternalResource: (state, action) => {
      state.section[action.payload.sectionIndex].lecture[
        action.payload.lectureIndex
      ].externalResource.push(action.payload.externalResourceData);
    },
    updateExternalResource: (state, action) => {
      state.section[action.payload.sectionIndex].lecture[
        action.payload.lectureIndex
      ].externalResource[action.payload.externalResourceIndex] =
        action.payload.externalResourceData;
    },
    deleteExternalResource: (state, action) => {
      state.section[action.payload.sectionIndex].lecture[
        action.payload.lectureIndex
      ].externalResource.splice(action.payload.externalResourceIndex, 1);
    },
  },
});

export const {
  updateCourse,
  updateCategory,
  updateLesson,
  addCategory,
  addLesson,
  deleteCategory,
  deleteLesson,

  updateAddCourse,
  addSection,
  updateSection,
  deleteSection,
  addLecture,
  updateLecture,
  deleteLecture,
  addExternalResource,
  updateExternalResource,
  deleteExternalResource,
} = academySlice.actions;
export const courseSelector = (state) => state.academy.course;
export const addCourseSelector = (state) => state.academy.addCourse;
export const sectionSelector = (state) => state.academy.section;

const academy = academySlice.reducer;
export default academy;
