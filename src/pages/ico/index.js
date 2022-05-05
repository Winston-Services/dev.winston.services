import React from 'react';

import { Card, Container, Grid, Typography } from '@mui/material';

import OurTeam1 from './../../assets/our_team1.png';

const teamData = [
  {
    image: OurTeam1,
    name: 'WBNB',
    price: '1 BNB ~ $349 USD',
  },
  {
    image: OurTeam1,
    name: 'BUSD',
    price: '1 BUSD ~ $1 USD',
  },
  {
    image: OurTeam1,
    name: 'RICKEL',
    price: '1 RKL ~ = $12 USD',
  },
  {
    image: OurTeam1,
    name: 'FIELD',
    price: '1 RKL ~ = $12 USD',
  },
  {
    image: OurTeam1,
    name: 'WMUE',
    price: '1 RKL ~ = $12 USD',
  },
];

function index() {
  return (
    <Container>
      <Typography variant="h3" textAlign={'center'} mb={10}>
        Initial Coin Offering
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {teamData.map((item, index) => (
          <Grid item key={item.name + index} xs={6} sm={4} md={3} lg={2.4}>
            <Card
              elevation={0}
              sx={{
                py: { xs: 2.5, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid>
                <img
                  src={item.image}
                  style={{
                    borderRadius: '100px',
                  }}
                />
              </Grid>
              <Typography variant="h6" textAlign={'center'} mt={2}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" textAlign={'center'}>
                {item.price}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default index;
