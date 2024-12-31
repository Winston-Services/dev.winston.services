import React, { useState } from 'react';

import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ReportTheNews = () => {
  const [news, setNews] = useState({
    title: '',
    description: '',
    url: '',
    image: '',
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

  return (
    <Box>
      <Typography variant="h4">Report The News</Typography>
      <Box>
        <TextField
          label="News Title"
          name="title"
          value={news.title}
          onChange={handleChange}
        />
        <TextField
          label="News Description"
          name="description"
          value={news.description}
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

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Report
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportTheNews;
