import React from 'react';

import HelpIcon from '@mui/icons-material/Help';
import {
  Typography,
  FormGroup,
  Grid,
  Button,
  Card,
  ListItem,
  ListItemAvatar,
  Divider,
  Tooltip,
  IconButton,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';

import ethereumBlue from './../../../../assets/ethereum_blue.svg';
import CheckBox from './../../../../components/common/CheckBox';

const data = {
  20: [
    {
      name: 'mintable',
      label: 'Mintable',
      tooltip: 'Privileged accounts will be able to create more supply.',
    },
    {
      name: 'burnable',
      label: 'Burnable',
      tooltip: 'Token holders will be able to destroy their tokens.',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      tooltip:
        'Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response.',
    },
    {
      name: 'premit',
      label: 'Premit',
      tooltip:
        'Without paying gas, token holders will be able to allow third parties to transfer from their account.',
    },
    {
      name: 'votes',
      label: 'Votes',
      tooltip:
        // eslint-disable-next-line quotes
        "Keeps track of historical balances for voting in on-chain governance, with a way to delegate one's voting power to a trusted account.",
    },
    {
      name: 'flashMinting',
      label: 'Flash Minting',
      tooltip:
        // eslint-disable-next-line quotes
        "Built-in flash loans. Lend tokens without requiring collateral as long as they're returned in the same transaction.",
    },
    {
      name: 'snapshots',
      label: 'Snapshots',
      tooltip:
        'Privileged accounts will be able to store snapshots of balances that can be retrieved later. For on-chain voting, the Votes option is preferable.',
    },
  ],
  721: [
    {
      name: 'mintable',
      label: 'Mintable',
      tooltip: 'Privileged accounts will be able to create more supply.',
    },
    {
      name: 'burnable',
      label: 'Burnable',
      tooltip: 'Token holders will be able to destroy their tokens.',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      tooltip:
        'Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response.',
    },
    {
      name: 'enumerable',
      label: 'Enumerable',
      tooltip:
        'Allows on-chain enumeration of all tokens or those owned by an account. Increases gas cost of transfers.',
    },
    {
      name: 'uriStorage',
      label: 'URI Storage',
      tooltip: 'Allows updating token URIs for individual token IDs.',
    },
  ],
  1155: [
    {
      name: 'mintable',
      label: 'Mintable',
      tooltip: 'Privileged accounts will be able to create more supply.',
    },
    {
      name: 'burnable',
      label: 'Burnable',
      tooltip: 'Token holders will be able to destroy their tokens.',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      tooltip:
        'Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response.',
    },
    {
      name: 'supplyTracking',
      label: 'Supply Tracking',
      tooltip:
        'Privileged accounts will be able to pause the functionality marked as whenNotPaused. Useful for emergency response.',
    },
  ],
};

function StepFeature({ wizardData, wizardFormData, setWizardFormData }) {
  const { previous, next } = useOutletContext();

  const handleSubmit = (values) => {
    setWizardFormData(values);
    next();
  };

  return (
    <Grid item xs={12}>
      <Formik initialValues={{ ...wizardFormData }} onSubmit={handleSubmit}>
        <Form>
          <Card sx={{ p: 6 }} elevation={0}>
            <ListItem>
              <ListItemAvatar>
                <img width={'60%'} src={ethereumBlue} alt="icon" />
              </ListItemAvatar>
              <Typography variant={'h5'}>
                {wizardData.network === 'Binance' ? 'BEP ' : 'ERC '}
                {wizardData.typeOfContact}
              </Typography>
            </ListItem>
            <Grid mb={3}>
              <Divider />
            </Grid>
            <Grid>
              <FormGroup>
                <Grid container columnSpacing={5}>
                  {data[wizardData.typeOfContact].map((item) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} key={item.name}>
                        <Grid
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          width={'200px'}
                        >
                          <CheckBox {...item} />
                          <Tooltip
                            placement="right"
                            arrow={true}
                            title={
                              <React.Fragment>
                                <Typography variant="subtitle2">
                                  {item.tooltip}
                                </Typography>
                              </React.Fragment>
                            }
                          >
                            <IconButton>
                              <HelpIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </FormGroup>
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={previous}>
              Previous
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Next
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}

StepFeature.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepFeature;
