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
import SuccessLayout from './layouts/SuccessLayout';
import Certificate from './pages/certificate/Certificate';
import './App.css';

const Dashboard = React.lazy(() => import('./pages/dashboard'));
const Marketplace = React.lazy(() => import('./pages/marketplace'));
const ProductDetails = React.lazy(() =>
  import('./pages/marketplace/ProductDetails')
);
const Transaction = React.lazy(() => import('./pages/marketplace/Transaction'));
const TokenDetails = React.lazy(() =>
  import('./pages/marketplace/TokenDetails')
);
const OwnerTransactions = React.lazy(() =>
  import('./pages/marketplace/OwnerTransactions')
);

const Academy = React.lazy(() => import('./pages/academy'));
const AcademyDetails = React.lazy(() =>
  import('./pages/academy/AcademyDetails')
);
const Voting = React.lazy(() => import('./pages/academy/Voting'));
const TeacherProfile = React.lazy(() =>
  import('./pages/academy/TeacherProfile')
);
const AddCourse = React.lazy(() => import('./pages/academy/AddCourse'));
const UploadVideo = React.lazy(() => import('./pages/academy/UploadVideo'));
const SuccessUpload = React.lazy(() => import('./pages/academy/SuccessUpload'));
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
const Swaping = React.lazy(() => import('./pages/swaping/Swap'));
const SupportedCoins = React.lazy(() => import('./pages/supported-coins'));
const CommunityFunding = React.lazy(() => import('./pages/community-funding'));

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
      element: getRouteWrapper(<SuccessLayout />, false),
      children: [
        {
          path: '/academy/add-course/upload-video/succuss-upload',
          element: getRouteWrapper(<SuccessUpload />, false),
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
          path: '/marketplace',
          element: getRouteWrapper(<Marketplace />, false),
        },
        {
          path: '/marketplace/product-details',
          element: getRouteWrapper(<ProductDetails />, false),
        },
        {
          path: '/marketplace/product-details/transaction',
          element: getRouteWrapper(<Transaction />, false),
        },
        {
          path: '/marketplace/token-details/',
          element: getRouteWrapper(<TokenDetails />, false),
        },
        {
          path: '/marketplace/owner-transactions/',
          element: getRouteWrapper(<OwnerTransactions />, false),
        },
        {
          path: '/academy/',
          element: getRouteWrapper(<Academy />, false),
        },
        {
          path: '/academy/details',
          element: getRouteWrapper(<AcademyDetails />, false),
        },
        {
          path: '/academy/voting',
          element: getRouteWrapper(<Voting />, false),
        },
        {
          path: '/academy/add-course',
          element: getRouteWrapper(<AddCourse />, false),
        },
        {
          path: '/academy/add-course/upload-video',
          element: getRouteWrapper(<UploadVideo />, false),
        },
        {
          path: '/academy/teacher-profile',
          element: getRouteWrapper(<TeacherProfile />, false),
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
          path: '/swaping',
          element: getRouteWrapper(<Swaping />, false),
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
