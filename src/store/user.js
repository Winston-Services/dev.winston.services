import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    name: 'Michael Dennis',
    role: 'Founder',
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
  account: {},
  wallet: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
      return state;
    },
    setUserWallet: (state, action) => {
      state.wallet = action.payload;
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
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setUserWallet, setUserAccount, addUserAccount } =
  userSlice.actions;
export const userInfoSelector = (state) => state.user.info;
export const userWalletSelector = (state) => state.user.wallet;
export const userAccountsSelector = (state) => state.user.accounts;
export const userAccountSelector = (state) => state.user.account;
const user = userSlice.reducer;
export default user;
