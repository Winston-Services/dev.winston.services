import React, { useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, useNavigate, Navigate } from 'react-router-dom';

import {
  wizardDataSelector,
  wizardFormDataSelector,
  updateWizardData,
  updateWizardFormData,
} from './../../store/wizard';
import Checkout from './Checkout';
import StepperLayout from './StepperLayout';
const StepAlgorithmCoin = React.lazy(() => import('./coin/StepAlgorithm'));
const StepCoinBlockConfirmation = React.lazy(() =>
  import('./coin/StepBlockConfirmation')
);
const StepCoinBlockReward = React.lazy(() => import('./coin/StepBlockReward'));
const StepCoinName = React.lazy(() => import('./coin/StepCoinName'));
const StepLogo = React.lazy(() => import('./coin/StepLogo'));
const Network = React.lazy(() => import('./smart-contract/Network'));
const StepAccessUpgrade = React.lazy(() =>
  import('./smart-contract/StepAccessUpgrade')
);
const StepFeature = React.lazy(() => import('./smart-contract/StepFeature'));
const StepInfo = React.lazy(() => import('./smart-contract/StepInfo'));
const StepSetting = React.lazy(() => import('./smart-contract/StepSetting'));
const Workshop = React.lazy(() => import('./Workshop'));

const getRouteWrapper = (component) => {
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
      {component}
    </React.Suspense>
  );
};

export default function Wizard() {
  const wizardData = useSelector(wizardDataSelector);
  const wizardFormData = useSelector(wizardFormDataSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setWizardData = (data) => {
    dispatch(updateWizardData(data));
  };
  const setWizardFormData = (data) => {
    dispatch(updateWizardFormData(data));
  };

  useEffect(() => {
    navigate('/wizard');
  }, []);

  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: getRouteWrapper(
            <Workshop wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        {
          path: '/coin',
          element: <StepperLayout />,
          children: [
            {
              index: true,
              element: getRouteWrapper(
                <StepAlgorithmCoin
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/coin/step-name',
              element: getRouteWrapper(
                <StepCoinName
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/coin/step-block-reward',
              element: getRouteWrapper(
                <StepCoinBlockReward
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/coin/step-block-confirmation',
              element: getRouteWrapper(
                <StepCoinBlockConfirmation
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/coin/step-custom-logo',
              element: getRouteWrapper(
                <StepLogo
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
            {
              path: '/coin/checkout',
              element: getRouteWrapper(
                <Checkout
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
          ],
        },
        {
          path: '/smart-contract',
          children: [
            {
              index: true,
              element: getRouteWrapper(
                <Network
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
            {
              path: '/smart-contract/step-setting',
              element: getRouteWrapper(
                <StepSetting
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/smart-contract/step-feature',
              element: getRouteWrapper(
                <StepFeature
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                  wizardFormData={wizardFormData}
                  setWizardFormData={setWizardFormData}
                />
              ),
            },
            {
              path: '/smart-contract/step-info',
              element: getRouteWrapper(
                <StepInfo
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
            {
              path: '/smart-contract/step-access-upgrade',
              element: getRouteWrapper(
                <StepAccessUpgrade
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
            {
              path: '/smart-contract/checkout',
              element: getRouteWrapper(
                <Checkout
                  wizardData={wizardData}
                  setWizardData={setWizardData}
                />
              ),
            },
          ],
        },
        { path: '*', element: <Navigate to={'/'} /> },
      ],
    },
  ];

  return useRoutes(routes);
}
