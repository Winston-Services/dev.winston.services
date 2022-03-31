import { combineReducers, configureStore } from '@reduxjs/toolkit';

import sideBar from './sideBar';
import themeColors from './themeColors';
import user from './user';
import wizard from './wizard';
const rootReducer = combineReducers({
  user,
  sideBar,
  themeColors,
  wizard,
});
const reducer = (state, action) => {
  if (action.type === 'logout') {
    state = { themeColors: state.themeColors };
  }
  return rootReducer(state, action);
};
export const store = configureStore({
  reducer,
});
