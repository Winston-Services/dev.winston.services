import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const News = React.lazy(() => import('./News'));
const NewsDetails = React.lazy(() => import('./NewsDetails'));
const ReportTheNews = React.lazy(() => import('./ReportTheNews'));
function NewsRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <News />,
        },
        {
          path: '/report-the-news',
          element: <ReportTheNews />,
        },
        {
          path: '/article/*',
          element: <NewsDetails />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default NewsRouting;
