import { combineReducers, configureStore } from '@reduxjs/toolkit';

import academy from './academy';
import apiInstance from './createApiInstance';
import news from './news';
import sideBar from './sideBar';
import themeColors from './themeColors';
import user from './user';
import wizard from './wizard';

const rootReducer = combineReducers({
  user,
  sideBar,
  themeColors,
  wizard,
  academy,
  news,
  [apiInstance.reducerPath]: apiInstance.reducer,
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
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiInstance.middleware
    ),
});
