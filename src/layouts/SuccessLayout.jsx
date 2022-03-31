import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { setTheme } from '../store/themeColors';

function SuccessLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme('landing'));
  }, [dispatch]);
  return (
    <Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}
export default SuccessLayout;
