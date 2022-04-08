import React from 'react';

import { Container, Grid, Typography, Paper } from '@mui/material';

import DiscordLink from '../../components/DiscordLink';
import TwitterLink from '../../components/TwitterLink';
import YoutubeLink from '../../components/YoutubeLink';
import TeamImage from './../../assets/team_image.png';

const teamData = [
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: TeamImage,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
];

function index() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Meet Our Team
      </Typography>
      <Grid container spacing={3} mt={4}>
        {teamData.map((item, index) => (
          <Grid item key={item.name + index} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={0}
              sx={{
                py: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                alignItems: 'center',
              }}
            >
              <Grid className="gradient-border">
                <img
                  src={item.image}
                  style={{
                    border: '8px solid #31256c',
                    borderRadius: '100px',
                  }}
                />
              </Grid>
              <Grid>
                <Typography variant="h6" textAlign={'center'}>
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" textAlign={'center'}>
                  {item.designation}
                </Typography>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{ my: 8, justifyContent: 'center' }}
              >
                <Grid item xs={2} sm={2.3} md={2.5} lg={2.5} xl={2.8}>
                  <DiscordLink />
                </Grid>
                <Grid item xs={2} sm={2.3} md={2.5} lg={2.5} xl={2.8}>
                  <TwitterLink />
                </Grid>
                <Grid item xs={2} sm={2.3} md={2.5} lg={2.5} xl={2.8}>
                  <YoutubeLink />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default index;
