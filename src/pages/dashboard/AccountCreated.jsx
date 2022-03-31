import React from 'react';

import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';

const users = [
  {
    image: './assets/user.png',
    name: 'Michael Dennis',
    time: '5:10 PM',
    date: 'Today',
  },
  {
    image: './assets/user.png',
    name: 'Michael Dennis',
    time: '6:10 PM',
    date: 'Yesterday',
  },
  {
    image: './assets/user.png',
    name: 'Michael Dennis',
    time: '2:10 PM',
    date: 'Yesterday',
  },
  {
    image: './assets/user.png',
    name: 'Michael Dennis',
    time: '4:10 PM',
    date: 'Yesterday',
  },
  {
    image: './assets/user.png',
    name: 'Michael Dennis',
    time: '5:10 PM',
    date: '07/03/2022',
  },
];
export default function AccountCreated() {
  return (
    <Grid>
      <Grid display="flex" justifyContent={'space-between'}>
        <Typography variant="h6">Account Created</Typography>
        <Typography variant="subtitle1">09-03-2022</Typography>
      </Grid>
      <List>
        <div>
          {users.map((user, index) => {
            return (
              <ListItem
                key={user.name + index}
                button
                secondaryAction={<Typography>{user.date}</Typography>}
              >
                <ListItemIcon>
                  <img src={'./assets/user.png'} height="36" width="36" />
                </ListItemIcon>
                <ListItemText primary={user.name} secondary={user.time} />
              </ListItem>
            );
          })}
        </div>
      </List>
    </Grid>
  );
}
