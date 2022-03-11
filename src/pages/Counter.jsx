import { Button, Grid } from '@mui/material';
import React from 'react';

export default function Counter() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button variant="contained">Increment</Button>
      </Grid>
      <Grid item>
        <span>{0}</span>
      </Grid>
      <Grid item>
        <Button variant="contained">Decrement</Button>
      </Grid>
    </Grid>
  );
}
