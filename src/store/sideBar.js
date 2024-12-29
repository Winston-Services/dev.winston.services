import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSideBarOpen: true,
  sideBarItem: [
    {
      key: 'dashboard',
      attr: {
        open: true,
      },
      items: [
        {
          attr: { primary: 'Home' },
          icon: 'home',
          link: '/dashboard',
        },
      ],
    },
    
  ],
};

// add/remove wallet accounts.
// set default wallet as send/receive wallet

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
      return state;
    },
    openMenu: (state, action) => {
      state.sideBarItem[action.payload.index].attr.open =
        !state.sideBarItem[action.payload.index].attr.open;
      return state;
    },
    addSideBarItem: (state, action) => {
      state.sideBarItem.push(action.payload);
      return state;
    },
    removeSideBarItem: (state, action) => {
      state.sideBarItem = state.sideBarItem.filter((item) => item.key !== action.payload);
      return state;
    },
    addSubMenu: (state, action) => {
      state.sideBarItem[action.payload.index].items.push(action.payload.item);
      return state;
    },
    removeSubMenu: (state, action) => {
      state.sideBarItem[action.payload.index].items = state.sideBarItem[action.payload.index].items.filter(
        (item) => item.key !== action.payload.itemKey,
      );
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBar, openMenu, addSideBarItem, removeSideBarItem, addSubMenu, removeSubMenu } = sideBarSlice.actions;
export const sideBarStateSelector = (state) => state.sideBar.isSideBarOpen;
export const sideBarItemSelector = (state) => state.sideBar.sideBarItem;
const sideBar = sideBarSlice.reducer;
export default sideBar;
