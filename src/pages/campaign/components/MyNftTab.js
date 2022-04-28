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
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as EyeIcon } from './../../../assets/eye_icon.svg';
import { ReactComponent as LikeIcon } from './../../../assets/like_icon.svg';
import { ReactComponent as VersionIcon } from './../../../assets/version_icon.svg';

function MyNftTab({ myNftData }) {
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
              <LinearProgress variant="determinate" value={60} />
              <Grid container my={3}>
                <Grid item sm={3}>
                  <img src={item.image} alt="nft-image" width="100%" />
                </Grid>
                <Grid
                  item
                  sm={9}
                  sx={{ px: { xs: 0.5, sm: 3 }, mt: { xs: 1, sm: 0 } }}
                  display="flex"
                  flexDirection={'column'}
                  justifyContent="space-between"
                >
                  <Typography sx={{ fontSize: '22px' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', my: { xs: 1, sm: 0.5 } }}>
                    {item.subtitle}
                  </Typography>
                  <Grid container>
                    <Chip variant="filled" label="NFT Category" />
                  </Grid>
                  <Grid
                    container
                    display={'flex'}
                    justifyContent={'space-between'}
                    sx={{ my: { xs: 1, sm: 0.5 } }}
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
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mt: { xs: 1, sm: 0 } }}
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

MyNftTab.propTypes = {
  myNftData: PropTypes.array,
};

export default MyNftTab;
