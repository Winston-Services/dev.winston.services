import React from 'react';
import { Typography, Grid, Button, Paper, TextField } from '@mui/material';
export default function CustomizeWinston() {
  return (
    <div>
      <Grid container>
        <Grid item sm={12} md={7} lg={7}>
          <Typography variant="h2" mt={15} sx={{ fontWeight: '700' }}>
            Customize Winston
          </Typography>
          <Typography
            width={'80%'}
            mt={3}
            variant={'h6'}
            sx={{ fontWeight: '400' }}
            className={`discrimination`}
          >
            Love the features of Winston, and want some of those features added
            to your own Discord server? Winston can help with that. Sign-In to
            add your bot credentials to have Winston spawn up your bot using the
            Winston network.
          </Typography>
          <Button variant="outlined" sx={{ marginTop: '50px' }}>
            Add winston to discoard
          </Button>
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          <Paper
            variant="outlined"
            sx={{
              display: 'flex',
              flexFlow: 'column',
              marginTop: '70px',
              textAlign: 'center',
              borderRadius: '30px',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
              Whitelabel Winston with a bot
            </Typography>
            <TextField
              sx={{ marginTop: '50px' }}
              label={'Add Winston to Discord'}
              placeholder={'Add Winston to Discord'}
            />
            <TextField
              sx={{ marginTop: '20px' }}
              label={'Discord Bot API Key'}
              placeholder={'HKDIK$KS(S78da43ad86dsd86faedfa43fasdf'}
            />
            <Button
              sx={{ marginTop: '50px' }}
              variant="contained"
              color="secondary"
            >
              Add on Discord
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
