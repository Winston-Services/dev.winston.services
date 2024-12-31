import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    authLoading: false,
    email: '',
    token: '',
    name: 'Guest User',
    role: 'Guest',
  },
  accounts: [
    {
      network: 'bitcoin',
      link: '/dashboard/wallets/btc',
      lastBalance: 0n,
      keys: [
        {
          a: '',
          b: '',
          address: '',
        },
      ],
    },
  ],
  account: {
    perMessageEncryption: false,
  },
  profile: {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    phone: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  wallets: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
      return state;
    },
    setUserWallets: (state, action) => {
      state.wallets = action.payload;
      return state;
    },
    setUserAccount: (state, action) => {
      state.account = action.payload;
      return state;
    },
    addUserAccount: (state, action) => {
      const accounts = [...state.accounts];
      accounts.push(action.payload);
      state.accounts = accounts;
      return state;
    },
    removeUserAccount: (state, action) => {
      const accounts = [...state.accounts];
      accounts.splice(action.payload, 1);
      state.accounts = accounts;
      return state;
    },
    addUserWallet: (state, action) => {
      const wallets = [...state.wallets];
      wallets.push(action.payload);
      state.wallets = wallets;
      return state;
    },
    removeUserWallet: (state, action) => {
      const wallets = [...state.wallets];
      wallets.splice(action.payload, 1);
      state.wallets = wallets;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  setUserWallets,
  setUserAccount,
  addUserAccount,
  addUserWallet,
  removeUserAccount,
  removeUserWallet,
} = userSlice.actions;
export const userInfoSelector = (state) => state.user.info;
export const userWalletsSelector = (state) => state.user.wallets;
export const userAccountsSelector = (state) => state.user.accounts;
export const userAccountSelector = (state) => state.user.account;
export const userPerMessageEncryptionSelector = (state) =>
  state.user.account.perMessageEncryption;
const user = userSlice.reducer;
export default user;
