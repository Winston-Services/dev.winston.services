import React from 'react';

import { Box, Container, Grid, Stack, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import logo from './../../assets/logo_footer.svg';
import winston from './../../assets/winston_ahwa_footer.svg';
import DiscordLink from './../../components/DiscordLink';
import TwitterLink from './../../components/TwitterLink';
import YoutubeLink from './../../components/YoutubeLink';

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
        name: 'Community Funding',
        url: '/community-funding',
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
        name: 'Sign In',
        url: '/sign-in',
      },
      {
        name: 'Feedback',
        url: '/feedback',
      },
      {
        name: 'Contact',
        url: '/contact-us',
      },
      {
        name: 'Wiki',
        url: '/wiki',
      },
      {
        name: 'Support',
        url: '/support',
      },
      {
        name: 'Developers',
        url: '/developers',
      },
    ],
  },
  {
    name: 'About',
    menuItems: [
      {
        name: 'News',
        url: '/news',
      },
      {
        name: 'Meet the team',
        url: '/our-team',
      },
      {
        name: 'Assets',
        url: '/assets',
      },
      {
        name: 'Currencies',
        url: '/currencies',
      },
      {
        name: 'Network status',
        url: '/network-status',
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
        url: '/whitepapers',
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
        url: 'our-investors',
      },
    ],
  },
];
export default function LandingFooter() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} md={4} container>
          <Grid item xs={3}>
            <Box src={winston} component="img" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={9}>
            <Box
              src={logo}
              component="img"
              sx={{
                width: '100%',
                maxWidth: '311.77px',
                mb: 2,
                cursor: 'pointer',
              }}
            />
            <Grid
              sx={{ gap: { xs: 1, sm: 2.5 } }}
              display="flex"
              justifyContent="start"
              ml={10}
            >
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <DiscordLink />
              </Grid>
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <TwitterLink />
              </Grid>
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <YoutubeLink />
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
                      menuItem.url && navigate(menuItem.url);
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Typography variant="subtitle1">
            Powered by : Winston Services
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: 'center', md: 'right' } }}
        >
          <Link
            href={'./assets/pdf/MADComputerConsultingLLC-AOO.pdf'}
            variant="subtitle1"
            target="_blank"
          >
            Copyright © 2022 M.A.D. Computer Consulting LLC{' '}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
