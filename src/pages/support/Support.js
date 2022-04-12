import React from 'react';

import {
  PlayArrow,
  Storefront,
  AccountCircle,
  VerifiedUser,
  Assignment,
  School,
  Help,
} from '@mui/icons-material/';
import { Container, Grid, Link, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchBar from './components/SearchBar';

const popularTopics = [
  {
    icon: PlayArrow,
    title: 'Getting started',
    URL: '/support/getting-started',
  },
  { icon: Storefront, title: 'Buy and sell', URL: null },
  {
    icon: AccountCircle,
    title: 'Account functions',
    URL: '/support/account-functions',
  },
  { icon: VerifiedUser, title: 'Security tips', URL: null },
  { icon: Assignment, title: 'Terms & services', URL: null },
];

const readMore = [
  { icon: School, title: 'Winston Academy' },
  { icon: Help, title: 'Need help' },
];

function Support() {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h3">Support</Typography>

      <Grid mt={5}>
        <SearchBar />
      </Grid>
      <Typography variant="h5" mt={5}>
        Popular topics
      </Typography>

      {popularTopics.map((item) => (
        <Paper elevation={0} key={item.title} sx={{ mt: '20px', p: 2.5 }}>
          <Grid display={'flex'} justifyContent="space-between">
            <Grid display={'flex'} alignItems="center">
              <item.icon sx={{ color: '#2488FF' }} />
              <Link onClick={() => navigate(item.URL)} variant="h5" ml={2.5}>
                {item.title}
              </Link>
            </Grid>
            <Grid display={'flex'} alignItems="center">
              <PlayArrow />
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Typography variant="h5" mt={5} mb={2.5}>
        Read more
      </Typography>

      <Grid container spacing={2.5}>
        {readMore.map((item) => (
          <Grid key={item.title} item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 2.5, cursor: 'pointer' }}>
              <Grid display={'flex'} justifyContent="space-between">
                <Grid display={'flex'} alignItems="center">
                  <item.icon sx={{ color: '#2488FF' }} />
                  <Typography variant="h5" ml={2.5}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid display={'flex'} alignItems="center">
                  <PlayArrow />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Support;
