import React from 'react';

import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';

const SelectWrapper = ({ name, options, onChange, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);
  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
    if (onChange) {
      onChange(value);
    }
  };
  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  };
  if (mata && mata.touched && mata.error) {
    configSelect.error = true;
    configSelect.helperText = mata.error;
  }
  return (
    <TextField {...configSelect}>
      {options?.map((value) => {
        return (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

SelectWrapper.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default SelectWrapper;
