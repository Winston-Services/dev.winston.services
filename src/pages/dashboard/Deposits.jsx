import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
} from '@mui/material';
import BHYCurrencyIcon from '../../assets/icons/bhy.jpg';

export default function Deposits() {
  return (
    <Grid>
      <Grid display="flex" justifyContent={'space-between'}>
        <Typography>Balance</Typography>
        <Typography>$3,024.00</Typography>
      </Grid>
      <Typography color="textSecondary">as of 15 March, 2021</Typography>
      <List style={{ margin: 0, padding: 0 }}>
        <div>
          <ListItem button>
            <ListItemIcon>
              <img src={BHYCurrencyIcon} height="36" width="36" />
            </ListItemIcon>
            <ListItemText primary="BTC" secondary={' 0000000.00000000'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src={BHYCurrencyIcon} height="36" width="36" />
            </ListItemIcon>
            <ListItemText primary="BHY" secondary={' 0000000.00000000'} />
          </ListItem>
        </div>
      </List>
    </Grid>
  );
}
