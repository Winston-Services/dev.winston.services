import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Box, Tabs, Tab, Paper } from '@mui/material';

import { useSelector } from 'react-redux';
import OwnerTransactionsTable from './OwnerTransactionsTable';
import OwnerNftsTable from './OwnerNftsTable';

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
          <Typography>{children}</Typography>
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

function OwnerTransactionsTabs() {
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
          <Tab label="Transactions" {...a11yProps(0)} />
          <Tab label="NFTs" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper elevation={0} sx={{ p: 2.5 }}>
          <Typography variant="h6">Transactions</Typography>
          <OwnerTransactionsTable />
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper elevation={0} sx={{ p: 2.5 }}>
          <Typography variant="h6">NFTs</Typography>
          <OwnerNftsTable />
        </Paper>
      </TabPanel>
    </Box>
  );
}

export default OwnerTransactionsTabs;
