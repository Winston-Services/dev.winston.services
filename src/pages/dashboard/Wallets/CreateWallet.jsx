import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const CreateWallet = ({ inProgress, setInProgress, handleCompleteItem }) => {
    const { row, item } = inProgress;
    const handleClose = () => {
      setInProgress(false);
    };
  
    const handleSubmit = () => {
      setInProgress(false);
      handleCompleteItem(row, item);
    };
  
    return (
      <Box>
        <Typography variant="h4">Create Wallet</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Typography variant="body1">
            Create a wallet to start trading on the blockchain.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            margin: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          Add Wallet Module Here.
        </Box>
        <Button variant="contained" color="error" onClick={handleClose}>
          Close
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Create Wallet
        </Button>
      </Box>
    );
  };
  
  CreateWallet.propTypes = {
    setInProgress: PropTypes.func.isRequired,
    inProgress: PropTypes.object.isRequired,
    handleCompleteItem: PropTypes.func.isRequired,
  };

export default CreateWallet;