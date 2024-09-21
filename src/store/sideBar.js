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
        {
          attr: { primary: 'Send' },
          icon: 'call_made',
          link: '/dashboard/send',
          iconAttr: { sx: { color: 'red' } },
        },
        {
          attr: { primary: 'Receive' },
          icon: 'call_received',
          link: '/dashboard/receive',
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
        open: false,
      },
      items: [
        {
          attr: { primary: 'BTC' },
          image: './assets/icons/btc.svg',
          link: '/dashboard/wallets/btc',
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
        open: false,
      },
      items: [
        {
          attr: { primary: 'Current month' },
          icon: 'today',
          link: '/month-report',
        },
        {
          attr: { primary: 'Last quarter' },
          icon: 'date_range',
          link: '/date-range-report',
        },
        {
          attr: { primary: 'Yearly reports' },
          icon: 'calendar_month',
          link: '/calendar-month-report',
        },
      ],
    },
    {
      key: 'integrations',
      icon: 'extension',
      attr: {
        primary: 'Integrations',
        secondaryVisible: true,
        secondary: 'Discord, OpenCart, Shopify, QuickBooks',
        open: false,
      },
      items: [
        { attr: { primary: 'Discord' }, icon: 'discord' },
        { attr: { primary: 'OpenCart' }, icon: 'shopping_cart' },
        { attr: { primary: 'Shopify' }, icon: 'shopping_bag' },
        { attr: { primary: 'QuickBooks' }, icon: 'extension' },
      ],
    },
    {
      key: 'settings',
      icon: 'settings',
      attr: {
        primary: 'Settings',
        secondaryVisible: true,
        secondary: 'Networks, Preferences, Theme, Custom Assets ',
        open: false,
      },
      items: [
        { attr: { primary: 'Networks' }, icon: 'extension' },
        { attr: { primary: 'Preferences' }, icon: 'extension' },
        { attr: { primary: 'Theme' }, icon: 'extension' },
        { attr: { primary: 'Custom Assets' }, icon: 'extension' },
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
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBar, openMenu } = sideBarSlice.actions;
export const sideBarStateSelector = (state) => state.sideBar.isSideBarOpen;
export const sideBarItemSelector = (state) => state.sideBar.sideBarItem;
const sideBar = sideBarSlice.reducer;
export default sideBar;
