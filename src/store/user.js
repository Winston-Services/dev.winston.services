import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    name: 'Michael Dennis',
    role: 'Project Manager',
  },
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
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setUserWallet } = userSlice.actions;
export const userInfoSelector = (state) => state.user.info;
const user = userSlice.reducer;
export default user;
