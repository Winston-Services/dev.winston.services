import React from 'react';

import {
  Grid,
  Card,
  LinearProgress,
  Typography,
  Chip,
  Paper,
  Button,
} from '@mui/material/';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as EyeIcon } from './../../../assets/eye_icon.svg';
import { ReactComponent as LikeIcon } from './../../../assets/like_icon.svg';
import NftImage1 from './../../../assets/nft_image_1.png';
import { ReactComponent as VersionIcon } from './../../../assets/version_icon.svg';

const myNftData = [
  {
    goal: 2000,
    archiveInPer: 60,
    archiveInDollar: 1200,
    image: NftImage1,
    title: 'Flower pot',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s',
    viewer: 10254,
    version: 1,
    likes: 4,
  },
];

function MyNftTab() {
  const navigate = useNavigate();
  return (
    <Grid>
      {myNftData.length === 0 ? (
        <>
          <Paper
            elevation={0}
            sx={{
              py: 3,
              borderRadius: '10px',
              mt: 3,
            }}
          >
            <Typography textAlign={'center'} variant="subtitle1">
              You have not started any Campaign
            </Typography>
          </Paper>
          <Grid item textAlign={'center'}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: { xs: '100%', sm: 'auto' }, mt: 5 }}
              onClick={() => {
                navigate('/campaign/user-dashboard/nft-form');
              }}
            >
              Started your first Campaign
            </Button>
          </Grid>
        </>
      ) : (
        <Grid>
          {myNftData.map((item, index) => (
            <Card key={index} elevation={0} sx={{ px: 3, mb: 2 }}>
              <Grid
                container
                display={'flex'}
                justifyContent="space-between"
                py={3}
              >
                <Grid>
                  <Typography variant="subtitle1">Goal</Typography>
                  <Typography variant="h6">{'$' + item.goal}</Typography>
                </Grid>
                <Grid>
                  <Typography variant="subtitle1">Achieve</Typography>
                  <Typography variant="h6">
                    {item.archiveInPer + '%($' + item.archiveInDollar + ')'}
                  </Typography>
                </Grid>
              </Grid>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{ background: '#271D5A' }}
              />
              <Grid container my={3}>
                <Grid item sm={3}>
                  <img src={item.image} alt="nft-image" width="100%" />
                </Grid>
                <Grid item sm={9} sx={{ px: { xs: 0, sm: 3 }, mt: 1 }}>
                  <Typography sx={{ fontSize: '22px' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', my: 2.5 }}>
                    {item.subtitle}
                  </Typography>
                  <Grid container>
                    <Chip variant="filled" label="NFT Category" />
                  </Grid>
                  <Grid
                    container
                    display={'flex'}
                    justifyContent={'space-between'}
                    mt={2.5}
                  >
                    <Grid item>
                      <Grid container gap={2}>
                        <Grid item>
                          <Grid display="flex" alignItems={'center'}>
                            <EyeIcon />
                            <Typography variant="h5" ml={1}>
                              {item.viewer}
                            </Typography>
                          </Grid>
                          <Typography variant="subtitle2" ml={5}>
                            Total Viewer
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Grid display="flex" alignItems={'center'}>
                            <VersionIcon />
                            <Typography variant="h5" ml={1}>
                              {item.version + '  version'}
                            </Typography>
                          </Grid>
                          <Typography
                            variant="subtitle2"
                            sx={{ ml: { xs: 3.5, sm: 4 } }}
                          >
                            Total Versions
                          </Typography>
                        </Grid>

                        <Grid item>
                          <Grid display="flex" alignItems={'center'}>
                            <LikeIcon />
                            <Typography variant="h5" ml={1}>
                              {item.likes + '  Likes'}
                            </Typography>
                          </Grid>
                          <Typography variant="subtitle2" ml={4}>
                            Total Likes
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      mt={2.5}
                      sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                      >
                        Edit NFT fund
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

export default MyNftTab;
