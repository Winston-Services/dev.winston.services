import React from 'react';

import { Container, Grid, Typography, Card } from '@mui/material';

import CareTakers1 from './../../assets/board_of_care_takers_1.png';
import CareTakers2 from './../../assets/board_of_care_takers_2.png';
import CareTakers3 from './../../assets/board_of_care_takers_3.png';
import CareTakers4 from './../../assets/board_of_care_takers_4.png';
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

const boardOfCaretakers = [
  {
    image: CareTakers1,
    name: 'Michael Dennis',
    designation: 'Chief managing officer',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
  {
    image: CareTakers2,
    name: 'Robert D. Obrien',
    designation: 'Chief managing officer',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
  {
    image: CareTakers3,
    name: 'Jenny A. Taylor',
    designation: 'Chief managing officer',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
  {
    image: CareTakers4,
    name: 'Daniel J. Carr',
    designation: 'Chief managing officer',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
];

function index() {
  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Board of care takers
      </Typography>
      {boardOfCaretakers.map((item, index) => (
        <Grid key={item.name} sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid
            container
            spacing={{ xs: 3, md: 6 }}
            display="flex"
            sx={
              index % 2 === 0
                ? { flexDirection: { md: 'row-reverse' } }
                : { flexDirection: { md: 'row' } }
            }
          >
            <Grid item xs={12} sm={6} md={4}>
              <img src={item.image} style={{ width: '100%' }} />
            </Grid>
            <Grid item md={8} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="h6">{item.designation}</Typography>
              <Typography variant="subtitle1" sx={{ mt: { xs: 2, md: 3 } }}>
                {item.about1}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: { xs: 2, md: 3 } }}>
                {item.about2}
              </Typography>
              <Grid
                container
                mt={3}
                gap={1.5}
                display="flex"
                sx={{ justifyContent: { xs: 'center', sm: 'start' } }}
              >
                <Grid item height={40} width={40}>
                  <DiscordLink />
                </Grid>
                <Grid item height={40} width={40}>
                  <TwitterLink />
                </Grid>
                <Grid item height={40} width={40}>
                  <YoutubeLink />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Typography
        variant="h3"
        textAlign="center"
        mt={12}
        sx={{ mb: { xs: 2.5, md: 6.25 } }}
      >
        Core team
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {teamData.map((item, index) => (
          <Grid item key={item.name + index} xs={12} sm={6} md={4} lg={3}>
            <Card
              elevation={0}
              sx={{
                py: { xs: 2.5, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, md: 3 },
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
              <Grid container spacing={2} justifyContent="center">
                <Grid item width={55} height={55}>
                  <DiscordLink />
                </Grid>
                <Grid item width={55} height={55}>
                  <TwitterLink />
                </Grid>
                <Grid item width={55} height={55}>
                  <YoutubeLink />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default index;
