import React from 'react';

import { useRoutes } from 'react-router-dom';

import { getRouteWrapper } from '../../getRouteWrapper';


const Dashboard = React.lazy(() => import('./Dashboard'));
function DashboardRouting() {
  const routes = [
    {
      path: '/',
      children: [
        {
          path: '/dashboard',
          element: getRouteWrapper(<Dashboard />),
        },
        {
          path: '/dashboard/admin/*',
          element: getRouteWrapper(<Dashboard />),
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default DashboardRouting;