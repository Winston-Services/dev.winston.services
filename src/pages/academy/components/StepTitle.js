import React from 'react';

import { TextField, Typography, Grid } from '@mui/material';

import DropDown2 from './../../../components/common/DropDown2';

function StepTitle() {
  return (
    <div>
      <Typography variant="h4">How about a working title?</Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Title"
        placeholder="Course"
        sx={{ mt: 5 }}
      />
      <Typography variant="h4" mt={5}>
        What category best fits the knowledge you’ll share?
      </Typography>
      <Grid mt={5}>
        <DropDown2
          options={[
            'Category1',
            'Category2',
            'Category3',
            'Category4',
            'Category5',
          ]}
          placeholder={'Choose a category'}
        />
      </Grid>
    </div>
  );
}

export default StepTitle;
