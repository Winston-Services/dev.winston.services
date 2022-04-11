import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';

const CommunityFunding = React.lazy(() =>
  import('./components/CommunityFunding')
);
const ProductCardDetails = React.lazy(() =>
  import('./components/ProductCardDetails')
);

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
          element: <ProductCardDetails />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}
