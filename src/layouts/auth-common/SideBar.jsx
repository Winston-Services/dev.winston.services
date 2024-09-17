import React from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import {
  ListItemButton,
  ListItemText,
  Tooltip,
  Box,
  Icon,
  styled,
  ListItemIcon,
  Drawer as MuiDrawer,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  openMenu,
  sideBarItemSelector,
  sideBarStateSelector,
} from '../../store/sideBar';
// import OvalDark from './../../assets/oval_dark.svg';
import OvalLight from './../../assets/oval_light.svg';

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
  width: '86px',
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
  const navigate = useNavigate();
  const isSideBarOpen = useSelector(sideBarStateSelector);
  const sideBarItem = useSelector(sideBarItemSelector);
  // console.log(sideBarItem);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  /*
  React.useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);
 */
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const navigateToPage = (url) => {
    navigate(url)
  }
  // console.log(selectedIndex);

  return (
    <>
      <Drawer variant="permanent" open={isSideBarOpen}>
        {sideBarItem.map((menuItem, index) => (
          <React.Fragment key={menuItem.key}>
            <Box sx={{ pb: 1 }}>
              {isSideBarOpen && menuItem.attr?.primary ? (
                <ListItemButton
                  selected={selectedIndex === index}
                  sx={{
                    minHeight: 35,
                    justifyContent: isSideBarOpen ? 'initial' : 'center',
                    px: 3.5,
                    py: 0.5,
                    minWidth: '246px',
                  }}
                  alignItems="flex-start"
                  onClick={(e) => {
                    dispatch(openMenu({ index }));
                    handleListItemClick(e, index);
                  }}
                >
                  {selectedIndex === index ? (
                    <img src={OvalLight} alt="" width="11px" height="56px" />
                  ) : (
                    <></>
                  )}
                  <ListItemIcon
                    sx={{
                      mt: 0,
                      minWidth: 0,
                      mr: 2,
                      justifyContent: 'center',
                    }}
                    onClick={() => navigateToPage(menuItem.link)}
                  >
                    {menuItem.icon ? (
                      <Icon {...menuItem.iconAttr}>{menuItem.icon}</Icon>
                    ) : (
                      <img src={menuItem.image} width={'24px'} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={menuItem.attr.primary}
                    secondary={
                      !menuItem.attr.open && menuItem.attr.secondaryVisible
                        ? menuItem.attr.secondary
                        : ''
                    }
                    secondaryTypographyProps={{
                      noWrap: true,
                    }}
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
                      px: isSideBarOpen && menuItem.attr.primary ? 6.5 : 3.5,
                      py: 0.5,
                    }}
                    onClick={() => navigateToPage(item.link)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isSideBarOpen ? 2 : 'auto',
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
