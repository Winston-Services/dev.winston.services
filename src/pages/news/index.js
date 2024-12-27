import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const News = React.lazy(() => import('./News'));
const NewsDetails = React.lazy(() => import('./NewsDetails'));

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
          index: true,
          path: '/article/*',
          element: <NewsDetails />,
        },
        {
          index: true,
          path: '/report-the-news',
          element: <NewsDetails />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default NewsRouting;
