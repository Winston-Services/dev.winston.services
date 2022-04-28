import React from 'react';

import { Paper, Typography, Button, Grid, Card } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CursorIcon } from './../../../assets/cursor_icon.svg';
import { ReactComponent as EyeIcon } from './../../../assets/eye_icon.svg';
import { ReactComponent as FundIcon } from './../../../assets/fund_icon.svg';
import { ReactComponent as LikeIcon } from './../../../assets/like_icon.svg';
import NftImage from './../../../assets/nft_image_1.png';
import { ReactComponent as ProfileIcon } from './../../../assets/profile_icon.svg';

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

function PromotionTab({ RecentPromotionData }) {
  const navigate = useNavigate();
  return (
    <Grid>
      {promotionData.length === 0 ? (
        <Grid container spacing={4}>
          <Grid item md={9}>
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
                sx={{ width: { xs: '100%', sm: 'auto' }, mt: 5 }}
                onClick={() => {
                  navigate('/campaign/user-dashboard/select-nft');
                }}
              >
                Select NFT
              </Button>
            </Grid>
          </Grid>
          <Grid item md={3} mt={3}>
            <Typography mb={2.5} variant="subtitle1">
              Recent NFT’s
            </Typography>
            {RecentPromotionData.map((item, index) => (
              <Card key={index} elevation={0} sx={{ mb: 2 }}>
                <Grid container>
                  <img src={item.image} alt="promotion-image" />
                  <Grid item container mx={2}>
                    <Typography sx={{ fontSize: '18px', mt: 2 }}>
                      {item.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 1.2, mb: 1.8, width: '100%' }}
                      onClick={() =>
                        navigate('/campaign/user-dashboard/promote-nft-form')
                      }
                    >
                      Promote Now
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Grid>
      ) : (
        <Grid>
          {promotionData.map((item, index) => (
            <Card key={index} elevation={0} sx={{ p: 3 }}>
              <Grid container justifyContent={'center'} spacing={5}>
                <Grid item>
                  <Grid display="flex" alignItems={'center'}>
                    <EyeIcon />
                    <Typography variant="h5" ml={1}>
                      {item.impression}
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" ml={4.8}>
                    Total Impression
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid display="flex" alignItems={'center'}>
                    <LikeIcon />
                    <Typography variant="h5" ml={1}>
                      {item.likes}
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" ml={4}>
                    Total Likes
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid display="flex" alignItems={'center'}>
                    <CursorIcon />
                    <Typography variant="h5" ml={1}>
                      {item.clicks}
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" ml={3}>
                    Total Clicks
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid display="flex" alignItems={'center'}>
                    <ProfileIcon />
                    <Typography variant="h5" ml={1}>
                      {item.profileVisits}
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" ml={3}>
                    Profile Visits
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid display="flex" alignItems={'center'}>
                    <FundIcon />
                    <Typography variant="h5" ml={1}>
                      {item.fund}
                    </Typography>
                  </Grid>
                  <Typography variant="subtitle2" ml={3.8}>
                    Collected Fund
                  </Typography>
                </Grid>
              </Grid>
              <Grid container my={3}>
                <Grid item md={5}>
                  <Grid container spacing={2}>
                    <Grid item md={3}>
                      <img src={item.image} alt="" width={'100%'} />
                    </Grid>
                    <Grid
                      item
                      md={9}
                      display="flex"
                      flexDirection={'column'}
                      justifyContent="space-between"
                    >
                      <Typography sx={{ fontSize: '22px' }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: '13px' }}>
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
                <Grid item md={3}></Grid>
                <Grid item md={4}></Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

PromotionTab.propTypes = {
  RecentPromotionData: PropTypes.array,
};

export default PromotionTab;
