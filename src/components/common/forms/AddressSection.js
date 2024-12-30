import React from 'react';

import { Box } from '@mui/material';

import AddressLine1TextField from '../AddressLine1TextField';
import AddressLine2TextField from '../AddressLine2TextField';
import TextField from '../TextField';

const AddressSection = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginBottom: 1,
      }}
    >
      <TextField label="Country" name="country" size="small" {...props} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 1,
          justifyContent: 'flex-start',
        }}
      >
        <TextField label="Postal Code" name="postalCode" size="small" {...props} />
        <TextField label="State" name="state" size="small" {...props} />
        <TextField label="City" name="city" size="small" fullWidth {...props} />
      </Box>
      <AddressLine1TextField {...props} />
      <AddressLine2TextField {...props} />
    </Box>
  );
};

export default AddressSection;
