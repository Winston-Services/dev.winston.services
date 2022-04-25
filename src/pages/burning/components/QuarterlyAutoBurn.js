import React from 'react';

import { Event } from '@mui/icons-material';
import { Card, Chip, Grid, Typography } from '@mui/material';

import { ReactComponent as BurningIcon } from './../../../assets/burning_icon.svg';

function QuarterlyAutoBurn() {
  return (
    <Card elevation={0} sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
      <Typography
        variant="h5"
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
      >
        <Event sx={{ mr: 1 }} />
        Quarterly Auto-Burn
      </Typography>

      <Typography variant="subtitle1" mt={2} textAlign="center">
        BNB uses a real-time burning mechanism as introduced in BEP95. A fixed
        ratio of the gas fee collected is burned in each block, with the ratio
        decided by BSC validators.
      </Typography>

      <Grid display={'flex'} justifyContent={'center'} mt={2.5}>
        <Card
          elevation={0}
          sx={{
            background: '#4F409A',
            px: 2.5,
            py: 1.25,
            width: 'max-content',
          }}
        >
          <table>
            <tbody>
              <tr>
                <td
                  style={{ verticalAlign: 'middle', padding: '0px 5px' }}
                  rowSpan="2"
                >
                  <i>W</i> =
                </td>
                <td style={{ borderBottom: 'solid 1px', padding: '0px 5px' }}>
                  {' '}
                  N &#215; 1000
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center' }}> P + K</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Grid>

      <Grid container spacing={5} mt={0}>
        <Grid item md={6} xs={12}>
          <Card elevation={0} sx={{ background: '#271D5A', p: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <BurningIcon />
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="h5">
                  Estimated value of next burn
                </Typography>
                <Chip variant="filled" label={'Q1 2022, 19th'} sx={{ mt: 2 }} />
                <Typography variant="h4" mt={2.5}>
                  1,798,184.84 WNS
                </Typography>
                <Typography variant="subtitle1">$1,238,578.65</Typography>

                <Grid
                  container
                  mt={3}
                  display="flex"
                  justifyContent={'space-between'}
                  width="100%"
                  spacing={3}
                >
                  <Grid item>
                    <Typography variant="h5">$435.69</Typography>
                    <Typography variant="subtitle2">
                      Average price of WNS (P)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">2581627</Typography>
                    <Typography variant="subtitle2">
                      Total blocks produced (N)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card elevation={0} sx={{ background: '#271D5A', p: 3 }}>
            <Grid container spacing={2}>
              <Grid item>
                <BurningIcon />
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="h5">Waiting for burn execution</Typography>
                <Chip variant="filled" label={'Q2 2022, 20th'} sx={{ mt: 2 }} />
                <Typography variant="h4" mt={2.5}>
                  1,839,786.26 WNS
                </Typography>
                <Typography variant="subtitle1">$741,840,738.874</Typography>

                <Grid
                  container
                  mt={3}
                  display="flex"
                  justifyContent={'space-between'}
                  width="100%"
                  spacing={3}
                >
                  <Grid item>
                    <Typography variant="h5">$403.22</Typography>
                    <Typography variant="subtitle2">
                      Average price of WNS (P)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">2581627</Typography>
                    <Typography variant="subtitle2">
                      Total blocks produced (N)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}

export default QuarterlyAutoBurn;
