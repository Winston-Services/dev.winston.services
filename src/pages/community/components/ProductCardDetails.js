import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VerifiedIcon from '@mui/icons-material/Verified';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Grid,
  Button,
  Container,
  Typography,
  Chip,
  Box,
  Paper,
  Tab,
} from '@mui/material';
import { useNavigate } from 'react-router';

import ProductDetailsEthereum from './../../../assets/product_details_ethereum.svg';
import ProductImage from './../../../assets/product_image1.png';
import user_profile from './../../../assets/user_profile.png';
const TopFundingDetailsTabCard = React.lazy(() =>
  import('./TopFundingDetailsTabCard')
);
const RecentFundingDetailsTabCard = React.lazy(() =>
  import('./RecentFundingDetailsTabCard')
);

function ProductCardDetails() {
  const navigate = useNavigate();
  const [isSticky, setSticky] = React.useState(true);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  }, [isSticky]);

  return (
    <Container>
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
        <Grid item xs={12} md={6}>
          <img
            src={ProductImage}
            style={{
              width: '100%',
              maxWidth: '528px',
              borderRadius: '20px',
            }}
          ></img>

          <Grid display="flex" alignItems="center" mt={4}>
            <Grid item xs={12} md={3}>
              <img
                src={user_profile}
                style={{
                  maxWidth: '100%',
                  height: '100px',
                }}
              />
            </Grid>
            <Grid item md={9}>
              <Typography variant="h4" fontWeight={800}>
                Winston Art
              </Typography>
              <Grid display="flex" alignItems="center">
                <Typography variant="h6" sx={{ mr: 2 }}>
                  winston_art
                </Typography>
                <VerifiedIcon sx={{ color: '#3D96FF' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: 2,
            }}
          >
            <Typography variant="h5" fontWeight={'800'}>
              Flower pot
            </Typography>
            <Typography variant="subtitle2" fontWeight={'400'}>
              Created 3 Days Ago
            </Typography>
          </Grid>
          <Grid item my={3}>
            <Typography fontSize="15px" fontWeight={'400'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Typography>
          </Grid>
          <Chip variant="filled" label="NFT Category" />
          <Grid display="flex" alignItems={'center'} gap={3} my={3}>
            <Typography fontSize="42px" fontWeight={'700'}>
              $20,000
            </Typography>
            <Typography
              variant="h6"
              fontWeight={'500'}
              sx={{ color: '#FFD215' }}
            >
              Fund raised
            </Typography>
          </Grid>
          <Grid>
            <Box sx={{ width: '100%', typography: 'body1', padding: 0 }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: 'transparent',
                  }}
                >
                  <TabList onChange={handleChange}>
                    <Tab
                      label="Top Funding"
                      value="1"
                      sx={{ fontSize: '16px', fontWeight: '500' }}
                    />
                    <Tab
                      label="Recent Funding"
                      value="2"
                      sx={{ fontSize: '16px', fontWeight: '500' }}
                    />
                    <Tab
                      label="See All"
                      value="3"
                      sx={{ fontSize: '16px', fontWeight: '500' }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <TopFundingDetailsTabCard />
                </TabPanel>
                <TabPanel value="2">
                  <RecentFundingDetailsTabCard />
                </TabPanel>
                <TabPanel value="3">
                  <>
                    <RecentFundingDetailsTabCard />
                    <TopFundingDetailsTabCard />
                  </>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
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
                        <Typography variant="h5">Flower pot</Typography>

                        <Grid
                          display="flex"
                          alignItems="center"
                          sx={{ mt: 1.25 }}
                        >
                          <Grid sx={{ mr: 2.5 }}>
                            <img src={ProductDetailsEthereum} />
                          </Grid>
                          <Grid>
                            <Grid display="flex">
                              <Typography variant="h5">0.5 </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ alignSelf: 'start', ml: 0.5 }}
                              >
                                ($1,574.39)
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid display="flex" gap={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                          mt: { xs: 2, sm: 0 },
                          width: { xs: '100%', sm: '182px' },
                        }}
                      >
                        Fund Now
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          mt: { xs: 2, sm: 0 },
                          width: { xs: '100%', sm: '182px' },
                        }}
                      >
                        Share
                      </Button>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}

export default ProductCardDetails;
