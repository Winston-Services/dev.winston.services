import React from 'react';

import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import ethereumBlue from './../../../assets/ethereum_blue.svg';
import TextField from './../../../components/common/TextField';
import WizardSteppers from './../WizardSteppers';

const FORM_VALIDATION = Yup.object().shape({
  // smartContractName: Yup.string().required('Name is required'),
  // smartContractSymbol: Yup.string().required('Symbol is required'),
  // smartContractPremine: Yup.string().required('Premine is required'),
});
function StepSetting({ wizardData, wizardFormData, setWizardFormData }) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setWizardFormData(values);
    navigate('/wizard/step-feature');
  };

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
          <WizardSteppers activeStepCount={1} />
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={{ ...wizardFormData }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form>
              <Card sx={{ p: 6 }} elevation={0}>
                <ListItem>
                  <ListItemAvatar>
                    <img width={'60%'} src={ethereumBlue} alt="icon" />
                  </ListItemAvatar>
                  <Typography variant={'h5'}>
                    {wizardData?.network === 'Binance' ? 'BEP ' : 'ERC '}
                    {wizardData?.typeOfContact}
                  </Typography>
                </ListItem>

                <Grid mb={3}>
                  <Divider />
                </Grid>
                <Grid display={'flex'} flexDirection="column" gap={3}>
                  <TextField
                    name="smartContractName"
                    label={'Name'}
                    placeholder={'Enter your Name'}
                    helperText={'Please Enter your Full Name'}
                  />
                  {wizardData.typeOfContact !== '1155' ? (
                    <>
                      <TextField
                        name="smartContractSymbol"
                        label={'Symbol'}
                        placeholder={'Symbol'}
                      />
                      <TextField
                        name="smartContractPremine"
                        label={'Premine'}
                        placeholder={'Premine'}
                      />
                    </>
                  ) : null}
                </Grid>
              </Card>
              <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/wizard/network')}
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

StepSetting.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepSetting;
