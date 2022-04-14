import React from 'react';

import { Card, Typography, Box, Tabs, Tab, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import RealTimeBurnHistoryTable from './RealTimeBurnHistoryTable';

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

function BurningTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <Card elevation={0} sx={{ p: 3, height: '485px' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ ...tabIndicatorStyle }}
        >
          <Tab label="Real-Time Burn History" {...a11yProps(0)} />
          <Tab label="Auto-Burn Schedule" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid sx={{ height: '356px' }}>
          <RealTimeBurnHistoryTable />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming soon...!
      </TabPanel>
    </Card>
  );
}

export default BurningTabs;
