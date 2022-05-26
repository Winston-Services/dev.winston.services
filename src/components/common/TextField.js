import React from 'react';

import { TextField } from '@mui/material';
import { useField } from 'formik';
import { PropTypes } from 'prop-types';

const TextFieldWrapper = ({ name, onChange, ...otherProps }) => {
  const [field, meta, { setValue }] = useField(name);

  const handleChange = (e) => {
    setValue(e.target.value);
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
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  console.log('render');
  return <TextField autoComplete="off" {...configTextField} />;
};

TextFieldWrapper.propTypes = {
  name: PropTypes.node,
  onChange: PropTypes.func,
};

export default TextFieldWrapper;
