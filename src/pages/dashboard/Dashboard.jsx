import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import Chart from './Chart';
import Deposits from './Deposits';
import PlanSubPieChart from './PlanSubPieChart';
import UserTransBarChart from './UserTransBarChart';

export default function Dashboard() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          <Paper sx={{ height: '260px', px: 2.5, py: 4 }}>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper sx={{ height: '260px', px: 2.5, py: 4 }}>
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper sx={{ height: '260px', px: 2.5, py: 4 }}>
            <PlanSubPieChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={9} lg={9}>
          <Paper sx={{ height: '260px', px: 2.5, py: 4 }}>
            <UserTransBarChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
