import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Rating,
  Chip,
  Avatar,
} from '@mui/material';
import AcademyDetailsImage from '../../assets/academy-details-image.svg';
import AuthorAvatar from '../../assets/author-avatar.svg';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';

function AcademyDetails() {
  return (
    <Grid mt={'-100px'}>
      <Grid>
        <img
          src={AcademyDetailsImage}
          style={{
            width: '100%',
          }}
        />
      </Grid>
      <Container sx={{ mt: 4 }}>
        <Grid container>
          <Grid item md={10} display={'flex'}>
            <Typography variant="subtitle1">Home</Typography>
            <Typography variant="subtitle1" mx={1.25}>
              /
            </Typography>
            <Typography variant="subtitle1">Articles</Typography>
            <Typography variant="subtitle1" mx={1.25}>
              /
            </Typography>
            <Typography variant="subtitle1">
              Crypto Payments Explained
            </Typography>
          </Grid>
          <Grid item md={2} display="flex" justifyContent={'end'}>
            <Rating name="half-rating" />
          </Grid>
        </Grid>
        <Grid container mt={4}>
          <Grid item md={1} display="flex" alignItems={'center'}>
            <CircleIcon sx={{ fontSize: '6px' }} />
            <Typography variant="subtitle2" ml={0.7}>
              Beginners
            </Typography>
          </Grid>
          <Grid item md={1.6} display="flex" alignItems={'center'}>
            <StarIcon sx={{ color: '#FFD215' }} />
            <Typography variant="subtitle2" ml={0.7}>
              4.7 (120 review)
            </Typography>
          </Grid>
          <Grid item md={1.6} display="flex" alignItems={'center'}>
            <AccessTimeIcon />
            <Typography variant="subtitle2" ml={0.7}>
              2 hour 15 min
            </Typography>
          </Grid>
          <Grid item md={1.6} display="flex" alignItems={'center'}>
            <VisibilityIcon />
            <Typography variant="subtitle2" ml={0.7}>
              251 viewer
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h3" mt={5}>
          Crypto Payments Explained
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item>
            <Chip color="secondary" label="Blockchain" />
          </Grid>
          <Grid item>
            <Chip color="secondary" label="Economics" />
          </Grid>
        </Grid>

        <Grid mt={5} display="flex">
          <Avatar
            alt="Author"
            src={AuthorAvatar}
            sx={{ width: 58, height: 58, mr: 2.5 }}
          />
          <Grid>
            <Typography variant="h5">Hattie H. Moore</Typography>
            <Typography variant="subtitle2">Hattie H. Moore</Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AcademyDetails;
