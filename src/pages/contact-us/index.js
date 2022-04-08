import React from 'react';

import { Container, Grid, Typography, Button, TextField } from '@mui/material';

import ContactUsIcon from './../../assets/contact_us.svg';

function ContactUs() {
  return (
    <Container>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Contact us</Typography>
          <Typography variant="h5" mt={5}>
            Quick query form
          </Typography>
          <Typography variant="subtitle2">
            by filling this form we will contact you soon
          </Typography>
          <Grid display={'flex'} flexDirection={'column'} gap={2} mt={5}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              placeholder="Enter your name"
            />
            <TextField
              fullWidth
              variant="outlined"
              label={'Email Id'}
              placeholder={'Enter your email ID'}
            />
            <TextField
              fullWidth
              variant="outlined"
              multiline={true}
              rows={4}
              label={'Message'}
              placeholder={'Type you Query Here'}
            />
          </Grid>
          <Button variant="contained" color="secondary" sx={{ mt: 7 }}>
            Submit your query
          </Button>
        </Grid>
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img src={ContactUsIcon} style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactUs;
