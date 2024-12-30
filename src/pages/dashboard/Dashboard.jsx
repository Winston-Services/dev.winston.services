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
  Tooltip,
  Divider,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';

import Form from '../../components/common/Form';
import AddressSection from '../../components/common/forms/AddressSection';
import NameSection from '../../components/common/forms/NameSection';
import PhoneTextField from '../../components/common/PhoneTextField';
import TextField from '../../components/common/TextField';
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

const profileValidationSchema = yup.object().shape({
  username: yup.string(),
  firstName: yup.string(),
  lastName: yup.string(),
  middleName: yup.string(),
  title: yup.string(),
  address1: yup.string(),
  address2: yup.string(),
  phone: yup.string(),
  city: yup.string(),
  state: yup.string(),
  zip: yup.string(),
  country: yup.string(),
});

const CreateProfile = (props) => {
  const { item, setInProgress } = props;
  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleClose = () => {
    setInProgress(false);
  };
  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Typography variant="h4">
        <strong>In Progress</strong> : {item.title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Form
          initialValues={{
            username: '',
            firstName: '',
            lastName: '',
            middleName: '',
            title: '',
            address1: '',
            address2: '',
            phone: '',
            city: '',
            state: '',
            zip: '',
            country: '',
          }}
          validationSchema={profileValidationSchema}
          onSubmit={handleSubmit}
        >
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
          <TextField label="Username" name="username" size="small" />
          <Divider sx={{ marginBottom: 1 }} />
          <NameSection />
          <Divider sx={{ marginBottom: 1 }} />
          <AddressSection />
          <PhoneTextField />
          <Divider sx={{ marginBottom: 1, marginTop: 1 }} />
        </Form>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Button onClick={handleClose} variant="contained" color="error">
          Close
        </Button>

        <Button onClick={handleClose} variant="contained" color="success">
          Save
        </Button>
      </Box>
    </Paper>
  );
};

CreateProfile.propTypes = {
  item: PropTypes.object.isRequired,
  setInProgress: PropTypes.func.isRequired,
  inProgress: PropTypes.object.isRequired,
};

const CreateWallet = () => {
  return null;
};

const LinkWallet = () => {
  return null;
};

const JoinCommunity = ({ item, setInProgress }) => {
  const handleClose = () => {
    setInProgress(false);
  };
  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Typography variant="h4">
        <strong>In Progress</strong> : {item.title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open('https://discord.gg/rickle-897546129108008960', '_blank');
            }}
          >
            Join our Discord
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open('https://t.me/therickle', '_blank');
            }}
          >
            Join Rickle Telegram
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open('https://x.com/Rickle_Token', '_blank');
            }}
          >
            Follow us on X
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Button onClick={handleClose} variant="contained" color="error">
          Close
        </Button>
      </Box>
    </Paper>
  );
};

JoinCommunity.propTypes = {
  item: PropTypes.object.isRequired,
  setInProgress: PropTypes.func.isRequired,
  inProgress: PropTypes.object.isRequired,
};

const EarnRoles = () => {
  return null;
};
const LinkDiscord = () => {
  return null;
};
const WinstonAcademy = () => {
  return null;
};
const WinstonEducator = () => {
  return null;
};
const SponsorCourse = () => {
  return null;
};
const SponsorStudent = () => {
  return null;
};
const ActiveCourses = () => {
  return null;
};
const SwapAssets = () => {
  return null;
};
const LiquidityStaking = () => {
  return null;
};
const NFTMarketplace = () => {
  return null;
};
const CrowdFund = () => {
  return null;
};
const SwagStore = () => {
  return null;
};

const InProgress = ({ inProgress, setInProgress }) => {
  const { item } = inProgress;

  switch (item.title) {
    case 'Create Your Profile':
      return (
        <CreateProfile
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Create A Wallet':
      return (
        <CreateWallet
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Link A Wallet':
      return (
        <LinkWallet
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Join Our Community':
      return (
        <JoinCommunity
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Earn Roles':
      return (
        <EarnRoles
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Learn to Earn':
      return (
        <WinstonAcademy
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Start Teaching':
      return (
        <WinstonEducator
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Sponsor a Course':
      return (
        <SponsorCourse
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Sponsor a Student':
      return (
        <SponsorStudent
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Active Courses':
      return (
        <ActiveCourses
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Swap Assets':
      return (
        <SwapAssets
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Liquidity Staking':
      return (
        <LiquidityStaking
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'NFT Marketplace':
      return (
        <NFTMarketplace
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Crowd Fund':
      return (
        <CrowdFund
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    case 'Swag Store':
      return (
        <SwagStore
          item={item}
          setInProgress={setInProgress}
          inProgress={inProgress}
        />
      );
    default:
      return null;
  }
};

InProgress.propTypes = {
  inProgress: PropTypes.object.isRequired,
  setInProgress: PropTypes.func.isRequired,
};

export default function Dashboard() {
  const auth = useAuth();
  const user = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [inProgress, setInProgress] = React.useState(false);

  const [items, setItems] = React.useState({
    row1: [
      {
        title: 'Create Your Profile',
        caption:
          'Begin your journey by creating a new profile and start your journey in decentralized finance.',
        buttonText: 'Create Your Profile',
        icon: 'https://winston.services/assets/winston.png',
        completed: false,
        dismiss: false,
        canDismiss: true,
        component: CreateProfile,
      },
      {
        title: 'Create A Wallet',
        caption:
          'Start your trading adventures by creating your very first digital wallet.',
        buttonText: 'Create A Wallet',
        icon: 'https://winston.services/assets/winston.png',
        completed: false,
        dismiss: false,
        canDismiss: true,
        component: CreateWallet,
      },
      {
        title: 'Link A Wallet',
        caption:
          'Connect your existing digital wallet to your account to synchronize your assets.',
        buttonText: 'Link A Wallet',
        icon: 'https://winston.services/assets/winston.png',
        completed: false,
        dismiss: false,
        canDismiss: true,
        component: LinkWallet,
      },
      {
        title: 'Join Our Community',
        caption:
          'Become a part of our growing community to gain insights and collaborate on projects.',
        buttonText: 'Join the Community',
        icon: 'https://winston.services/assets/winston.png',
        completed: false,
        dismiss: false,
        canDismiss: true,
        component: JoinCommunity,
      },
      {
        title: 'Earn Roles',
        caption:
          'Link your Discord account to your Winston profile to unlock exclusive roles and rewards.',
        buttonText: 'Link Discord',
        icon: 'https://winston.services/assets/winston.png',
        completed: false,
        dismiss: false,
        canDismiss: true,
        component: LinkDiscord,
      },
    ],
    row2: [
      {
        title: 'Learn to Earn',
        caption:
          'Learn more about blockchain technology and how to get involved.',
        buttonText: 'Winston Academy',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: false,
        component: WinstonAcademy,
      },
      {
        title: 'Start Teaching',
        caption:
          'Start helping others learn about blockchain technology. Create your profile today!',
        buttonText: 'Winston Educator',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: WinstonEducator,
      },
      {
        title: 'Sponsor a Course',
        caption:
          'Help us teach others about blockchain technology. Sponsor a course today!',
        buttonText: 'Sponsor a Course',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: SponsorCourse,
      },
      {
        title: 'Sponsor a Student',
        caption:
          'Help others learn about blockchain technology. Sponsor a student today!',
        buttonText: 'Sponsor a Student',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: SponsorStudent,
      },
      {
        title: 'Active Courses',
        caption:
          'Check out your active courses and see what you have been learning.',
        buttonText: 'Active Courses',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: false,
        component: ActiveCourses,
      },
    ],
    row3: [
      {
        title: 'Swap Assets',
        caption: 'Swap your assets with other users on the platform.',
        buttonText: 'Swap Assets',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: false,
        component: SwapAssets,
      },
      {
        title: 'Liquidity Staking',
        caption: 'Stake your assets to earn rewards.',
        buttonText: 'Liquidity Staking',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: LiquidityStaking,
      },
      {
        title: 'NFT Marketplace',
        caption: 'Buy assets with your Winston account.',
        buttonText: 'Marketplace',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: NFTMarketplace,
      },
      {
        title: 'Crowd Fund',
        caption: 'Crowd fund with your Winston account.',
        buttonText: 'Crowd Fund',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: CrowdFund,
      },
      {
        title: 'Shop for Swag',
        caption: 'Buy swag with your Winston account.',
        buttonText: 'Swag Store',
        completed: false,
        icon: 'https://winston.services/assets/winston.png',
        dismiss: false,
        canDismiss: true,
        component: SwagStore,
      },
    ],
  });

  const handleInProgress = (row, item) => {
    setInProgress({
      row,
      item,
    });
  };

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

  const handleDismissItem = (row, item) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      const itemIndex = updatedItems[row].findIndex(
        (i) => i.title === item.title
      );
      if (itemIndex !== -1) {
        updatedItems[row][itemIndex].dismiss =
          !updatedItems[row][itemIndex].dismiss;
      }
      return updatedItems;
    });
  };

  const renderCard = (row, item) => {
    return (
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
              <>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'left',
                    margin: 0,
                    paddingTop: '6px',
                    fontSize: '10px',
                  }}
                >
                  {item.title}

                  {item.canDismiss && (
                    <span style={{ float: 'right' }}>
                      <Tooltip title="Hide this item. It will reappear when you come back.">
                        <Button
                          variant="text"
                          sx={{
                            color: 'red',
                            padding: 0,
                            margin: 0,
                            textTransform: 'none',
                            fontSize: '12px',
                          }}
                          size="small"
                          onClick={() => {
                            handleDismissItem(row, item);
                          }}
                        >
                          Hide
                        </Button>
                      </Tooltip>
                    </span>
                  )}
                </Typography>
              </>
            }
            sx={{ padding: 1 }}
          />
          <CardContent sx={{ flexGrow: 1, padding: 1 }}>
            <Typography variant="caption">{item.caption}</Typography>
          </CardContent>
          <CardMedia
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              src={item.icon}
              alt="Logo"
              sx={{ width: 96, height: 96, marginBottom: '16px' }}
            />
          </CardMedia>
          <Button
            variant="contained"
            color="info"
            sx={{ mt: 'auto', textTransform: 'none' }}
            fullWidth
            onClick={() => {
              handleInProgress(row, item);
            }}
          >
            {item.buttonText}
          </Button>
        </Card>
      </Box>
    );
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

  React.useEffect(() => {
    if (!auth?.authenticated) {
      navigate('/sign-in', { state: { from: location } });
    }
  }, [auth]);

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

        {!inProgress &&
          ['row1', 'row2', 'row3'].reduce((acc, rowName, index, array) => {
            const activeItems = items[rowName].filter(
              (item) => !item.completed && !item.dismiss
            );
            if (
              acc.length &&
              acc[acc.length - 1].length + activeItems.length < 3
            ) {
              acc[acc.length - 1] = acc[acc.length - 1].concat(
                activeItems.map((item) => renderCard(rowName, item))
              );
            } else {
              acc.push(activeItems.map((item) => renderCard(rowName, item)));
            }
            if (index === array.length - 1) {
              return acc.map((group, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    width: '100%',
                    marginTop: '16px',
                  }}
                >
                  {group}
                </Box>
              ));
            }
            return acc;
          }, [])}

        {inProgress && (
          <InProgress inProgress={inProgress} setInProgress={setInProgress} />
        )}

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
