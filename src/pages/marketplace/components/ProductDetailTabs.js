import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  Link,
  Tabs,
  Tab,
} from '@mui/material';

import HistoryImage from '../../../assets/history_image.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

const propertiesData = [
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
  ['Background', '2-Slushy 1', '16% have this trait'],
];

const historyData = [
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
];

function ProductDetailTabs() {
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
          <Tab label="Properties" {...a11yProps(0)} />
          <Tab label="History" {...a11yProps(1)} />
          <Tab label="Details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {propertiesData.map((item, index) => (
            <Grid key={item[0] + index} item xs={6} sm={3} md={3} lg={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: 4,
                  textAlign: 'center',
                  border: '1px dashed #9283DC',
                }}
              >
                <Typography variant="subtitle1">{item[0]}</Typography>
                <Typography variant="subtitle1" fontWeight={'700'}>
                  {item[1]}
                </Typography>
                <Typography variant="subtitle2">{item[2]}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 2,
          }}
        >
          {historyData.map((item, index) => (
            <div key={item.title + index}>
              <Grid display="flex">
                <Grid sx={{ mr: 2.5 }}>
                  <img src={item.icon} />
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ width: '100%' }}
                >
                  <Grid>
                    <Typography variant="subtitle1">${item.price}</Typography>
                    <Link
                      variant="subtitle1"
                      sx={{ color: 'white', textDecoration: 'none' }}
                      onClick={() => {
                        navigate('/user-profile');
                      }}
                    >
                      {item.user}
                    </Link>
                    <Typography variant="subtitle1">
                      {item.daysAgo} Days ago
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        navigate('/marketplace/product-details/transaction');
                      }}
                    >
                      View Details
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              {index !== historyData.length - 1 ? (
                <Grid
                  sx={{ m: '15px 0px' }}
                  style={{ background: '#4F409A', height: 1 }}
                />
              ) : null}
            </div>
          ))}
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: 2,
          }}
        >
          <Grid display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Contract Address</Typography>
            <Typography variant="subtitle1" sx={{ color: '#ffd215' }}>
              0x495f...7b5e
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography variant="subtitle1">Token ID</Typography>
            <Typography variant="subtitle1" sx={{ color: '#ffd215' }}>
              5546465704496319...
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography variant="subtitle1">Token Standard</Typography>
            <Typography variant="subtitle1">ERC-1155</Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography variant="subtitle1">Blockchain</Typography>
            <Typography variant="subtitle1">Ethereum</Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography variant="subtitle1">Metadata</Typography>
            <Typography variant="subtitle1">Editable</Typography>
          </Grid>
        </Paper>
      </TabPanel>
    </Box>
  );
}

export default ProductDetailTabs;
