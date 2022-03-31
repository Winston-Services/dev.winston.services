import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';

import {
  wizardDataSelector,
  wizardFormDataSelector,
  updateWizardData,
  updateWizardFormData,
} from './../../store/wizard';
import NoMatch from './../NoMatch';
import Certificate from './Certificate';
import Checkout from './Checkout';
import StepAlgorithmCoin from './coin/StepAlgorithm';
import StepCoinBlockConfirmation from './coin/StepBlockConfirmation';
import StepCoinBlockReward from './coin/StepBlockReward';
import StepCoinName from './coin/StepCoinName';
import StepLogo from './coin/StepLogo';
import Network from './smart-contract/Network';
import StepAccessUpgrade from './smart-contract/StepAccessUpgrade';
import StepFeature from './smart-contract/StepFeature';
import StepInfo from './smart-contract/StepInfo';
import StepSetting from './smart-contract/StepSetting';
import Workshop from './Workshop';

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
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
            />
          ),
        },
        {
          path: '/step-coin-name',
          element: (
            <StepCoinName
              wizardData={wizardData}
              setWizardData={setWizardData}
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
            />
          ),
        },
        {
          path: '/step-coin-block-reward',
          element: (
            <StepCoinBlockReward
              wizardData={wizardData}
              setWizardData={setWizardData}
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
            />
          ),
        },
        {
          path: '/step-coin-block-confirmation',
          element: (
            <StepCoinBlockConfirmation
              wizardData={wizardData}
              setWizardData={setWizardData}
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
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
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
            />
          ),
        },
        {
          path: '/step-feature',
          element: (
            <StepFeature
              wizardData={wizardData}
              setWizardData={setWizardData}
              wizardFormData={wizardFormData}
              setWizardFormData={setWizardFormData}
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
        {
          path: '/checkout',
          element: (
            <Checkout wizardData={wizardData} setWizardData={setWizardData} />
          ),
        },
        {
          path: '/certificate',
          element: (
            <Certificate
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
