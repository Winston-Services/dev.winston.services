import React from 'react';

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
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import HistoryImage from '../../../assets/history_image.png';

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
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski1', daysAgo: 3 },
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski2', daysAgo: 3 },
  { icon: HistoryImage, price: 580, user: 'Bought by Ryazanski3', daysAgo: 3 },
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
        <Grid component={'span'} container spacing={2}>
          {propertiesData.map((item, index) => (
            <Grid
              component={'span'}
              key={item[0] + index}
              item
              xs={6}
              sm={3}
              md={3}
              lg={3}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: 4,
                  textAlign: 'center',
                  border: '1px dashed #9283DC',
                }}
              >
                <Typography component={'span'} variant="subtitle1">
                  {item[0]}
                </Typography>
                <Typography
                  component={'span'}
                  variant="subtitle1"
                  fontWeight={'700'}
                >
                  {item[1]}
                </Typography>
                <Typography component={'span'} variant="subtitle2">
                  {item[2]}
                </Typography>
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
            <div key={item.user + index}>
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
                  <Grid display={'flex'} flexDirection="column">
                    <Typography component={'span'} variant="subtitle1">
                      ${item.price}
                    </Typography>
                    <Link
                      component={'span'}
                      variant="subtitle1"
                      sx={{ color: '#fff', textDecoration: 'none' }}
                      onClick={() => {
                        navigate('/user-profile');
                      }}
                    >
                      {item.user}
                    </Link>
                    <Typography component={'span'} variant="subtitle1">
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
            <Typography component={'span'} variant="subtitle1">
              Contract Address
            </Typography>
            <Link component={'span'} variant="subtitle1">
              0x495f...7b5e
            </Link>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography component={'span'} variant="subtitle1">
              Token ID
            </Typography>
            <Link
              component={'span'}
              variant="subtitle1"
              onClick={() => navigate('/marketplace/token-details/')}
            >
              5546465704496319...
            </Link>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography component={'span'} variant="subtitle1">
              Token Standard
            </Typography>
            <Typography component={'span'} variant="subtitle1">
              ERC-1155
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography component={'span'} variant="subtitle1">
              Blockchain
            </Typography>
            <Typography component={'span'} variant="subtitle1">
              Ethereum
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" sx={{ mt: 2.5 }}>
            <Typography component={'span'} variant="subtitle1">
              Metadata
            </Typography>
            <Typography component={'span'} variant="subtitle1">
              Editable
            </Typography>
          </Grid>
        </Paper>
      </TabPanel>
    </Box>
  );
}

export default ProductDetailTabs;
