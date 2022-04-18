import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

const Currencies = React.lazy(() => import('./Currencies'));

export default function CurrenciesRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Currencies />,
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
