import React from 'react';

import StepAlgorithmCoin from './coin/StepAlgorithm';

import Network from './smart-contract/Network';
import StepCoinName from './coin/StepCoinName';
import StepCoinBlockReward from './coin/StepBlockReward';
import StepCoinBlockConfirmation from './coin/StepBlockConfirmation';
import StepLogo from './coin/StepLogo';
import useWizardHook from './UseWizardHook';
import Workshop from './Workshop';
import NoMatch from './../NoMatch';
import { useRoutes } from 'react-router-dom';
export default function Wizard() {
  const [wizardData, setWizardData] = useWizardHook();
  const routes = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: (
            <Workshop wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        {
          path: '/step-coin-algorithm',
          element: (
            <StepAlgorithmCoin
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-coin-name',
          element: (
            <StepCoinName
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-coin-block-reward',
          element: (
            <StepCoinBlockReward
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-coin-block-confirmation',
          element: (
            <StepCoinBlockConfirmation
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-coin-custom-logo',
          element: (
            <StepLogo wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        {
          path: '/network',
          element: (
            <Network wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  return useRoutes(routes);
}
