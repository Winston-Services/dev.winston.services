import React from 'react';

import {
  //CircularProgress,
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../context/authContext';
import useUser from '../../hooks/useUser';
const AccountCreated = React.lazy(() => import('./AccountCreated'));
const BalanceChart = React.lazy(() => import('./BalanceChart'));
const BotPlanBarChart = React.lazy(() => import('./BotPlanBarChart'));
const InOutAreaChart = React.lazy(() => import('./InOutAreaChart'));
const MonthlyTranChart = React.lazy(() => import('./MonthlyTranChart'));
const RecentTransactions = React.lazy(() => import('./RecentTransactions'));
const ServerPlanBarChart = React.lazy(() => import('./ServerPlanBarChart'));
const TopUsers = React.lazy(() => import('./TopUsers'));
const Footer = React.lazy(() => import('../../layouts/common/LandingFooter'));

export default function Dashboard() {
  const auth = useAuth();
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!auth?.authenticated) {
      navigate('/sign-in', { state: { from: location } });
    }
  }, [auth]);

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

  const renderCoinCard = (coin) => {
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
        key={coin.symbol}
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

  return (
    <Grid
      container
      spacing={3}
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
            {Object.values(coinData).map((coin) => renderCoinCard(coin))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            width: '100%',
            marginTop: '16px',
          }}
        >
          {[
            {
              title: 'Create Your Profile',
              caption: 'Initiate your journey by creating a new profile to access all features.',
              buttonText: 'Create Your Profile',
            },
            {
              title: 'Create A Wallet',
              caption: 'Start your trading adventures by creating your very first digital wallet.',
              buttonText: 'Create A Wallet',
            },
            {
              title: 'Link A Wallet',
              caption: 'Connect your existing digital wallet to your account to synchronize your assets.',
              buttonText: 'Link A Wallet',
            },
            {
              title: 'Join the Community',
              caption: 'Become a part of our growing community to gain insights and collaborate on projects.',
              buttonText: 'Join the Community',
            },
            {
              title: 'Earn Roles',
              caption: 'Link your Discord account to your Winston profile to unlock exclusive roles and rewards.',
              buttonText: 'Link Discord',
            },
          ].map((item) => (
            <Box
              key={item.title}
              sx={{
                width: '240px',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardHeader
                  title={
                    <Typography variant="h6" sx={{ textAlign: 'center', margin: 0, paddingTop: '6px' }}>
                      {item.title}
                    </Typography>
                  }
                  sx={{ padding: 1 }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 1 }}>
                  <Typography variant="caption">{item.caption}</Typography>
                </CardContent>
                <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar
                    alt="Logo"
                    sx={{ width: 96, height: 96, marginBottom: '16px' }}
                  />
                </CardMedia>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ mt: 'auto', textTransform: 'none' }}
                  fullWidth
                >
                  {item.buttonText}
                </Button>
              </Card>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            width: '100%',
            marginTop: '16px',
          }}
        >
          {[
            {
              title: 'Check out the Academy',
              caption: 'Learn more about blockchain technology and how to get involved.',
              buttonText: 'Winston Academy',
            },
            {
              title: 'Start Your Teacher Profile',
              caption: 'Start helping others learn about blockchain technology. Create your profile today!',
              buttonText: 'Winston Educator',
            },
            {
              title: 'Sponsor a Course',
              caption: 'Help us teach others about blockchain technology. Sponsor a course today!',
              buttonText: 'Sponsor a Course',
            },
            {
              title: 'Sponsor a Student',
              caption: 'Help others learn about blockchain technology. Sponsor a student today!',
              buttonText: 'Sponsor a Student',
            },
            {
              title: 'Active Courses',
              caption: 'Check out your active courses and see what you have been learning.',
              buttonText: 'Active Courses',
            },
          ].map((item) => (
            <Box
              key={item.title}
              sx={{
                width: '240px',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardHeader
                  title={
                    <Typography variant="h6" sx={{ textAlign: 'center', margin: 0, paddingTop: '6px' }}>
                      {item.title}
                    </Typography>
                  }
                  sx={{ padding: 1 }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 1 }}>
                  <Typography variant="caption">{item.caption}</Typography>
                </CardContent>
                <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar
                    alt="Logo"
                    sx={{ width: 96, height: 96, marginBottom: '16px' }}
                  />
                </CardMedia>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ mt: 'auto', textTransform: 'none' }}
                  fullWidth
                >
                  {item.buttonText}
                </Button>
              </Card>
            </Box>
          ))}
        </Box>


        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            width: '100%',
            marginTop: '16px',
          }}
        >
          {[
            {
              title: 'Swap Assets',
              caption: 'Swap your assets with other users on the platform.',
              buttonText: 'Swap Assets',
            },
            {
              title: 'Liquidity Staking',
              caption: 'Stake your assets to earn rewards.',
              buttonText: 'Liquidity Staking',
            },
            {
              title: 'NFT Marketplace',
              caption: 'Buy assets with your Winston account.',
              buttonText: 'Marketplace',
            },
            {
              title: 'Crowd Fund',
              caption: 'Crowd fund with your Winston account.',
              buttonText: 'Crowd Fund',
            },
            {
              title: 'Shop for Swag',
              caption: 'Buy swag with your Winston account.',
              buttonText: 'Swag Store',
            },
          ].map((item) => (
            <Box
              key={item.title}
              sx={{
                width: '240px',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <CardHeader
                  title={
                    <Typography variant="h6" sx={{ textAlign: 'center', margin: 0, paddingTop: '6px' }}>
                      {item.title}
                    </Typography>
                  }
                  sx={{ padding: 1 }}
                />
                <CardContent sx={{ flexGrow: 1, padding: 1 }}>
                  <Typography variant="caption">{item.caption}</Typography>
                </CardContent>
                <CardMedia sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar
                    alt="Logo"
                    sx={{ width: 96, height: 96, marginBottom: '16px' }}
                  />
                </CardMedia>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ mt: 'auto', textTransform: 'none' }}
                  fullWidth
                >
                  {item.buttonText}
                </Button>
              </Card>
            </Box>
          ))}
        </Box>



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
