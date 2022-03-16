import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user';
import sideBar from './sideBar';
import themeColors from './themeColors';
const rootReducer = combineReducers({
  user,
  sideBar,
  themeColors,
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
