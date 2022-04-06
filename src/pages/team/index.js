import React from 'react';

import { Twitter, YouTube } from '@mui/icons-material';
import { Container, Grid, Typography, Paper, IconButton } from '@mui/material';

import { ReactComponent as Discord } from './../../assets/discord_brands.svg';
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
              <Grid>
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default index;
