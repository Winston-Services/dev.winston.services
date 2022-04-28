import React from 'react';

import { Box, Typography, Tabs, Tab } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import NftImage1 from './../../../assets/nft_image_1.png';
import PromotionImage1 from './../../../assets/promotion_image_1.png';
import FundedTab from './FundedTab';
import MyNftTab from './MyNftTab';
import PromotionTab from './PromotionTab';
import WithdrawTab from './WithdrawTab';

const myNftData = [
  {
    goal: 2000,
    archiveInPer: 60,
    archiveInDollar: 1200,
    image: NftImage1,
    title: 'Flower pot',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s',
    viewer: 10254,
    version: 1,
    likes: 4,
  },
];

const RecentPromotionData = [
  {
    image: PromotionImage1,
    title: 'PsychoMolly',
  },
  {
    image: PromotionImage1,
    title: 'PsychoMolly',
  },
];

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
        <Box sx={{ mt: '30px' }}>
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

function UserDashboardTabs() {
  // const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Box>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ ...tabIndicatorStyle }}
        >
          <Tab label="My NFT’S" {...a11yProps(0)} />
          <Tab label="Promotion" {...a11yProps(1)} />
          <Tab label="Funded" {...a11yProps(2)} />
          <Tab label="Withdraw" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MyNftTab myNftData={myNftData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PromotionTab RecentPromotionData={RecentPromotionData} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FundedTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WithdrawTab />
      </TabPanel>
    </Box>
  );
}

export default UserDashboardTabs;
