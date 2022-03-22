import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';
import LandingTopNav from './common/LandingTopNav';
import LandingFooter from './common/LandingFooter';

function PublicPageLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <LandingTopNav />
      <Box mt={12}>
        <Outlet />
      </Box>
      <LandingFooter />
    </Box>
  );
}
export default PublicPageLayout;
