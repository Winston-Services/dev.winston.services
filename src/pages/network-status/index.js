import React from 'react';

import { Container, Grid, Paper, Typography } from '@mui/material';

import NetworkStatusAccordion from './components/NetworkStatusAccordion';

function NetworkStatus() {
  const data = [
    {
      title: 'API',
      subTitle: 'In Development',
    },
    {
      title: 'Alchemy API',
      subTitle: 'In Development',
    },
    {
      title: 'Website',
      subTitle: 'In Development',
    },
    {
      title: 'Mobile Application',
      subTitle: 'In Development',
    },
    {
      title: 'Support Services',
      subTitle: 'In Development',
    },
    {
      title: 'Emails',
      subTitle: 'Operational',
    },
  ];
  return (
    <Container>
      <Grid textAlign="center">
        <Typography variant="h3">Network Status</Typography>
      </Grid>
      <Grid container justifyContent="center" spacing={3} mt={4}>
        {data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Paper elevation={0}>
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={4}
                >
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="subtitle2">{item.subTitle}</Typography>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Grid mt={10}>
        <NetworkStatusAccordion />
      </Grid>
    </Container>
  );
}

export default NetworkStatus;
