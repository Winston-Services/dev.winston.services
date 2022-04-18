import React from 'react';

import {
  Typography,
  Grid,
  Button,
  Card,
  Divider,
  ListItem,
  ListItemAvatar,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import ethereumBlue from './../../../../assets/ethereum_blue.svg';
import TextField from './../../../../components/common/TextField';

function StepSetting({
  wizardData,
  wizardSmartContractData,
  setWizardSmartContractData,
}) {
  const { previous, next } = useOutletContext();

  let FORM_VALIDATION;
  if (wizardData.typeOfContact === '1155') {
    FORM_VALIDATION = Yup.object().shape({
      smartContractName: Yup.string().required('Name is required'),
    });
  } else {
    FORM_VALIDATION = Yup.object().shape({
      smartContractName: Yup.string().required('Name is required'),
      smartContractSymbol: Yup.string().required('Symbol is required'),
      smartContractPremine: Yup.string().required('Premine is required'),
    });
  }

  const handleSubmit = (values) => {
    setWizardSmartContractData(values);
    next();
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardSmartContractData }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Card sx={{ p: { xs: 2.5, sm: 4, md: 5, lg: 6 } }} elevation={0}>
            <ListItem sx={{ px: 0 }}>
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
              onClick={previous}
              sx={{ width: { xs: '50%', sm: 'auto' } }}
            >
              Previous
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
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

StepSetting.propTypes = {
  wizardData: PropTypes.object,
  wizardSmartContractData: PropTypes.object,
  setWizardSmartContractData: PropTypes.func,
};

export default StepSetting;
