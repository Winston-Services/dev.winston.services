import React from 'react';

import {
  AccountCircle,
  Notifications as NotificationsIcon,
  Brightness4,
  Brightness7,
  ExitToApp,
  Menu as MenuIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import {
  Menu,
  Box,
  MenuItem,
  IconButton,
  Avatar,
  Badge,
  Toolbar,
  AppBar as MuiAppBar,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import logoLight from '../../assets/logo.svg';
import logoDark from '../../assets/logo_dark.svg';
import useAuth from '../../context/authContext';
import { sideBarStateSelector, toggleSideBar } from '../../store/sideBar';
import { themeModeSelector, toggleTheme } from '../../store/themeColors';
import { stringAvatar } from '../../utils/commonFunctions';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: '86px',
  justifyContent: 'center',
  boxShadow: 'none',
  backgroundImage: 'none',
}));

function NotificationBadge(props) {
  // eslint-disable-next-line react/prop-types
  const { count, color } = props;
  return (
    <Badge badgeContent={count} color={color}>
      <NotificationsIcon />
    </Badge>
  );
}

function TopNav() {
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSideBarOpen = useSelector(sideBarStateSelector);
  const themeMode = useSelector(themeModeSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    dispatch(toggleSideBar());
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem
        sx={{ display: { xs: 'flex', md: 'none' } }}
        onClick={() => dispatch(toggleTheme('dashboard'))}
      >
        <IconButton aria-label="show 17 new notifications" color="inherit">
          {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        Theme Mode
      </MenuItem>
      <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton aria-label="show 0 new notifications" color="inherit">
          <NotificationBadge count={0} color="error" />
        </IconButton>
        Notifications
      </MenuItem>
      <MenuItem onClick={() => navigate('/user-profile')}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
      <MenuItem onClick={() => auth.removeAuth()}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToApp />
        </IconButton>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed" open={isSideBarOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          style={{
            marginRight: '25px',
            marginLeft: '-3px',
          }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={themeMode === 'dark' ? logoLight : logoDark}
          style={{ cursor: 'pointer', height: '35px' }}
          onClick={() => {
            navigate('/');
          }}
        />
        <Stack sx={{ flexDirection:'row', ml: 6 }}>
          <MenuItem>Swap</MenuItem>
          <MenuItem>Liquidity</MenuItem>
          <MenuItem>Market Place</MenuItem>
          <MenuItem>Crowd Funding</MenuItem>
          <MenuItem>Workshop</MenuItem>
          <MenuItem>Academy</MenuItem>
        </Stack>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <IconButton
            sx={{ display: { xs: 'none', md: 'inline-flex' }, mr: 2 }}
            onClick={() => dispatch(toggleTheme('dashboard'))}
            color="inherit"
          >
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton
            sx={{ display: { xs: 'none', md: 'inline-flex' }, mr: 2 }}
            aria-label="show 0 new notifications"
            color="inherit"
          >
            <NotificationBadge count={0} color="error" />
          </IconButton>
          <Button
            aria-controls={menuId}
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs="auto" alignItems="flex-start">
                <Avatar {...stringAvatar('Michael Dennis')} />
              </Grid>
              <Grid
                item
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                sm
                container
                direction="column"
                alignItems="flex-start"
              >
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  style={{ textTransform: 'none' }}
                >
                  {'Michael Dennis'}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  style={{ textTransform: 'none' }}
                >
                  {'Founder'}
                </Typography>
              </Grid>
              <Grid color="text.primary" item xs="auto" alignItems="center">
                <KeyboardArrowDown
                  sx={{
                    transform: anchorEl ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </Grid>
            </Grid>
          </Button>
        </Box>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}
export default TopNav;
