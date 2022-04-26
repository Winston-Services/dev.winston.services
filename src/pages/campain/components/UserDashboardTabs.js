import React from 'react';

import { Box, Typography, Tabs, Tab, Paper, Button, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
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
        <Paper
          elevation={0}
          sx={{
            py: 3,
            borderRadius: '10px',
            mt: 3,
          }}
        >
          <Typography textAlign={'center'} variant="subtitle1">
            You have not started any Campaign
          </Typography>
        </Paper>
        <Grid item textAlign={'center'}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: { xs: '100%', sm: 'auto' }, mt: 5 }}
            onClick={() => {
              navigate('/campain/user-dashboard/nft-form');
            }}
          >
            Started your first Campaign
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming Soon...!
      </TabPanel>
      <TabPanel value={value} index={2}>
        Coming Soon...!
      </TabPanel>
      <TabPanel value={value} index={3}>
        Coming Soon...!
      </TabPanel>
    </Box>
  );
}

export default UserDashboardTabs;
