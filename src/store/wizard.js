import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workshop: '',
  network: { title: 'Ethereum', subTitle: 'ERC' },
  typeOfContact: '20',

  formData: {
    //Coin algorithm
    email: '',
    coinType: 'Paid',
    coinAlgorithm: 'Scrpt - proof of work1',

    //Coin name
    coinName: '',
    coinAbbreviation: '',
    addressLetter: '1',
    addressLetterTestnet: 'A',
    coinUnit: '',
    timestamp: '',
    websiteUrl: '',
    githubUrl: '',

    //Block reward
    blockReward: '',
    blockHalving: '',
    coinSupplyWithoutPremine: '',
    premine: 'Yes',
    fullPremine: false,
    premineAmount: '',
    coinSupplyWithPremine: '',

    //Block confirmation
    coinbaseMaturity: '',
    numberOfConfirmations: '',
    targetSpacingInMinutes: '',
    targetTimespanInMinutes: '10',
    hardCodedNode: false,
    node1: '',
    node2: '',
  },
};

export const wizardSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    updateWizardData: (state, action) => {
      state = action.payload;
      return state;
    },
    updateWizardFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      return state;
    },
  },
});

export const { updateWizardData } = wizardSlice.actions;
export const { updateWizardFormData } = wizardSlice.actions;
export const wizardDataSelector = (state) => state.wizard;
export const wizardFormDataSelector = (state) => state.wizard.formData;

const wizard = wizardSlice.reducer;
export default wizard;
