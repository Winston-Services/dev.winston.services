import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import TopUsers from './TopUsers';
import ServerPlanBarChart from './ServerPlanBarChart';
import BalanceChart from './BalanceChart';
import MonthlyTranChart from './MonthlyTranChart';
import InOutAreaChart from './InOutAreaChart';
import AccountCreated from './AccountCreated';
import BotPlanBarChart from './BotPlanBarChart';
import RecentTransactions from './RecentTransactions';

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
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">Monthly transactions</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <MonthlyTranChart />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <TopUsers />
          </Paper>
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">Bot plan subscriptions</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <BotPlanBarChart />
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={12} md={7} lg={7}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">Recent transactions</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <RecentTransactions />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7} lg={7}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">In Out</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <InOutAreaChart />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">Server plan subscriptions</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <ServerPlanBarChart />
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <AccountCreated />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8} lg={8}>
          <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
            <Typography variant="h6">Monthly subscriptions</Typography>
            <Grid sx={{ height: '340px', mt: 2.5 }}>
              <MonthlyTranChart />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
