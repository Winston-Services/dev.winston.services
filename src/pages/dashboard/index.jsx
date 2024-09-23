import React from 'react';

import { useRoutes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./Dashboard.jsx'));
const Wallets = React.lazy(() => import('./Wallets/index.jsx'));
const Settings = React.lazy(() => import('./Settings/index.jsx'));
const Messages = React.lazy(() => import('./Messages/index.jsx'));

export default function DashboardRouting() {
  const routes = [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/wallets/*',
      element: <Wallets />,
    },
    {
      path: '/settings/*',
      element: <Settings />,
    },
    
    {
      path: '/messages/*',
      element: <Messages />,
    },
  ];
  return useRoutes(routes);
}
