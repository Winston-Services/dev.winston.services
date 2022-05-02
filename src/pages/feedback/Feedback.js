import React from 'react';

import {
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from '@mui/icons-material';
import { Typography, Container, Grid, Rating, Button } from '@mui/material';
import { Form, Formik } from 'formik';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import TextField from './../../components/common/TextField';

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied sx={{ fontSize: 50 }} />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfied sx={{ fontSize: 50 }} />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfied sx={{ fontSize: 50 }} />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAlt sx={{ fontSize: 50 }} />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfied sx={{ fontSize: 50 }} />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <span {...other} style={{ padding: '5px' }}>
      {customIcons[value].icon}
    </span>
  );
}

const FORM_VALIDATION = Yup.object().shape({
  message: Yup.string().required(' Message is required'),
});

function Feedback() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = React.useState({
    message: '',
    rating: 2,
  });
  return (
    <Container>
      <Formik
        initialValues={{
          ...initialValues,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
          navigate('/feedback/thankyou');
        }}
      >
        {(props) => {
          return (
            <Form>
              <Grid item textAlign={'center'}>
                <Typography variant="h3">
                  Feel free to drop us your feedback.
                </Typography>
                <Typography variant="h5" mt={2}>
                  How satisfied are you overall with the support of Winston.
                </Typography>
                <Grid textAlign={'center'}>
                  <Rating
                    name="highlight-selected-only"
                    value={initialValues.rating}
                    onChange={(event, value) => {
                      props.setFieldValue('rating', value);
                      setInitialValues({ ...initialValues, rating: value });
                    }}
                    sx={{ my: 12 }}
                    IconContainerComponent={IconContainer}
                    highlightSelectedOnly
                  />
                </Grid>
                <Grid sx={{ px: { xs: 0, md: 6, lg: 10 } }}>
                  <TextField
                    name="message"
                    fullWidth
                    variant="outlined"
                    multiline={true}
                    rows={12}
                    label={'Message'}
                    placeholder={
                      'Please tell us your reason for giving this score'
                    }
                  />
                </Grid>
                <Grid
                  container
                  mt={5}
                  display="flex"
                  justifyContent={'center'}
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 2 },
                  }}
                >
                  <Grid item>
                    <Button type="submit" variant="contained" color="secondary">
                      Send feedback
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" type="submit">
                      No! I don’t want to give feedback
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

Feedback.propTypes = {
  setFieldValue: PropTypes.func,
};

export default Feedback;
