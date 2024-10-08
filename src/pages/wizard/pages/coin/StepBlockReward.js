import React from 'react';

import { Grid, Card, Button, Paper, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import CheckBox from './../../../../components/common/CheckBox';
import DropDown from './../../../../components/common/DropDown';
import TextField from './../../../../components/common/TextField';
function StepCoinBlockReward({ wizardCoinData, setWizardCoinData }) {
  const { previous, next } = useOutletContext();

  const superBlockCal = (
    (parseInt(wizardCoinData.blockReward) *
      parseInt(wizardCoinData.superblockReward)) /
    100
  ).toFixed(8);

  const masternodeCal = (
    (superBlockCal * parseInt(wizardCoinData.masternodeReward)) /
    100
  ).toFixed(8);

  const blockCal = (superBlockCal - masternodeCal).toFixed(8);

  const budgetCal =
    (parseInt(wizardCoinData.blockRewardPos).toFixed(8) / 100) *
    wizardCoinData.superblockReward *
    288 *
    30;

  const handleSubmit = ({
    lastPowBlock,
    blockRewardPos,
    superblockReward,
    masternodeReward,
  }) => {
    setWizardCoinData({
      lastPowBlock,
      blockRewardPos,
      superblockReward,
      masternodeReward,
    });
    next();
  };

  const FORM_VALIDATION = Yup.object().shape({
    lastPowBlock:
      [
        'Scrypt- Proof of Work and Proof of Stack',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Last PoW block” value cannot be empty.')
        .min(
          1000,
          'The “Last PoW block” value must be a number between 1000 and 100000000.'
        )
        .max(
          100000000,
          'The “Last PoW block” value must be a number between 1000 and 100000000.'
        ),
    blockReward: Yup.number()
      .required('The “Block reward” value cannot be empty.')
      .min(1, 'The “Block reward” value must be a number between 1 and 10000.')
      .max(
        10000,
        'The “Block reward” value must be a number between 1 and 10000.'
      ),
    blockRewardPos:
      [
        'Scrypt- Proof of Work and Proof of Stack',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Block reward (PoS)” value cannot be empty.')
        .min(
          1,
          'The “Block reward (PoS)” value must be a number between 1 and 10000.'
        )
        .max(
          10000,
          'The “Block reward (PoS)” value must be a number between 1 and 10000.'
        ),
    superblockReward:
      [
        'X11 - Proof of Work + Masternode',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Superblock reward” value cannot be empty.')
        .min(
          1,
          'The “Superblock reward” value must be a number between 1 and 99.'
        )
        .max(
          99,
          'The “Superblock reward” value must be a number between 1 and 99.'
        ),
    masternodeReward:
      [
        'X11 - Proof of Work + Masternode',
        'Proof of Work and Proof of Stake + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Masternode reward” value cannot be empty.')
        .min(
          1,
          'The “Masternode reward” value must be a number between 1 and 99.'
        )
        .max(
          99,
          'The “Masternode reward” value must be a number between 1 and 99.'
        ),
    blockHalving:
      [
        'Script - Proof of Work',
        'SHA-256 - Proof of Work',
        'X11 - Proof of Work + Masternode',
      ].includes(wizardCoinData.coinAlgorithm) &&
      Yup.number()
        .required('The “Block halving” value cannot be empty.')
        .min(
          10,
          'The “Block halving” value must be a number between 10 and 4000000.'
        )
        .max(
          4000000,
          'The “Block halving” value must be a number between 10 and 4000000.'
        ),
    coinSupplyWithoutPremine: Yup.number()
      .required('The “Coin supply” value cannot be empty.')
      .min(
        10,
        'The “Coin supply” value must be a number between 10 and 9999999999.'
      )
      .max(
        9999999999,
        'The “Coin supply” value must be a number between 10 and 9999999999.'
      ),
    premineAmount: Yup.number()
      .required('The “Premine amount” value cannot be empty.')
      .min(
        0,
        'The “Premine amount” value must be a number between 1 and 9999999999.'
      )
      .max(
        9999999999,
        'The “Premine amount” value must be a number between 1 and 9999999999.'
      ),
  });

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardCoinData }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Card sx={{ p: { xs: 2.5, sm: 4, md: 5, lg: 6 } }} elevation={0}>
            <Grid display={'flex'} flexDirection="column" gap={3}>
              {[
                'Scrypt- Proof of Work and Proof of Stack',
                'Proof of Work and Proof of Stake + Masternode',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <TextField
                  name="lastPowBlock"
                  label={'Last PoW block'}
                  placeholder={'1000'}
                  helperText="Last block height that can be mined with Proof of Work."
                  autoComplete="off"
                  onChange={(value) =>
                    setWizardCoinData({
                      lastPowBlock: parseInt(value),
                      coinSupplyWithoutPremine:
                        wizardCoinData.fullPremine === true
                          ? 0
                          : value * wizardCoinData.blockReward,
                      coinSupplyWithPremine:
                        wizardCoinData.fullPremine === true
                          ? wizardCoinData.premineAmount
                          : value * wizardCoinData.blockReward,
                    })
                  }
                />
              )}

              <TextField
                disabled={wizardCoinData.fullPremine}
                name="blockReward"
                label={'Block reward'}
                placeholder={'50'}
                helperText="Number of coins received for mining a block with Proof of Work."
                autoComplete="off"
                onChange={(value) =>
                  setWizardCoinData({
                    blockReward: parseInt(value),
                    coinSupplyWithoutPremine:
                      wizardCoinData.coinAlgorithm ===
                        'Scrypt- Proof of Work and Proof of Stack' ||
                      wizardCoinData.coinAlgorithm ===
                        'Proof of Work and Proof of Stake + Masternode'
                        ? value * wizardCoinData.lastPowBlock
                        : value * wizardCoinData.blockHalving * 2,
                    coinSupplyWithPremine:
                      wizardCoinData.coinAlgorithm ===
                        'Scrypt- Proof of Work and Proof of Stack' ||
                      wizardCoinData.coinAlgorithm ===
                        'Proof of Work and Proof of Stake + Masternode'
                        ? value * wizardCoinData.lastPowBlock
                        : value * wizardCoinData.blockHalving * 2,
                  })
                }
              />
              {[
                'Scrypt- Proof of Work and Proof of Stack',
                'Proof of Work and Proof of Stake + Masternode',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <TextField
                  name="blockRewardPos"
                  label={'Block reward (PoS)'}
                  placeholder={'5'}
                  helperText="Number of coins received for mining a block with Proof of Stake."
                  autoComplete="off"
                  onChange={(value) => {
                    setWizardCoinData({
                      blockRewardPos: value,
                    });
                  }}
                />
              )}
              {[
                'X11 - Proof of Work + Masternode',
                'Proof of Work and Proof of Stake + Masternode',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <>
                  <TextField
                    name="superblockReward"
                    label={'Superblock reward (%)'}
                    placeholder={'10'}
                    helperText="Percentage of the block reward reserved for decentralized governance budget."
                    autoComplete="off"
                    onChange={(value) => {
                      setWizardCoinData({
                        superblockReward: value,
                      });
                    }}
                  />
                  {wizardCoinData.coinAlgorithm ===
                  'Proof of Work and Proof of Stake + Masternode' ? (
                    <Paper
                      elevation={0}
                      sx={{ padding: '20px', backgroundColor: '#4F409A' }}
                    >
                      <Typography>
                        <strong>Governance budget structure</strong>
                      </Typography>
                      <Typography>
                        Estimated amount of blocks per day: <strong>288</strong>
                      </Typography>
                      <Typography>
                        Governance budget per month: ((
                        <strong>
                          {' '}
                          {parseInt(wizardCoinData.blockRewardPos).toFixed(
                            8
                          )}{' '}
                        </strong>
                        / 100) *{' '}
                        <strong>{wizardCoinData.superblockReward}</strong>) *
                        <strong>288</strong> * 30 =
                        <strong>{budgetCal.toFixed(8)}</strong>
                      </Typography>
                    </Paper>
                  ) : (
                    <></>
                  )}
                  <TextField
                    name="masternodeReward"
                    label={'Masternode reward (%)'}
                    placeholder={'50'}
                    helperText="Percentage of the block reward."
                    autoComplete="off"
                    onChange={(value) => {
                      setWizardCoinData({
                        masternodeReward: value,
                      });
                    }}
                  />
                  {wizardCoinData.coinAlgorithm ===
                  'X11 - Proof of Work + Masternode' ? (
                    <Paper
                      elevation={0}
                      sx={{ padding: '20px', backgroundColor: '#4F409A' }}
                    >
                      <Typography>
                        <strong>Block reward structure</strong>
                      </Typography>
                      <Typography>
                        Superblock reward: <strong>{superBlockCal}</strong>,
                        masternode reward:
                        <strong>{masternodeCal}</strong>, block reward:{' '}
                        <strong>{blockCal}</strong>
                      </Typography>
                    </Paper>
                  ) : (
                    <></>
                  )}
                  {wizardCoinData.coinAlgorithm ===
                  'Proof of Work and Proof of Stake + Masternode' ? (
                    <Paper
                      elevation={0}
                      sx={{ padding: '20px', backgroundColor: '#4F409A' }}
                    >
                      <Typography>
                        <strong>Block reward structure</strong>
                      </Typography>
                      <Typography>
                        Proof-of-Work phase: Masternode reward:{' '}
                        <strong>
                          {' '}
                          {(
                            (wizardCoinData.blockReward / 100) *
                            wizardCoinData.masternodeReward
                          ).toFixed(8)}
                        </strong>
                        , block reward:{' '}
                        <strong>
                          {' '}
                          {(
                            (wizardCoinData.blockReward / 100) *
                            (100 - wizardCoinData.masternodeReward)
                          ).toFixed(8)}
                        </strong>
                      </Typography>
                      <Typography>
                        Proof-of-Stake phase: Masternode reward:{' '}
                        <strong>
                          {' '}
                          {(
                            (wizardCoinData.blockRewardPos / 100) *
                            wizardCoinData.masternodeReward
                          ).toFixed(8)}
                        </strong>
                        , block reward:{' '}
                        <strong>
                          {' '}
                          {(
                            (wizardCoinData.blockRewardPos / 100) *
                            (100 - wizardCoinData.masternodeReward)
                          ).toFixed(8)}
                        </strong>
                      </Typography>
                    </Paper>
                  ) : (
                    <></>
                  )}
                </>
              )}

              {[
                'Script - Proof of Work',
                'SHA-256 - Proof of Work',
                'X11 - Proof of Work + Masternode',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <TextField
                  disabled={wizardCoinData.fullPremine}
                  name="blockHalving"
                  label={'Block halving'}
                  placeholder={'210000'}
                  helperText="Block halving splits the block reward in half."
                  autoComplete="off"
                  onChange={(value) =>
                    setWizardCoinData({
                      blockHalving: value,
                      coinSupplyWithoutPremine:
                        value * wizardCoinData.blockReward * 2,
                      coinSupplyWithPremine:
                        value * wizardCoinData.blockReward * 2 +
                        parseInt(wizardCoinData.premineAmount),
                    })
                  }
                />
              )}
              <TextField
                disabled={!wizardCoinData.fullPremine}
                name="coinSupplyWithoutPremine"
                label={'Coin Supply without premine'}
                placeholder={'21000000'}
                helperText="Total number of coins your coin will create."
                autoComplete="off"
                onChange={(value) =>
                  setWizardCoinData({
                    coinSupplyWithoutPremine: value,
                    premineAmount: value,
                    coinSupplyWithPremine: value,
                  })
                }
                value={wizardCoinData.coinSupplyWithoutPremine}
              />
              <DropDown
                disabled={wizardCoinData.fullPremine}
                name="premine"
                label={'Premine'}
                options={['Yes', 'No']}
                helperText="Premine"
                onChange={(value) =>
                  setWizardCoinData({
                    premine: value,
                    coinSupplyWithPremine:
                      value === 'Yes'
                        ? parseInt(wizardCoinData.premineAmount) +
                          parseInt(wizardCoinData.coinSupplyWithoutPremine)
                        : wizardCoinData.coinSupplyWithoutPremine,
                  })
                }
              />
              {[
                'Script - Proof of Work',
                'Scrypt- Proof of Work and Proof of Stack',
                'SHA-256 - Proof of Work',
              ].includes(wizardCoinData.coinAlgorithm) && (
                <CheckBox
                  disabled={wizardCoinData.premine === 'No' ? true : false}
                  name="fullPremine"
                  label={'100% premine'}
                  onChange={(value) =>
                    setWizardCoinData({
                      fullPremine: value,
                      premineAmount: wizardCoinData.coinSupplyWithoutPremine,
                      coinSupplyWithPremine: value
                        ? wizardCoinData.coinSupplyWithoutPremine
                        : parseInt(wizardCoinData.coinSupplyWithoutPremine) +
                          parseInt(wizardCoinData.premineAmount),
                      coinSupplyWithoutPremine:
                        wizardCoinData.coinAlgorithm ===
                          'Script - Proof of Work' ||
                        wizardCoinData.coinAlgorithm ===
                          'SHA-256 - Proof of Work'
                          ? wizardCoinData.blockReward *
                            wizardCoinData.blockHalving *
                            2
                          : wizardCoinData.lastPowBlock *
                            wizardCoinData.blockReward,
                    })
                  }
                  helperText="Your total coin supply is available after the mining of
                      block #1."
                />
              )}
              <TextField
                disabled={
                  wizardCoinData.fullPremine || wizardCoinData.premine === 'No'
                    ? true
                    : false
                }
                name="premineAmount"
                label={'Premine amount'}
                placeholder={'0'}
                helperText="Number of coins that is available after the mining of block #1."
                autoComplete="off"
                value={wizardCoinData.premineAmount}
                onChange={(value) =>
                  setWizardCoinData({
                    premineAmount: value,
                    coinSupplyWithPremine:
                      parseInt(value) +
                      parseInt(wizardCoinData.coinSupplyWithoutPremine),
                  })
                }
              />
              <TextField
                disabled
                name="coinSupplyWithPremine"
                label={'Coin supply with premine'}
                placeholder={'21000000'}
                helperText="Total number of coins your coin will create."
                autoComplete="off"
                value={wizardCoinData.coinSupplyWithPremine}
              />
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={previous}
              onChange={() => {
                setWizardCoinData({ fullPremine: false });
              }}
              sx={{ width: { xs: '50%', sm: 'auto' } }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: { xs: '50%', sm: 'auto' } }}
            >
              Next
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}
StepCoinBlockReward.propTypes = {
  wizardData: PropTypes.object,
  wizardCoinData: PropTypes.object,
  setWizardCoinData: PropTypes.func,
};
export default StepCoinBlockReward;
