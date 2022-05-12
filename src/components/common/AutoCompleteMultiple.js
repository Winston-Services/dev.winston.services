import React from 'react';

import { TextField, Autocomplete, Grid, Chip } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';

const AutoCompleteMultiple = ({ name, options, label, placeholder }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event, value) => {
    setFieldValue(name, value);
  };

  const configAutoComplete = {
    ...field,
    onChange: handleChange,
  };

  const configTextField = { ...field };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <Autocomplete
      multiple
      options={options}
      freeSolo
      {...configAutoComplete}
      renderTags={(value, getTagProps) => (
        <Grid width="100%">
          {value.map((option, index) => (
            <Chip
              key={option}
              variant="filled"
              label={option}
              {...getTagProps({ index })}
            />
          ))}
        </Grid>
      )}
      renderInput={(params) => (
        <TextField
          fullWidth
          {...configTextField}
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

AutoCompleteMultiple.propTypes = {
  name: PropTypes.node,
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default AutoCompleteMultiple;
