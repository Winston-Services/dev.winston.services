import React from 'react';

import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
} from '@mui/material';

import AhwaImage from './../../assets/ahwa_image.svg';
import WinstonIcon from './../../assets/assets_winston_icon.svg';
import WatchImage from './../../assets/watch_image.svg';
import WinstonApp from './../../components/common/WinstonApp';
import TrendingNfts from './components/TrendingNfts';

function index() {
  return (
    <>
      <Container>
        <Typography variant="h3" textAlign={'center'}>
          Create, Buy and hold 100+ NFT’s on Winston
        </Typography>
        <Grid display={'flex'} gap={2.5} justifyContent="center" mt={4}>
          <Button variant={'contained'} color={'secondary'}>
            Explore more assets
          </Button>
          <Button variant={'outlined'}>Create your own assets</Button>
        </Grid>
        <Grid
          container
          display={'flex'}
          alignItems="end"
          width="100%"
          mt={6.25}
        >
          <Grid item md={3}>
            <Typography variant="h4" textAlign={'center'} mb={10}>
              Ahwa
            </Typography>
            <Paper
              gradient
              elevation={0}
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
            </Paper>
          </Grid>

          <Grid
            item
            md={6}
            display="flex"
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Paper
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
            </Paper>
            <Typography variant="h4" textAlign={'center'} mt={12}>
              Winston Character
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            display="flex"
            flexDirection={'column'}
            alignItems={'end'}
          >
            <Typography variant="h4" textAlign={'center'} mb={10}>
              Winston Watch
            </Typography>
            <Paper
              gradient
              elevation={0}
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
            </Paper>
          </Grid>
        </Grid>
        <Card elevation={0} sx={{ p: 3, mt: 20, height: 440 }}>
          <Typography variant="h6" mb={5}>
            Winston trending NFT’s
          </Typography>
          <TrendingNfts />
        </Card>
      </Container>
      <WinstonApp />
    </>
  );
}

export default index;
