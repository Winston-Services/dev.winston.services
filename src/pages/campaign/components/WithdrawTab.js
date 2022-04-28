import React from 'react';

import { Card, Container, Grid, Typography } from '@mui/material';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

import FundedImage1 from './../../../assets/funded_user1.png';
import FundedImage2 from './../../../assets/funded_user2.png';
import FundedImage3 from './../../../assets/funded_user3.png';

const data = [
  {
    image: FundedImage1,
    amount: '+65.00',
    name: 'PsychoMolly1',
    time: '15 Mar 2022  |  02:10PM',
  },
  {
    image: FundedImage2,
    amount: '+65.00',
    name: 'PsychoMolly2',
    time: '15 Mar 2022  |  02:10PM',
  },
  {
    image: FundedImage3,
    amount: '+65.00',
    name: 'PsychoMolly3',
    time: '15 Mar 2022  |  02:10PM',
  },
  {
    image: FundedImage1,
    amount: '+65.00',
    name: 'PsychoMolly4',
    time: '15 Mar 2022  |  02:10PM',
  },
  {
    image: FundedImage2,
    amount: '+65.00',
    name: 'PsychoMolly5',
    time: '15 Mar 2022  |  02:10PM',
  },
];

const chartData = [
  {
    uv: 0,
  },
  {
    uv: 12,
  },
  {
    uv: 10,
  },
  {
    uv: 30,
  },
  {
    uv: 10,
  },
  {
    uv: 60,
  },
  {
    uv: 15,
  },
  {
    uv: 40,
  },
  {
    uv: 0,
  },
];

function WithdrawTab() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Grid display={'flex'} justifyContent="space-between">
            <Grid>
              <Typography variant="subtitle1">Available balance</Typography>
              <Typography variant="h5">$251.00</Typography>
            </Grid>
            <Grid>
              <Typography variant="subtitle1">Total balance</Typography>
              <Typography variant="h5">$473.15</Typography>
            </Grid>
          </Grid>
          <Grid display={'flex'} justifyContent="space-between" mt={5}>
            <Typography variant="subtitle1">
              Total withdrawal this month
            </Typography>
            <Typography variant="subtitle1">$124.00</Typography>
          </Grid>
          <Grid height={'221px'} mt={8}>
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id={'color1'} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="30%" stopColor="#E77C8D" />
                    <stop offset="100%" stopColor="#E251C6" />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  strokeOpacity={0}
                  type="monotone"
                  dataKey="uv"
                  fillOpacity={1}
                  fill="url(#color1)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card elevation={0} sx={{ p: 2.5 }}>
            <Typography variant="subtitle1" mb={3}>
              Transaction history
            </Typography>
            {data.map((item, index) => (
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
                      <Typography variant="subtitle1" fontSize={18}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2">{item.time}</Typography>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Typography variant="subtitle2" lineHeight={1}>
                      {item.amount}
                    </Typography>
                  </Grid>
                </Grid>
                {index !== data.length - 1 ? (
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

export default WithdrawTab;
