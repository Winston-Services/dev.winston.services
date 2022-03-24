import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StepAlgorithmCoin from './coin/StepAlgorithm';
import Network from './smart-contract/Network';
import StepCoinName from './coin/StepCoinName';
import StepCoinBlockReward from './coin/StepBlockReward';
import StepCoinBlockConfirmation from './coin/StepBlockConfirmation';
import StepLogo from './coin/StepLogo';
import Workshop from './Workshop';
import NoMatch from './../NoMatch';
import { wizardDataSelector, updateWizardData } from './../../store/wizard';
import StepSetting from './smart-contract/StepSetting';
import StepFeature from './smart-contract/StepFeature';
import StepAccessUpgrade from './smart-contract/StepAccessUpgrade';
import StepInfo from './smart-contract/StepInfo';

export default function Wizard() {
  const wizardData = useSelector(wizardDataSelector);
  const dispatch = useDispatch();
  const setWizardData = (data) => {
    dispatch(updateWizardData(data));
  };

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
        {
          path: '/step-setting',
          element: (
            <StepSetting
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-feature',
          element: (
            <StepFeature
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        {
          path: '/step-info',
          element: (
            <StepInfo wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        {
          path: '/step-access-upgrade',
          element: (
            <StepAccessUpgrade
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          ),
        },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  return useRoutes(routes);
}
