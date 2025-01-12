import { createSlice } from '@reduxjs/toolkit';
import { Level } from 'level';

// Create a LevelDB instance
const db = new Level('./user', { valueEncoding: 'json' });

const initialState = {
  info: {
    authLoading: false,
    email: '',
    token: '',
    name: 'Guest User',
    role: 'Guest',
  },
  accounts: [],
  account: {
    perMessageEncryption: false,
    firstRun: true,
    firstRunCompleted: false,
    firstRunStep: 0,
  },
  oauthAccounts: {
    discord: {
      id: '',
      username: '',
    },
    google: {
      id: '',
      username: '',
    },
    github: {
      id: '',
      username: '',
    },
    twitter: {
      id: '',
      username: '',
    },
    apple: {
      id: '',
      username: '',
    },
    facebook: {
      id: '',
      username: '',
    },
    linkedin: {
      id: '',
      username: '',
    },
    twitch: {
      id: '',
      username: '',
    },
    spotify: {
      id: '',
      username: '',
    },
    steam: {
      id: '',
      username: '',
    },
    microsoft: {
      id: '',
      username: '',
    },
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
    roles: [],
  },
  wallets: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
      db.put('userInfo', state.info);
    },
    setUserOauthAccounts: (state, action) => {
      state.oauthAccounts = action.payload;
      db.put('userOauthAccounts', state.oauthAccounts);
    },
    setUserProfile: (state, action) => {
      state.profile = action.payload;
      db.put('userProfile', state.profile);
    },
    setUserWallets: (state, action) => {
      state.wallets = action.payload;
      db.put('userWallets', state.wallets);
    },
    setUserAccount: (state, action) => {
      state.account = action.payload;
      db.put('userAccount', state.account);
    },
    addUserAccount: (state, action) => {
      state.accounts.push(action.payload);
      db.put('userAccounts', state.accounts);
    },
    removeUserAccount: (state, action) => {
      state.accounts.splice(action.payload, 1);
      db.put('userAccounts', state.accounts);
    },
    addUserWallet: (state, action) => {
      state.wallets.push(action.payload);
      db.put('userWallets', state.wallets);
    },
    removeUserWallet: (state, action) => {
      state.wallets.splice(action.payload, 1);
      db.put('userWallets', state.wallets);
    },
    logout: () => {
      localStorage.removeItem('token');
      db.clear();
      return initialState;
    },
    setFirstRunCompleted: (state, action) => {
      state.account.firstRunCompleted = action.payload;
      db.put('userAccount', state.account);
    },
    setFirstRunStep: (state, action) => {
      state.account.firstRunStep = action.payload;
      db.put('userAccount', state.account);
    },
    setFirstRun: (state, action) => {
      state.account.firstRun = action.payload;
      db.put('userAccount', state.account);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  setUserOauthAccounts,
  setUserProfile,
  setUserWallets,
  setUserAccount,
  setFirstRunCompleted,
  setFirstRunStep,
  setFirstRun,
  addUserAccount,
  addUserWallet,
  removeUserAccount,
  removeUserWallet,
  logout,
} = userSlice.actions;
export const userInfoSelector = (state) => state.user.info;
export const userWalletsSelector = (state) => state.user.wallets;
export const userAccountsSelector = (state) => state.user.accounts;
export const userAccountSelector = (state) => state.user.account;
export const userPerMessageEncryptionSelector = (state) =>
  state.user.account.perMessageEncryption;
export const userOauthAccountsSelector = (state) => state.user.oauthAccounts;
export const userProfileSelector = (state) => state.user.profile;
const user = userSlice.reducer;
export default user;
