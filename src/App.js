import * as React from 'react';

import { CircularProgress, Box } from '@mui/material';
import { Navigate, useRoutes } from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top';
import useAuth, { AuthProvider, AuthRedirect } from './context/authContext';
import AuthLayout from './layouts/AuthLayout';
import LandingLayout from './layouts/LandingLayout';
import PlaneLayout from './layouts/PlaneLayout';
import PublicPageLayout from './layouts/PublicPageLayout';
import SignInLayout from './layouts/SignInLayout';
import Certificate from './pages/certificate/Certificate';
import './App.css';

const Dashboard = React.lazy(() => import('./pages/dashboard'));
const MarketplaceRouting = React.lazy(() => import('./pages/marketplace'));
const AcademyRouting = React.lazy(() => import('./pages/academy'));
const UserProfile = React.lazy(() => import('./pages/marketplace/UserProfile'));
const SignIn = React.lazy(() => import('./pages/sign-in'));
const SignUp = React.lazy(() => import('./pages/sign-up'));
const Landing = React.lazy(() => import('./pages/landing'));
const WhiteLabelWinston = React.lazy(() =>
  import('./pages/white-label-winston')
);
const Wizard = React.lazy(() => import('./pages/wizard'));
const Faucet = React.lazy(() => import('./pages/faucet/Faucet'));
const Staking = React.lazy(() => import('./pages/staking/Staking'));
const Swapping = React.lazy(() => import('./pages/swapping'));
const SupportedCoins = React.lazy(() => import('./pages/supported-coins'));
const CommunityDetails = React.lazy(() =>
  import('./pages/community/CommunityDetails.js')
);
const CommunityFunding = React.lazy(() =>
  import('./pages/community/CommunityFunding.js')
);

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
      element: getRouteWrapper(<PlaneLayout />, false),
      children: [
        {
          path: '/certificate',
          element: getRouteWrapper(<Certificate />, false),
        },
      ],
    },
    {
      path: '/',
      element: getRouteWrapper(<PublicPageLayout />, false),
      children: [
        {
          path: '/marketplace/*',
          element: getRouteWrapper(<MarketplaceRouting />, false),
        },
        {
          path: '/academy/*',
          element: getRouteWrapper(<AcademyRouting />, false),
        },
        {
          path: '/user-profile',
          element: getRouteWrapper(<UserProfile />, false),
        },
        {
          path: '/white-label-winston',
          element: getRouteWrapper(<WhiteLabelWinston />, false),
        },
        {
          path: '/faucet',
          element: getRouteWrapper(<Faucet />, false),
        },
        {
          path: '/staking',
          element: getRouteWrapper(<Staking />, false),
        },
        {
          path: '/swapping',
          element: getRouteWrapper(<Swapping />, false),
        },
        {
          path: '/supported-coins',
          element: getRouteWrapper(<SupportedCoins />, false),
        },
        {
          path: '/wizard/*',
          element: getRouteWrapper(<Wizard />, false),
        },
        {
          path: '/community-funding',
          element: getRouteWrapper(<CommunityFunding />, false),
        },
        {
          path: '/community-details',
          element: getRouteWrapper(<CommunityDetails />, false),
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
        <Navigate to={auth?.authenticated ? './dashboard' : './sign-in'} />
      ),
    },
  ];
  return (
    <AuthProvider>
      <>
        <ScrollToTop />
        {useRoutes(routes)}
      </>
    </AuthProvider>
  );
}
