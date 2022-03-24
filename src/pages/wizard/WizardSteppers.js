import * as React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { useMediaQuery } from '@mui/material';
import {
  Info,
  Memory,
  PlaylistAddCheck,
  Security,
  Settings,
} from '@mui/icons-material';

const ColorLibConnector = styled(StepConnector)(({ theme }) => {
  debugger;
  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 40,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage: theme.palette.winston.reverseMain,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage: theme.palette.winston.reverseMain,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      border: 0,
      backgroundColor: theme.palette.primary.light,
      borderRadius: 1,
    },
  };
});

const ColorLibStepIconRoot = styled('div')(({ ownerState, theme }) => ({
  backgroundColor: theme.palette.primary.light,
  zIndex: 1,
  color: 'white',
  width: 84,
  height: 84,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    background: theme.palette.background.default,
    border: `2px solid ${theme.palette.winston.dark}`,
  }),
  ...(ownerState.completed && {
    backgroundImage: theme.palette.winston.main,
  }),
}));

function ColorLibStepIcon(props) {
  const { active, completed } = props;

  const icons = {
    1: <Memory fontSize="large" />,
    2: <Settings fontSize="large" />,
    3: <PlaylistAddCheck fontSize="large" />,
    4: <Security fontSize="large" />,
    5: <Info fontSize="large" />,
  };
  return (
    <ColorLibStepIconRoot ownerState={{ completed, active }}>
      {icons[String(props.icon)]}
    </ColorLibStepIconRoot>
  );
}

ColorLibStepIcon.propTypes = {
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
        connector={<ColorLibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorLibStepIcon}>
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
