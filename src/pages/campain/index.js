import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const UserDashboard = React.lazy(() => import('./UserDashboard'));
const NFTForm = React.lazy(() => import('./components/NFTForm'));

function CampainRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          path: '/user-dashboard',
          element: <UserDashboard />,
        },
        {
          path: '/user-dashboard/nft-form',
          element: <NFTForm />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default CampainRouting;
