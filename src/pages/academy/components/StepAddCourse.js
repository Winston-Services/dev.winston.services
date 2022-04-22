import React from 'react';

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  FormControl,
} from '@mui/material';
import { useFormikContext, useField } from 'formik';
import { PropTypes } from 'prop-types';

function StepAddCourse({ name, data }) {
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
    <div>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="subtitle1" mt={2}>
        {data.description}
      </Typography>
      <Typography variant="h6" mt={{ xs: 3, sm: 6 }} mb={2} fontWeight={700}>
        {data.question}
      </Typography>

      <FormControl fullWidth {...configFormControl}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          sx={{ display: 'flex', gap: 2 }}
          {...configRadioGroup}
        >
          {data.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
              sx={{ border: '1px solid #483996', p: 1, mx: 0 }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

StepAddCourse.propTypes = {
  name: PropTypes.string,
  data: PropTypes.object,
};

export default StepAddCourse;
