import React from 'react';

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../context/authContext';
import logo from './../../assets/logo_footer.svg';
import logoDark from './../../assets/logo_footer_dark.svg';
import winston from './../../assets/winston_ahwa_footer.svg';
import DiscordLink from './../../components/DiscordLink';
import TwitterLink from './../../components/TwitterLink';
import YoutubeLink from './../../components/YoutubeLink';

export default function LandingFooter() {
  const auth = useAuth();
  const theme = useTheme();
  const footerMenu = [
    {
      name: 'Community',
      menuItems: [
        {
          name: auth?.authenticated ? 'Dashboard' : 'Sign In',
          url: auth?.authenticated ? '/dashboard' : '/sign-in',
        },
        {
          name: 'News',
          url: '/news',
        },
        {
          name: 'Meet the team',
          url: '/our-team',
        },
        {
          name: 'Discord',
          href: 'https://discord.gg/rickle-897546129108008960',
        },
        {
          name: 'Twitter',
          href: 'https://x.com/Rickle_Token',
        },
        {
          name: 'Github',
          href: 'https://github.com/Winston-Services',
        },
      ],
    },
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
          name: 'Funding',
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
      name: 'Support',
      menuItems: [
        {
          name: 'Network Status',
          url: '/network-status',
        },
        {
          name: 'Support',
          url: '/support',
        },
        {
          name: 'Feedback',
          url: '/feedback',
        },
        {
          name: 'Issues',
          href: 'https://github.com/Winston-Services/dev.winston.services/issues',
        },
        {
          name: 'Documentation',
          href: 'https://docs.winston.services',
        },
      ],
    },
    {
      name: 'Resources',
      menuItems: [
        {
          name: 'Contact',
          url: '/contact-us',
        },
        {
          name: 'Developers',
          url: '/developers',
        },
        {
          name: 'Supported Coins',
          url: '/supported-coins',
        },
        {
          name: 'Assets',
          url: '/assets',
        },
        {
          name: 'Demo Cart',
          href: 'https://demo-shop.winston.services',
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
          name: 'Contributors',
          url: '/our-contributors',
        },
        {
          name: 'Terms of Service',
          url: null,
        },
        {
          name: 'Privacy Policy',
          url: null,
        },
      ],
    },
  ];

  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" id="more">
      <Grid container sx={{ mt: 8, pt: 8 }}>
        <Grid item xs={12} md={4} container>
          <Grid item xs={3}>
            <Box src={winston} component="img" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={9}>
            <Box
              component="img"
              src={theme.palette.mode === 'dark' ? logo : logoDark}
              sx={{
                width: '100%',
                maxWidth: '311.77px',
                mb: 2,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            />
            <Grid
              sx={{ gap: { xs: 1, sm: 2.5 } }}
              display="flex"
              justifyContent="start"
              ml={{ xs: 2, sm: 6 }}
              mt={{ xs: 1.5, sm: 3.5 }}
            >
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <DiscordLink
                  style={{
                    backgroundColor:
                      theme.palette.mode === 'dark' ? undefined : '#493799',
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <TwitterLink
                  style={{
                    backgroundColor:
                      theme.palette.mode === 'dark' ? undefined : '#493799',
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  height: { xs: 50 },
                  width: { xs: 50 },
                }}
              >
                <YoutubeLink
                  style={{
                    backgroundColor:
                      theme.palette.mode === 'dark' ? undefined : '#493799',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs container flexGrow={1}>
          {footerMenu.map((menu) => (
            <Grid
              item
              xs={12}
              sm={6}
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
                    onClick={
                      menuItem.url
                        ? () => {
                            menuItem.url && navigate(menuItem.url);
                          }
                        : undefined
                    }
                    href={menuItem.href ? menuItem.href : undefined}
                    target={menuItem.href ? '_blank' : undefined}
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? 'white' : 'black',
                      '&:hover': {
                        color:
                          theme.palette.mode === 'dark' ? 'white' : 'black',
                      },
                      '&:active': {
                        color:
                          theme.palette.mode === 'dark' ? 'white' : 'black',
                      },
                      '&:focus': {
                        color:
                          theme.palette.mode === 'dark' ? 'white' : 'black',
                      },
                      '&:visited': {
                        color:
                          theme.palette.mode === 'dark' ? 'white' : 'black',
                      },
                      '&:link': {
                        color:
                          theme.palette.mode === 'dark' ? 'white' : 'black',
                      },
                      cursor: 'pointer',
                    })}
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
          <Typography variant="subtitle1">Powered by : Winston</Typography>
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
            sx={{
              textDecoration: 'none',
              textUnderlineOffset: '5px',
              '&:hover': {
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              },
              '&:active': {
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              },
              '&:focus': {
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              },
              '&:visited': {
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              },
              '&:link': {
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              },
              cursor: 'pointer',
            }}
          >
            Copyright © 2022-2025 M.A.D. Computer Consulting LLC{' '}
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
