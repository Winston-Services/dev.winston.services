import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addCourse: {
    step1: 'In person, informally',
    step2: 'I am a beginner',
    step3: 'Not at the moment',
    title: '',
    category: 'Category3',
  },
  addSection: {},
};

export const academySlice = createSlice({
  name: 'academy',
  initialState,
  reducers: {
    updateAddCourse: (state, action) => {
      state.addCourse = { ...state.addCourse, ...action.payload };
      return state;
    },
    updateAddSection: (state, action) => {
      state.addSection = { ...state.addSection, ...action.payload };
      return state;
    },
  },
});

export const { updateAddCourse } = academySlice.actions;
export const { updateAddSection } = academySlice.actions;
export const addCourseSelector = (state) => state.academy.addCourse;
export const addSectionSelector = (state) => state.academy.addSection;

const academy = academySlice.reducer;
export default academy;
