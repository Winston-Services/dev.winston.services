import React from 'react';

import {
  Grid,
  Card,
  Typography,
  Container,
  CardContent,
  Box,
} from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import coin from '../../assets/coin.svg';
import custom from '../../assets/custom.svg';
import smartContract from '../../assets/smart_contract.svg';

function Workshop({ wizardData, setWizardData }) {
  let navigate = useNavigate();
  const workshopData = [
    {
      title: 'Coin',
      icon: coin,
      onClickUrl: '/wizard/step-coin-algorithm',
    },
    {
      title: 'Smart Contract',
      icon: smartContract,
      onClickUrl: '/wizard/network',
    },
    {
      title: 'Custom',
      icon: custom,
      onClickUrl: '/wizard/step-coin-algorithm',
    },
  ];
  return (
    <Container>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h3">Workshop</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={5}
          sx={{ mb: { xs: 2, sm: 2 }, mt: { xs: 2, sm: 2 } }}
        >
          {workshopData?.map((item) => {
            return (
              <Grid key={item.title} item xs={12} md={6} lg={4}>
                <Card
                  elevation={0}
                  className="wizardCard"
                  onClick={() => {
                    setWizardData({
                      ...wizardData,
                      workshop: item.title,
                    });
                    navigate(item.onClickUrl);
                  }}
                >
                  <CardContent sx={{ my: 7 }}>
                    <Grid item sm={12} display={'flex'} justifyContent="center">
                      <Box
                        component="img"
                        sx={{ mb: 5 }}
                        src={item.icon}
                        alt="icon"
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Typography textAlign={'center'} variant={'h6'}>
                        {item.title}
                      </Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

Workshop.propTypes = {
  wizardData: PropTypes.object,
  setWizardData: PropTypes.func,
};

export default Workshop;
