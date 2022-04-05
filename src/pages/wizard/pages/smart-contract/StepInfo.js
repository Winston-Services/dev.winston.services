import React from 'react';

import {
  Typography,
  Button,
  Grid,
  Card,
  ListItem,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import * as Yup from 'yup';

import ethereumBlue from './../../../../assets/ethereum_blue.svg';
import TextField from './../../../../components/common/TextField';

const FORM_VALIDATION = Yup.object().shape({
  securityContact: Yup.string().required('Security contact is required'),
  license: Yup.string().required('License is required'),
});

function StepInfo({ wizardData, wizardFormData, setWizardFormData }) {
  const { previous, next } = useOutletContext();

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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  name="securityContact"
                  label={'Security Contact'}
                  placeholder={'Security Contact'}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="license"
                  label={'License'}
                  placeholder={'License'}
                />
              </Grid>
            </Grid>
          </Card>
          <Grid mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={previous}>
              Previous
            </Button>
            <Button variant="contained" color="secondary" type="submit">
              Checkout
            </Button>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  );
}
StepInfo.propTypes = {
  wizardData: PropTypes.object,
  wizardFormData: PropTypes.object,
  setWizardFormData: PropTypes.func,
};

export default StepInfo;
