import React, { useState } from 'react';

import {
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
} from '@mui/material';

import NewsSlider from './components/NewsSlider';
import NewsTab from './components/NewsTab';
function News() {
  const [openSearchNews, setOpenSearchNews] = useState(false);

  const renderSearchNews = () => {
    return (
      <Typography variant="h3" style={{ display: 'inline-block' }}>
        <>
          <IconButton onClick={handleOpenSearchNews}>🔍</IconButton> Search The
          News ...
        </>
      </Typography>
    );
  };
  const handleOpenSearchNews = () => {
    setOpenSearchNews(!openSearchNews);
  };

  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          direction: 'row',
        }}
      >
        {openSearchNews ? (
          renderSearchNews()
        ) : (
          <Typography variant="h3" style={{ display: 'inline-block' }}>
            <>
              <IconButton onClick={handleOpenSearchNews}>🔍</IconButton> In The
              News ...
            </>
          </Typography>
        )}
        {openSearchNews && (
          <>
            <TextField
              name="search"
              InputProps={{
                endAdornment: (
                  <Button>Search</Button>
                )
              }}
            />
          </>
        )}

        <Button variant="contained" color="primary" style={{ float: 'right' }}>
          Report the News
        </Button>
      </Box>
      <NewsSlider />
      <NewsTab />
    </Container>
  );
}

export default News;
