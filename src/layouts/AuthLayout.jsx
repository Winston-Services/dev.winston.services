import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './auth-common/SideBar';
import TopNav from './auth-common/TopNav';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/themeColors';
import { sideBarStateSelector } from './../store/sideBar';

function Layout() {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(sideBarStateSelector);
  useEffect(() => {
    dispatch(setTheme('dashboard'));
  }, [dispatch]);
  return (
    <Box sx={{ display: 'flex' }}>
      {/* TODO: Need to update once we have redux state for error {state.errors ? <Toast message={state.errors} /> : null} */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        <TopNav />
        <SideBar />
        <Container
          maxWidth="false"
          style={{
            marginTop: '86px',
            padding: '30px',
            animation: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;',
            maxWidth: `calc(100% - ${isSideBarOpen ? '240px' : '86px'})`,
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
export default Layout;
