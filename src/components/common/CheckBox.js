import React from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
} from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { PropTypes } from 'prop-types';

const CheckboxWrapper = ({ name, label, helperText = '' }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    checked: field.value,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <Grid display={'flex'} alignItems="center">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...configCheckbox} />}
            label={label}
          />
        </FormGroup>
        {helperText && (
          <FormHelperText sx={{ ml: -1 }}>
            ({configFormControl.error ? label + 'must be selected' : helperText}
            )
          </FormHelperText>
        )}
      </Grid>
    </FormControl>
  );
};

CheckboxWrapper.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

export default CheckboxWrapper;
