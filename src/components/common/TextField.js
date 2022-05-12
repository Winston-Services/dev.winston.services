import React from 'react';

import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';

const TextFieldWrapper = ({ name, onChange, ...otherProps }) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const configTextField = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange,
  };
  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return <TextField autoComplete="off" {...configTextField} />;
};

TextFieldWrapper.propTypes = {
  name: PropTypes.node,
  onChange: PropTypes.func,
};

export default TextFieldWrapper;
