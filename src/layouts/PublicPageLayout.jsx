import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, AppBar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/themeColors';
import ElevationScroll from './../components/elevated-scroll/index';

function PublicPageLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <ElevationScroll>
        <AppBar>
          <Box className={`landingInGradient bannerSkewY`} component={'div'}>
            <Box className={`landingInGradientShades`} component={'div'}>
              Winston
            </Box>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Container maxWidth="lg" sx={{ margin: 'auto' }}>
        <Outlet />
      </Container>
    </Box>
  );
}
export default PublicPageLayout;
