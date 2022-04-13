import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const News = React.lazy(() => import('./components/News'));
const NewsDetails = React.lazy(() => import('./components/NewsDetails'));

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
          path: '/news-details',
          element: <NewsDetails />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default NewsRouting;
