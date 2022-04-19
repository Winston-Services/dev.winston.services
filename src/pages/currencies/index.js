import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

import './index.css';

const Currencies = React.lazy(() => import('./Currencies'));
const UploadCurrency = React.lazy(() => import('./UploadCurrency'));

export default function CurrenciesRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Currencies />,
        },
        {
          path: '/upload-currency',
          element: <UploadCurrency />,
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
