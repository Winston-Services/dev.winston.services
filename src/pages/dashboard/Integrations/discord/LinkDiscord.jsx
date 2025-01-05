import React from 'react';

import { Paper, Typography, Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

import useUser from '../../../../hooks/useUser';

export const LinkDiscord = ({ inProgress, setInProgress, handleCompleteItem }) => {
    const { row, item } = inProgress;
    const user = useUser();
  
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
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h4">Link Discord</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1">
                Enter the code below in discord to link your account.
              </Typography>
              <Typography variant="body1">
                Enter the code below in discord to link your account.
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
                {user.info.token}
              </Typography>
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
        </Box>
      </Paper>
    );
  };
  
  LinkDiscord.propTypes = {
    setInProgress: PropTypes.func.isRequired,
    inProgress: PropTypes.object.isRequired,
    handleCompleteItem: PropTypes.func.isRequired,
  };


export default LinkDiscord;