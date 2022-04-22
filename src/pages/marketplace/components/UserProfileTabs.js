import React from 'react';

import { Typography, Box, Tabs, Tab, Grid, Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import NftMarketPlace1 from '../../../assets/nft_marketplace_1.png';
import NftMarketPlace2 from '../../../assets/nft_marketplace_2.png';
import NftMarketPlace3 from '../../../assets/nft_marketplace_3.png';
import NftMarketPlace4 from '../../../assets/nft_marketplace_4.png';
import ProductCard from './ProductCard';

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

const items = [
  {
    image: NftMarketPlace1,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace2,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace3,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
  {
    image: NftMarketPlace4,
    id: 5161,
    name: 'PsychoMolly',
    price: 59,
    startBid: 15,
    endBidIn: 5,
  },
];

function UserProfileTabs() {
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
          <Tab label="Collectibles" {...a11yProps(0)} />
          <Tab label="Selling" {...a11yProps(1)} />
          <Tab label="Created" {...a11yProps(2)} />
          <Tab label="Liked" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 2, lg: 4 }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={item + index}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Coming Soon...!
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper
          elevation={0}
          sx={{
            py: 3,
            border: '1px solid #FFFFFF',
            borderRadius: '10px',
            mt: 10,
          }}
        >
          <Typography textAlign={'center'} variant="subtitle1">
            You have not created any NFT
          </Typography>
        </Paper>
        <Grid item textAlign={'center'}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ width: { xs: '100%', sm: 'auto' }, mt: 5 }}
            onClick={() => {
              navigate('/user-profile/connect-your-wallet');
            }}
          >
            Create your first NFT
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Coming Soon...!
      </TabPanel>
    </Box>
  );
}

export default UserProfileTabs;
