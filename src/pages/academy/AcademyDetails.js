import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Grid, Container, Typography, Chip, Avatar, Link } from '@mui/material';
import { useNavigate } from 'react-router';

// import AcademyDetailsImage from '../../assets/academy_details_image.svg';
import AuthorAvatar from '../../assets/author_avatar.svg';
import AcademyAccordion from './components/AcademyAccordion';
// import AcademySlider from './components/AcademySlider';

function AcademyDetails() {
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Grid container item xs={12} display={'flex'}>
          <Link
            variant="subtitle1"
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Link>
          <Typography variant="subtitle1" mx={1.25}>
            /
          </Typography>
          <Link
            variant="subtitle1"
            onClick={() => {
              navigate('/academy');
            }}
          >
            Academy
          </Link>
          <Typography variant="subtitle1" mx={1.25}>
            /
          </Typography>
          <Link variant="subtitle1">Articles</Link>
          <Typography variant="subtitle1" mx={1.25}>
            /
          </Typography>
          <Link variant="subtitle1">Crypto Payments Explained</Link>
        </Grid>

        <Typography variant="h3" mt={4}>
          Crypto Payments Explained
        </Typography>
        <Grid container mt={2} gap={2}>
          <Grid item display="flex" alignItems={'center'}>
            <StarIcon sx={{ color: '#FFD215' }} />
            <Typography variant="subtitle2" ml={0.7}>
              4.7 (120 review)
            </Typography>
          </Grid>
          <Grid item display="flex" alignItems={'center'}>
            <AccessTimeIcon />
            <Typography variant="subtitle2" ml={0.7}>
              2 hour 15 min
            </Typography>
          </Grid>
          <Grid item display="flex" alignItems={'center'}>
            <VisibilityIcon />
            <Typography variant="subtitle2" ml={0.7}>
              251 viewer
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
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
        <Grid
          container
          item
          display={'flex'}
          alignItems="center"
          justifyContent={'space-between'}
          mt={10}
          xs={12}
        >
          <Typography variant="h5">Course detail</Typography>
          <Grid item display={'flex'} gap={2} sx={{ my: { xs: 1.5 } }}>
            <Grid item display={'flex'} alignItems="center">
              <CircleIcon sx={{ fontSize: '6px' }} />
              <Typography variant="subtitle1" ml={1}>
                84 lectures
              </Typography>
            </Grid>
            <Grid item display={'flex'} alignItems="center">
              <CircleIcon sx={{ fontSize: '6px' }} />
              <Typography variant="subtitle1" ml={1}>
                9h 43m total length
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AcademyAccordion />
        </Grid>

        {/* <Grid mt={10} height="440px">
          <Grid position="absolute" left={0} p={2.5}>
            <AcademySlider />
          </Grid>
        </Grid> */}
      </Container>

      {/* <Grid my={5} mx={2}>
        <AcademySlider />
      </Grid> */}
    </>
  );
}

export default AcademyDetails;
