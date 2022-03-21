import React from 'react';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  Container,
  Link,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import RedoIcon from '@mui/icons-material/Redo';
import LinkIcon from '@mui/icons-material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ProductImage from '../../assets/product_image.png';
import HistoryImage from '../../assets/history_image.png';
import ProductDetailsEthereum from '../../assets/product_details_ethereum.svg';
import PropTypes from 'prop-types';
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
function ProductDetails() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [isSticky, setSticky] = React.useState(true);

  const stickyRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ) {
        if (isSticky === true) setSticky(false);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container sx={{ mt: { xs: 4, md: 12 } }}>
        <Grid item lg={12} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button
            sx={{ p: 0 }}
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 3 }} ref={stickyRef}>
        <Grid item md={5} lg={5} sx={{ pr: { xs: 0, md: 3 } }}>
          <img
            src={ProductImage}
            style={{
              width: '100%',
              borderRadius: '20px',
            }}
          />
        </Grid>
        <Grid item md={7} lg={7}>
          <Grid
            display="flex"
            sx={{
              justifyContent: { xs: 'normal', sm: 'space-between' },
              flexDirection: { xs: 'column', sm: 'row' },
              mt: { xs: 2, sm: 0 },
            }}
          >
            <div>
              <Typography variant="h5">$451</Typography>
              <Typography variant="h5" fontWeight={'800'} sx={{ mt: 1 }}>
                PsychoMolly #3671
              </Typography>
            </div>
            <Grid sx={{ mt: { xs: 3, sm: 0 } }}>
              <FavoriteBorderIcon sx={{ mr: 2 }} />
              <VisibilityIcon sx={{ mr: 2 }} />
              <RedoIcon sx={{ mr: 2 }} />
              <FlagIcon />
            </Grid>
          </Grid>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Unique, algorithmically generated PsychoMolly living on the
            blockchain.
          </Typography>

          <Grid sx={{ mt: 2.5 }}>
            <Chip variant="filled" label="Art" sx={{ mr: 1.25 }} />
            <Chip variant="filled" label="Market Place" />
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              width: { xs: '100%', sm: '331px' },
              mt: 2.5,
            }}
          >
            <Typography variant="subtitle1">
              Sale ends February 11, 2022 at 9:50am IST
            </Typography>

            <Grid container display="flex" columnSpacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Typography variant="subtitle1">Days</Typography>
                <Typography variant="h5" fontWeight={700}>
                  02
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Hours</Typography>
                <Typography variant="h5" fontWeight={700}>
                  15
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Minutes</Typography>
                <Typography variant="h5" fontWeight={700}>
                  48
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Hours</Typography>
                <Typography variant="h5" fontWeight={700}>
                  25
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <Grid
            display={'flex'}
            alignItems={'center'}
            sx={{ mt: { xs: 2, sm: 3 } }}
          >
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              View Crypto.org Chain details
            </Typography>
            <LinkIcon />
          </Grid>

          <Box sx={{ width: '100%', mt: 2 }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    background: `linear-gradient(90deg, #EA7A8F 0%, #E452C8 99.4%)`,
                  },
                }}
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
                        <div>
                          <Typography variant="subtitle1">
                            ${item.price}
                          </Typography>
                          <Link
                            variant="subtitle1"
                            sx={{ color: 'white', textDecoration: 'none' }}
                            onClick={() => {
                              navigate('/nft-user-profile');
                            }}
                          >
                            {item.user}
                          </Link>
                          <Typography variant="subtitle1">
                            {item.daysAgo} Days ago
                          </Typography>
                        </div>
                        <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                          <Button
                            variant="outlined"
                            onClick={() => {
                              navigate(
                                '/marketplace/product-details/transaction'
                              );
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
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mt: 2.5 }}
                >
                  <Typography variant="subtitle1">Token ID</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#ffd215' }}>
                    5546465704496319...
                  </Typography>
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mt: 2.5 }}
                >
                  <Typography variant="subtitle1">Token Standard</Typography>
                  <Typography variant="subtitle1">ERC-1155</Typography>
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mt: 2.5 }}
                >
                  <Typography variant="subtitle1">Blockchain</Typography>
                  <Typography variant="subtitle1">Ethereum</Typography>
                </Grid>
                <Grid
                  display="flex"
                  justifyContent="space-between"
                  sx={{ mt: 2.5 }}
                >
                  <Typography variant="subtitle1">Metadata</Typography>
                  <Typography variant="subtitle1">Editable</Typography>
                </Grid>
              </Paper>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
      <div style={{ height: 180 }}>
        <Grid
          sx={{ mt: 3.75 }}
          container
          className={`${
            isSticky
              ? 'buyNowContainer buyNowContainerSticky'
              : 'buyNowContainer'
          }`}
        >
          <Grid item lg={12} sx={{ width: '100%' }}>
            <Paper
              elevation={0}
              sx={{ borderRadius: 1.25, p: { xs: 2.5, md: 3.5 } }}
            >
              <Container sx={{ p: 0 }}>
                <Grid
                  display="flex"
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Grid display="flex" sx={{ width: '100%' }}>
                    <Grid sx={{ mr: 2.5 }}>
                      <img
                        src={ProductImage}
                        style={{ width: 100, height: 100, borderRadius: 5 }}
                      />
                    </Grid>
                    <div>
                      <Typography variant="h5">PsychoMolly #3671</Typography>

                      <Grid
                        display="flex"
                        alignItems="center"
                        sx={{ mt: 1.25 }}
                      >
                        <Grid sx={{ mr: 2.5 }}>
                          <img src={ProductDetailsEthereum} />
                        </Grid>
                        <Grid>
                          <Typography
                            variant="subtitle2"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                          >
                            Minimum bid
                          </Typography>
                          <Grid display="flex">
                            <Typography variant="h5">0.5 </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ alignSelf: 'end', ml: 0.5 }}
                            >
                              ($1,574.39)
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ShoppingCartOutlinedIcon />}
                    sx={{
                      mt: { xs: 2, sm: 0 },
                      width: { xs: '100%', sm: '182px' },
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default ProductDetails;
