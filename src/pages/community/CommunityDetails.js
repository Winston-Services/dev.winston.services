import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  Container,
  useMediaQuery,
  Link,
  Tabs,
  Tab,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import blueTik from './../../assets/blue_tik.svg';
import fund11 from './../../assets/fund11.svg';
import fund12 from './../../assets/fund12.svg';
import fund13 from './../../assets/fund13.svg';
import fund21 from './../../assets/fund21.svg';
import fund22 from './../../assets/fund22.svg';
import fund23 from './../../assets/fund23.svg';
import fund31 from './../../assets/fund31.svg';
import fund32 from './../../assets/fund32.svg';
import fund33 from './../../assets/fund33.svg';
import plants from './../../assets/nft_marketplace_1.png';
import ProductDetailsEthereum from './../../assets/product_details_ethereum.svg';
import userProfile from './../../assets/user_profile.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="mt30">
          <Typography>{children}</Typography>
        </Box>
      )}
    </Grid>
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

const historyData1 = [
  { icon: fund11, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund12, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund13, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
];
const historyData2 = [
  { icon: fund21, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund22, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund23, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
];
const historyData3 = [
  { icon: fund31, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund32, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
  { icon: fund33, price: 580, user: 'Bought by Ryazanski', daysAgo: 3 },
];
function CommunityDetails() {
  const matches = useMediaQuery('(min-width:960px)');
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [isSticky, setSticky] = React.useState(true);

  const stickyRef = React.useRef(null);
  React.useEffect(() => {
    console.log(window.pageYOffset);
    console.log(stickyRef.current.getBoundingClientRect().bottom);
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
  }, [isSticky]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid>
        <Grid container>
          {matches ? (
            <Grid item lg={12}>
              <Button
                startIcon={<ArrowBackIosIcon />}
                className="colorWhite fontSize14 fw500"
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            </Grid>
          ) : null}
        </Grid>
        <Grid container className="mt20" ref={stickyRef}>
          <Grid
            container
            item
            md={5}
            lg={5}
            className={`${matches ? 'pr30' : ''}`}
          >
            <Grid item>
              <img src={plants} style={{ borderRadius: '20px' }} />
            </Grid>
            <Grid item container>
              <Grid item>
                <img src={userProfile} style={{ objectFit: 'cover' }} />
              </Grid>
              <Grid item>
                <Typography variant="h5">Winston Art</Typography>
                <Grid display={'flex'}>
                  <Typography variant="h6">winston art</Typography>
                  <img
                    className={`${matches ? 'mw18 mh18' : 'mw12 mh12'}`}
                    src={blueTik}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7} lg={7}>
            <Grid
              className={`dFlex ${
                matches ? 'justifyContentSpaceBetween' : 'flexDirectionColumn'
              }`}
            >
              <Grid>
                <Typography
                  className={`colorWhite fs32 fw800 ${
                    matches ? 'fs32' : 'fs28 mt20'
                  }`}
                >
                  Flower pot
                </Typography>
              </Grid>
              <Grid className={`${matches ? '' : 'mt20'}`}>
                <Typography className="colorWhite fs14 fw400 mt10">
                  Created 3 Days Ago
                </Typography>
              </Grid>
            </Grid>

            <Typography className="colorWhite fontSize14 fw400 mt20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Typography>

            <Grid className="mt20">
              <Button disabled className="product-detail-tags">
                NFT Catagory
              </Button>
            </Grid>
            <Grid className=" dFlex  alignItemsBaseLine pt10">
              <Typography className="colorWhite fs42 fw700 mr20">
                $20,000
              </Typography>
              <Typography className="colorYellow fs12 fw400">
                Fund raised
              </Typography>
            </Grid>

            <Box sx={{ width: '100%' }} className="mt20">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className="productDetailsTabs"
                  TabIndicatorProps={{
                    style: {
                      background:
                        'linear-gradient(90deg, #EA7A8F 0%, #E452C8 99.4%)',
                    },
                  }}
                >
                  <Tab label="Top Funding" {...a11yProps(0)} />
                  <Tab label="Recent Funding" {...a11yProps(1)} />
                  <Tab label="See All" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Paper
                  elevation={0}
                  className={'w100 p20 br10'}
                  style={{
                    background: '#31256C',
                  }}
                >
                  {historyData1.map((item, index) => (
                    <Grid key={item.title + index}>
                      <Grid className="dFlex">
                        <Grid className="mr20">
                          <img
                            src={item.icon}
                            className="w75 br5 hover-cursor-pointer"
                            onClick={() => {
                              navigate(
                                '/marketplace/product-details/transaction'
                              );
                            }}
                          />
                        </Grid>
                        <Grid className="dFlex justifyContentSpaceBetween alignItemsCenter w100">
                          <Grid>
                            <Typography className="colorWhite fontSize16 fw400">
                              ${item.price}
                            </Typography>
                            <Link
                              className="colorWhite fontSize18 fw600 hover-cursor-pointer"
                              onClick={() => {
                                navigate('/nft-user-profile');
                              }}
                            >
                              {item.user}
                            </Link>
                            <Typography className="colorWhite fontSize14 fw400 opacity80 mt10">
                              {item.daysAgo} Days ago
                            </Typography>
                          </Grid>
                          {matches ? (
                            <Grid>
                              <Button
                                className="br25 p10and24 colorWhite borderWhite text-transform-capitalize lineHeightNormal"
                                onClick={() => {
                                  navigate(
                                    '/marketplace/product-details/transaction'
                                  );
                                }}
                              >
                                View Details
                              </Button>
                            </Grid>
                          ) : null}
                        </Grid>
                      </Grid>
                      {index !== historyData1.length - 1 ? (
                        <Grid
                          style={{ background: '#4F409A', height: 1 }}
                          className="mt20 mb20"
                        />
                      ) : null}
                    </Grid>
                  ))}
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Paper
                  elevation={0}
                  className={'w100 p20 br10'}
                  style={{
                    background: '#31256C',
                  }}
                >
                  {historyData2.map((item, index) => (
                    <Grid key={item.title + index}>
                      <Grid className="dFlex">
                        <Grid className="mr20">
                          <img
                            src={item.icon}
                            className="w75 br5 hover-cursor-pointer"
                            onClick={() => {
                              navigate(
                                '/marketplace/product-details/transaction'
                              );
                            }}
                          />
                        </Grid>
                        <Grid className="dFlex justifyContentSpaceBetween alignItemsCenter w100">
                          <Grid>
                            <Typography className="colorWhite fontSize16 fw400">
                              ${item.price}
                            </Typography>
                            <Link
                              className="colorWhite fontSize18 fw600 hover-cursor-pointer"
                              onClick={() => {
                                navigate('/nft-user-profile');
                              }}
                            >
                              {item.user}
                            </Link>
                            <Typography className="colorWhite fontSize14 fw400 opacity80 mt10">
                              {item.daysAgo} Days ago
                            </Typography>
                          </Grid>
                          {matches ? (
                            <Grid>
                              <Button
                                className="br25 p10and24 colorWhite borderWhite text-transform-capitalize lineHeightNormal"
                                onClick={() => {
                                  navigate(
                                    '/marketplace/product-details/transaction'
                                  );
                                }}
                              >
                                View Details
                              </Button>
                            </Grid>
                          ) : null}
                        </Grid>
                      </Grid>
                      {index !== historyData2.length - 1 ? (
                        <Grid
                          style={{ background: '#4F409A', height: 1 }}
                          className="mt20 mb20"
                        />
                      ) : null}
                    </Grid>
                  ))}
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Paper
                  elevation={0}
                  className={'w100 p20 br10'}
                  style={{
                    background: '#31256C',
                  }}
                >
                  {historyData3.map((item, index) => (
                    <Grid key={item.title + index}>
                      <Grid className="dFlex">
                        <Grid className="mr20">
                          <img
                            src={item.icon}
                            className="w75 br5 hover-cursor-pointer"
                            onClick={() => {
                              navigate(
                                '/marketplace/product-details/transaction'
                              );
                            }}
                          />
                        </Grid>
                        <Grid className="dFlex justifyContentSpaceBetween alignItemsCenter w100">
                          <Grid>
                            <Typography className="colorWhite fontSize16 fw400">
                              ${item.price}
                            </Typography>
                            <Link
                              className="colorWhite fontSize18 fw600 hover-cursor-pointer"
                              onClick={() => {
                                navigate('/nft-user-profile');
                              }}
                            >
                              {item.user}
                            </Link>
                            <Typography className="colorWhite fontSize14 fw400 opacity80 mt10">
                              {item.daysAgo} Days ago
                            </Typography>
                          </Grid>
                          {matches ? (
                            <Grid>
                              <Button
                                className="br25 p10and24 colorWhite borderWhite text-transform-capitalize lineHeightNormal"
                                onClick={() => {
                                  navigate(
                                    '/marketplace/product-details/transaction'
                                  );
                                }}
                              >
                                View Details
                              </Button>
                            </Grid>
                          ) : null}
                        </Grid>
                      </Grid>
                      {index !== historyData3.length - 1 ? (
                        <Grid
                          style={{ background: '#4F409A', height: 1 }}
                          className="mt20 mb20"
                        />
                      ) : null}
                    </Grid>
                  ))}
                </Paper>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
        <Grid style={{ height: 180 }}>
          <Grid
            container
            className={`mt30 ${
              isSticky
                ? 'buyNowContainer buyNowContainerSticky'
                : 'buyNowContainer'
            }`}
          >
            <Grid item lg={12} className="w100">
              <Paper
                elevation={0}
                className={`br10 ${matches ? 'p30' : 'p20'}`}
                style={{
                  background: '#31256C',
                }}
              >
                <Container className="p0">
                  <Grid
                    className={`dFlex w100 ${
                      matches
                        ? 'justifyContentSpaceBetween alignItemsCenter'
                        : 'flexDirectionColumn'
                    }`}
                  >
                    <Grid className="dFlex">
                      <Grid className="mr20">
                        <img src={plants} className="w120 h120 br5" />
                      </Grid>
                      <Grid>
                        <Typography
                          className={`colorWhite fw700 ${
                            matches ? 'fs26' : 'fs22'
                          }`}
                        >
                          Flower pot
                        </Typography>

                        <Grid className="dFlex mt10 alignItemsCenter">
                          <Grid className="mr20">
                            <img src={ProductDetailsEthereum} />
                          </Grid>
                          <Grid>
                            {matches ? (
                              <Typography className="colorWhite fs12 fw400">
                                Minimum bid
                              </Typography>
                            ) : null}
                            <Typography className="colorWhite fs24 fw500">
                              0.5 <span className="fs14">($1,574.39)</span>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid>
                      <Button
                        startIcon={<ShoppingCartOutlinedIcon />}
                        className={`br25 p10-42 gradientButton colorWhite text-transform-capitalize ${
                          matches ? '' : 'mt20 w100'
                        }`}
                      >
                        Buy Now
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default CommunityDetails;
