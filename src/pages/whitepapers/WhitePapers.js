import React from 'react';

import {
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Paper,
} from '@mui/material';

import WinstonIcon from './../../assets/assets_winston_icon.svg';
import WhitePaperCard from './components/WhitePaperCard';

const documentData = [
  {
    image: '',
    title: 'Winston Whitepaper1',
    subtitle: '',
    page: 17,
    size: 1.27,
  },
  {
    image: '',
    title: 'Winston Whitepaper2',
    subtitle:
      'Winston Smart Chain: A Parallel Winston Chain to Enable Smart Contracts',
    page: 17,
    size: 1.27,
  },
];

function WhitePapers() {
  return (
    <Container>
      <Typography variant="h3">Whitepaper</Typography>

      <Typography variant="h5" mt={5}>
        Winston Update
      </Typography>
      <Card elevation={0} sx={{ p: 2.5, my: 2 }}>
        <Grid container display="flex" alignItems={'center'}>
          <Grid container item md={9} display="flex" gap={2}>
            <Grid item>
              <Paper
                elevation={0}
                $gradient
                sx={{
                  height: '100px',
                  width: '100px',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={WinstonIcon}
                  style={{ height: '90px', width: '90px' }}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={9}
              display="flex"
              flexDirection={'column'}
              gap={1}
            >
              <Typography variant="h5">Winston</Typography>
              <Typography variant="subtile1">Price: $500</Typography>
              <Typography variant="subtile1">
                Winston character is a NFT built on Ethereum, introduced by the
                Winston.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            sx={{ justifyContent: { xs: 'start', md: 'end' } }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ my: 2, width: { xs: '100%', sm: 'auto' } }}
            >
              Buy Winston NFT
            </Button>
          </Grid>
        </Grid>
      </Card>
      {/* <Grid display={'flex'} flexDirection="column" gap={3} my={7}>
        <Typography variant="h5">Winston Update</Typography>
        <Grid item lg={12} sx={{ width: '100%' }}>
          <Paper
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 2,
            }}
          >
            <Grid
              display="flex"
              sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Grid display="flex" sx={{ width: '100%' }}>
                <Grid sx={{ mr: 2.5 }}>
                  <Paper className="paper-container">
                    <img
                      src={WinstonIcon}
                      alt={'image'}
                      style={{
                        width: 100,
                        height: 110,                      
                        margin: '10px 5px -6px',                        
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid display={'flex'} flexDirection="column" gap={2}>
                  <Typography component={'span'} variant="h5">
                    {'Winston'}
                  </Typography>
                  <Typography component={'span'} variant="subtitle1">
                    {'Price: $500'}
                  </Typography>
                  <Typography component={'span'} variant="subtitle1">
                    {
                      'Winston character is a NFT built on Ethereum, introduced by the Winston.'
                    }
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    mt: { xs: 2, sm: 0 },
                    width: '180px',
                  }}
                >
                  Buy Winston NFT
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid> */}
      <Grid display={'flex'} flexDirection="column" gap={3}>
        <Typography variant="h5">Whitepaper Documents</Typography>
        <WhitePaperCard data={documentData} />
      </Grid>
    </Container>
  );
}

export default WhitePapers;
