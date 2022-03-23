import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workshop: '',
  network: '',
  typeOfContact: '',
};

export const wizard = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    updateWizardData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { updateWizardData } = wizard.actions;
export const wizardDataSelector = (state) => state.wizard;
export default wizard.reducer;
