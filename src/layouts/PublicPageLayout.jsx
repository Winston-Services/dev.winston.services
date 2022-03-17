import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';

function PublicPageLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <Container maxWidth="lg" sx={{ margin: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  );
}
export default PublicPageLayout;
