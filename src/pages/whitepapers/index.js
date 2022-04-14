import React from 'react';

import { useRoutes } from 'react-router-dom';

const WhitePapers = React.lazy(() => import('./WhitePapers'));
const WhitePapersDocument = React.lazy(() => import('./WhitePapersDocument'));

import './index.css';

function WhitePapersRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <WhitePapers />,
        },
        {
          path: '/documents',
          element: <WhitePapersDocument />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default WhitePapersRouting;
