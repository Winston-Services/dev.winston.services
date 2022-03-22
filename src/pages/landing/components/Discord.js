import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import WinstonRobot from './../../../assets/discord_winston_robot.svg';
import DiscordLaptop from './../../../assets/discord_laptop.svg';
import { useNavigate } from 'react-router-dom';

export default function Discord() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography id="discordTitle" variant="h3" sx={{ my: 3 }}>
          Discord
        </Typography>
        <Typography textAlign="justify" sx={{ mb: 6 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s
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
            Winston
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
              // startIcon={<LockIcon />}
              // onClick={handleUploadClick}
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
          <Box
            component="img"
            src={DiscordLaptop}
            sx={{ width: '100%', height: 'auto' }}
          />
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
            Whitelabel Winston
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
              Get on discord
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
