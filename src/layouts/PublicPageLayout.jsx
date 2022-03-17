import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';
import LandingTopNav from './common/LandingTopNav';

function PublicPageLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <LandingTopNav />
      <Container maxWidth="lg" sx={{ margin: 'auto', mt: 20 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
export default PublicPageLayout;
