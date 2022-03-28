import React from 'react';
import {
  Typography,
  Grid,
  Card,
  Box,
  TextField,
  Button,
  Container,
} from '@mui/material';
import SwapTable from './SwapTable';
import DropDown from '../../components/common/DropDown';

export default function SwapPublic() {
  const rowsFaucetOnnWinston = [
    {
      id: 1,
      coin: 'Rickle',
      network: 1306.25358,
      symbol: 0.59858,
      amount: 0.0038584,
      coin1: 'Rickle',
      network1: 1306.25358,
      symbol1: 0.59858,
      limit: 'Rickle',
      posted: 1306.25358,
      expires: 0.59858,
    },
    {
      id: 2,
      coin: 'Rickle',
      network: 1306.25358,
      symbol: 0.59858,
      amount: 0.0038584,
      coin1: 'Rickle',
      network1: 1306.25358,
      symbol1: 0.59858,
      limit: 'Rickle',
      posted: 1306.25358,
      expires: 0.59858,
    },
    {
      id: 3,
      coin: 'Rickle',
      network: 1306.25358,
      symbol: 0.59858,
      amount: 0.0038584,
      coin1: 'Rickle',
      network1: 1306.25358,
      symbol1: 0.59858,
      limit: 'Rickle',
      posted: 1306.25358,
      expires: 0.59858,
    },
    {
      id: 4,
      coin: 'Rickle',
      network: 1306.25358,
      symbol: 0.59858,
      amount: 0.0038584,
      coin1: 'Rickle',
      network1: 1306.25358,
      symbol1: 0.59858,
      limit: 'Rickle',
      posted: 1306.25358,
      expires: 0.59858,
    },
  ];

  return (
    <Container>
      <Grid container spacing={8} justifyContent={'center'}>
        <Grid item>
          <Typography variant="h3">Swap public page</Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <Typography variant="h5">Swap From</Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <DropDown label="Network" option="" placeholder="Network" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField fullWidth label="Token" placeholder="Token" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Token Address"
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField fullWidth label="Amount" placeholder="Amount" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                  <Button variant="contained" color="secondary">
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <Typography variant="h5">Swap To</Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <DropDown label="Network" option="" placeholder="Network" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField fullWidth label="Token" placeholder="Token" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Token Address"
                  />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12}>
                  <TextField fullWidth label="Amount" placeholder="Amount" />
                </Grid>
                <Grid item lg={12} md={12} xs={12} sm={12} textAlign={'center'}>
                  <Button variant="contained" color="secondary">
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item sm={12} lg={12}>
            <Card sx={{ p: 5, height: '90%' }}>
              <Grid container lg={12}>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <Typography variant="h5">Swap</Typography>
                </Grid>
                <Grid
                  item
                  container
                  lg={5}
                  md={5}
                  sm={5}
                  xs={12}
                  alignItems={'center'}
                >
                  <Grid item lg={2} sm={2} md={2} xs={2}>
                    <Typography>Filter:</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    lg={10}
                    sm={10}
                    md={10}
                    xs={10}
                    justifyContent={'space-between'}
                  >
                    <Grid item lg={6} md={6} xs={6} sm={6}>
                      <Box>
                        <TextField
                          sx={{
                            justifyContent: 'center',
                            borderRadius: '5px',
                            backgroundColor: '#271D5A',
                            label: { ml: '10px' },
                          }}
                          placeholder="From"
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} xs={6} sm={6}>
                      <Box>
                        <TextField
                          sx={{
                            justifyContent: 'center',
                            borderRadius: '5px',
                            backgroundColor: '#271D5A',
                          }}
                          placeholder="To"
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <SwapTable rows={rowsFaucetOnnWinston} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
