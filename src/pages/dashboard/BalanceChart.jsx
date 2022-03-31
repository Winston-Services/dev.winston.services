import React from 'react';

import { Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

import { ReactComponent as ChartIcon } from './../../assets/chart_icon.svg';


const data = [
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
  [
    {
      uv: 10,
    },
    {
      uv: 50,
    },
    {
      uv: 30,
    },
    {
      uv: 40,
    },
  ],
];

function BalanceChart() {
  const color = useSelector(
    (state) => state.themeColors.chartColors.tinyAreaChartColors
  );
  return (
    <Grid container justifyContent={'space-between'}>
      {data.map((item, index) => {
        return (
          <Grid
            key={'balanceChart' + index}
            item
            lg={1}
            sx={{ height: '80px', pt: 2.5 }}
          >
            <Grid display="flex" alignItems={'center'} mb={1.25}>
              <ChartIcon />
              <Typography
                variant="subtitle2"
                fontWeight={600}
                sx={{ ml: 1.25 }}
              >
                +00.00
              </Typography>
            </Grid>
            <ResponsiveContainer>
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
                  dataKey="uv"
                  stroke={color[index]}
                  fillOpacity={0.5}
                  fill={`url(#${'color' + index})`}
                />
              </AreaChart>
            </ResponsiveContainer>
            <Typography variant="h6" fontWeight={700} sx={{ mt: -1 }}>
              0000.0000
            </Typography>
            <Typography variant="subtitle1" fontWeight={500}>
              BTC
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BalanceChart;
