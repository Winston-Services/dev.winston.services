import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workshop: '',
  network: { title: 'Ethereum', subTitle: 'ERC' },
  typeOfContact: '20',
  formData: {
    //Coin algorithm
    email: '',
    coinType: 'Paid',
    coinAlgorithm: 'Script - proof of work1',

    //Coin name
    coinName: '',
    coinAbbreviation: '',
    addressLetter: '1',
    addressLetterTestnet: 'A',
    coinUnit: '',
    timestamp: '',
    websiteUrl: '',
    githubUrl: '',

    //Coin block reward
    blockReward: '',
    blockHalving: '',
    coinSupplyWithoutPremine: '',
    premine: 'Yes',
    fullPremine: false,
    premineAmount: '',
    coinSupplyWithPremine: '',

    //Coin block confirmation
    coinbaseMaturity: '',
    numberOfConfirmations: '',
    targetSpacingInMinutes: '',
    targetTimespanInMinutes: '10',
    hardCodedNode: false,
    node1: '',
    node2: '',

    // Coin custom logo
    walletIcon: '',
    walletTestnetIcon: '',

    //Smart contract type
    smartContractName: '',
    smartContractSymbol: '',
    smartContractPremine: '',

    //Smart contract feature
    mintable: true,
    burnable: false,
    pausable: false,
    premit: false,
    votes: false,
    flashMinting: false,
    snapshots: false,
    enumerable: false,
    uriStorage: false,
    supplyTracking: false,

    //Smart contract access and upgrade
    access: 'Ownable',
    upgradeability: false,
    upgrade: 'Transparent',

    //Smart contract info
    securityContact: '',
    license: '',
  },
};

export const wizardSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    updateWizardData: (state, action) => {
      state = { ...state, ...action.payload };
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
