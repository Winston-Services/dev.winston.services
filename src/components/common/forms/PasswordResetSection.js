import React from 'react';

import { Box } from '@mui/material';

import ConfirmPasswordTextField from '../ConfirmPasswordTextField';
import PasswordTextField from '../PasswordTextField';

const PasswordResetSection = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        marginBottom: 1,
      }}
    >
      <PasswordTextField {...props} />
      <ConfirmPasswordTextField {...props} />
    </Box>
  );
};

export default PasswordResetSection;
