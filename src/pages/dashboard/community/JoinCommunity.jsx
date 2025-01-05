import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const JoinCommunity = ({
  inProgress,
  setInProgress,
  handleCompleteItem,
}) => {
  const { row, item } = inProgress;
  const handleClose = () => {
    setInProgress(false);
  };

  const handleSubmit = () => {
    setInProgress(false);
    handleCompleteItem(row, item);
  };

  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Typography variant="h4">
        <strong>In Progress</strong> : {item.title}
      </Typography>

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
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Complete
        </Button>
      </Box>
    </Paper>
  );
};

JoinCommunity.propTypes = {
  setInProgress: PropTypes.func.isRequired,
  inProgress: PropTypes.object.isRequired,
  handleCompleteItem: PropTypes.func.isRequired,
};

export default JoinCommunity;
