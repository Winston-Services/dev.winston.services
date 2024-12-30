import React from 'react';

import { Box } from '@mui/material';

import FirstNameTextField from '../FirstNameTextField';
import LastNameTextField from '../LastNameTextField';
import MiddleNameTextField from '../MiddleNameTextField';
import TitleTextField from '../TitleTextField';

export default function NameSection(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
      }}
    >
      <TitleTextField {...props} />
      <FirstNameTextField {...props} />
      <MiddleNameTextField {...props} />
      <LastNameTextField {...props} />
    </Box>
  );
}
