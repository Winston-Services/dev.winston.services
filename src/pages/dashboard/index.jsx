import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Deposits from './TopUsers';
import PlanBarChart from './PlanBarChart';
import BalanceChart from './BalanceChart';
import MonthlyTranChart from './MonthlyTranChart';

export default function index() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={0} sx={{ height: '230px', p: 2.5 }}>
            <Typography variant="h6">Balance</Typography>
            <BalanceChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={0} sx={{ height: '425px' }}>
            <Typography variant="h6" p={2.5}>
              Monthly transactions
            </Typography>
            <Grid sx={{ height: '358px', overflow: 'hidden', ml: '-5px' }}>
              <MonthlyTranChart />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ height: '425px', p: 2 }}>
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper elevation={0} sx={{ height: '425px', px: 2.5, py: 4 }}>
            <Typography variant="h6">Bots plan subscriptions</Typography>
            <PlanBarChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
