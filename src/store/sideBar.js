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
    {
      key: 'wallets',
      attr: {
        primary: 'Wallets',
        secondary: 'BTC, BHY, LTC, DASH, DOGE, MSTR, ETH, SYS',
        open: true,
      },
      items: [
        { attr: { primary: 'BTC' }, icon: 'wallet' },
        { attr: { primary: 'BHY' }, icon: 'wallet' },
        { attr: { primary: 'LTC' }, icon: 'wallet' },
        { attr: { primary: 'DASH' }, icon: 'wallet' },
        { attr: { primary: 'DOGE' }, icon: 'wallet' },
        { attr: { primary: 'MSTR' }, icon: 'wallet' },
        { attr: { primary: 'ETH' }, icon: 'wallet' },
        { attr: { primary: 'SYS' }, icon: 'wallet' },
      ],
    },
    {
      key: 'reports',
      attr: {
        primary: 'Reports',
        secondary: 'Current month, Last quarter, Yearly reports',
        open: true,
      },
      items: [
        { attr: { primary: 'Current month' }, icon: 'summarize' },
        { attr: { primary: 'Last quarter' }, icon: 'summarize' },
        { attr: { primary: 'Yearly reports' }, icon: 'summarize' },
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
        { attr: { primary: 'OpenCart' }, icon: 'extension' },
        { attr: { primary: 'Shopify' }, icon: 'extension' },
        { attr: { primary: 'QuickBooks' }, icon: 'extension' },
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
