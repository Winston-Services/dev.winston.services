import React, { useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, Navigate, useNavigate } from 'react-router-dom';

import {
  wizardDataSelector,
  wizardCoinDataSelector,
  wizardSmartContractDataSelector,
  updateWizardData,
  updateWizardCoinData,
  updateWizardSmartContractData,
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

const WizardRoutes = (component) => {
  const dispatch = useDispatch();
  const wizardData = useSelector(wizardDataSelector);
  const wizardCoinData = useSelector(wizardCoinDataSelector);
  const wizardSmartContractData = useSelector(wizardSmartContractDataSelector);
  const setWizardData = (data) => {
    dispatch(updateWizardData(data));
  };
  const setWizardCoinData = (data) => {
    dispatch(updateWizardCoinData(data));
  };
  const setWizardSmartContractData = (data) => {
    dispatch(updateWizardSmartContractData(data));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (wizardData.workshop === '') navigate('/wizard');
  }, [navigate, wizardData.workshop]);

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
        wizardCoinData,
        wizardSmartContractData,
        setWizardData,
        setWizardCoinData,
        setWizardSmartContractData,
      })}
    </React.Suspense>
  );
};

export default function Wizard() {
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: WizardRoutes(<Workshop />),
        },
        {
          path: '/coin',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: WizardRoutes(<StepAlgorithmCoin />),
            },
            {
              path: '/coin/step-name',
              element: WizardRoutes(<StepCoinName />),
            },
            {
              path: '/coin/step-block-reward',
              element: WizardRoutes(<StepCoinBlockReward />),
            },
            {
              path: '/coin/step-block-confirmation',
              element: WizardRoutes(<StepCoinBlockConfirmation />),
            },
            {
              path: '/coin/step-custom-logo',
              element: WizardRoutes(<StepLogo />),
            },
          ],
        },
        {
          path: '/coin/checkout',
          element: WizardRoutes(<CoinCheckout />),
        },
        {
          path: '/coin/checkout-success',
          element: WizardRoutes(<CoinCheckoutSuccess />),
        },
        {
          path: '/smart-contract',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: WizardRoutes(<Network />),
            },
            {
              path: '/smart-contract/step-setting',
              element: WizardRoutes(<StepSetting />),
            },
            {
              path: '/smart-contract/step-feature',
              element: WizardRoutes(<StepFeature />),
            },
            {
              path: '/smart-contract/step-info',
              element: WizardRoutes(<StepInfo />),
            },
            {
              path: '/smart-contract/step-access-upgrade',
              element: WizardRoutes(<StepAccessUpgrade />),
            },
          ],
        },
        {
          path: '/smart-contract/checkout',
          element: WizardRoutes(<SmartCheckout />),
        },
        {
          path: '/smart-contract/checkout-success',
          element: WizardRoutes(<SmartCheckoutSuccess />),
        },
        {
          path: '/custom',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: WizardRoutes(<StepAlgorithmCoin />),
            },
            {
              path: '/custom/step-name',
              element: WizardRoutes(<StepCoinName />),
            },
            {
              path: '/custom/step-block-reward',
              element: WizardRoutes(<StepCoinBlockReward />),
            },
            {
              path: '/custom/step-block-confirmation',
              element: WizardRoutes(<StepCoinBlockConfirmation />),
            },
            {
              path: '/custom/step-custom-logo',
              element: WizardRoutes(<StepLogo />),
            },
            {
              path: '/custom/step-smart-contract-network',
              element: WizardRoutes(<Network />),
            },
            {
              path: '/custom/step-smart-contract-setting',
              element: WizardRoutes(<StepSetting />),
            },
            {
              path: '/custom/step-smart-contract-feature',
              element: WizardRoutes(<StepFeature />),
            },
            {
              path: '/custom/step-smart-contract-info',
              element: WizardRoutes(<StepInfo />),
            },
            {
              path: '/custom/step-smart-contract-access-upgrade',
              element: WizardRoutes(<StepAccessUpgrade />),
            },
          ],
        },
        {
          path: '/custom/coin-checkout',
          element: WizardRoutes(<CoinCheckout />),
        },
        {
          path: '/custom/coin-checkout-success',
          element: WizardRoutes(<CheckoutSuccess coin={true} />),
        },
        {
          path: '/custom/smart-contract-checkout',
          element: WizardRoutes(<SmartCheckout />),
        },
        {
          path: '/custom/checkout-success',
          element: WizardRoutes(<CheckoutSuccess />),
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
