import React, { useState } from 'react';

import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  Container,
} from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';

import useAuth from '../../context/authContext';
import UploadFile from '../../components/common/UploadFile';
import { Form } from '../../components/common/Form';
import * as yup from 'yup';

const ReportTheNews = () => {
  const { authenticated } = useAuth();
  const [articleImage, setArticleImage] = useState('');
  const [news, setNews] = useState({
    id: '',
    author: '',
    title: '',
    description: '',
    url: '',
    image: '',
    category: '',
    source: '',
    infoTime: '',
    infoTitle: '',
    infoSubTitle: '',
    status: '',
    content: [],
  });

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/news');
  };

  const handleChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(news);
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
  });

  return (
    <Container maxWidth="xl">
      <Form
        initialValues={news}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h4">Report The News</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5">Create your article.</Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Let&apos;s start with the basics.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <UploadFile
                  name="image"
                  value={articleImage}
                  height="100%"
                  width="100%"
                  setArticleImage={setArticleImage}
                />
              </Box>
              <TextField
                label="Title"
                name="title"
                value={news.title}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Description"
                name="description"
                value={news.description}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5">
                Let&apos;s add some basic details.
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                Add a category, a source, and the time it happened.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Select
                label="News Category"
                name="category"
                value={news.category}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Markets">Markets</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Social">Social</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
              </Select>

              <TextField
                label="News Source"
                name="source"
                value={news.source}
                onChange={handleChange}
              />

              <TextField
                label="News URL"
                name="url"
                value={news.url}
                onChange={handleChange}
              />

              <TextField
                label="News Image"
                name="image"
                value={news.image}
                onChange={handleChange}
              />

              <Typography variant="body1">
                New's Content Section Goes Here.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Report
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default ReportTheNews;
