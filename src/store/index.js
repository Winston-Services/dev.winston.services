import { combineReducers, configureStore } from '@reduxjs/toolkit';

import createApiInstance from './createApiInstance';
import sideBar from './sideBar';
import themeColors from './themeColors';
import user from './user';
import wizard from './wizard';

const rootReducer = combineReducers({
  user,
  sideBar,
  themeColors,
  wizard,
  [createApiInstance.reducerPath]: createApiInstance.reducer,
});
const reducer = (state, action) => {
  if (action.type === 'logout') {
    state = { themeColors: state.themeColors };
  }
  return rootReducer(state, action);
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createApiInstance.middleware),
});
