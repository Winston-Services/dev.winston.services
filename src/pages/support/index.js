import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

const Support = React.lazy(() => import('./Support'));
const GettingStarted = React.lazy(() => import('./GettingStarted'));
const AccountFunctions = React.lazy(() => import('./AccountFunctions'));

export default function SupportRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Support />,
        },
        {
          path: '/getting-started',
          element: <GettingStarted />,
        },
        {
          path: '/account-functions',
          element: <AccountFunctions />,
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
