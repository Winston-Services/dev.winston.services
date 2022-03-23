import React from 'react';
import { Box, Container, Grid, Stack, Typography, Link } from '@mui/material';
import logo from './../../assets/logo_footer.svg';
import winston from './../../assets/winston_ahwa_footer.svg';
import { ReactComponent as Discord } from './../../assets/discord_brands.svg';
import { ReactComponent as Twitter } from './../../assets/twitter_brands.svg';
import { ReactComponent as Youtube } from './../../assets/youtube_brands.svg';
import { useNavigate } from 'react-router-dom';

const footerMenu = [
  {
    name: 'Services',
    menuItems: [
      {
        name: 'Academy',
        url: '/academy',
      },
      {
        name: 'Marketplace',
        url: '/marketplace',
      },
      {
        name: 'Workshop',
        url: '/wizard',
      },
      {
        name: 'Faucet',
        url: '/faucet',
      },
      {
        name: 'Staking',
        url: '/staking',
      },
      {
        name: 'Burning',
        url: '/burning',
      },
      {
        name: 'Swapping',
        url: '/swapping',
      },
    ],
  },
  {
    name: 'Integrations',
    menuItems: [
      {
        name: 'Discord',
        url: null,
      },
      {
        name: 'Slack',
        url: null,
      },
      {
        name: 'Telegram',
        url: null,
      },
      {
        name: 'Twitter',
        url: null,
      },
      {
        name: 'Bitbucket',
        url: null,
      },
    ],
  },
  {
    name: 'Connect',
    menuItems: [
      {
        name: 'Login',
        url: '/sign-in',
      },
      {
        name: 'Feedback',
        url: null,
      },
      {
        name: 'Contact',
        url: null,
      },
      {
        name: 'Wiki',
        url: null,
      },
      {
        name: 'Support',
        url: null,
      },
      {
        name: 'Developers',
        url: null,
      },
    ],
  },
  {
    name: 'About',
    menuItems: [
      {
        name: 'News',
        url: null,
      },
      {
        name: 'Meet the team',
        url: null,
      },
      {
        name: 'Assets',
        url: null,
      },
      {
        name: 'Currencies',
        url: null,
      },
      {
        name: 'Network status',
        url: null,
      },
      {
        name: 'Supported Coins',
        url: '/supported-coins',
      },
    ],
  },
  {
    name: 'Legal',
    menuItems: [
      {
        name: 'Whitepapers',
        url: null,
      },
      {
        name: 'Terms',
        url: null,
      },
      {
        name: 'Privacy',
        url: null,
      },
      {
        name: 'Investors',
        url: null,
      },
    ],
  },
];
export default function LandingFooter() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} md={4} container>
          <Grid item xs={3}>
            <Box src={winston} component="img" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={9}>
            <Box src={logo} component="img" sx={{ width: '100%', mb: 3 }} />
            <Grid container spacing={4}>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                <Discord width={'100%'} />
              </Grid>
              <Grid item xs={3}>
                <Twitter width={'100%'} />
              </Grid>
              <Grid item xs={3}>
                <Youtube width={'100%'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs container flexGrow={1}>
          {footerMenu.map((menu) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={12 / footerMenu.length}
              key={menu.name}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  my: 3,
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                }}
              >
                {menu.name}
              </Typography>
              <Stack spacing={2}>
                {menu.menuItems.map((menuItem) => (
                  <Link
                    underline="none"
                    key={menuItem.name}
                    component="a"
                    variant="body2"
                    color="primary"
                    onClick={() => {
                      navigate(menuItem.url);
                    }}
                  >
                    {menuItem.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container sx={{ my: 10, pb: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            Powered by : Winston Services
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: { xs: 'center', md: 'right' } }}
          >
            Copyright © 2022 M.A.D. Computer Consulting LLC{' '}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}