import React from 'react';

import { Container, Grid, Typography, Card, Avatar } from '@mui/material';

import CareTakers2 from './../../assets/board_of_care_takers_2.png';
import CareTakers3 from './../../assets/board_of_care_takers_3.png';
import CareTakers4 from './../../assets/board_of_care_takers_4.png';
import CareTakers1 from './../../assets/drb_ai_gen.png';
import OurTeam1 from './../../assets/drb_ai_gen.png';
import OurTeam2 from './../../assets/our_team2.png';
import OurTeam3 from './../../assets/our_team3.png';
/*
import OurTeam4 from './../../assets/our_team4.png';
import OurTeam5 from './../../assets/our_team5.png';
import OurTeam6 from './../../assets/our_team6.png';
import OurTeam7 from './../../assets/our_team7.png';
import OurTeam8 from './../../assets/our_team8.png';
*/
import DiscordLink from './../../components/DiscordLink';
import TwitterLink from './../../components/TwitterLink';
import YoutubeLink from './../../components/YoutubeLink';

const teamData = [
  {
    image: OurTeam1,
    name: 'Michael D.',
    designation: 'Founder | Blockchain Expert',
  },
  {
    image: OurTeam2,
    name: 'Brent G.',
    designation: 'Founder | Payments Expert',
  },
  {
    image: OurTeam3,
    name: 'Mike E.',
    designation: 'Founder | Communications Expert',
  },
];

const boardOfCaretakers = [
  {
    image: CareTakers1,
    name: 'Michael D. (AKA) @dreamingrainbow',
    designation: 'Founder',
    about1:
      'Michael is a proven entrepreneur with a track record of success in the technology and finance industries. He has a deep understanding of the blockchain space and has been involved in the development of several successful projects.',
    about2:
      'The founder of Winston, and visionary behind the project. Michael\'s vision is to create a decentralized platform that empowers individuals and communities to take control of their financial future.',
  },
  {
    image: CareTakers2,
    name: 'Brent G. (AKA) @PaymentsDesigner',
    designation: 'Founder',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
  {
    image: CareTakers4,
    name: 'Melkanea (AKA) @Melkanea',
    designation: 'Caretaker',
    about1:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
    about2:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
  },
  {
    image: CareTakers3,
    name: 'ReedOne (AKA) @ReedOne',
    designation: 'Caretaker',
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
        Board of Care Takers
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
              <img src={item.image} style={{ width: '100%', objectFit: 'cover', height: 'calc(100% - 10px)', objectPosition: 'center top 15px' }} />
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
        Founders
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          flexDirection: { sx: 'column', md: 'row' },
          justifyContent: { xs: 'start', md: 'center' },
          alignItems: { xs: 'start', md: 'center' },
        }}
      >
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
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    border: '8px solid #31256c',
                    borderRadius: '100px',
                  }}
                  src={item.image}
                ></Avatar>
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
