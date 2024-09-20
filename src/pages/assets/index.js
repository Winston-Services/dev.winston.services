import React from 'react';

import { Button, Container, Grid, Typography, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AhwaImage from './../../assets/ahwa_icon.svg';
import WatchImage from './../../assets/watch_icon.svg';
import WinstonIcon from './../../assets/winston_char_icon.svg';
import WinstonApp from './../../components/common/WinstonApp';
// import './index.css';
import TrendingNfts from './components/TrendingNfts';


function Assets() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign={'center'}>
          Create, Buy and hold 100+ of assets
        </Typography>
        <Grid textAlign={'center'} mt={4}>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
          >
            Explore more
          </Button>
          <Button
            variant={'outlined'}
            sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
            onClick={() => {
              navigate('/wizard');
            }}
          >
            Create your own
          </Button>
        </Grid>
        <Grid
          container
          mt={5}
          display="flex"
          justifyContent="space-between"
          alignItems={'end'}
          width="100%"
          columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        >
          <Grid item xs={3}>
            <Typography
              textAlign={'center'}
              sx={{
                fontSize: { xs: '12px', sm: '25px', md: '34px' },
              }}
              pb={8}
              height={{ xs: 50, md: 150 }}
            >
              Ahwa
            </Typography>
            <img src={AhwaImage} alt="ahwa_icon" width="100%" />
          </Grid>

          <Grid item xs={6}>
            <img src={WinstonIcon} alt="winston_icon" width="100%" />
            <Typography
              sx={{
                fontSize: { xs: '18px', sm: '30px', md: '48px' },
                mt: { xs: 1, sm: 2.3, md: 3.4 },
              }}
              textAlign={'center'}
            >
              Blockchain Assets
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '25px', md: '34px' },
              }}
              textAlign={'center'}
              pb={8}
              height={{ xs: 50, md: 150 }}
            >
              Winston
            </Typography>

            <img src={WatchImage} alt="watch_image" width="100%" />
          </Grid>
        </Grid>
        <Card elevation={0} sx={{ p: 0, mt: 10, height: 380 }}>
          <Grid item xs={12} px={3} pt={3}>
            <Typography variant="h6" mb={5}>
              Winston trending Assets
            </Typography>
          </Grid>
          <TrendingNfts />
        </Card>
      </Container>
      <WinstonApp />
    </>
  );
}

export default Assets;
