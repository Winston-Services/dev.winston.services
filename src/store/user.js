import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    name: 'Michael Dennis',
    role: 'Project Manager',
  },
  wallet: {},
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideBar, openMenu } = user.actions;
export const userInfoSelector = (state) => state.user.info;
export default user.reducer;
