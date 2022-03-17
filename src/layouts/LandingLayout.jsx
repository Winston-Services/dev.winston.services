import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';
import LandingTopNav from './common/LandingTopNav';

function LandingLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <LandingTopNav />
      <Box className={`landingInGradient bannerSkewY`} component={'div'}>
        <Box className={`landingInGradientShades`} component={'div'}></Box>
      </Box>
      <Container maxWidth="lg" sx={{ margin: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  );
}
export default LandingLayout;
