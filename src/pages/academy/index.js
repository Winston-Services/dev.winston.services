import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

const Academy = React.lazy(() => import('./Academy'));
const AcademyDetails = React.lazy(() => import('./AcademyDetails'));
const Rating = React.lazy(() => import('./RatingPage'));
const TeacherProfile = React.lazy(() => import('./TeacherProfile'));
const AddCourse = React.lazy(() => import('./AddCourse'));
const AddLectures = React.lazy(() => import('./AddLectures'));
const Courses = React.lazy(() => import('./Courses'));
const LessonDetails = React.lazy(() => import('./LessonDetails'));
const EditLesson = React.lazy(() => import('./EditLesson'));
import './index.css';

export default function AcademyRouting() {
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
          path: '/lesson-details',
          element: <LessonDetails />,
        },
        {
          path: '/rating',
          element: <Rating />,
        },
        {
          path: '/add-course',
          element: <AddCourse />,
        },
        {
          path: '/add-lecture',
          element: <AddLectures />,
        },
        {
          path: '/edit-lesson/*',
          element: <EditLesson />,
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
