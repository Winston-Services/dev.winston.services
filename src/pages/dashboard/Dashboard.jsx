import React, { useEffect } from 'react';

import { useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import useUser from '../../hooks/useUser';
import { toggleSideBar } from '../../store/sideBar';

const AdminDashboard = React.lazy(() => import('./AdminDashboard'));
const AccountCreated = React.lazy(() => import('./AccountCreated'));
const BalanceChart = React.lazy(() => import('./BalanceChart'));
const BotPlanBarChart = React.lazy(() => import('./BotPlanBarChart'));
const InOutAreaChart = React.lazy(() => import('./InOutAreaChart'));
const MonthlyTranChart = React.lazy(() => import('./MonthlyTranChart'));
const RecentTransactions = React.lazy(() => import('./RecentTransactions'));
const ServerPlanBarChart = React.lazy(() => import('./ServerPlanBarChart'));
const TopUsers = React.lazy(() => import('./TopUsers'));
const Footer = React.lazy(() => import('../../layouts/common/LandingFooter'));

const CoinCard = ({ coin }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '16px',
        background: 'linear-gradient(135deg, #2d2169, #2d2169)',
        color: 'white',
        width: { xs: '100%', md: '25%' },
        minHeight: '100px',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Avatar src={coin.image} alt="Logo" width="32px" height="32px" />
        <Typography variant="h6">
          {coin.name} ({coin.symbol})
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '16px',
        }}
      >
        <Typography variant="caption">
          Total Supply : {coin.totalSupply} Decimals: {coin.decimals}
        </Typography>
        <Typography variant="caption">
          Circulating Supply : {coin.circulatingSupply}
        </Typography>
      </Box>
    </Paper>
  );
};

CoinCard.propTypes = {
  coin: PropTypes.object.isRequired,
};



export default function Dashboard() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  useEffect(() => {
    if (isMobile) {
      dispatch(toggleSideBar());
    }
  }, [isMobile, dispatch]);
  const user = useUser();
  const coinData = {
    ahwa: {
      name: 'Ahwa',
      symbol: 'AHWA',
      image: 'https://winston.services/assets/ahwa.png',
      totalSupply: '10k',
      circulatingSupply: '> 1%',
      decimals: '18',
    },
    winston: {
      name: 'Winston',
      symbol: 'win',
      image: 'https://winston.services/assets/winston.png',
      totalSupply: '100M',
      circulatingSupply: '> 1%',
      decimals: '18',
    },
    rickle: {
      name: 'Rickle',
      symbol: 'rkl',
      image: 'https://winston.services/assets/rickle.png',
      totalSupply: '100B',
      circulatingSupply: '> 1%',
      decimals: '18',
    },
    wac: {
      name: 'Academy',
      symbol: 'wac',
      image: 'https://winston.services/assets/wac.png',
      totalSupply: '100T',
      circulatingSupply: '> 1%',
      decimals: '18',
    },
  };

  return (
    <Grid
      container
      sx={{
        minHeight: 'calc(100vh - 123px)',
        height: '100%',
      }}
    >
      <Paper
        elevation={1}
        sx={{
          width: '100%',
          minHeight: 'calc(100vh - 123px)',
          height: 'auto',
          padding: '16px',
          marginTop: '6px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              width: { xs: '100%', md: '25%' },
            }}
          >
            <Typography variant="h4" fontFamily="Cookie">
              Welcome to Winston
            </Typography>
            <Typography variant="caption" fontFamily="Cookie">
              Your personal assistant to all things blockchain.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              width: '100%',
            }}
          >
            {Object.values(coinData).map((coin) => (
              <CoinCard coin={coin} key={coin.symbol} />
            ))}
          </Box>
        </Box>

        <AdminDashboard />


        {user.accounts.length < 0 && (
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} sx={{ height: '230px', p: 2.5 }}>
              <Typography variant="h6">Balances</Typography>
              <BalanceChart />
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={8} lg={8}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">Recent Transactions</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <MonthlyTranChart />
              </Grid>
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <TopUsers />
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={5} lg={5}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">Bot plan subscriptions</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <BotPlanBarChart />
              </Grid>
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item sm={12} md={7} lg={7}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">Recent transactions</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <RecentTransactions />
              </Grid>
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={7} lg={7}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">In Out</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <InOutAreaChart />
              </Grid>
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={5} lg={5}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">Server plan subscriptions</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <ServerPlanBarChart />
              </Grid>
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={4} lg={4}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <AccountCreated />
            </Paper>
          </Grid>
        )}

        {user.accounts.length < 0 && (
          <Grid item xs={12} md={8} lg={8}>
            <Paper elevation={0} sx={{ height: '425px', p: 2.5 }}>
              <Typography variant="h6">Monthly subscriptions</Typography>
              <Grid sx={{ height: '340px', mt: 2.5 }}>
                <MonthlyTranChart />
              </Grid>
            </Paper>
          </Grid>
        )}
      </Paper>
      <Box sx={{ height: '100px' }} />
      <Footer />
    </Grid>
  );
}
