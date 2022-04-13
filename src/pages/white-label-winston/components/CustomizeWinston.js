import React from 'react';

import {
  Typography,
  Grid,
  Button,
  Card,
  TextField,
  CardContent,
} from '@mui/material';

export default function CustomizeWinston() {
  return (
    <Grid container spacing={5}>
      <Grid item sm={12} md={7} lg={7}>
        <Typography variant="h2">Customize Winston</Typography>
        <Typography variant={'subtitle1'} sx={{ mt: 2, mr: { xs: 0, md: 5 } }}>
          Love the features of Winston, and want some of those features added to
          your own Discord server? Winston can help with that. Sign-In to add
          your bot credentials to have Winston spawn up your bot using the
          Winston network.
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: 5, width: { xs: '100%', sm: 'auto' } }}
          onClick={() =>
            window.open(
              'https://discord.com/api/oauth2/authorize?client_id=594415583638847488&scope=bot&permissions=8'
            )
          }
        >
          Add Winston to Discord
        </Button>
      </Grid>
      <Grid item sm={12} md={5} lg={5}>
        <Card elevation={0}>
          <CardContent sx={{ p: { xs: 2.5, sm: 5 }, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 400, mb: 5 }}>
              White label Winston with a bot
            </Typography>
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              label={'Add Winston to Discord'}
              placeholder={'Add Winston to Discord'}
            />
            <TextField
              fullWidth
              sx={{ mb: 3 }}
              label={'Discord Bot API Key'}
              placeholder={'HKDIK$KS(S78da43ad86dsd86faedfa43fasdf'}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Add on Discord
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
