import React from 'react';

import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  FormControl,
} from '@mui/material';
import { PropTypes } from 'prop-types';

function StepAddCourse({ data }) {
  return (
    <div>
      <Typography variant="h4">{data.title}</Typography>
      <Typography variant="subtitle1" mt={2}>
        {data.description}
      </Typography>
      <Typography variant="h6" mt={6} mb={2} fontWeight={700}>
        {data.question}
      </Typography>

      <FormControl fullWidth>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={data.options[0]}
          name="radio-buttons-group"
          sx={{ display: 'flex', gap: 2 }}
        >
          {data.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
              sx={{ border: '1px solid #483996', p: 1 }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

StepAddCourse.propTypes = {
  data: PropTypes.object,
};

export default StepAddCourse;
