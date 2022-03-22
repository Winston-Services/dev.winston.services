import React from 'react';
import user_profile_cover from '../../assets/user_profile_cover.png';
import user_profile from '../../assets/user_profile.png';
import { Grid, Container, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

function UserProfile() {
  return (
    <Grid mt={'-100px'}>
      <div>
        <img
          src={user_profile_cover}
          style={{
            width: '100%',
          }}
        />
      </div>
      <Container>
        <Grid container>
          <Grid item md={6} display="flex">
            <img src={user_profile} style={{ width: '13vw', height: '13vw' }} />
            <div>
              <Typography variant="h4" fontWeight={800}>
                Winston Art
              </Typography>
              <Grid display="flex" alignItems="center">
                <Typography variant="h6" sx={{ mr: 2 }}>
                  winston_art
                </Typography>
                <VerifiedIcon sx={{ color: '#3D96FF' }} />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default UserProfile;
