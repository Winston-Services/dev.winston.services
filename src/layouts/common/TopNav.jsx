import React from 'react';
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
} from '@mui/material';
import {
  AccountCircle,
  Notifications as NotificationsIcon,
  Brightness4,
  Brightness7,
  ExitToApp,
  Menu as MenuIcon,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import logoLight from '../../assets/logo.svg';
import logoDark from '../../assets/logoDark.svg';
import { stringAvatar } from '../../services/wallet/utils';
import { themeModeSelector, toggleTheme } from './../../store/themeColors';
import { sideBarStateSelector, toggleSideBar } from './../../store/sideBar';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: '56px',
  justifyContent: 'center',
  boxShadow: 'none',
  backgroundImage: 'none',
}));

function TopNav() {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(toggleTheme())}
      >
        <IconButton aria-label="show 17 new notifications" color="inherit">
          {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        Theme Mode
      </MenuItem>
      <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        Notifications
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
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
      <MenuItem onClick={handleProfileMenuOpen}>
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
        />
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            sx={{ display: { xs: 'none', md: 'inline-flex' }, mr: 2 }}
            onClick={() => dispatch(toggleTheme())}
            color="inherit"
          >
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton
            sx={{ display: { xs: 'none', md: 'inline-flex' }, mr: 2 }}
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
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
                <Avatar {...stringAvatar('Bhavesh Modi')} />
              </Grid>
              <Grid
                item
                xs={12}
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
                  {'Project Manager'}
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
