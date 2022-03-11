import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './common/SideBar';
import TopNav from './common/TopNav';
import { Box, Container } from '@mui/material';

function Layout() {
  return (
    <>
      {/* TODO: Need to update once we have redux state for error {state.errors ? <Toast message={state.errors} /> : null} */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        <TopNav />
        <SideBar />
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
export default Layout;
