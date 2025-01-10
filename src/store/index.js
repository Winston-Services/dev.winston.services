import { combineReducers, configureStore } from '@reduxjs/toolkit';

import academy from './academy';
import apiInstance from './createApiInstance';
import i18nSlice from './i18n';
import news from './news';
import publicNotice from './publicNotice';
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
  publicNotice,
  i18n: i18nSlice,
  [apiInstance.reducerPath]: apiInstance.reducer,
});

const reducer = (state, action) => {
  return rootReducer(state, action);
};
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiInstance.middleware
    ),
});
