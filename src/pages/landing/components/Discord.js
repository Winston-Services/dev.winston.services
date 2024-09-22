import React from 'react';

import { Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import WinstonRobot from './../../../assets/discord_winston_robot.svg';
import DiscordAnimationImage from './../../../components/discord-animation/index';

export default function Discord() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography id="discordTitle" variant="h2" sx={{ my: 3 }}>
          Discord
        </Typography>
        <Typography textAlign="left" sx={{ mb: 6, fontSize: 'xx-large' }}>
          Join Our Thriving Blockchain Community! Step into a world where
          decentralized finance is accessible to everyone. We are eager to
          welcome you and help you start your journey in DeFi. Our dynamic
          community is ready to support you as you embark on your new
          adventure. Our enthusiastic community is here to guide you on your
          path to DeFi success. Embrace decentralized finance with a community
          that’s passionate about making it accessible to all. Your DeFi journey
          begins here with us. Become a Member of Our Blossoming Blockchain
          Family! Dive into decentralized finance with the support of our
          energetic community. We’re excited to help you start your DeFi
          journey.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          sx={{
            mr: { xs: 2, md: 3 },
            mb: 3,
            width: { xs: '100%', sm: 'auto' },
          }}
          onClick={() =>
            window.open(
              'https://discord.gg/rickle-897546129108008960',
              '_blank'
            )
          }
        >
          Join us on discord
        </Button>
      </Grid>
      <Grid item xs={12} container spacing={5} sx={{ mb: 10 }}>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          flexDirection={'column'}
          display="flex"
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Winston Bot
          </Typography>
          <Box component="ul">
            <Box component="li" sx={{ mb: 2 }}>
              Power up your discord server.
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              Assist with all your blockchain needs.
            </Box>
          </Box>
          <Box component="div" sx={{ mt: 6 }}>
            <Button
              variant="outlined"
              sx={{ mr: { xs: 1, md: 3 } }}
              onClick={() => {
                navigate('/white-label-winston');
              }}
            >
              View more
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                window.open(
                  'https://discord.com/api/oauth2/authorize?client_id=594415583638847488&scope=bot&permissions=8',
                  '_blank'
                )
              }
            >
              Add on discord
            </Button>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            src={WinstonRobot}
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ order: { xs: 4, md: 3 } }}>
          <DiscordAnimationImage />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          justifyContent="center"
          flexDirection={'column'}
          display="flex"
          sx={{ order: { xs: 3, md: 4 } }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Whitelabel Winston (Comming Soon)
          </Typography>
          <Box component="ul">
            <Box component="li" sx={{ mb: 2 }}>
              Connect your discord bot with Winston services.
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              Create custom triggers for your bot.
            </Box>
            <Box component="li" sx={{ mb: 2 }}>
              Customize Winston features to suite your server and needs.
            </Box>
          </Box>
          <Box component="div" sx={{ mt: 6 }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                mr: { xs: 2, md: 3 },
                mb: 3,
                width: { xs: '100%', sm: 'auto' },
              }}
              // startIcon={<LockIcon />}
              onClick={() => {
                navigate('/white-label-winston');
              }}
            >
              Integrate Winston
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
