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
const SuccessUpload = React.lazy(() => import('./SuccessUpload'));
const AllCourseList = React.lazy(() => import('./AllCourseList'));
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
          path: '/details/:courseId',
          element: <AcademyDetails />,
        },
        {
          path: '/lesson-details/:lessonId',
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
        {
          path: '/upload-success',
          element: <SuccessUpload />,
        },
        {
          path: '/all-courses',
          element: <AllCourseList />,
        },
        { path: '/*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
