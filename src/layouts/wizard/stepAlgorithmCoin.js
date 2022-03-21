import React, { useEffect } from 'react';
import { Paper, Typography, Box, Container, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import WizardSteppers from './WizardSteppers';

// import DropDown from '../common/DropDown';
import ButtonNext from '../common/ButtonNext';
import ButtonPrev from '../common/ButtonPrev';
import { PropTypes } from 'prop-types';

function StepAlgorithmCoin({ wizardData }) {
  // let navigate = useNavigate();

  useEffect(() => {
    if (wizardData.workshop === '') {
      // navigate('/wizard');
    }
  }, []);

  return (
    <div>
      <Container>
        {wizardData.workshop === 'Coin' && (
          <Typography variant="h4">Coin Workshop</Typography>
        )}
        {wizardData.workshop === 'Custom' && (
          <Typography variant="h4" className="colorWhite service-text dFlex">
            <span>1. Coin Workshop</span>
            <span>2. Smart Contract Workshop</span>
          </Typography>
        )}

        <div className="mt50">
          <WizardSteppers activeStepCount={0} from={'coin'} />
        </div>

        <div>
          <Paper>
            <div className="mt26">
              <TextField label={'Email Address'} placeholder={'Email'} />
            </div>
            <div className="mt26">
              <TextField label={'Coin Type'} placeholder={'Paid'} />
            </div>
            <div className="mt26">
              {/* <DropDown
                label={'Coin Algorithm'}
                options={[
                  'Scrpt - proof of work1',
                  'Scrpt - proof of work2',
                  'Scrpt - proof of work3',
                ]}
              /> */}
            </div>
          </Paper>
        </div>
        <Box display="flex" justifyContent="flex-end">
          <ButtonPrev onClick={'/wizard/'} />
          <ButtonNext onClick={'/wizard/step-coin-name'} />
        </Box>
      </Container>
    </div>
  );
}

StepAlgorithmCoin.propTypes = {
  wizardData: PropTypes.element,
  setWizardData: PropTypes.element,
};

export default StepAlgorithmCoin;
