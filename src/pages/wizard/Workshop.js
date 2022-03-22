import React from 'react';
import { Grid, Card, Typography, Container, CardContent } from '@mui/material';
import coin from '../../assets/coin.svg';
import smartContract from '../../assets/smartContract.svg';
import custom from '../../assets/custom.svg';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
        <Grid item sm={12} xs={12} lg={12}>
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
              <Grid
                key={item.title}
                item
                xs={12}
                md={6}
                lg={4}
                textAlign={'-webkit-center'}
              >
                <Card
                  className="wizardCard"
                  onClick={() => {
                    setWizardData({
                      ...wizardData,
                      workshop: item.title,
                    });
                    navigate(item.onClickUrl);
                  }}
                >
                  <CardContent>
                    <Grid item sm={12} xs={12} lg={3} mt={6}>
                      <img src={item.icon} alt="icon" />
                    </Grid>
                    <Grid item sm={12} xs={12} lg={9} mt={3} mb={6}>
                      <Typography variant={'h6'}>{item.title}</Typography>
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
