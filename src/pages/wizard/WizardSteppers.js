import * as React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import stepperSmartContract from '../../assets/stepperSmartContract.svg';
import stepperInfo from '../../assets/stepperInfo.svg';
import stepperSetting from '../../assets/stepperSetting.svg';
import stepperAccess from '../../assets/stepperAccess.svg';
import stepperFeatures from '../../assets/stepperFeatures.svg';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { useMediaQuery } from '@mui/material';

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 40,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient(146.8deg, #6C73DF -21.41%, #3344D4 57.9%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: '#23B000',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: '#3A2C83',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor: '#3A2C83',
  zIndex: 1,
  color: 'white',
  width: 84,
  height: 84,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(146.8deg, #6C73DF -21.41%, #3344D4 57.9%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    background: '#23B000',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed } = props;

  const icons = {
    1: stepperSmartContract,
    2: stepperSetting,
    3: stepperFeatures,
    4: stepperAccess,
    5: stepperInfo,
  };
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      <img src={icons[String(props.icon)]} alt="icon" />
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function WizardSteppers({ activeStepCount, from = 'other' }) {
  const steps =
    from === 'coin'
      ? [
          'Algorithm',
          'Coin Name',
          'Block  Reward',
          'Block Confirmation',
          'Custom Logo',
        ]
      : [
          'Smart Contract Type',
          'Settings',
          'Features',
          'Access and Upgradeability',
          'Info',
        ];
  const matches = useMediaQuery('(min-width:535px)');
  return (
    <Stack spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStepCount}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              {matches ? label : ''}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

WizardSteppers.propTypes = {
  activeStepCount: PropTypes.element,
  from: PropTypes.element,
};
