import React, { useState } from 'react';

import { Box, Tab, Tabs, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { proposalsSelector } from '../../../store/publicNotice';
import ImageData1 from './../../../assets/news_tab_image_1.png';
import ImageData2 from './../../../assets/news_tab_image_2.png';
import ImageData3 from './../../../assets/news_tab_image_3.png';
import ImageData4 from './../../../assets/news_tab_image_4.png';
import PublicNoticeTabData from './PublicNoticeTabData';

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

function PublicNoticeTab() {
  const proposals = useSelector(proposalsSelector);
  const images = {
    ImageData1,
    ImageData2,
    ImageData3,
    ImageData4,
  };
  const AllNewsData = [
    ...proposals.map((proposal) => {
      const newProposal = {
        ...proposal,
        image: images[proposal.image],
      };
      return newProposal;
    }),
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ ...tabIndicatorStyle }}
      >
        <Tab label="All Proposals" {...a11yProps(0)} />
        <Tab label="Pending" {...a11yProps(1)} />
        <Tab label="Approved" {...a11yProps(2)} />
        <Tab label="Failed" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PublicNoticeTabData data={AllNewsData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PublicNoticeTabData
          data={AllNewsData.filter((item) => item.category === 'Pending')}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PublicNoticeTabData
          data={AllNewsData.filter((item) => item.category === 'Approved')}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PublicNoticeTabData
          data={AllNewsData.filter((item) => item.category === 'Failed')}
        />
      </TabPanel>
    </Box>
  );
}

export default PublicNoticeTab;
