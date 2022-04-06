import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

import './index.css';

const Marketplace = React.lazy(() => import('./Marketplace'));
const ProductDetails = React.lazy(() => import('./ProductDetails'));
const Transaction = React.lazy(() => import('./Transaction'));
const TokenDetails = React.lazy(() => import('./TokenDetails'));
const OwnerTransactions = React.lazy(() => import('./OwnerTransactions'));

export default function MarketPlaceRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Marketplace />,
        },
        {
          path: '/product-details',
          element: <ProductDetails />,
        },
        {
          path: '/product-details/transaction',
          element: <Transaction />,
        },
        {
          path: '/token-details/',
          element: <TokenDetails />,
        },
        {
          path: '/owner-transactions/',
          element: <OwnerTransactions />,
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
