import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import { PropTypes } from 'prop-types';

const TextFieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);
  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };
  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return <TextField {...configTextField} />;
};

TextFieldWrapper.propTypes = {
  name: PropTypes.node,
};

export default TextFieldWrapper;
