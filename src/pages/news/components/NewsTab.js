import React from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';

import AllNewsTabData from './AllNewsTabData';

function NewsTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'transparent',
          }}
        >
          <TabList onChange={handleChange}>
            <Tab label="All news" value="1" />
            <Tab label="Bussiness" value="2" />
            <Tab label="Markets" value="3" />
            <Tab label="Technology" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AllNewsTabData />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Box>
  );
}

export default NewsTab;
