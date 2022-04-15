import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Container, Typography, Grid, Switch, Button } from '@mui/material';

import AccountActivityTabs from './components/AccountActivityTabs';

function index() {
  return (
    <Container>
      <Grid
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Typography variant="h3">Account Activity</Typography>
        <Switch />
      </Grid>
      <Grid
        mt={3.75}
        display={'flex'}
        justifyContent="space-between"
        alignItems={'end'}
      >
        <Grid>
          <Typography variant="h6">Balance</Typography>
          <Typography variant="h3">$1,550.46</Typography>
        </Grid>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
          Add Money
        </Button>
      </Grid>
      <Typography variant="subtitle2" mt={2.5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s
      </Typography>
      <Grid mt={3}>
        <AccountActivityTabs />
      </Grid>
    </Container>
  );
}

export default index;
