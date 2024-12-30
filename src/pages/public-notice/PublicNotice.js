import React, { useState } from 'react';

import {
  Container,
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PublicNoticeSlider from './components/PublicNoticeSlider';
import PublicNoticeTab from './components/PublicNoticeTab';

function PublicNotice() {
  const navigate = useNavigate();

  const [openSearchPublicNotice, setOpenSearchPublicNotice] = useState(false);

  const renderSearchPublicNotice = () => {
    return (
      <Typography variant="h3" style={{ display: 'inline-block' }}>
        <>
          <IconButton onClick={handleOpenSearchPublicNotice}>🔍</IconButton> Search Proposals ...
        </>
      </Typography>
    );
  };
  const handleOpenSearchPublicNotice = () => {
    setOpenSearchPublicNotice(!openSearchPublicNotice);
  };

  const handleCreateProposal = () => {
    navigate('/public-notice/create-proposal');
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
        {openSearchPublicNotice ? (
          renderSearchPublicNotice()
        ) : (
          <Typography variant="h3" style={{ display: 'inline-block' }}>
            <>
              <IconButton onClick={handleOpenSearchPublicNotice}>🔍</IconButton> Public Notice
            </>
          </Typography>
        )}
        {openSearchPublicNotice && (
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

        <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={handleCreateProposal}>
          Create A Proposal
        </Button>
      </Box>
      <PublicNoticeSlider />
      <PublicNoticeTab />
    </Container>
  );
}

export default PublicNotice;
