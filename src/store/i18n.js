import { createSelector, createSlice } from '@reduxjs/toolkit';

import i18n from '../utils/i18n';

/**
 * The i18n slice
 */
export const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    i18n: i18n,
    language: i18n.options.lng,
    languages: [
      { id: 'en', title: 'English', flag: 'US' },
    ],
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = i18nSlice.actions;

export const selectCurrentLanguageId = (state) => state.i18n.language;

export const selectLanguages = (state) => state.i18n.languages;

export const selectCurrentLanguageDirection = createSelector(
  [selectCurrentLanguageId],
  (id) => i18n.dir(id)
);

export const selectCurrentLanguage = createSelector(
  [selectCurrentLanguageId, selectLanguages],
  (id, languages) => languages.find((lng) => lng.id === id)
);

export default i18nSlice.reducer;
