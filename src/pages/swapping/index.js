import React from 'react';

import {
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Container,
} from '@mui/material';

import DropDown2 from './../../components/common/DropDown2';
import SwapTable from './SwapTable';

export default function Swapping() {
  return (
    <Container>
      <Grid container spacing={8} justifyContent={'center'}>
        <Grid item>
          <Typography variant="h3">Swapping</Typography>
        </Grid>
        <Grid item container spacing={4}>
          <Grid item sm={12} lg={6}>
            <Card sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">Swap From</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DropDown2 label="Network" option="" placeholder="Network" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Token" placeholder="Token" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Token Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Amount" placeholder="Amount" />
                </Grid>
                <Grid item xs={12} textAlign={'center'}>
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
                <Grid item xs={12}>
                  <Typography variant="h5">Swap To</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DropDown2 label="Network" option="" placeholder="Network" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Token" placeholder="Token" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Token Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Amount" placeholder="Amount" />
                </Grid>
                <Grid item xs={12} textAlign={'center'}>
                  <Button variant="contained" color="secondary">
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item xs={12}>
            <Card elevation={0}>
              <Grid
                item
                display={'flex'}
                alignItems="center"
                sx={{
                  flexDirection: { sm: 'row', xs: 'column' },
                  alignItems: { xs: 'start' },
                }}
                px={2}
                py={3}
              >
                <Grid item xs={12} sm={6} sx={{ px: { xs: 1.5, sm: 1.2 } }}>
                  <Typography variant="h5">Swap</Typography>
                </Grid>
                <Grid
                  item
                  sm={6}
                  display="flex"
                  justifyContent={'end'}
                  alignItems="center"
                  gap={1}
                  sx={{ px: { xs: 1.5, sm: 0 } }}
                >
                  <Typography>Filter:</Typography>
                  <TextField
                    sx={{ backgroundColor: '#271D5A' }}
                    variant="standard"
                    hiddenLabel
                    fullWidth
                    color="filled"
                    placeholder="From"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                  <TextField
                    sx={{ backgroundColor: '#271D5A' }}
                    variant="standard"
                    hiddenLabel
                    fullWidth
                    color="filled"
                    placeholder="To"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} pb={2}>
                <SwapTable />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
