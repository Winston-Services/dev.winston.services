import React from 'react';

import { TextField } from '@mui/material';
import { useField } from 'formik';
import { PropTypes } from 'prop-types';

const FormikTextField = ({ name, ...rest }) => {
  const [field, meta] = useField(name);
  return (
    <TextField
      name={name}
      fullWidth
      variant={'outlined'}
      autoComplete="off"
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...rest}
    />
  );
};

FormikTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export default FormikTextField;
