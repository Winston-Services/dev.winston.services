import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const PublicNotice = React.lazy(() => import('./PublicNotice'));
const PublicNoticeDetails = React.lazy(() => import('./PublicNoticeDetails'));

function PublicNoticeRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <PublicNotice />,
        },
        {
          index: true,
          path: '/proposal/*',
          element: <PublicNoticeDetails />,
        },
        {
          index: true,
          path: '/create-proposal',
          element: <PublicNoticeDetails />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default PublicNoticeRouting;
