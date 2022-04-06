import React from 'react';

import HelpIcon from '@mui/icons-material/Help';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Grid,
  Tooltip,
  Typography,
  IconButton,
} from '@mui/material';
import { useFormikContext, useField } from 'formik';
import { PropTypes } from 'prop-types';

const FormikRadioGroup = ({ label, name, options, disable }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { defaultValue } = evt.target;
    setFieldValue(name, defaultValue);
  };

  const configRadioGroup = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <Grid display={'flex'}>
        <Typography variant="h5">{label}</Typography>
      </Grid>
      <RadioGroup {...configRadioGroup}>
        {options.map((option) => (
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width={'200px'}
            key={option.label}
          >
            <FormControlLabel
              disabled={disable}
              value={option.label}
              control={<Radio />}
              label={option.label}
            />
            <Tooltip
              placement="right"
              arrow={true}
              title={
                <React.Fragment>
                  <Typography variant="subtitle2">{option.tooltip}</Typography>
                </React.Fragment>
              }
            >
              <IconButton>
                <HelpIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

FormikRadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  disable: PropTypes.bool,
};

export default FormikRadioGroup;
