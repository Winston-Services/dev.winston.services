import React from 'react';

import { Typography, Box, Tabs, Tab, Card, Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import Table from '../../../components/common/Table';
import CustomSwitch from './CustomSwitch';

const balanceHistoryColumns = [
  {
    id: 'date',
    headerName: 'Date',
  },
  {
    id: 'type',
    headerName: 'Type',
  },
  {
    id: 'item',
    headerName: 'Item',
  },
  {
    id: 'buyer',
    headerName: 'Buyer',
  },
  {
    id: 'amount',
    headerName: 'Amount',
  },
  {
    id: 'status',
    headerName: 'Status',
  },
];

const balanceHistoryRows = [
  {
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'PsychoMolly #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'PsychoMolly #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
  {
    date: '13-03-2022',
    type: 'NFT Biding',
    item: 'PsychoMolly #3671',
    buyer: 'DemoTest',
    amount: '$1500',
    status: 'Received',
  },
];

const purchaseHistoryColumns = [
  {
    id: 'date',
    headerName: 'Date',
  },
  {
    id: 'order',
    headerName: 'Order #',
  },
  {
    id: 'item',
    headerName: 'Item',
  },
  {
    id: 'seller',
    headerName: 'Seller',
  },
  {
    id: 'paymentMethod',
    headerName: 'Payment Method',
  },
  {
    id: 'status',
    headerName: 'Status',
  },
];

const purchaseHistoryRows = [
  {
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'PsychoMolly #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
  },
  {
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'PsychoMolly #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
  },
  {
    date: '13-03-2022',
    order: 'NFT Biding',
    item: 'PsychoMolly #3671',
    seller: 'DemoTest',
    paymentMethod: 'Cash',
    status: 'Debited',
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
  const [history, setHistory] = React.useState(false);
  const [transition, setTransition] = React.useState(false);
  const [offers, setOffers] = React.useState(false);
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
        <Card elevation={0} sx={{ py: 3, mt: 3 }}>
          <Grid ml={3}>
            <CustomSwitch
              name="history"
              option1={'Balance History'}
              option2={'Purchase History'}
              onChange={(value) => setHistory(value)}
            />
          </Grid>
          {history ? (
            <Table
              rows={purchaseHistoryRows}
              columns={purchaseHistoryColumns}
            />
          ) : (
            <Table rows={balanceHistoryRows} columns={balanceHistoryColumns} />
          )}
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <CustomSwitch
            name="transition"
            option1={'Deposit'}
            option2={'Withdrawal'}
            onChange={(value) => setTransition(value)}
          />
          <Typography>{transition ? 'Withdrawal' : 'Deposit'}</Typography>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <Typography>Bids</Typography>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Card elevation={0} sx={{ p: 3, mt: 3 }}>
          <CustomSwitch
            name="offers"
            option1={'Offers Made'}
            option2={'Offers Received'}
            onChange={(value) => setOffers(value)}
          />
          <Typography>{offers ? 'Offers Received' : 'Offers Made'}</Typography>
        </Card>
      </TabPanel>
    </>
  );
}

export default AccountActivityTabs;
