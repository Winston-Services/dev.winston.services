import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';

const CommunityFunding = React.lazy(() => import('./CommunityFunding'));
const CommunityCardDetails = React.lazy(() => import('./CommunityCardDetails'));

export default function CommunityFundingRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <CommunityFunding />,
        },
        {
          path: '/community-details',
          element: <CommunityCardDetails />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}
