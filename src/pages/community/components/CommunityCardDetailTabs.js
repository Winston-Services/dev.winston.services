import React, { useState } from 'react';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import HistoryImage from '../../../assets/history_image.png';
const TabCard = React.lazy(() => import('./TabCard'));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component={'span'} sx={{ mt: '30px' }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TopFundingData = [
  {
    icon: HistoryImage,
    price: 2500.15,
    user: 'Funded by RandomName1',
    daysAgo: 1,
  },
  {
    icon: HistoryImage,
    price: 2200.0,
    user: 'Funded by RandomName2',
    daysAgo: 2,
  },
  {
    icon: HistoryImage,
    price: 1900.0,
    user: 'Funded by RandomName3',
    daysAgo: 2,
  },
];

const RecentFundingData = [
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

function CommunityCardDetailTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );

  return (
    <Box sx={{ width: '100%', typography: 'body1', padding: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ ...tabIndicatorStyle }}
      >
        <Tab label="Top Funding" {...a11yProps(0)} />
        <Tab label="Recent Funding" {...a11yProps(1)} />
        <Tab label="See All" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabCard data={TopFundingData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabCard data={RecentFundingData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabCard data={TopFundingData} />
      </TabPanel>
    </Box>
  );
}

export default CommunityCardDetailTabs;
