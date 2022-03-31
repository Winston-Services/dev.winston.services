import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { setTheme } from '../store/themeColors';
import LandingFooter from './common/LandingFooter';
import LandingTopNav from './common/LandingTopNav';

function LandingLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box sx={{ background: '#312470' }}>
      <LandingTopNav />
      <Box className={'landingInGradient bannerSkewY'} component={'div'}>
        <Box className={'landingInGradientShades'} component={'div'}></Box>
      </Box>
      <Box sx={{ margin: 'auto', zIndex: 1, position: 'relative' }}>
        <Outlet />
      </Box>
      <LandingFooter />
    </Box>
  );
}
export default LandingLayout;
