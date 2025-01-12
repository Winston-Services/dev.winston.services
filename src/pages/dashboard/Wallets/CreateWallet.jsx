import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export const CreateWallet = ({ handleClose }) => {
  const handleSubmit = () => {
    handleClose();
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
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, float: 'right' }}
      >
        <Button variant="contained" color="error" onClick={handleClose}>
          Close
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Create Wallet
        </Button>
      </Box>
    </Box>
  );
};

CreateWallet.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateWallet;
