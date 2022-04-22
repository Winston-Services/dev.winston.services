import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, Navigate } from 'react-router-dom';

import {
  updateAddCourse,
  addCourseSelector,
  updateAddSection,
  addSectionSelector,
} from './../../store/academy';
const Academy = React.lazy(() => import('./Academy'));
const AcademyDetails = React.lazy(() => import('./AcademyDetails'));
const Voting = React.lazy(() => import('./Voting'));
const TeacherProfile = React.lazy(() => import('./TeacherProfile'));
const AddCourse = React.lazy(() => import('./AddCourse'));
const AddLectures = React.lazy(() => import('./AddLectures'));
import './index.css';

export default function AcademyRouting() {
  const dispatch = useDispatch();
  const addCourseData = useSelector(addCourseSelector);
  const sectionData = useSelector(addSectionSelector);
  const setAddCourseData = (data) => {
    dispatch(updateAddCourse(data));
  };
  const setSectionData = (data) => {
    dispatch(updateAddSection(data));
  };
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Academy />,
        },
        {
          path: '/details',
          element: <AcademyDetails />,
        },
        {
          path: '/voting',
          element: <Voting />,
        },
        {
          path: '/add-course',
          element: (
            <AddCourse
              addCourseData={addCourseData}
              setAddCourseData={setAddCourseData}
            />
          ),
        },
        {
          path: '/add-lecture',
          element: (
            <AddLectures
              sectionData={sectionData}
              setSectionData={setSectionData}
            />
          ),
        },
        {
          path: '/teacher-profile',
          element: <TeacherProfile />,
        },
        { path: '/*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
