import React from 'react';

import { Card, Container, Grid, Typography } from '@mui/material';

import OurTeam1 from './../../assets/our_team1.png';
import OurTeam2 from './../../assets/our_team2.png';
import OurTeam3 from './../../assets/our_team3.png';
import OurTeam4 from './../../assets/our_team4.png';
import DiscordLink from './../../components/DiscordLink';
import TwitterLink from './../../components/TwitterLink';
import YoutubeLink from './../../components/YoutubeLink';

function index() {
  const investorsData = [
    {
      image: OurTeam1,
      name: 'Michael Dennis',
      designation: 'Chief managing officer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
      links: {
        discord: '',
        twitter: '',
        youtube: '',
      },
    },
    {
      image: OurTeam2,
      name: 'Michael Dennis',
      designation: 'Chief managing officer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
      links: {
        discord: '',
        twitter: '',
        youtube: '',
      },
    },
    {
      image: OurTeam3,
      name: 'Michael Dennis',
      designation: 'Chief managing officer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
      links: {
        discord: '',
        twitter: '',
        youtube: '',
      },
    },
    {
      image: OurTeam4,
      name: 'Michael Dennis',
      designation: 'Chief managing officer',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla odio non aenean a lobortis. Nunc semper quisque dictum faucibus neque nisl. Imperdiet nullam dolor odio lobortis sagittis integer. Amet, in vitae, lacus, at mattis quis ut sed.',
      links: {
        discord: '',
        twitter: '',
        youtube: '',
      },
    },
  ];
  // add a fetch for the investor data
  // public/assets/
  return (
    <Container>
      <Typography variant="h3" textAlign={'center'}>
        Our investors
      </Typography>

      <Grid
        container
        display={'flex'}
        flexDirection="column"
        alignItems="center"
        sx={{ mb: { xs: 4, md: 5 } }}
      >
        <Grid item md={9}>
          <Typography variant="subtitle1" mt={2.5} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sapien lectus magna cursus urna enim. Turpis risus integer leo,
            eget. Eu nullam risus pretium, risus senectus vulputate. Lacinia ut
            mattis nibh felis magna tristique nunc. Sit eu, tellus morbi metus.
            Elit vitae nec lectus in in.
          </Typography>
          <Typography variant="subtitle1" mt={2.5} textAlign={'center'}>
            Est accumsan feugiat dictum risus, ut tincidunt malesuada. Aliquam
            mauris cras faucibus pharetra sed sed. Diam faucibus tempus et
            fringilla. Dignissim in interdum a, iaculis viverra morbi vulputate
            ac nam. Purus quis risus, tellus vel platea. Ligula orci vel
            imperdiet tincidunt sagittis phasellus hendrerit blandit faucibus.
            Turpis commodo congue tellus cras venenatis in. Erat venenatis,
            tincidunt lorem tincidunt eget. Elementum risus velit vitae elit
            augue.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2.5, md: 4 }}>
        {investorsData.map((item, index) => (
          <Grid item key={item.name + index} xs={12} sm={6}>
            <Card
              elevation={0}
              sx={{
                p: 5,
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
                <Typography variant="subtitle1" textAlign={'center'} mt={2}>
                  {item.about}
                </Typography>
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ mt: { xs: 0, md: 3 } }}
                gap={2}
              >
                <Grid height={40} width={40}>
                  <DiscordLink />
                </Grid>
                <Grid height={40} width={40}>
                  <TwitterLink />
                </Grid>
                <Grid height={40} width={40}>
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
