import React from 'react';
import {
  Grid,
  Typography,
  Paper,
  IconButton,
  Chip,
  Container,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleIcon from '@mui/icons-material/Circle';

function Transaction() {
  return (
    <Container>
      <Grid container rowSpacing={5} columnSpacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2">Transaction</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2.5,
              width: { xs: '100%', md: 'max-content' },
            }}
          >
            <Typography
              sx={{ mr: 6 }}
              style={{
                overflowX: 'auto',
              }}
            >
              6E6377D68330B7DCD5DED48DB35862596511B30E74EDB6BA824971587C9CCE29
            </Typography>
            <IconButton>
              <ContentCopyIcon className="hover-cursor-pointer" />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={0} sx={{ p: 3.75 }}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Summary
            </Typography>
            <Grid display="flex" justifyContent="space-between">
              <Typography variant="h6">Status</Typography>
              <Chip
                icon={<CheckCircleOutlineIcon />}
                color="secondary"
                label="Success"
              ></Chip>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Time</Typography>
              <Typography variant="subtitle2" color="inActive">
                2022-02-03, 11:24:54 UTC
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Block Height</Typography>
              <Typography variant="subtitle2" color="link">
                43,60,336
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Block Hash</Typography>
              <Typography variant="subtitle2" color="inActive">
                FAD6B2E09C8D43ABA85
                <br />
                68E6E4D97D9DD55965
                <br />
                DC663A53282B75181AB
                <br />
                0539B437
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={0} sx={{ p: 3.75 }}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              Details
            </Typography>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">TX Hash</Typography>
              <Typography variant="subtitle2" color="inActive">
                FAD6B2E09C8D43ABA85
                <br />
                68E6E4D97D9DD55965
                <br />
                DC663A53282B75181AB
                <br />
                0539B437
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Gas Wanted</Typography>
              <Typography variant="subtitle2" color="inActive">
                5,00,000
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Gas Used </Typography>
              <Typography variant="subtitle2" color="link">
                87,510
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Fee </Typography>
              <Typography variant="subtitle2" color="inActive">
                0.000125 CRO
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Memo </Typography>
              <Typography variant="subtitle2" color="inActive">
                -
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={0} sx={{ p: 3.75 }}>
            <Grid display="flex" justifyContent="space-between" sx={{ mb: 4 }}>
              <Typography variant="h5">Mesages</Typography>
              <Chip
                icon={<CircleIcon sx={{ fontSize: '8px' }} />}
                color="secondary"
                label="Success"
              ></Chip>
            </Grid>
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Denom Id</Typography>
              <Typography variant="subtitle2" color="inActive">
                FAD6B2E09C8D43ABA85
                <br />
                68E6E4D97D9DD55965
                <br />
                DC663A53282B75181AB
                <br />
                0539B437
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Token Id</Typography>
              <Typography variant="subtitle2" color="inActive">
                Edition 681
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Sender</Typography>
              <Typography variant="subtitle2" color="link">
                87,510
              </Typography>
            </Grid>
            <Grid
              sx={{ m: '20px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
            <Grid
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Recipent </Typography>
              <Typography variant="subtitle2" color="inActive">
                0.000125 CRO
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Transaction;
