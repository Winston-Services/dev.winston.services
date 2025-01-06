import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

export const JoinCommunity = ({ handleClose }) => {
  
  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open(
                'https://discord.gg/rickle-897546129108008960',
                '_blank'
              );
            }}
          >
            Join our Discord
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open('https://t.me/therickle', '_blank');
            }}
          >
            Join Rickle Telegram
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open('https://x.com/Rickle_Token', '_blank');
            }}
          >
            Follow us on X
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Button onClick={handleClose} variant="contained" color="error">
          Close
        </Button>
      </Box>
    </Paper>
  );
};

JoinCommunity.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default JoinCommunity;
