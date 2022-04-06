import React, { useState, useEffect } from 'react';

import {
  Info,
  Memory,
  PlaylistAddCheck,
  Security,
  Settings,
} from '@mui/icons-material';
import { styled, Container, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { wizardDataSelector } from '../../../store/wizard';
import WizardSteppers from '../components/WizardSteppers';

const StylesTypography = styled(Typography)(({ className, theme }) => ({
  opacity: '0.5',
  ...(className.indexOf('active') > -1 && {
    opacity: '1',
    borderBottom: 'solid',
    borderImageSlice: 1,
    borderImageSource: theme.palette.winston.main,
  }),
}));

const AllSteps = [
  {
    title: 'Algorithm',
    type: 'coin',
    icon: <Memory fontSize="large" />,
    current: ['/wizard/coin', '/wizard/custom'],
  },
  {
    title: 'Coin Name',
    type: 'coin',
    icon: <Settings fontSize="large" />,
    current: ['/wizard/coin/step-name', '/wizard/custom/step-name'],
  },
  {
    title: 'Block Reward',
    type: 'coin',
    icon: <PlaylistAddCheck fontSize="large" />,
    current: [
      '/wizard/coin/step-block-reward',
      '/wizard/custom/step-block-reward',
    ],
  },
  {
    title: 'Block Confirmation',
    type: 'coin',
    icon: <Security fontSize="large" />,
    current: [
      '/wizard/coin/step-block-confirmation',
      '/wizard/custom/step-block-confirmation',
    ],
  },
  {
    title: 'Custom Logo',
    type: 'coin',
    icon: <Info fontSize="large" />,
    current: [
      '/wizard/coin/step-custom-logo',
      '/wizard/custom/step-custom-logo',
    ],
  },
  {
    title: 'Smart Contract Type',
    type: 'smart-contract',
    icon: <Memory fontSize="large" />,
    current: [
      '/wizard/smart-contract',
      '/wizard/custom/step-smart-contract-network',
    ],
  },
  {
    title: 'Settings',
    type: 'smart-contract',
    icon: <Settings fontSize="large" />,

    current: [
      '/wizard/smart-contract/step-setting',
      '/wizard/custom/step-smart-contract-setting',
    ],
  },
  {
    title: 'Features',
    type: 'smart-contract',
    icon: <PlaylistAddCheck fontSize="large" />,
    current: [
      '/wizard/smart-contract/step-feature',
      '/wizard/custom/step-smart-contract-feature',
    ],
  },
  {
    title: 'Access and Upgradeability',
    type: 'smart-contract',
    icon: <Security fontSize="large" />,
    current: [
      '/wizard/smart-contract/step-access-upgrade',
      '/wizard/custom/step-smart-contract-access-upgrade',
    ],
  },
  {
    title: 'Info',
    type: 'smart-contract',
    icon: <Info fontSize="large" />,
    current: [
      '/wizard/smart-contract/step-info',
      '/wizard/custom/step-smart-contract-info',
    ],
  },
];

export default function StepperLayout() {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isSmartContract, setIsSmartContract] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const wizardData = useSelector(wizardDataSelector);
  const isCustomWizard = location.pathname.indexOf('/wizard/custom') > -1;
  const isCoinWizard = location.pathname.indexOf('/wizard/coin') > -1;
  const isSmartContractWizard =
    location.pathname.indexOf('/wizard/smart-contract') > -1;
  useEffect(() => {
    if ((wizardData.workshop, location.pathname)) {
      const isSmartContract = location.pathname.indexOf('smart-contract') > -1;
      setIsSmartContract(isSmartContract);
      const filterSteps = AllSteps.filter((step) =>
        isSmartContract ? step.type === 'smart-contract' : step.type === 'coin'
      );
      setSteps(filterSteps);
      setCurrentStep(
        filterSteps.findIndex(
          (step) => step.current.indexOf(location.pathname) > -1
        )
      );
      setActiveStepIndex(
        AllSteps.findIndex(
          (step) => step.current.indexOf(location.pathname) > -1
        )
      );
    }
  }, [wizardData.workshop, location.pathname, isSmartContract]);

  const next = () => {
    if (isCustomWizard && activeStepIndex === AllSteps.length - 1) {
      return navigate('/wizard/custom/coin-checkout');
    }
    if (isCoinWizard && currentStep === steps.length - 1) {
      return navigate('/wizard/coin/checkout');
    }
    if (isSmartContractWizard && currentStep === steps.length - 1) {
      return navigate('/wizard/smart-contract/checkout');
    }
    navigate(AllSteps[activeStepIndex + 1].current[isCustomWizard ? 1 : 0]);
  };
  const previous = () => {
    if (activeStepIndex === 0 || (!isCustomWizard && currentStep === 0)) {
      return navigate('/wizard');
    }

    navigate(AllSteps[activeStepIndex - 1].current[isCustomWizard ? 1 : 0]);
  };
  return (
    <Container>
      {isSmartContractWizard && (
        <Grid item sm={12} xs={12} lg={12} md={12}>
          <Typography variant="h3">Smart Contract Workshop</Typography>
        </Grid>
      )}
      {isCoinWizard && <Typography variant="h3">Coin Workshop</Typography>}
      {isCustomWizard && (
        <Grid container spacing={8}>
          <Grid item>
            <StylesTypography
              className={!isSmartContract ? 'active' : ''}
              variant="h3"
            >
              1. Coin Workshop
            </StylesTypography>
          </Grid>
          <Grid item>
            <StylesTypography
              className={isSmartContract ? 'active' : ''}
              variant="h3"
            >
              2. Smart Contract Workshop
            </StylesTypography>
          </Grid>
        </Grid>
      )}

      <Grid container>
        <Grid item mt={6} mb={6} xs={12}>
          <WizardSteppers steps={steps} activeStepCount={currentStep} />
        </Grid>
        <Outlet context={{ next, previous }}></Outlet>
      </Grid>
    </Container>
  );
}
