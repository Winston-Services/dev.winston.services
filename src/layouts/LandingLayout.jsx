import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';
import LandingTopNav from './common/LandingTopNav';
import LandingFooter from './common/LandingFooter';

function LandingLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box sx={{ background: '#312470' }}>
      <LandingTopNav />
      <Box className={`landingInGradient bannerSkewY`} component={'div'}>
        <Box className={`landingInGradientShades`} component={'div'}></Box>
      </Box>
      <Box sx={{ margin: 'auto', zIndex: 1, position: 'relative' }}>
        <Outlet />
      </Box>
      <LandingFooter />
    </Box>
  );
}
export default LandingLayout;
