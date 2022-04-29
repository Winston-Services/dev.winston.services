import React from 'react';

import { Paper, Typography, Button, Grid, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';

import { ReactComponent as CursorIcon } from './../../../assets/cursor_icon.svg';
import { ReactComponent as EyeIcon } from './../../../assets/eye_icon.svg';
import { ReactComponent as FundIcon } from './../../../assets/fund_icon.svg';
import { ReactComponent as LikeIcon } from './../../../assets/like_icon.svg';
import NftImage from './../../../assets/nft_image_1.png';
import { ReactComponent as ProfileIcon } from './../../../assets/profile_icon.svg';
import PromotionImage1 from './../../../assets/promotion_image_1.png';

const RecentPromotionData = [
  {
    image: PromotionImage1,
    title: 'PsychoMolly',
  },
  {
    image: PromotionImage1,
    title: 'PsychoMolly',
  },
];

const promotionData = [
  {
    image: NftImage,
    title: 'Flower pot...',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s',
    impression: 5000,
    likes: 550,
    clicks: 3500,
    profileVisits: 850,
    fund: 150,
  },
];

const chartData = [
  {
    uv: 0,
  },
  {
    uv: 12,
  },
  {
    uv: 10,
  },
  {
    uv: 30,
  },
  {
    uv: 10,
  },
  {
    uv: 60,
  },
  {
    uv: 15,
  },
  {
    uv: 40,
  },
  {
    uv: 0,
  },
];
function PromotionTab() {
  const navigate = useNavigate();
  return (
    <Grid>
      {promotionData.length === 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              elevation={0}
              sx={{
                py: 3,
                border: '1px solid #FFFFFF',
                borderRadius: '10px',
                mt: 3,
              }}
            >
              <Typography noWrap textAlign={'center'} variant="subtitle1">
                You have not posted any update yet
              </Typography>
            </Paper>
            <Grid item textAlign={'center'}>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ width: { xs: '100%', sm: 'auto' }, mt: { xs: 2, md: 5 } }}
                onClick={() => {
                  navigate('/campaign/user-dashboard/select-nft');
                }}
              >
                Select NFT
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={3} mt={3}>
            <Typography
              mb={2.5}
              variant="subtitle1"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Recent NFT’s
            </Typography>
            <Grid container spacing={3}>
              {RecentPromotionData.map((item, index) => (
                <Grid key={index} item sm={6} md={12}>
                  <Card elevation={0}>
                    <Grid container>
                      <img
                        src={item.image}
                        alt="promotion-image"
                        width={'100%'}
                      />
                      <Grid item container mx={2}>
                        <Typography sx={{ fontSize: '18px', mt: 2 }}>
                          {item.title}
                        </Typography>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ mt: 1.2, mb: 1.8, width: '100%' }}
                          onClick={() =>
                            navigate(
                              '/campaign/user-dashboard/promote-nft-form'
                            )
                          }
                        >
                          Promote Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          {promotionData.map((item, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                p: { xs: 0, sm: 2, md: 3 },
                background: { xs: 'transparent', sm: '#31256C' },
              }}
            >
              <Grid
                container
                justifyContent={{ xs: 'start', md: 'center' }}
                spacing={2}
                mb={4}
              >
                <Grid item>
                  <Paper elevation={0} sx={{ width: '170px', py: 1, px: 1 }}>
                    <Grid display="flex" alignItems={'center'}>
                      <EyeIcon />
                      <Typography variant="h5" ml={1}>
                        {item.impression}
                      </Typography>
                    </Grid>
                    <Typography variant="subtitle2" ml={4.8}>
                      Total Impression
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={0} sx={{ width: '170px', py: 1, px: 1 }}>
                    <Grid display="flex" alignItems={'center'}>
                      <LikeIcon />
                      <Typography variant="h5" ml={1}>
                        {item.likes}
                      </Typography>
                    </Grid>
                    <Typography variant="subtitle2" ml={4}>
                      Total Likes
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={0} sx={{ width: '170px', py: 1, px: 1 }}>
                    <Grid display="flex" alignItems={'center'}>
                      <CursorIcon />
                      <Typography variant="h5" ml={1}>
                        {item.clicks}
                      </Typography>
                    </Grid>
                    <Typography variant="subtitle2" ml={3}>
                      Total Clicks
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={0} sx={{ width: '170px', py: 1, px: 1 }}>
                    <Grid display="flex" alignItems={'center'}>
                      <ProfileIcon />
                      <Typography variant="h5" ml={1}>
                        {item.profileVisits}
                      </Typography>
                    </Grid>
                    <Typography variant="subtitle2" ml={3}>
                      Profile Visits
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={0} sx={{ width: '170px', py: 1, px: 1 }}>
                    <Grid display="flex" alignItems={'center'}>
                      <FundIcon />
                      <Typography variant="h5" ml={1}>
                        {item.fund}
                      </Typography>
                    </Grid>
                    <Typography variant="subtitle2" ml={3.8}>
                      Collected Fund
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container spacing={{ xs: 3, md: 6, lg: 12 }}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    <Grid item sm={3}>
                      <img src={item.image} alt="" width={'100%'} />
                    </Grid>
                    <Grid item sm={9}>
                      <Typography sx={{ fontSize: '22px' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: '13px' }} mt={2}>
                        {item.subtitle}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 4, width: { xs: '100%', sm: 'auto' } }}
                  >
                    Edit Promotion
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card elevation={0} sx={{ background: '#382C76' }}>
                    <Grid
                      pt={1}
                      px={2}
                      display="flex"
                      justifyContent={'space-between'}
                    >
                      <Grid>
                        <Typography variant="subtitle1">Invested</Typography>
                        <Typography variant="h5">$30</Typography>
                      </Grid>
                      <Grid>
                        <Typography variant="subtitle1">Spend</Typography>
                        <Typography variant="h5">$12.50</Typography>
                      </Grid>
                    </Grid>
                    <Grid height={'152px'} mb={'-5px'}>
                      <ResponsiveContainer>
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient
                              id={'color1'}
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="0"
                            >
                              <stop offset="30%" stopColor="#E77C8D" />
                              <stop offset="65%" stopColor="#E251C6" />
                              <stop offset="100%" stopColor="#A764E5" />
                            </linearGradient>
                          </defs>
                          <Tooltip />
                          <Area
                            strokeOpacity={0}
                            type="monotone"
                            dataKey="uv"
                            fillOpacity={1}
                            fill="url(#color1)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          ))}

          <Grid mt={3} textAlign="center">
            <Button variant="contained" color="secondary">
              Promote Another NFT
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default PromotionTab;
