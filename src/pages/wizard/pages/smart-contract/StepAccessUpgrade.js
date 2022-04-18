import React, { useState } from 'react';

import {
  Typography,
  Grid,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
  Switch,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';

import ethereumBlue from './../../../../assets/ethereum_blue.svg';
import RadioGroup from './../../../../components/common/RadioGroup';
const accessOptions = [
  {
    label: 'Ownable',
    tooltip:
      'Simple mechanism with a single account authorized for all privileged actions.',
  },
  {
    label: 'Roles',
    tooltip:
      'Flexible mechanism with a separate role for each privileged action. A role can have many authorized accounts.',
  },
];

const upgradeOptions = [
  {
    label: 'Transparent',
    tooltip:
      'Uses more complex proxy with higher overhead, requires less changes in your contract. Can also be used with beacons.',
  },
  {
    label: 'UUPS',
    tooltip:
      'Uses simpler proxy with less overhead, requires including extra code in your contract. Allows flexibility for authorizing upgrades.',
  },
];
function StepAccessUpgrade({
  wizardData,
  wizardSmartContractData,
  setWizardSmartContractData,
}) {
  const [switchValue, setSwitchValue] = useState(false);
  const { previous, next } = useOutletContext();
  const handleSubmit = (values) => {
    setWizardSmartContractData({ ...values, upgradeability: switchValue });
    next();
  };

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardSmartContractData }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Card sx={{ p: { xs: 2.5, sm: 4, md: 5, lg: 6 } }} elevation={0}>
            <ListItem sx={{ px: 0 }}>
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

            <Grid container>
              <Grid item sm={6} xs={12} lg={6}>
                <RadioGroup
                  label="Access"
                  name="access"
                  options={accessOptions}
                  disable={false}
                />
              </Grid>
              <Grid item sm={6} xs={12} lg={6}>
                <RadioGroup
                  label="Upgradeability"
                  name="upgrade"
                  options={upgradeOptions}
                  disable={!switchValue}
                />
                <Switch
                  name="upgradeability"
                  checked={switchValue}
                  onChange={handleSwitchChange}
                />
              </Grid>
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              onClick={previous}
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
StepAccessUpgrade.propTypes = {
  wizardData: PropTypes.object,
  wizardSmartContractData: PropTypes.object,
  setWizardSmartContractData: PropTypes.func,
};
export default StepAccessUpgrade;
