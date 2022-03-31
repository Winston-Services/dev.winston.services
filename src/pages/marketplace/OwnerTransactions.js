import React from 'react';

import { Container, Grid, Paper, Typography } from '@mui/material';

import OwnerTransactionsTabs from './components/OwnerTransactionsTabs';

function OwnerTransactions() {
  return (
    <Container>
      <Typography variant="h3">Transactions</Typography>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <OwnerTransactionsTabs />
        </Grid>
        <Grid item md={4} sx={{ mt: 11.75 }}>
          <Paper elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
              Account Summary
            </Typography>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography variant="subtitle1">
                cro1f7umg64a0hzqdevg3z8wfnm4f3lm3q4p
              </Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Type</Typography>
              <Typography variant="subtitle1">User Account</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Module Name</Typography>
              <Typography variant="subtitle1">- -</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Total Balance</Typography>
              <Typography variant="subtitle1">0.00525000 CRO</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Usable Balance</Typography>
              <Typography variant="subtitle1">0.00525000 CRO</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Bonded Balance</Typography>
              <Typography variant="subtitle1">- -</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Redelegating Balance</Typography>
              <Typography variant="subtitle1">- -</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Unbonding Balance</Typography>
              <Typography variant="subtitle1">- -</Typography>
            </Grid>
            <Grid variant="bottomBorder" py={2}>
              <Typography variant="subtitle2">Total Rewards</Typography>
              <Typography variant="subtitle1">- -</Typography>
            </Grid>
          </Paper>
          <Paper elevation={0} sx={{ p: 3.75, mt: 3.75, textAlign: 'center' }}>
            <Typography variant="h6">Token Balance</Typography>
            <Typography variant="h5">0.00525000 CRO</Typography>
            <Typography variant="subtitle2" mt={6.25}>
              crypto.org chain
            </Typography>
            <Typography variant="subtitle2">By Crypto.org</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OwnerTransactions;
