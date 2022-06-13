import React from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { getRouteWrapper } from '../../getRouteWrapper';


const Dashboard = React.lazy(() => import('./Dashboard'));
function DashboardRouting() {

  const routes = [
    {
      path: '/',
      children: [
        {
          path: '/',
          index: true,
          element: getRouteWrapper(<Dashboard />),
        },
        {
          path: '/admin',
          element: getRouteWrapper(
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={0} sx={{ height: '230px', p: 2.5 }}>
                  <Typography variant="h6">Admin</Typography>
                </Paper>
              </Grid>
            </Grid>),
        },
        {
          path: '/ahwa',
          element: getRouteWrapper(
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={0} sx={{ height: '230px', p: 2.5 }}>
                  <Typography variant="h6">ahwa</Typography>
                </Paper>
              </Grid>
            </Grid>),
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default DashboardRouting;