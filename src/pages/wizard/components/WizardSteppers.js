import * as React from 'react';

import { useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
export default function WizardSteppers({ activeStepCount = 2, steps }) {
  const matches = useMediaQuery('(min-width:535px)');
  const matches2 = useMediaQuery('(min-width:400px)');

  const ColorLibStepIconRoot = styled('div')(({ ownerState, theme }) => ({
    backgroundColor: theme.palette.primary.light,
    zIndex: 1,
    color: 'white',
    width: matches ? 84 : matches2 ? 60 : 40,
    height: matches ? 84 : matches2 ? 60 : 40,
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

  const ColorLibConnector = styled(StepConnector)(({ theme }) => {
    return {
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: matches ? 40 : matches2 ? 30 : 20,
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

  return (
    <Stack spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStepCount}
        connector={<ColorLibConnector />}
      >
        {steps.map((stepObj) => (
          <Step key={stepObj.title}>
            <StepLabel
              StepIconComponent={({ completed, active }) => (
                <ColorLibStepIconRoot
                  ownerState={{ completed, active }}
                  sx={{ p: 2 }}
                >
                  <stepObj.icon fontSize={matches2 ? 'large' : 'medium'} />
                </ColorLibStepIconRoot>
              )}
            >
              {matches ? stepObj.title : ''}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

WizardSteppers.propTypes = {
  from: PropTypes.string,
  steps: PropTypes.array,
  activeStepCount: PropTypes.number,
};
