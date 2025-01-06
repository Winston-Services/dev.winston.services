import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AddRole from './admin/roles/AddRole';
import ViewRoles from './admin/roles/ViewRoles';
import SetDailyKey from './admin/system/SetDailyKey';

export const AdminSettings = () => {
  return (
    <Box>
      <Typography variant="h6">Admin Settings</Typography>
      <SetDailyKey />
      <AddRole />
      <ViewRoles />
    </Box>
  );
};

export default AdminSettings;
