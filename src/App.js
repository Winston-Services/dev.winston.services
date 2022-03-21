import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import useAuth, { AuthRedirect } from './context/authContext';
import { CircularProgress, Box } from '@mui/material';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Marketplace = React.lazy(() => import('./pages/marketplace'));
const ProductDetails = React.lazy(() =>
  import('./pages/marketplace/ProductDetails')
);
const SignIn = React.lazy(() => import('./pages/sign-in'));
const SignUp = React.lazy(() => import('./pages/sign-up'));
const Landing = React.lazy(() => import('./pages/landing'));
import LandingLayout from './layouts/LandingLayout';
import SignInLayout from './layouts/SignInLayout';
import WhitelabelWinston from './pages/whitelabelWinston/index';
import PublicPageLayout from './layouts/PublicPageLayout';

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
          path: '/whitelabel-winston',
          element: getRouteWrapper(<WhitelabelWinston />, false),
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
        {
          path: '/',
          element: (
            <Navigate to={auth?.authenticated ? '/dashboard' : '/sign-in'} />
          ),
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
