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

function StepSetting({ wizardData, wizardFormData, setWizardFormData }) {
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
    setWizardFormData(values);
    next();
  };

  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{ ...wizardFormData }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
      >
        <Form>
          <Card sx={{ p: 6 }} elevation={0}>
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
          <Grid
            container
            spacing={2}
            mt={4}
            display="flex"
            justifyContent="flex-end"
          >
            <Grid item>
              <Button variant="outlined" onClick={previous}>
                Previous
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="secondary">
                Next
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}

StepSetting.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepSetting;
