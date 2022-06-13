import * as React from 'react';

import { CircularProgress, Box } from '@mui/material';

import { AuthRedirect } from './context/authContext';

export const getRouteWrapper = (component, authRoute = true) => {
  return (
    <AuthRedirect authenticatedRoute={authRoute}>
      <React.Suspense
        fallback={<Box
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          height={'100%'}
          minHeight="100%"
        >
          <CircularProgress />
        </Box>}
      >
        {component}
      </React.Suspense>
    </AuthRedirect>
  );
};
