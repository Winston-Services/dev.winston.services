import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import useApi from '../../../../hooks/useApi';
import useUser from '../../../../hooks/useUser';

const UserProfileCard = ({ user }) => {
  return (
    <AccordionDetails>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="subtitle1">
              Username: {user?.profile?.username}
            </Typography>
            
            <Typography variant="subtitle1">Bio: {user?.bio}</Typography>
            <Box>
              <Typography>Roles</Typography>
              {user.profile?.roles?.map((role) => (
                <Chip label={role} key={role} />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">
            Name: {user?.name?.title} {user?.name?.first} {user?.name?.middle}{' '}
            {user?.name?.last}
          </Typography>
          <Typography variant="subtitle1">Address:</Typography>
          <Typography variant="body2">
            {user?.address?.line1}, {user?.address?.line2},{' '}
            {user?.address?.line3}
            <br />
            {user?.address?.city}, {user?.address?.state} {user?.address?.zip}
            <br />
            {user?.address?.country}
          </Typography>
          <Typography variant="subtitle1">
            Phone: {user?.phone?.countryCode} {user?.phone?.number}
          </Typography>
        </Grid>
      </Grid>
    </AccordionDetails>
  );
};

UserProfileCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export const ViewUsers = ({ handleClose }) => {
  const user = useUser();
  const [getUsers, { data, isLoading, isError }] =
    useApi().endpoints.getUsers.useLazyQuery();

  React.useEffect(() => {
    getUsers(user.info.token);
  }, []);

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error</Box>;
  console.log(data?.data?.users);
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Users{' '}
        <span
          style={{ cursor: 'pointer', float: 'right' }}
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </span>
      </Typography>

      {data?.data?.users?.map((user) => (
        <Accordion key={user._id} sx={{ width: '100%' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Table size="small" sx={{ width: '100%', m: 0, p: 0 }}>
              <TableHead>
                <TableRow sx={{ m: 0, p: 0 }}>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold', width: '50px' }}
                    component="th"
                    scope="row"
                  >
                    Avatar
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold', width: '15%' }}
                    component="th"
                    scope="row"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold', width: '15%' }}
                    component="th"
                    scope="row"
                  >
                    Created At
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold' }}
                    component="th"
                    scope="row"
                  >
                    Admin
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold' }}
                    component="th"
                    scope="row"
                  >
                    Profile Completed
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold' }}
                    component="th"
                    scope="row"
                  >
                    Discord Linked
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold' }}
                    component="th"
                    scope="row"
                  >
                    Banned
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1, fontWeight: 'bold' }}
                    component="th"
                    scope="row"
                  >
                    Verified
                  </TableCell>
                  <TableCell
                    sx={{ m: 0, p: 1 }}
                    component="th"
                    scope="row"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ m: 0, p: 0 }}>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    <Avatar
                      src={user.profile?.avatar}
                      alt="user avatar"
                      style={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>{user.email}</TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {new Date(user.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {user.isAdmin ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {user.profile?.roles?.length > 1 ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {user?.oauthAccounts?.discord?.id ||
                    user?.oauthAccounts?.google?.id
                      ? 'Yes'
                      : 'No'}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {user.isBanned ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}>
                    {user.isVerified ? 'Yes' : 'No'}
                  </TableCell>
                  <TableCell sx={{ m: 0, p: 1 }}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionSummary>
          <UserProfileCard user={user} />
        </Accordion>
      ))}
    </Box>
  );
};

ViewUsers.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ViewUsers;
