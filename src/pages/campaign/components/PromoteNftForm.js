import React from 'react';

import {
  Card,
  Typography,
  Grid,
  styled,
  Slider,
  Button,
  Link,
  FormHelperText,
} from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import Checkbox from '../../../components/common/CheckBox';
import CoinBase from './../../../assets/coin_base.svg';
import Fortmatic from './../../../assets/fortmatic.svg';
import metaMask from './../../../assets/metamask.svg';
import NftImage1 from './../../../assets/nft_image_1.png';
import WalletConnect from './../../../assets/wallet_connect_2.svg';
import DropDown from './../../../components/common/DropDown';

const PrettoSlider = styled(Slider)({
  color: '#1976D2',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#1976D2',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: '14px',
    background: 'unset',
    padding: 0,
    width: 50,
    height: 32,
    backgroundColor: '#1976D2',
  },
});

function valueLabelFormat(value) {
  return '$' + value;
}

const paymentData = [
  {
    image: metaMask,
    title: 'MetaMask',
  },
  {
    image: CoinBase,
    title: 'Coinbase Wallet',
  },
  {
    image: WalletConnect,
    title: 'WalletConnect',
  },
  {
    image: Fortmatic,
    title: 'Fortmatic',
  },
];

const FORM_VALIDATION = Yup.object().shape({
  tnc: Yup.boolean().oneOf([true], 'accept term and condition'),
});

function PromoteNftForm() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = React.useState({
    budget: 160,
    duration: '1 Day',
    paymentMethod: '',
    category: 'Art',
    tnc: false,
  });

  return (
    <Grid container justifyContent={'center'}>
      <Grid item md={5} sm={8} xs={12}>
        <Card elevation={0} sx={{ px: 5, pt: 5 }}>
          <Typography variant="h5">Create Campaign</Typography>
          <Typography variant="subtitle2" mt={1} mb={2}>
            Start your amazing journey by just simple steps
          </Typography>
          <Formik
            initialValues={{
              ...initialValues,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              console.log(values);
              navigate('/campaign/user-dashboard');
            }}
          >
            {(props) => {
              return (
                <Form>
                  <Grid container spacing={4.2} mb={2.6}>
                    <Grid item sm={3} md={4}>
                      <img src={NftImage1} alt="" width="100%" />
                    </Grid>
                    <Grid
                      item
                      sm={9}
                      md={8}
                      xs={12}
                      display="flex"
                      flexDirection={'column'}
                      justifyContent="end"
                    >
                      <Typography
                        sx={{ mb: { xs: 4, sm: 4 } }}
                        variant="subtitle2"
                      >
                        Budget
                      </Typography>
                      <Grid pb={0.2}>
                        <PrettoSlider
                          value={initialValues.budget}
                          valueLabelDisplay="on"
                          aria-label="pretto slider"
                          valueLabelFormat={valueLabelFormat}
                          onChange={(e) => {
                            props.setFieldValue('budget', e.target.value);
                            return setInitialValues({
                              ...initialValues,
                              budget: e.target.value,
                            });
                          }}
                          min={100}
                          max={300}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <DropDown
                    label="Duration*"
                    name="duration"
                    options={['1 Day', '2 Days', '3 Days', '4 Days', '5 Days']}
                    placeholder={'1 Day'}
                  />

                  <Typography my={2} variant="subtitle2">
                    Payment Method
                  </Typography>
                  <Grid container spacing={2}>
                    {paymentData.map((item, index) => (
                      <Grid item key={index}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#4F409A',
                            borderRadius: 2,
                            width: { xs: '100%', sm: 'auto' },
                          }}
                          color={
                            item.title === initialValues.paymentMethod
                              ? 'secondary'
                              : 'primary'
                          }
                          onClick={() => {
                            props.setFieldValue('paymentMethod', item.title);
                            return setInitialValues({
                              ...initialValues,
                              paymentMethod: item.title,
                            });
                          }}
                        >
                          <img
                            src={item.image}
                            alt="image-data"
                            style={{ marginRight: 5 }}
                          />
                          {item.title}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid my={2} mt={4}>
                    <DropDown
                      label="Category*"
                      name="category"
                      options={['Art']}
                      placeholder={'Art'}
                    />
                  </Grid>
                  <Grid
                    container
                    display="flex"
                    flexDirection={'column'}
                    alignItems={'start'}
                  >
                    <Grid display={'flex'} alignItems="center">
                      <Checkbox name="tnc" />
                      <Grid item display="flex" gap={1}>
                        <Link>
                          <Typography variant="subtitle1">Terms</Typography>
                        </Link>
                        <Typography variant="subtitle1">&</Typography>
                        <Link>
                          <Typography variant="subtitle1">
                            Conditions
                          </Typography>
                        </Link>
                        <Typography noWrap variant="subtitle1">
                          of Winston
                        </Typography>
                      </Grid>
                    </Grid>
                    {initialValues.tnc === true ? (
                      <></>
                    ) : (
                      <FormHelperText error={true}>
                        <ErrorMessage name="tnc" />
                      </FormHelperText>
                    )}
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ width: { xs: '100%', md: 'auto' }, mt: 3, mb: 5 }}
                  >
                    Next
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
}

PromoteNftForm.propTypes = {
  setFieldValue: PropTypes.func,
};

export default PromoteNftForm;
