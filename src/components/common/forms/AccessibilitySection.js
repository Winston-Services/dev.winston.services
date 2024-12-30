import React from 'react';

import { Box } from '@mui/material';

import { TextField } from '../TextField';

const AccessibilitySection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginBottom: 1,
      }}
    >
      <TextField label="Language" name="language" size="small" />
      <TextField label="Time Zone" name="timeZone" size="small" />
    </Box>
  );
};

export default AccessibilitySection;
