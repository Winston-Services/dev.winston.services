import React from 'react';

import { useRoutes } from 'react-router-dom';

import './index.css';
const UserDashboard = React.lazy(() => import('./UserDashboard'));
const NFTForm = React.lazy(() => import('./components/NFTForm'));
const SelectNft = React.lazy(() => import('./components/SelectNft'));
const PromoteNftForm = React.lazy(() => import('./components/PromoteNftForm'));

function CampaignRouting() {
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
        {
          path: '/user-dashboard/select-nft',
          element: <SelectNft />,
        },
        {
          path: '/user-dashboard/promote-nft-form',
          element: <PromoteNftForm />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default CampaignRouting;
