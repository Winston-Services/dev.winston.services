import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Grid,
  Container,
  Typography,
  Rating,
  Chip,
  Avatar,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router';

import AcademyDetailsImage from '../../assets/academy_details_image.svg';
import AuthorAvatar from '../../assets/author_avatar.svg';
import AcademyAccordion from './components/AcademyAccordion';
import AcademySlider from './components/AcademySlider';


function AcademyDetails() {
  const navigate = useNavigate();
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
            <Rating size="large" />
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
            <Link
              variant="h5"
              onClick={() => navigate('/academy/teacher-profile')}
            >
              Hattie H. Moore
            </Link>
            <Typography variant="subtitle2">Hattie H. Moore</Typography>
          </Grid>
        </Grid>
        <Grid mt={4}>
          <AcademyAccordion />
        </Grid>
        <Grid mt={10} height="440px">
          <Grid position="absolute" left={0} p={2.5}>
            <AcademySlider />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default AcademyDetails;
