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
    {
      key: 'wallets',
      icon: 'account_balance_wallet',
      attr: {
        primary: 'Wallets',
        open: false,
      },
      items: [
        {
          attr: { primary: 'BTC' },
          image: '../assets/icons/btc.svg',
          link: '/dashboard/wallets/btc',
        },
        { attr: { primary: 'BHY' }, image: '../assets/icons/bhy.jpg' },
        { attr: { primary: 'LTC' }, image: '../assets/icons/ltc.png' },
        { attr: { primary: 'DASH' }, image: '../assets/icons/dash.png' },
        { attr: { primary: 'DOGE' }, image: '../assets/icons/doge.png' },
        { attr: { primary: 'MSTR' }, image: '../assets/icons/mstr.png' },
        { attr: { primary: 'ETH' }, image: '../assets/icons/eth.png' },
        { attr: { primary: 'SYS' }, image: '../assets/icons/sys.png' },
      ],
    },
    {
      key: 'settings',
      icon: 'settings',
      attr: {
        primary: 'Settings',
        secondaryVisible: true,
        secondary: 'Networks, Preferences, Theme',
        open: false,
      },
      items: [
        {
          attr: { primary: 'Networks' },
          icon: 'extension',
          link: '/dashboard/settings/networks',
        },
        {
          attr: { primary: 'Preferences' },
          icon: 'settings',
          link: '/dashboard/settings/preferences',
        },
        {
          attr: { primary: 'Theme' },
          icon: 'palette',
          link: '/dashboard/settings/theme',
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
      state.sideBarItem = state.sideBarItem.filter(
        (item) => item.key !== action.payload
      );
      return state;
    },
    addSubMenu: (state, action) => {
      state.sideBarItem[action.payload.index].items.push(action.payload.item);
      return state;
    },
    removeSubMenu: (state, action) => {
      state.sideBarItem[action.payload.index].items = state.sideBarItem[
        action.payload.index
      ].items.filter((item) => item.key !== action.payload.itemKey);
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleSideBar,
  openMenu,
  addSideBarItem,
  removeSideBarItem,
  addSubMenu,
  removeSubMenu,
} = sideBarSlice.actions;
export const sideBarStateSelector = (state) => state.sideBar.isSideBarOpen;
export const sideBarItemSelector = (state) => state.sideBar.sideBarItem;
const sideBar = sideBarSlice.reducer;
export default sideBar;
