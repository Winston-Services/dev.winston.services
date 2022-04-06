import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

import './index.css';

const Academy = React.lazy(() => import('./Academy'));
const AcademyDetails = React.lazy(() => import('./AcademyDetails'));
const Voting = React.lazy(() => import('./Voting'));
const TeacherProfile = React.lazy(() => import('./TeacherProfile'));
const AddCourse = React.lazy(() => import('./AddCourse'));
const UploadVideo = React.lazy(() => import('./UploadVideo'));
const SuccessUpload = React.lazy(() => import('./SuccessUpload'));

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
          path: '/voting',
          element: <Voting />,
        },
        {
          path: '/add-course',
          element: <AddCourse />,
        },
        {
          path: '/add-course/upload-video',
          element: <UploadVideo />,
        },
        {
          path: '/add-course/upload-video/succuss-upload',
          element: <SuccessUpload />,
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
