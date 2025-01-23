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
    image: './assets/icons/rickle.svg',
    name: 'Rickle',
    designation: 'ERC20',
    rank: '1',
  },
  {
    image: './assets/icons/rickle.svg',
    name: 'Winston',
    designation: 'Winston',
    rank: '2',
  },
  {
    image: './assets/icons/rickle.svg',
    name: 'Winston',
    designation: 'Winston',
    rank: '3',
  },
  {
    image: './assets/icons/rickle.svg',
    name: 'Winston',
    designation: 'Winston',
    rank: '4',
  },
  {
    image: './assets/icons/rickle.svg',
    name: 'Winston',
    designation: 'Winston',
    rank: '5',
  },
];

export default function TopUsers() {
  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return 'st';
    }
    if (j == 2 && k != 12) {
      return 'nd';
    }
    if (j == 3 && k != 13) {
      return 'rd';
    }
    return 'th';
  }
  return (
    <Grid>
      <Grid display="flex" justifyContent={'space-between'}>
        <Typography variant="h6">Top 5 token rank</Typography>
        <Typography variant="subtitle1">View All</Typography>
      </Grid>
      <List>
        {users.map((user, index) => {
          return (
            <ListItem
              key={user.name + index}
              button
              secondaryAction={
                <Typography>
                  {user.rank}
                  <sup>{ordinal_suffix_of(user.rank)}</sup> Rank
                </Typography>
              }
            >
              <ListItemIcon>
                <img src={user.image} height="36" width="36" />
              </ListItemIcon>
              <ListItemText primary={user.name} secondary={user.designation} />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
