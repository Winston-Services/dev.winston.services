import React from 'react';

import { Typography, Grid } from '@mui/material';

import DropDown from './../../../components/common/DropDown';
import TextField from './../../../components/common/TextField';

function StepTitle() {
  return (
    <div>
      <Typography variant="h4">How about a working title?</Typography>
      <TextField
        name="title"
        label={'Title'}
        placeholder={'Course'}
        autoComplete="off"
      />
      <Typography variant="h4" mt={5}>
        What category best fits the knowledge you’ll share?
      </Typography>
      <Grid mt={{ xs: 3, sm: 5 }}>
        <DropDown
          name="category"
          label={'Category'}
          options={[
            'Category1',
            'Category2',
            'Category3',
            'Category4',
            'Category5',
          ]}
        />
      </Grid>
    </div>
  );
}

export default StepTitle;
