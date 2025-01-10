import React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useUser from '../../../../hooks/useUser';

export const LinkDiscord = ({ handleClose }) => {
  const user = useUser();

  return (
    <Paper elevation={0} sx={{ padding: 1, marginTop: 1 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h4">Link Discord and Winston</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body1">
              Enter the code below in a discord channel that has access to the
              Winston bot.
            </Typography>
            <Alert severity="info">
              This will link your discord account to your Winston account.
            </Alert>
            <Alert severity="warning">
              This will automatically log you out of your Winston account if
              successful. You will need to log in again.
            </Alert>
            <fieldset>
              <legend>Access Code</legend>
              <Tooltip title="Click or Tap to Copy" placement="top" arrow>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                  component="pre"
                  onClick={() => {
                    navigator.clipboard.writeText(user.info.token);
                  }}
                >
                  {user.info.token}
                </Typography>
              </Tooltip>
            </fieldset>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button onClick={handleClose} variant="contained" color="error">
            Close
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

LinkDiscord.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default LinkDiscord;
