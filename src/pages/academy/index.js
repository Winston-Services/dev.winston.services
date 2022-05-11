import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, Navigate } from 'react-router-dom';

import { updateAddCourse, addCourseSelector } from './../../store/academy';
const Academy = React.lazy(() => import('./Academy'));
const AcademyDetails = React.lazy(() => import('./AcademyDetails'));
const Rating = React.lazy(() => import('./RatingPage'));
const TeacherProfile = React.lazy(() => import('./TeacherProfile'));
const AddCourse = React.lazy(() => import('./AddCourse'));
const AddLectures = React.lazy(() => import('./AddLectures'));
const Courses = React.lazy(() => import('./Courses'));
import './index.css';

export default function AcademyRouting() {
  const dispatch = useDispatch();
  const addCourseData = useSelector(addCourseSelector);
  const setAddCourseData = (data) => {
    dispatch(updateAddCourse(data));
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
          path: '/rating',
          element: <Rating />,
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
          element: <AddLectures />,
        },
        {
          path: '/teacher-profile',
          element: <TeacherProfile />,
        },
        {
          path: '/courses',
          element: <Courses />,
        },
        { path: '/*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
