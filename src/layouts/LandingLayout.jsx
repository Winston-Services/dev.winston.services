import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { setTheme } from '../store/themeColors';
import { useDispatch } from 'react-redux';

function LandingLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
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
