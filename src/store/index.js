import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sideBar from './sideBar';
import themeColors from './themeColors';
const rootReducer = combineReducers({
  sideBar,
  themeColors,
});
const reducer = (state, action) => {
  if (action.type === 'logout') {
    state = {};
  }
  return rootReducer(state, action);
};
export const store = configureStore({
  reducer,
});
