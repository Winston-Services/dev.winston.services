import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Grid,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from './../../assets/logo.svg';
import ElevationScroll from './../../components/elevated-scroll/index';
import { Close, Menu as MenuIcon } from '@mui/icons-material';

const menuList = [
  {
    name: 'Home',
    key: 'home',
  },
  {
    name: 'Services',
    key: 'services',
  },
  {
    name: 'Discord',
    key: 'discord',
  },
  {
    name: 'Create Your Own Blockchain',
    key: 'createBlockchain',
  },
  {
    name: 'Academy',
    key: 'academy',
  },
];
const defaultActive =
  window.location.pathname === '/'
    ? window.location.hash.replace('#', '') || menuList[0].key
    : '';
var timer;
export default function LandingTopNav() {
  const [value, setValue] = React.useState(defaultActive);
  const navigate = useNavigate();
  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = () => {
    setMenuState(!menuState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const index = menuList.findIndex((menu) => {
          const ele = document.getElementById(menu.key);
          return ele && ele.offsetTop + ele.clientHeight > window.pageYOffset;
        });
        setValue(index ? menuList[index]?.key : menuList[0].key);
      }, 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleChange = (newValue) => {
    if (document.getElementById(newValue)) {
      window.scrollTo(0, document.getElementById(newValue).offsetTop);
    }
    navigate(`/#${newValue}`);
    setValue(newValue);
  };
  return (
    <ElevationScroll>
      <AppBar>
        <Box className={`landingInGradient bannerSkewY`} component={'div'}>
          <Box className={`landingInGradientShades`} component={'div'}></Box>
        </Box>
        <Container maxWidth="lg">
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Box
                  component="img"
                  src={Logo}
                  alt="crypto"
                  sx={{ height: '47px' }}
                />
              </Grid>
              <Grid
                item
                sx={{ display: { xs: 'none', md: 'flex' } }}
                flexGrow={1}
                display="flex"
                justifyContent={'flex-end'}
                alignItems="center"
              >
                {menuList.map((menu) => (
                  <Link
                    key={menu.key}
                    onClick={() => handleChange(menu.key)}
                    sx={{ mx: 2 }}
                    color={'nav'}
                    underline={'none'}
                    className={
                      value === menu.key ? 'nav-link active' : 'nav-link'
                    }
                  >
                    {menu.name}
                  </Link>
                ))}
                {/* <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="Navigation"
                >
                  {menuList.map((menu) => (
                    <Tab
                      key={menu.key}
                      value={menu.key}
                      label={menu.name}
                      disableRipple
                    />
                  ))}
                </Tabs> */}
              </Grid>
              <Grid
                sx={{ display: { xs: 'none', md: 'flex' } }}
                item
                alignItems={'center'}
              >
                <Button
                  variant="outlined"
                  sx={{ ml: 3 }}
                  onClick={() => navigate('/sign-in')}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid
                sx={{ display: { xs: 'flex', md: 'none' } }}
                alignItems="center"
                item
              >
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={'top'}
                  open={menuState}
                  onClose={toggleDrawer}
                  PaperProps={{ gradient: true }}
                >
                  <Box className={`landingInGradient`} component={'div'}>
                    <Box
                      className={`landingInGradientShades`}
                      component={'div'}
                    ></Box>
                  </Box>
                  <Grid
                    container
                    justifyContent="space-between"
                    sx={{ my: 4, px: 4 }}
                  >
                    <Grid item flexGrow={1}>
                      <Box
                        component="img"
                        src={Logo}
                        alt="crypto"
                        sx={{ height: '47px' }}
                      />
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton aria-label="delete" onClick={toggleDrawer}>
                        <Close />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{ width: 'auto', px: 2, textAlign: 'center' }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                  >
                    <List>
                      {menuList.map((menu) => (
                        <ListItem button key={menu.key}>
                          <ListItemText
                            sx={{ textAlign: 'center' }}
                            primary={menu.name}
                            onClick={(e) => handleChange(e, menu.key)}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ mb: 3 }}
                      onClick={() => navigate('/sign-in')}
                    >
                      Sign In
                    </Button>
                  </Box>
                </Drawer>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
