import React from 'react';

import { useRoutes } from 'react-router-dom';

const UserProfile = React.lazy(() => import('./UserProfile'));
const ConnectWallet = React.lazy(() =>
  import('./../marketplace/ConnectWallet')
);
const UploadNFT = React.lazy(() => import('./../marketplace/UploadNFT'));
const NFTCreated = React.lazy(() =>
  import('./../marketplace/components/NFTCreated')
);

function UserProfileRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <UserProfile />,
        },
        {
          path: '/connect-your-wallet',
          element: <ConnectWallet />,
        },
        {
          path: '/upload-nft',
          element: <UploadNFT />,
        },
        {
          path: '/upload-nft/nft-created',
          element: <NFTCreated />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default UserProfileRouting;
