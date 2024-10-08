import React from 'react';

import {
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { userAccountSelector } from '../../../store/user';

const AccountCreated = React.lazy(() => import('../AccountCreated'));
const BalanceChart = React.lazy(() => import('../BalanceChart'));
const BotPlanBarChart = React.lazy(() => import('../BotPlanBarChart'));
const InOutAreaChart = React.lazy(() => import('../InOutAreaChart'));
const MonthlyTranChart = React.lazy(() => import('../MonthlyTranChart'));
const RecentTransactions = React.lazy(() => import('../RecentTransactions'));
const ServerPlanBarChart = React.lazy(() => import('../ServerPlanBarChart'));
const TopUsers = React.lazy(() => import('../TopUsers'));

export default function Wallets() {
  const account = useSelector(userAccountSelector);
  console.log(account);
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