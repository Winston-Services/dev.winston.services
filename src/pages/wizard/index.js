import React from 'react';

import { Box, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, Navigate } from 'react-router-dom';

import {
  wizardDataSelector,
  wizardFormDataSelector,
  updateWizardData,
  updateWizardFormData,
} from './../../store/wizard';
import StepperLayout from './layout/StepperLayout';

const CheckoutSuccess = React.lazy(() => import('./pages/CheckoutSuccess'));
const CoinCheckoutSuccess = React.lazy(() =>
  import('./pages/coin/CheckoutSuccess')
);
const CoinCheckout = React.lazy(() => import('./pages/coin/Checkout'));
const SmartCheckoutSuccess = React.lazy(() =>
  import('./pages/smart-contract/CheckoutSuccess')
);
const SmartCheckout = React.lazy(() =>
  import('./pages/smart-contract/Checkout')
);
const StepAlgorithmCoin = React.lazy(() =>
  import('./pages/coin/StepAlgorithm')
);
const StepCoinBlockConfirmation = React.lazy(() =>
  import('./pages/coin/StepBlockConfirmation')
);
const StepCoinBlockReward = React.lazy(() =>
  import('./pages/coin/StepBlockReward')
);
const StepCoinName = React.lazy(() => import('./pages/coin/StepCoinName'));
const StepLogo = React.lazy(() => import('./pages/coin/StepLogo'));
const Network = React.lazy(() => import('./pages/smart-contract/Network'));
const StepAccessUpgrade = React.lazy(() =>
  import('./pages/smart-contract/StepAccessUpgrade')
);
const StepFeature = React.lazy(() =>
  import('./pages/smart-contract/StepFeature')
);
const StepInfo = React.lazy(() => import('./pages/smart-contract/StepInfo'));
const StepSetting = React.lazy(() =>
  import('./pages/smart-contract/StepSetting')
);
const Workshop = React.lazy(() => import('./pages/Workshop'));

const getRouteWrapper = (component) => {
  const dispatch = useDispatch();
  const wizardData = useSelector(wizardDataSelector);
  const wizardFormData = useSelector(wizardFormDataSelector);
  const setWizardData = (data) => {
    dispatch(updateWizardData(data));
  };
  const setWizardFormData = (data) => {
    dispatch(updateWizardFormData(data));
  };
  return (
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
      {React.cloneElement(component, {
        wizardData,
        wizardFormData,
        setWizardData,
        setWizardFormData,
      })}
    </React.Suspense>
  );
};

export default function Wizard() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/wizard');
  // }, []);

  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: getRouteWrapper(<Workshop />),
        },
        {
          path: '/coin',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: getRouteWrapper(<StepAlgorithmCoin />),
            },
            {
              path: '/coin/step-name',
              element: getRouteWrapper(<StepCoinName />),
            },
            {
              path: '/coin/step-block-reward',
              element: getRouteWrapper(<StepCoinBlockReward />),
            },
            {
              path: '/coin/step-block-confirmation',
              element: getRouteWrapper(<StepCoinBlockConfirmation />),
            },
            {
              path: '/coin/step-custom-logo',
              element: getRouteWrapper(<StepLogo />),
            },
          ],
        },
        {
          path: '/coin/checkout',
          element: getRouteWrapper(<CoinCheckout />),
        },
        {
          path: '/coin/checkout-success',
          element: getRouteWrapper(<CoinCheckoutSuccess />),
        },
        {
          path: '/smart-contract',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: getRouteWrapper(<Network />),
            },
            {
              path: '/smart-contract/step-setting',
              element: getRouteWrapper(<StepSetting />),
            },
            {
              path: '/smart-contract/step-feature',
              element: getRouteWrapper(<StepFeature />),
            },
            {
              path: '/smart-contract/step-info',
              element: getRouteWrapper(<StepInfo />),
            },
            {
              path: '/smart-contract/step-access-upgrade',
              element: getRouteWrapper(<StepAccessUpgrade />),
            },
          ],
        },
        {
          path: '/smart-contract/checkout',
          element: getRouteWrapper(<SmartCheckout />),
        },
        {
          path: '/smart-contract/checkout-success',
          element: getRouteWrapper(<SmartCheckoutSuccess />),
        },
        {
          path: '/custom',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: getRouteWrapper(<StepAlgorithmCoin />),
            },
            {
              path: '/custom/step-name',
              element: getRouteWrapper(<StepCoinName />),
            },
            {
              path: '/custom/step-block-reward',
              element: getRouteWrapper(<StepCoinBlockReward />),
            },
            {
              path: '/custom/step-block-confirmation',
              element: getRouteWrapper(<StepCoinBlockConfirmation />),
            },
            {
              path: '/custom/step-custom-logo',
              element: getRouteWrapper(<StepLogo />),
            },
            {
              path: '/custom/step-smart-contract-network',
              element: getRouteWrapper(<Network />),
            },
            {
              path: '/custom/step-smart-contract-setting',
              element: getRouteWrapper(<StepSetting />),
            },
            {
              path: '/custom/step-smart-contract-feature',
              element: getRouteWrapper(<StepFeature />),
            },
            {
              path: '/custom/step-smart-contract-info',
              element: getRouteWrapper(<StepInfo />),
            },
            {
              path: '/custom/step-smart-contract-access-upgrade',
              element: getRouteWrapper(<StepAccessUpgrade />),
            },
          ],
        },
        {
          path: '/custom/coin-checkout',
          element: getRouteWrapper(<CoinCheckout />),
        },
        {
          path: '/custom/coin-checkout-success',
          element: getRouteWrapper(<CheckoutSuccess coin={true} />),
        },
        {
          path: '/custom/smart-contract-checkout',
          element: getRouteWrapper(<SmartCheckout />),
        },
        {
          path: '/custom/checkout-success',
          element: getRouteWrapper(<CheckoutSuccess />),
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
