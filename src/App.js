import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import useAuth, { AuthRedirect } from './context/authContext';
import { CircularProgress, Box } from '@mui/material';

import LandingLayout from './layouts/LandingLayout';
import SignInLayout from './layouts/SignInLayout';
import PublicPageLayout from './layouts/PublicPageLayout';
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Marketplace = React.lazy(() => import('./pages/marketplace'));
const ProductDetails = React.lazy(() =>
  import('./pages/marketplace/ProductDetails')
);
const Transaction = React.lazy(() => import('./pages/marketplace/Transaction'));
const SignIn = React.lazy(() => import('./pages/sign-in'));
const SignUp = React.lazy(() => import('./pages/sign-up'));
const Landing = React.lazy(() => import('./pages/landing'));
const WhiteLabelWinston = React.lazy(() =>
  import('./pages/white-label-winston')
);

import './App.css';
export default function App() {
  const auth = useAuth();
  const getRouteWrapper = (component, authRoute = true) => {
    return (
      <AuthRedirect authenticatedRoute={authRoute}>
        <React.Suspense
          fallback={
            <Box
              display="flex"
              justifyContent={'center'}
              alignItems="center"
              height={'100%'}
              minHeight="100vh"
            >
              <CircularProgress />
            </Box>
          }
        >
          {component}
        </React.Suspense>
      </AuthRedirect>
    );
  };
  const routes = [
    {
      path: '/dashboard',
      element: getRouteWrapper(<AuthLayout />),
      children: [
        {
          index: true,
          element: getRouteWrapper(<Dashboard />),
        },
      ],
    },
    {
      path: '/',
      element: getRouteWrapper(<SignInLayout />, false),
      children: [
        {
          path: '/sign-in',
          element: getRouteWrapper(<SignIn />, false),
        },
        {
          path: '/sign-up',
          element: getRouteWrapper(<SignUp />, false),
        },
      ],
    },
    {
      path: '/',
      element: getRouteWrapper(<PublicPageLayout />, false),
      children: [
        {
          path: '/marketplace',
          element: getRouteWrapper(<Marketplace />, false),
        },
        {
          path: '/marketplace/product-details',
          element: getRouteWrapper(<ProductDetails />, false),
        },
        {
          path: '/white-label-winston',
          element: getRouteWrapper(<WhiteLabelWinston />, false),
        },
        {
          path: '/marketplace/product-details/transaction',
          element: getRouteWrapper(<Transaction />, false),
        },
      ],
    },
    {
      path: '/',
      element: getRouteWrapper(<LandingLayout />, false),
      children: [
        {
          index: true,
          element: getRouteWrapper(<Landing />, false),
        },
      ],
    },
    {
      path: '*',
      element: (
        <Navigate to={auth?.authenticated ? '/dashboard' : '/sign-in'} />
      ),
    },
  ];
  return useRoutes(routes);
}
