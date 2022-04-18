import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { setTheme } from '../store/themeColors';
import LandingFooter from './common/LandingFooter';
import LandingTopNav from './common/LandingTopNav';

import './index.css';

function PublicPageLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <LandingTopNav />
      <Box pt={'83px'} sx={{ my: { xs: 5, sm: 10 } }}>
        <Outlet />
      </Box>
      <LandingFooter />
    </Box>
  );
}
export default PublicPageLayout;
