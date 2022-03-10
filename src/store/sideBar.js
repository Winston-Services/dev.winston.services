import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSideBarOpen: false,
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
        },
        {
          attr: { primary: 'Send' },
          icon: 'call_made',
          iconAttr: { sx: { color: 'red' } },
        },
        {
          attr: { primary: 'Receive' },
          icon: 'call_received',
          iconAttr: { sx: { color: 'green' } },
        },
      ],
    },
    // {
    //   key: 'wallets',
    //   attr: {
    //     primary: 'Wallets',
    //     secondary: 'BTC, BHY, LTC, DASH, DOGE, MSTR, ETH, SYS',
    //     open: true,
    //   },
    //   items: [
    //     { attr: { primary: 'BTC' }, icon: 'wallet' },
    //     { attr: { primary: 'BHY' }, icon: 'send' },
    //     { attr: { primary: 'LTC' }, icon: 'receive' },
    //     { attr: { primary: 'DASH' }, icon: 'home' },
    //     { attr: { primary: 'DOGE' }, icon: 'send' },
    //     { attr: { primary: 'MSTR' }, icon: 'receive' },
    //     { attr: { primary: 'ETH' }, icon: 'home' },
    //     { attr: { primary: 'SYS' }, icon: 'send' },
    //   ],
    // },
    {
      key: 'reports',
      attr: {
        primary: 'Reports',
        secondary: 'Current month, Last quarter, Yearly reports',
        open: true,
      },
      items: [
        { attr: { primary: 'Current month' }, icon: 'home' },
        { attr: { primary: 'Last quarter' }, icon: 'send' },
        { attr: { primary: 'Yearly reports' }, icon: 'receive' },
      ],
    },
    {
      key: 'integrations',
      attr: {
        primary: 'Integrations',
        secondary: 'OpenCart, Shopify, QuickBooks',
        open: true,
      },
      items: [
        { attr: { primary: 'OpenCart' }, icon: 'home' },
        { attr: { primary: 'Shopify' }, icon: 'send' },
        { attr: { primary: 'QuickBooks' }, icon: 'receive' },
      ],
    },
  ],
};

export const sideBar = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    openMenu: (state, action) => {
      state.sideBarItem[action.payload.index].attr.open =
        !state.sideBarItem[action.payload.index].attr.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBar, openMenu } = sideBar.actions;
export const sideBarStateSelector = (state) => state.sideBar.isSideBarOpen;
export const sideBarItemSelector = (state) => state.sideBar.sideBarItem;
export default sideBar.reducer;
