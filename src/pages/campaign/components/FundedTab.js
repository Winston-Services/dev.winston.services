import React from 'react';

import { Button, Card, Container, Grid, Typography } from '@mui/material';

import FundedImage1 from './../../../assets/funded_user1.png';
import FundedImage2 from './../../../assets/funded_user2.png';
import FundedImage3 from './../../../assets/funded_user3.png';

const allFunding = [
  {
    image: FundedImage1,
    amount: 500,
    name: 'RandomName1',
    time: '20 Mins ago',
  },
  {
    image: FundedImage2,
    amount: 500,
    name: 'RandomName2',
    time: '20 Mins ago',
  },
  {
    image: FundedImage3,
    amount: 500,
    name: 'RandomName3',
    time: '20 Mins ago',
  },
];
const topFunding = [
  {
    image: FundedImage1,
    amount: 500,
    name: 'RandomName4',
    time: '20 Mins ago',
  },
  {
    image: FundedImage2,
    amount: 500,
    name: 'RandomName5',
    time: '20 Mins ago',
  },
  {
    image: FundedImage3,
    amount: 500,
    name: 'RandomName6',
    time: '20 Mins ago',
  },
];
const recentFunding = [
  {
    image: FundedImage1,
    amount: 500,
    name: 'RandomName7',
    time: '20 Mins ago',
  },
  {
    image: FundedImage2,
    amount: 500,
    name: 'RandomName8',
    time: '20 Mins ago',
  },
  {
    image: FundedImage3,
    amount: 500,
    name: 'RandomName9',
    time: '20 Mins ago',
  },
];
function FundedTab() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" mb={3}>
              All Fundings
            </Typography>
            {allFunding.map((item, index) => (
              <div key={item.name}>
                <Grid
                  key={item.name}
                  display="flex"
                  justifyContent={'space-between'}
                  alignItems="center"
                >
                  <Grid display="flex" gap={2}>
                    <Grid>
                      <img src={item.image} />
                    </Grid>
                    <Grid>
                      <Typography variant="subtitle2" lineHeight={1}>
                        {item.amount}
                      </Typography>
                      <Typography variant="subtitle1" lineHeight={1.25}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2" lineHeight={1.25}>
                        {item.time}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Button variant="outlined" sx={{ py: 1 }}>
                      View Details
                    </Button>
                  </Grid>
                </Grid>
                {index !== allFunding.length - 1 ? (
                  <Grid
                    sx={{ m: '15px 0px' }}
                    style={{ background: '#4F409A', height: 1 }}
                  />
                ) : null}
              </div>
            ))}
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" mb={3}>
              Top Fundings
            </Typography>
            {topFunding.map((item, index) => (
              <div key={item.name}>
                <Grid
                  key={item.name}
                  display="flex"
                  justifyContent={'space-between'}
                  alignItems="center"
                >
                  <Grid display="flex" gap={2}>
                    <Grid>
                      <img src={item.image} />
                    </Grid>
                    <Grid>
                      <Typography variant="subtitle2" lineHeight={1}>
                        {item.amount}
                      </Typography>
                      <Typography variant="subtitle1" lineHeight={1.25}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2" lineHeight={1.25}>
                        {item.time}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Button variant="outlined" sx={{ py: 1 }}>
                      View Details
                    </Button>
                  </Grid>
                </Grid>
                {index !== topFunding.length - 1 ? (
                  <Grid
                    sx={{ m: '15px 0px' }}
                    style={{ background: '#4F409A', height: 1 }}
                  />
                ) : null}
              </div>
            ))}
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" mb={3}>
              Recent Fundings
            </Typography>
            {recentFunding.map((item, index) => (
              <div key={item.name}>
                <Grid
                  key={item.name}
                  display="flex"
                  justifyContent={'space-between'}
                  alignItems="center"
                >
                  <Grid display="flex" gap={2}>
                    <Grid>
                      <img src={item.image} />
                    </Grid>
                    <Grid>
                      <Typography variant="subtitle2" lineHeight={1}>
                        {item.amount}
                      </Typography>
                      <Typography variant="subtitle1" lineHeight={1.25}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2" lineHeight={1.25}>
                        {item.time}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Button variant="outlined" sx={{ py: 1 }}>
                      View Details
                    </Button>
                  </Grid>
                </Grid>
                {index !== recentFunding.length - 1 ? (
                  <Grid
                    sx={{ m: '15px 0px' }}
                    style={{ background: '#4F409A', height: 1 }}
                  />
                ) : null}
              </div>
            ))}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FundedTab;
