import React, { useState } from 'react';

import {
  Typography,
  Grid,
  Container,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
  Switch,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import WizardSteppers from '../WizardSteppers';
import ethereumBlue from './../../../assets/ethereum_blue.svg';
import RadioGroup from './../../../components/common/RadioGroup';

function stepAccessUpgrade({ wizardData, wizardFormData, setWizardFormData }) {
  const [switchValue, setSwitchValue] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = (values) => {
    setWizardFormData({ ...values, upgradeability: switchValue });
    navigate('/wizard/step-info');
  };

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue);
  };

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
  return (
    <Container>
      {wizardData.workshop === 'Smart Contract' && (
        <Typography variant="h3">Smart Contract Workshop</Typography>
      )}
      {wizardData.workshop === 'Custom' && (
        <Grid container spacing={8}>
          <Grid item>
            <Typography variant="h3" sx={{ opacity: '0.5' }}>
              1. Coin Workshop
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                borderBottom: 'solid',
                borderImageSlice: 1,
                borderImageSource:
                  'linear-gradient(90deg, #EA7A8F 0.64%, #E452C8 99.36%)',
              }}
              variant="h3"
            >
              2. Smart Contract Workshop
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container>
        <Grid item mt={6} mb={6} xs={12}>
          <WizardSteppers activeStepCount={3} />
        </Grid>

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
                  onClick={() => navigate('/wizard/step-feature')}
                >
                  Previous
                </Button>
                <Button variant="contained" color="secondary" type="submit">
                  Next
                </Button>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}
stepAccessUpgrade.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};
export default stepAccessUpgrade;
