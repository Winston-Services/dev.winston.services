import * as React from 'react';

import { CircularProgress, Box } from '@mui/material';
import { Navigate, useRoutes } from 'react-router-dom';

import ScrollToTop from './components/scroll-to-top';
import useAuth, { AuthProvider, AuthRedirect } from './context/authContext';
import './App.css';

const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'));
const LandingLayout = React.lazy(() => import('./layouts/LandingLayout'));
const PlaneLayout = React.lazy(() => import('./layouts/PlaneLayout'));
const PublicPageLayout = React.lazy(() => import('./layouts/PublicPageLayout'));
const SignInLayout = React.lazy(() => import('./layouts/SignInLayout'));
const Certificate = React.lazy(() => import('./pages/certificate/Certificate'));
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
const Team = React.lazy(() => import('./pages/team'));
const Investors = React.lazy(() => import('./pages/investors'));

const ContactUs = React.lazy(() => import('./pages/contact-us'));
const FeedbackRouting = React.lazy(() => import('./pages/feedback'));
const NewsRouting = React.lazy(() => import('./pages/news/index'));
const NetworkStatus = React.lazy(() => import('./pages/network-status/index'));
const Developers = React.lazy(() => import('./pages/developers/index'));
const CommunityFundingRouting = React.lazy(() => import('./pages/community'));
const SupportRouting = React.lazy(() => import('./pages/support'));
const Assets = React.lazy(() => import('./pages/assets'));
const WhitePapersRouting = React.lazy(() =>
  import('./pages/whitepapers/index')
);
const Wiki = React.lazy(() => import('./pages/wiki/index'));

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
              minHeight="100%"
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
          path: '/our-team',
          element: getRouteWrapper(<Team />, false),
        },
        {
          path: '/our-investors',
          element: getRouteWrapper(<Investors />, false),
        },
        {
          path: '/wizard/*',
          element: getRouteWrapper(<Wizard />, false),
        },
        {
          path: '/community-funding/*',
          element: getRouteWrapper(<CommunityFundingRouting />, false),
        },
        {
          path: '/support/*',
          element: getRouteWrapper(<SupportRouting />, false),
        },
        {
          path: '/contact-us',
          element: getRouteWrapper(<ContactUs />, false),
        },
        {
          path: '/assets',
          element: getRouteWrapper(<Assets />, false),
        },
        {
          path: '/feedback/*',
          element: getRouteWrapper(<FeedbackRouting />, false),
        },
        {
          path: '/news/*',
          element: getRouteWrapper(<NewsRouting />, false),
        },
        {
          path: '/network-status',
          element: getRouteWrapper(<NetworkStatus />, false),
        },
        {
          path: '/developers',
          element: getRouteWrapper(<Developers />, false),
        },
        {
          path: '/whitepapers/*',
          element: getRouteWrapper(<WhitePapersRouting />, false),
        },
        {
          path: '/wiki',
          element: getRouteWrapper(<Wiki />, false),
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
