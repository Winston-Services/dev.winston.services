import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

function LandingLayout() {
  return (
    <>
      {/* TODO: Need to update once we have redux state for error {state.errors ? <Toast message={state.errors} /> : null} */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Container
          maxWidth="false"
          style={{ marginTop: '86px', padding: '30px' }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
export default LandingLayout;
