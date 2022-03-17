import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Tabs,
  Tab,
  Grid,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from '@mui/material';
import Logo from './../../assets/logo.svg';
import ElevationScroll from '../../components/elevated-scroll';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { Close, Menu as MenuIcon } from '@mui/icons-material';

const menuList = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'Services',
    href: `#service`,
  },
  {
    name: 'Discord',
    href: `#discord`,
  },
  {
    name: 'Create Your Own Blockchain',
    href: `#createBlockchain`,
  },
  {
    name: 'Academy',
    href: `#academy`,
  },
];
export default function Landing() {
  const [value, setValue] = React.useState(
    window.location.hash || menuList[0].href
  );
  const navigate = useNavigate();
  const [menuState, setMenuState] = React.useState(false);

  const toggleDrawer = () => {
    setMenuState(!menuState);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const index = menuList.findIndex(
        (menu) =>
          document.getElementById(menu.href.replace('#', '')).offsetTop -
            window.innerHeight / 2 >
          window.pageYOffset
      );
      setValue(index > 1 ? menuList[index - 1]?.href : menuList[0].href);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (document.getElementById(newValue.replace('#', ''))) {
      window.scrollTo(
        0,
        document.getElementById(newValue.replace('#', '')).offsetTop - 150
      );
    }
    navigate(newValue);
  };

  return (
    <Box>
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
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Navigation"
                  >
                    {menuList.map((menu) => (
                      <Tab
                        key={menu.href}
                        value={menu.href}
                        label={menu.name}
                        disableRipple
                      />
                    ))}
                  </Tabs>
                </Grid>
                <Grid
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                  item
                  alignItems={'center'}
                >
                  <Button variant="outlined" sx={{ ml: 3 }}>
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
                    PaperProps={{ gradient: true, fullHeight: true }}
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
                          <ListItem button key={menu.href}>
                            <ListItemText
                              sx={{ textAlign: 'center' }}
                              primary={menu.name}
                              onClick={(e) => handleChange(e, menu.href)}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Button variant="outlined" fullWidth sx={{ mb: 3 }}>
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
      <Box component={'div'} id="#home">
        <Home />
      </Box>
    </Box>
  );
}
