import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WizardSteppers from './WizardSteppers';
import DropDown from '../../components/common/DropDown';
import ButtonNext from '../../components/common/ButtonNext';
import ButtonPrev from '../../components/common/ButtonPrev';
import { Grid, Paper, Typography, Container, TextField } from '@mui/material';
import { PropTypes } from 'prop-types';

function StepCoinName({ wizardData }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (wizardData.workshop === '') {
      navigate('/wizard');
    }
  }, []);

  return (
    <Container>
      {wizardData.workshop === 'Coin' && (
        <Typography variant="h4">Coin Workshop</Typography>
      )}
      {wizardData.workshop === 'Custom' && (
        <Typography variant="h4">
          <span>1. Coin Workshop</span>
          <span>2. Smart Contract Workshop</span>
        </Typography>
      )}
      <Grid className="mt50">
        <WizardSteppers activeStepCount={1} from={'coin'} />
      </Grid>
      <Grid>
        <Paper>
          <Grid>
            <TextField
              label={'Coin name'}
              placeholder={'Bitcoin (Name of your coin.)'}
            />
          </Grid>
          <Grid>
            <TextField
              label={'Coin abbreviation'}
              placeholder={'BTC Abbreviation for your coin.'}
            />
          </Grid>
          <Grid>
            <DropDown
              label={'Address letter'}
              options={[1, 2, 3]}
              placeholder={'Starting letter for your public address.'}
            />
          </Grid>
          <Grid>
            <DropDown
              label={'Address letter testnet'}
              options={['A', 'B', 'C']}
              placeholder={'Starting letter for your public address.'}
            />
          </Grid>

          <Grid>
            <TextField
              label={'Coin unit'}
              placeholder={'Satoshi (Name of the smallest unit for your coin.)'}
            />
          </Grid>
          <Grid>
            <TextField
              label={'TimeStamp'}
              placeholder={
                'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks (Unique sentence that is stored inside your genesis block.)'
              }
            />
          </Grid>
          <Grid>
            <TextField
              label={'Website URL'}
              placeholder={
                'https://bitcoin.org (URL in about dialog of your coin that points to your website.)'
              }
            />
          </Grid>
          <Grid>
            <TextField
              label={'Github URL'}
              placeholder={
                'https://github.com/bitcoin/bitcoin (URL in about dialog of your coin that points to the GitHub page of your coin.)'
              }
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid
        container
        spacing={2}
        mt={4}
        display="flex"
        justifyContent="flex-end"
      >
        <Grid item>
          <ButtonPrev onClick={'/wizard/'} />
        </Grid>
        <Grid item>
          <ButtonNext onClick={'/wizard/step-coin-name'} />
        </Grid>
      </Grid>
    </Container>
  );
}

StepCoinName.propTypes = {
  wizardData: PropTypes.element,
};

export default StepCoinName;
