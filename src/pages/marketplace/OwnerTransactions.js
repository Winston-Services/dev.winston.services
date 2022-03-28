import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import OwnerTransactionsTabs from './components/OwnerTransactionsTabs';

function OwnerTransactions() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid items md={12}>
          <Typography variant="h3">Transactions</Typography>
        </Grid>
        <Grid items md={8}>
          <OwnerTransactionsTabs />
        </Grid>
        <Grid items md={4}>
          <Paper elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Account Summary
            </Typography>
            <Grid>
              <Typography variant="subtitle2" mt={3.75}>
                Address
              </Typography>
              <Typography variant="subtitle1">
                cro1f7umg64a0hzqdevg3z8wfnm4f3lm3q4p
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OwnerTransactions;
