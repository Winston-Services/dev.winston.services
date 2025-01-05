import React, { useState } from 'react';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export const TodoList = () => {
    const [checked, setChecked] = useState(
      JSON.parse(localStorage.getItem('checkedItems')) || []
    );
    React.useEffect(() => {
      localStorage.setItem('checkedItems', JSON.stringify(checked));
    }, [checked]);
    const [showTodoList, setShowTodoList] = useState(false);
    const toggleTodoList = () => {
      setShowTodoList(!showTodoList);
    };
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
    const todoItems = [
      'Terms of Service',
      'Privacy Policy',
      'List Users',
      'Add User',
      'Ban User',
      'Unban User',
      'Edit User',
      'List Tokens',
      'Add Token',
      'Update Token',
      'Delete Token',
      'Vote on Token',
      'Setup Token Gating',
      'Buy Tokens',
      'Sell Tokens',
      'Link Discord',
      'Connect Discord',
      'Add WL Domain',
      'Add WL Resource',
      'Add WL Page',
      'Add WL Content',
    ];
  
    return (
      <Grid item xs={12}>
        <Typography variant="h6">Todo :</Typography>
        <ListItemButton onClick={toggleTodoList}>
          <Typography variant="subtitle1">Toggle Todo List</Typography>
        </ListItemButton>
        {showTodoList && (
          <List>
            {todoItems.map((value, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <ListItemIcon>
                    {checked.includes(value) ? (
                      <CheckCircleOutlineIcon color="success" />
                    ) : (
                      <PendingIcon color="warning" />
                    )}
                  </ListItemIcon>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      color="info"
                    />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
    );
  };

  export default TodoList;