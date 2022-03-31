import React from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CertificateStar from './../../assets/certificate_star.svg';

export default function SuccessUpload() {
  const navigate = useNavigate();

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid textAlign={'center'}>
        <img src={CertificateStar} />
        <Typography variant="h4" mt={5}>
          Congratulations! your video uploaded successfully
        </Typography>
        <Typography mt={2} mb={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          sapien consectetur leo duis arcu. Justo, habitant sit a enim tincidunt
          urna risus porttitor dignissim. Tristique egestas ipsum nam commodo,
          aliquet ac. Lectus scelerisque leo ac tortor quis.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate('/academy/teacher-profile');
          }}
        >
          See All Video
        </Button>
      </Grid>
    </Container>
  );
}
