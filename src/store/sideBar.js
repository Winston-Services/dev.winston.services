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
      icon: 'account_balance_wallet',
      attr: {
        primary: 'Wallets',
        secondaryVisible: true,
        secondary: 'BTC, BHY, LTC, DASH, DOGE, MSTR, ETH, SYS',
        open: true,
      },
      items: [
        {
          attr: { primary: 'BTC' },
          image: './assets/icons/btc.svg',
        },
        { attr: { primary: 'BHY' }, image: './assets/icons/bhy.jpg' },
        { attr: { primary: 'LTC' }, image: './assets/icons/ltc.png' },
        { attr: { primary: 'DASH' }, image: './assets/icons/dash.png' },
        { attr: { primary: 'DOGE' }, image: './assets/icons/doge.png' },
        { attr: { primary: 'MSTR' }, image: './assets/icons/mstr.png' },
        { attr: { primary: 'ETH' }, image: './assets/icons/eth.png' },
        { attr: { primary: 'SYS' }, image: './assets/icons/sys.png' },
      ],
    },
    {
      key: 'reports',
      icon: 'analytics',
      attr: {
        primary: 'Reports',
        secondaryVisible: true,
        secondary: 'Current month, Last quarter, Yearly reports',
        open: true,
      },
      items: [
        { attr: { primary: 'Current month' }, icon: 'today' },
        { attr: { primary: 'Last quarter' }, icon: 'date_range' },
        { attr: { primary: 'Yearly reports' }, icon: 'calendar_month' },
      ],
    },
    {
      key: 'integrations',
      icon: 'extension',
      attr: {
        primary: 'Integrations',
        secondaryVisible: true,
        secondary: 'OpenCart, Shopify, QuickBooks',
        open: true,
      },
      items: [
        { attr: { primary: 'OpenCart' }, icon: 'shopping_cart' },
        { attr: { primary: 'Shopify' }, icon: 'shopping_bag' },
        { attr: { primary: 'QuickBooks' }, icon: 'extension' },
      ],
    },
  ],
};

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
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBar, openMenu } = sideBarSlice.actions;
export const sideBarStateSelector = (state) => state.sideBar.isSideBarOpen;
export const sideBarItemSelector = (state) => state.sideBar.sideBarItem;
const sideBar = sideBarSlice.reducer;
export default sideBar;
