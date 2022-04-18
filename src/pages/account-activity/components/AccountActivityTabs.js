import React from 'react';

import { Typography, Box, Tabs, Tab, Card, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import HistoryTab from './HistoryTab';

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

function AccountActivityTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabIndicatorStyle = useSelector(
    (state) => state.themeColors.colors.components.MuiTab.tabIndicatorStyle
  );
  return (
    <>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ ...tabIndicatorStyle }}
        >
          <Tab label="History" {...a11yProps(0)} />
          <Tab label="Transition" {...a11yProps(1)} />
          <Tab label="Bids" {...a11yProps(2)} />
          <Tab label="Offers" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card elevation={0} sx={{ py: 2, mt: 3 }}>
          <Grid
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
          >
            <HistoryTab />
          </Grid>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <Typography>Transition</Typography>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <Typography>Bids</Typography>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <Typography>Offers</Typography>
        </Card>
      </TabPanel>
    </>
  );
}

export default AccountActivityTabs;
