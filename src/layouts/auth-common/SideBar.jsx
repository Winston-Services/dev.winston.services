import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Icon from '@mui/material/Icon';
import { ListItemButton, ListItemText, Tooltip } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import {
  openMenu,
  sideBarItemSelector,
  sideBarStateSelector,
} from '../../store/sideBar';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { KeyboardArrowDown } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  height: 'calc(100vh - 86px)',
  top: '86px',
  borderWidth: '0px',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `86px`,
  height: 'calc(100vh - 86px)',
  top: '86px',
  borderWidth: '0px',
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  };
});

export default function SideBar() {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(sideBarStateSelector);
  const sideBarItem = useSelector(sideBarItemSelector);
  return (
    <>
      <Drawer variant="permanent" open={isSideBarOpen}>
        {sideBarItem.map((menuItem, index) => (
          <React.Fragment key={menuItem.key}>
            <Box sx={{ pb: 1 }}>
              {isSideBarOpen && menuItem.attr?.primary ? (
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => dispatch(openMenu({ index }))}
                >
                  <ListItemText
                    primary={menuItem.attr.primary}
                    secondary={menuItem.attr.secondary}
                    sx={{ my: 0 }}
                  />
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      transform: menuItem.attr.open
                        ? 'rotate(-180deg)'
                        : 'rotate(0)',
                      transition: '0.2s',
                    }}
                  />
                </ListItemButton>
              ) : null}
              {(menuItem.attr.open || !isSideBarOpen) &&
                menuItem.items.map((item) => (
                  <ListItemButton
                    key={item.attr.primary}
                    sx={{
                      minHeight: 35,
                      justifyContent: isSideBarOpen ? 'initial' : 'center',
                      px: 3.5,
                      py: 0.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isSideBarOpen ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <Tooltip
                        arrow={true}
                        title={!isSideBarOpen ? item.attr.primary : ''}
                        placement="right"
                      >
                        {item.icon ? (
                          <Icon {...item.iconAttr}>{item.icon}</Icon>
                        ) : (
                          <img src={item.image} width={'24px'} />
                        )}
                      </Tooltip>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.attr.primary}
                      style={{ opacity: isSideBarOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </React.Fragment>
        ))}
      </Drawer>
    </>
  );
}
