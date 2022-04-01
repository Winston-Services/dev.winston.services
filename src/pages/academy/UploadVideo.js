import React from 'react';

import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';

import { ReactComponent as UploadIcon } from './../../assets/upload_icon.svg';

function UploadVideo() {
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Paper
            elevation={0}
            sx={{
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: 2,
              border: '2px dashed #0969DC',
            }}
          >
            <UploadIcon />
            <Typography variant="subtitle1" mt={3}>
              Upload a video/Thumbnail
            </Typography>
            <Typography variant="subtitle2">
              You can upload maximum 100mb video
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={6} display="flex" flexDirection={'column'} gap={4}>
          <TextField
            fullWidth
            label="Video title"
            placeholder="Video title"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={8}
            placeholder="Description"
          />
          <Grid display={'flex'} gap={2.5}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>
                navigate('/academy/add-course/upload-video/succuss-upload')
              }
            >
              Upload Video
            </Button>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UploadVideo;
