import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import useAuth, { AuthRedirect } from './context/authContext';
import { CircularProgress } from '@mui/material';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Counter = React.lazy(() => import('./pages/Counter'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
import LandingLayout from './layouts/LandingLayout';

export default function App() {
  const auth = useAuth();
  const getRouteWrapper = (component, authRoute = true) => {
    return (
      <AuthRedirect authenticatedRoute={authRoute}>
        <React.Suspense fallback={<CircularProgress />}>
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
        {
          path: '/dashboard/counter',
          element: getRouteWrapper(<Counter />),
        },
      ],
    },
    {
      path: '/',
      element: getRouteWrapper(<LandingLayout />, false),
      children: [
        {
          path: '/login',
          element: getRouteWrapper(<Home />, false),
        },
        {
          path: '/about',
          element: getRouteWrapper(<About />, false),
        },
        {
          path: '/',
          element: (
            <Navigate to={auth?.authenticated ? '/dashboard' : '/login'} />
          ),
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={auth?.authenticated ? '/dashboard' : '/login'} />,
    },
  ];
  return useRoutes(routes);
}
