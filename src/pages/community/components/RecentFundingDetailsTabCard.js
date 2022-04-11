import React from 'react';

import { Paper, Grid } from '@mui/material';

import HistoryImage from '../../../assets/history_image.png';
import TabCard from './TabCard';

function RecentFundingDetailsTabCard() {
  const RecentFunding = [
    {
      icon: HistoryImage,
      price: 500.0,
      user: 'Funded by RandomName1',
      daysAgo: 1,
    },
    {
      icon: HistoryImage,
      price: 50.0,
      user: 'Funded by RandomName2',
      daysAgo: 2,
    },
    {
      icon: HistoryImage,
      price: 100.0,
      user: 'Funded by RandomName3',
      daysAgo: 2,
    },
  ];
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: 2,
      }}
    >
      {RecentFunding.map((item, index) => (
        <div key={item.user + index}>
          <TabCard item={item} />
          {index !== RecentFunding.length - 1 ? (
            <Grid
              sx={{ m: '15px 0px' }}
              style={{ background: '#4F409A', height: 1 }}
            />
          ) : null}
        </div>
      ))}
    </Paper>
  );
}

export default RecentFundingDetailsTabCard;
