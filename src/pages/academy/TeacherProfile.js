import React from 'react';
import { Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import { Twitter, YouTube } from '@mui/icons-material';
import { ReactComponent as Discord } from './../../assets/discord_brands.svg';
import { ReactComponent as EyeIcon } from '../../assets/Eye.svg';
import { ReactComponent as Badge } from '../../assets/Badge.svg';
import TeacherProfileImage from './../../assets/teacher-image.png';
import TeacherProfileTabs from './components/TeacherProfileTabs';

function TeacherProfile() {
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <Grid item md={4} width="100%">
          <Paper elevation={0} sx={{ p: 6 }}>
            <img src={TeacherProfileImage} style={{ width: '100%' }} />
            <Grid textAlign={'center'}>
              <Typography variant="h5" mt={3}>
                Hattie H. Moore
              </Typography>
              <Typography variant="subtitle1">
                hattie.moore@email.com
              </Typography>
            </Grid>
            <Grid mt={4} textAlign={'center'}>
              <IconButton>
                <Discord />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <YouTube />
              </IconButton>
            </Grid>

            <Grid display={'flex'} justifyContent="space-between" mt={6}>
              <Grid>
                <Grid display={'flex'} alignItems={'center'} gap={1}>
                  <Badge />
                  <Typography variant="h5">520</Typography>
                </Grid>
                <Typography variant="subtitle2" ml={4}>
                  Total Reward
                </Typography>
              </Grid>
              <Grid>
                <Grid display={'flex'} alignItems={'center'} gap={1}>
                  <EyeIcon />
                  <Typography variant="h5">10,254</Typography>
                </Grid>
                <Typography variant="subtitle2" ml={5}>
                  Total Viewer
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={8} mt={-2.2}>
          <TeacherProfileTabs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default TeacherProfile;
