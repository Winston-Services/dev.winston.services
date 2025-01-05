import React from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const APITestSuite = () => {
  const [endpoints, setEndpoints] = React.useState([]);
  const [checked, setChecked] = React.useState(
    JSON.parse(localStorage.getItem('APITestSuiteEndpoints')) || []
  );
  const [expanded, setExpanded] = React.useState([]);

  const handleToggleCompleted = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleChange = (endpoint) => () => {
    const currentIndex = expanded.indexOf(endpoint.title);
    const newExpanded = [...expanded];
    if (currentIndex === -1) {
      newExpanded.push(endpoint.title);
    } else {
      newExpanded.splice(currentIndex, 1);
    }
    setExpanded(newExpanded);
  };

  React.useEffect(() => {
    localStorage.setItem('APITestSuiteEndpoints', JSON.stringify(checked));
  }, [checked]);

  React.useEffect(() => {
    setEndpoints([
      {
        url: '/auth/register',
        method: 'POST',
        title: 'Register',
        body: { email: 'test@test.com', password: 'test' },
        headers: { 'Content-Type': 'application/json' },
      },
      {
        url: '/auth/login',
        method: 'POST',
        title: 'Login',
        body: { email: 'test@test.com', password: 'test' },
        headers: { 'Content-Type': 'application/json' },
      },
      {
        url: '/auth/logout',
        method: 'POST',
        title: 'Logout',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/auth/refresh-token',
        method: 'POST',
        title: 'Refresh Token',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users',
        method: 'GET',
        title: 'Get Users',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me',
        method: 'GET',
        title: 'Get User',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me/wallets',
        method: 'GET',
        title: 'Get User Wallets',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me/wallets',
        method: 'POST',
        title: 'Add Wallet',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me/wallets/remove',
        method: 'DELETE',
        title: 'Remove Wallet',
        body: {
          walletId: '123',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me/wallets/balance',
        method: 'GET',
        title: 'Get Wallet Balance',
        body: {
          walletId: '123',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/users/me/wallets/transactions',
        method: 'GET',
        title: 'Get Wallet Transactions',
        body: {
          walletId: '123',
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/tokens',
        method: 'GET',
        title: 'Get Tokens',
        body: {},
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {
        url: '/tokens/123',
        method: 'GET',
        title: 'Get Token',
        body: {},
        headers: {
          'Content-Type': 'application/json',
        },
      },
      {
        url: '/tokens',
        method: 'POST',
        title: 'Create Token',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/tokens/123',
        method: 'PUT',
        title: 'Update Token',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
      {
        url: '/tokens/123',
        method: 'DELETE',
        title: 'Delete Token',
        body: {},
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ',
        },
      },
    ]);
  }, []);

  return (
    <Paper
      elevation={1}
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 123px)',
        height: 'auto',
        padding: '16px',
        marginTop: '6px',
      }}
    >
      <Typography variant="h6">API Test Suite</Typography>

      <List>
        {endpoints.map((value, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <ListItemIcon onClick={handleChange(value)}>
                {checked.includes(value.title) ? (
                  <CheckCircleOutlineIcon color="success" />
                ) : (
                  <PendingIcon color="warning" />
                )}
              </ListItemIcon>
            }
            disablePadding
          >
            <ListItemIcon onClick={handleToggleCompleted(value.title)}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value.title) !== -1}
                tabIndex={-1}
                disableRipple
                color="info"
              />
            </ListItemIcon>
            <ListItemText
              primary={
                <Accordion expanded={expanded.includes(value.title)}>
                  <AccordionSummary onClick={handleChange(value)}>
                    <Typography>
                      [{value.method}] {value.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{value.title}</Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <ListItemButton
                        onClick={handleToggleCompleted(value.title)}
                      >
                        <Typography>
                          {!checked.includes(value.url)
                            ? 'Completed'
                            : 'Not Complete'}
                        </Typography>
                      </ListItemButton>
                      <ListItemButton onClick={handleChange(value)}>
                        <Typography>Close</Typography>
                      </ListItemButton>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default APITestSuite;
