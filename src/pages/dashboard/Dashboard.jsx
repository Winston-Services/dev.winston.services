import React, { useEffect } from 'react';

import { useMediaQuery } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import useUser from '../../hooks/useUser';
import { toggleSideBar } from '../../store/sideBar';

import CreateProfile from './Profile/CreateProfile';
import CreateWallet from './Wallets/CreateWallet';
import ScrollToTop from '../../components/scroll-to-top';

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
  const user = useUser();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [activeStep, setActiveStep] = React.useState(user.account.firstRunStep);

  useEffect(() => {
    if (isMobile) {
      dispatch(toggleSideBar());
    }
  }, [isMobile, dispatch]);

  // console.log(user);
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
            <Divider sx={{ width: '100%', mt: .25, borderColor: 'transparent' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              {user.profile.roles.map((role) => (
                <Chip label={role} key={role} size="small" />
              ))}
            </Box>
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
        {user.account.firstRun && (
          <Stepper orientation="vertical" activeStep={activeStep}>
            <Step key={0}>
              <StepLabel>
                <Typography variant="h6">Let&apos;s Get Started</Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '16px',
                        width: '80%',
                        minHeight: '100px',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h2">Welcome to Winston!</Typography>
                      <Typography variant="caption">
                        Winston is your personal assistant to all things
                        blockchain.
                      </Typography>
                      <fieldset>
                        <legend>Let&apos;s get you set up.</legend>
                        <Typography variant="body1">
                          You can use Winston to help you explore the world of
                          Decentralized Finance and learn to earn more.
                        </Typography>
                        <Typography variant="body1">
                          This platform provides a comprehensive suite of tools
                          that not only helps you build and manage your
                          cryptocurrency portfolio efficiently but also enables
                          you to learn and earn through the Winston Academy.
                        </Typography>
                      </fieldset>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Typography variant="body1">
                        Let&apos;s get started by setting up your personal
                        profile and connecting your wallets and accounts.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, float: 'right' }}
                        onClick={() => {
                          dispatch(user.setFirstRunStep(1));
                          setActiveStep(1);
                        }}
                      >
                        Next
                      </Button>
                    </Paper>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ maxWidth: '400px', minWidth: '122px' }}>
                      <img
                        src="/winston_ahwa_footer.svg"
                        alt="Winston"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </StepContent>
            </Step>
            <Step key={1}>
              <StepLabel>
                <Typography variant="h6">Your Profile</Typography>
              </StepLabel>
              <StepContent>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ maxWidth: '400px', minWidth: '122px' }}>
                      <img
                        src="/winston_ahwa_footer.svg"
                        alt="Winston"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '16px',
                        width: '90%',
                        minHeight: '100px',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h2">Share who you are!</Typography>
                      <Typography variant="body1">
                        Your profile is your public identity on Winston. It
                        allows you to connect with other users and share your
                        interests and experiences.
                      </Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <fieldset>
                        <legend>Your Profile</legend>
                        <Typography variant="body1">
                          Crafting your profile with details such as your name,
                          email, and additional personal information is entirely
                          optional. However, it enriches the visibility of your
                          persona to others within the Winston community.
                          Moreover, this customization enhances your interaction
                          with our platform, ensuring a tailored and optimal
                          experience.
                        </Typography>
                      </fieldset>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Box
                        sx={{
                          mt: 2,
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <CreateProfile
                          handleClose={() => {
                            setActiveStep(2);
                            dispatch(user.setFirstRunStep(2));
                          }}
                        />
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </StepContent>
            </Step>
            <Step key={2}>
              <StepLabel>
                <Typography variant="h6">Your Wallet&apos;s</Typography>
              </StepLabel>
              <StepContent>
                <ScrollToTop />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '16px',
                        width: '80%',
                        minHeight: '100px',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6">
                        Let&apos;s get a wallet set up.
                      </Typography>
                      <Typography variant="body1">
                        You can connect your wallets and the accounts you like
                        to follow.
                      </Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Typography variant="body1">
                        Use this section to create your first wallet, or connect
                        a wallet from a supported blockchain.
                      </Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <CreateWallet handleClose={() => {}} />
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 1,
                          float: 'right',
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mt: 2, float: 'right', textTransform: 'none' }}
                          onClick={() => {
                            setActiveStep(3);
                            dispatch(user.setFirstRunStep(3));
                          }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Paper>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ maxWidth: '400px', minWidth: '122px' }}>
                      <img
                        src="/winston_ahwa_footer.svg"
                        alt="Winston"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </StepContent>
            </Step>
            <Step key={3}>
              <StepLabel>
                <Typography variant="h6">Your Accounts</Typography>
              </StepLabel>
              <StepContent>
                <ScrollToTop />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '16px',
                        width: '80%',
                        minHeight: '100px',
                        height: '100%',
                      }}
                    >
                      <Typography>
                        Winston accounts are addresses on blockchains that you
                        want to watch.
                      </Typography>
                      <Typography>
                        Use the form below to add your first account, and let
                        Winston start fetching it&apos;s history.
                      </Typography>
                      <Alert severity="info">
                        <AlertTitle>
                          Note: Winston&apos;s address is :
                        </AlertTitle>
                        <pre>0x75578ebBefe274F240B8E1b5859cA34f342157D9</pre>
                      </Alert>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Typography variant="body1">
                        You can add your own accounts to follow, and Winston
                        will automatically follow your wallets.
                      </Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Typography variant="body1">FORM GOES HERE</Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, float: 'right', textTransform: 'none' }}
                        onClick={() => {
                          setActiveStep(4);
                          dispatch(user.setFirstRunStep(4));
                        }}
                      >
                        Next
                      </Button>
                    </Paper>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ maxWidth: '400px', minWidth: '122px' }}>
                      <img
                        src="/winston_ahwa_footer.svg"
                        alt="Winston"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </StepContent>
            </Step>
            <Step key={4}>
              <StepLabel>
                <Typography variant="h6">
                  Personalize your experience.
                </Typography>
              </StepLabel>
              <StepContent>
                <ScrollToTop />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ maxWidth: '400px', minWidth: '122px' }}>
                      <img
                        src="/winston_ahwa_footer.svg"
                        alt="Winston"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '80%',
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '16px',
                        width: '80%',
                        minHeight: '100px',
                        height: '100%',
                      }}
                    >
                      <Typography>
                        Now that you&apos;ve set up your profile and wallet, you
                        can personalize your experience.
                      </Typography>
                      <Typography>
                        Let&apos;s get you set up with some of the features you
                        can use to make your experience more personalized.
                      </Typography>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 1,
                        }}
                      >
                        <Card sx={{ maxWidth: '300px' }} elevation={0}>
                          <CardContent>
                            <Typography variant="h6">
                              Join the Winston Community
                            </Typography>
                            <Typography variant="body1">
                              Winston is a community-driven project. Join the
                              community to stay up-to-date with the latest
                              developments and get involved in shaping the
                              future of Winston.
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Join Discord
                            </Button>

                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Join Telegram
                            </Button>

                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Join Twitter
                            </Button>
                          </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: '300px' }} elevation={0}>
                          <CardContent>
                            <Typography variant="h6">
                              Earn some Roles
                            </Typography>
                            <Typography variant="body1">
                              As you earn and unlock roles, you can use them to
                              get access to more features and tools through the
                              community.
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Buy Winston
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Verify your account
                            </Button>
                          </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: '300px' }} elevation={0}>
                          <CardContent>
                            <Typography variant="h6">
                              Winston Academy
                            </Typography>
                            <Typography variant="body1">
                              Winston Academy is a program that allows you to
                              learn and earn more through the Winston platform.
                            </Typography>
                            <Button
                              variant="contained"
                              color="primary"
                              sx={{ textTransform: 'none' }}
                            >
                              Check out the Academy
                            </Button>
                          </CardContent>
                        </Card>
                      </Box>
                      <Divider
                        sx={{
                          width: '100%',
                          mt: 2,
                          borderColor: 'transparent',
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => {
                          setActiveStep(0);
                          dispatch(user.setFirstRunStep(0));
                          dispatch(user.setFirstRun(false));
                        }}
                      >
                        Done
                      </Button>
                    </Paper>
                  </Box>
                </Box>
              </StepContent>
            </Step>
          </Stepper>
        )}

        {!user.account.firstRun && <AdminDashboard />}

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
