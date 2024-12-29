import React from 'react';

import { Typography, Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

import { ReactComponent as ChartIcon } from './../../assets/chart_icon.svg';

const data = [
  [
    {
      balance: 10,
    },
    {
      balance: 50,
    },
    {
      balance: 30,
    },
    {
      balance: 40,
    },
  ],
  [
    {
      balance: 10,
    },
    {
      balance: 50,
    },
    {
      balance: 30,
    },
    {
      balance: 40,
    },
  ],
  [
    {
      balance: 10,
    },
    {
      balance: 50,
    },
    {
      balance: 30,
    },
    {
      balance: 40,
    },
  ],
  [
    {
      balance: 10,
    },
    {
      balance: 50,
    },
    {
      balance: 30,
    },
    {
      balance: 40,
    },
  ],
];

function BalanceChart() {
  const color = useSelector(
    (state) => state.themeColors.chartColors.tinyAreaChartColors
  );
  return (
    <Grid
      container
      justifyContent={{ xs: 'center', md: 'space-evenly' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}
    >
      {data.map((item, index) => {
        return (
          <Grid
            key={'balanceChart' + index}
            item
            sx={{
              padding: 0.5,
              width: { xs: '100%', md: `calc(100% / ${data.length})` },
            }}
            >
            <Box
              sx={{
                padding: 1,
              }}
            >
              <Grid
                display="flex"
                alignItems={'center'}
                mb={0.25}
                width={'100%'}
              >
                <ChartIcon />
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{ ml: 1.25 }}
                >
                  +00.00
                </Typography>
              </Grid>
              <ResponsiveContainer height={80}>
                <AreaChart data={item}>
                  <defs>
                    <linearGradient
                      id={'color' + index}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={color[index]}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor={color[index]}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="balance"
                    stroke={color[index]}
                    fillOpacity={0.5}
                    fill={`url(#${'color' + index})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <Box display="flex" alignItems="center">
                <Typography variant="h6" fontWeight={700} sx={{ mt: -1, mr: 1 }}>
                  0000.0000
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  BTC
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BalanceChart;
