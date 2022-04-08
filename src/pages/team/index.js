import React from 'react';

import { Container, Grid, Typography, Paper } from '@mui/material';

import OurTeam from './../../assets/our_team.png';
import OurTeam1 from './../../assets/our_team1.png';
import OurTeam2 from './../../assets/our_team2.png';
import OurTeam3 from './../../assets/our_team3.png';
import OurTeam4 from './../../assets/our_team4.png';
import OurTeam5 from './../../assets/our_team5.png';
import OurTeam6 from './../../assets/our_team6.png';
import OurTeam7 from './../../assets/our_team7.png';
import OurTeam8 from './../../assets/our_team8.png';
import DiscordLink from './../../components/DiscordLink';
import TwitterLink from './../../components/TwitterLink';
import YoutubeLink from './../../components/YoutubeLink';

const teamData = [
  {
    image: OurTeam1,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam2,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam3,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam4,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam5,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam6,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam7,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
  },
  {
    image: OurTeam8,
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
        <Grid item md={7}>
          <Typography variant="h4">Michael Dennis</Typography>
          <Typography variant="h6">Chief managing officer</Typography>
          <Typography variant="subtitle1" mt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla odio non aenean a lobortis. Nunc semper quisque dictum
            faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis
            integer. Amet, in vitae, lacus, at mattis quis ut sed.
          </Typography>
          <Typography variant="subtitle1" mt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            fringilla odio non aenean a lobortis. Nunc semper quisque dictum
            faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis
            integer. Amet, in vitae, lacus, at mattis quis ut sed.
          </Typography>
          <Grid container mt={3} xs={3}>
            <Grid item xs>
              <DiscordLink />
            </Grid>
            <Grid item xs>
              <TwitterLink />
            </Grid>
            <Grid item xs>
              <YoutubeLink />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} />
        <Grid item md={4}>
          <img src={OurTeam} style={{ width: '100%' }} />
        </Grid>
      </Grid>
      <Typography variant="h3" textAlign="center" mt={12}>
        Board of directors
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
