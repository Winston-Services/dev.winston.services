import React from 'react';
import {
  Paper,
  Typography,
  Button,
  Grid,
  Container,
  TextField,
  Rating,
} from '@mui/material';

function Voting() {
  return (
    <Container>
      <Grid container display={'flex'} justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Paper elevation={0} sx={{ textAlign: 'center' }}>
            <Paper elevation={0} sx={{ background: '#483996' }}>
              <Typography variant="h5" py={4}>
                Your opinion matters to us!
              </Typography>
            </Paper>

            <Typography variant="h6" mt={3}>
              Lorem Ipsum is simply dummy text of the printing
            </Typography>

            <Grid mt={4}>
              <Rating sx={{ fontSize: '50px' }} />
            </Grid>

            <Grid p={6}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={12}
                placeholder="Message"
              />
            </Grid>

            <Grid display={'flex'} gap={2} justifyContent="center" pb={6}>
              <Button variant="contained" color="secondary">
                Rate Now
              </Button>
              <Button variant="outlined">May be later</Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Voting;
