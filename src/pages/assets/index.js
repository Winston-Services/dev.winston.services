import React from 'react';

import { Button, Container, Grid, Typography, Card } from '@mui/material';

import AhwaImage from './../../assets/ahwa_icon.svg';
import WatchImage from './../../assets/watch_icon.svg';
import WinstonIcon from './../../assets/winston_char_icon.svg';
// import AhwaImage from './../../assets/ahwa_image.svg';
// import WinstonIcon from './../../assets/assets_winston_icon.svg';
// import WatchImage from './../../assets/watch_image.svg';
import WinstonApp from './../../components/common/WinstonApp';
import './index.css';
import TrendingNfts from './components/TrendingNfts';

function index() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign={'center'}>
          Create, Buy and hold 100+ NFT’s on Winston
        </Typography>
        <Grid textAlign={'center'} mt={4}>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
          >
            Explore more assets
          </Button>
          <Button
            variant={'outlined'}
            sx={{ width: { xs: '100%', sm: 'auto' }, m: 1 }}
          >
            Create your own assets
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
            {/* <Paper
              elevation={0}
              className="gradient"
              sx={{
                width: '158px',
                height: '158px',
                borderRadius: '100%',
              }}
            >
              <img
                src={AhwaImage}
                style={{ marginTop: '-70px', marginLeft: '30px' }}
              />
            </Paper> */}
          </Grid>

          <Grid item xs={6}>
            <img src={WinstonIcon} alt="winston_icon" width="100%" />
            {/* <Paper
              elevation={0}
              sx={{
                width: '496px',
                height: '496px',
                borderRadius: '100%',
                textAlign: 'center',
                pt: '76px',
              }}
            >
              <img src={WinstonIcon} />
            </Paper> */}
            <Typography
              sx={{
                fontSize: { xs: '18px', sm: '30px', md: '48px' },
                mt: { xs: 1, sm: 2.3, md: 3.4 },
              }}
              textAlign={'center'}
            >
              Winston Character
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
              Winston Watch
            </Typography>

            <img src={WatchImage} alt="watch_image" width="100%" />
            {/* <Paper
              elevation={0}
              className="gradient"
              sx={{
                width: '158px',
                height: '158px',
                borderRadius: '100%',
              }}
            >
              <img
                src={WatchImage}
                style={{ marginTop: '-10px', marginLeft: '-100px' }}
              />
            </Paper> */}
          </Grid>
        </Grid>
        <Card elevation={0} sx={{ p: 0, mt: 10, height: 380 }}>
          <Grid item xs={12} px={3} pt={3}>
            <Typography variant="h6" mb={5}>
              Winston trending NFT’s
            </Typography>
          </Grid>
          <TrendingNfts />
        </Card>
      </Container>
      <WinstonApp />
    </>
  );
}

export default index;
