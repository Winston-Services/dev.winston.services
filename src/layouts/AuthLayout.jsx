import React from 'react';
import { Outlet } from 'react-router-dom';
// import config from './../config';
// import useAuthLayoutStyle from '../services/wallet/common/useAuthLayoutStyle';
import SideBar from './common/SideBar';
import TopNav from './common/TopNav';
// import { FooterBanner } from './../components/common/FooterBanner';
// import Footer from '../components/common/Footer';
import Box from '@mui/material/Box';

function Layout() {
  // const classes = useAuthLayoutStyle();
  return (
    <>
      {/* TODO: Need to update once we have redux state for error {state.errors ? <Toast message={state.errors} /> : null} */}
      <Box
        sx={{ display: 'flex', height: '100%', maxHeight: 'calc(100% - 86px)' }}
      >
        <TopNav />
        <SideBar />
        <Box sx={{ display: 'flex', width: '100%', marginTop: '86px' }}>
          <Outlet />
        </Box>
      </Box>
      {/* <FooterBanner />
      <Footer
        title={config.footerTitle}
        description={config.footerDescription}
      /> */}
    </>
  );
}
export default Layout;
