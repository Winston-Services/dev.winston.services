import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workshop: '',
  formData: {
    coin: {
      //Coin algorithm
      email: '',
      coinType: 'Paid',
      coinAlgorithm: 'Script - Proof of Work',

      //Coin name
      coinName: '',
      coinAbbreviation: '',
      addressLetter: '1',
      addressLetterTestnet: 'A',
      coinUnit: '',
      timestamp: '',
      websiteUrl: 'https://bitcoin.org',
      githubUrl: 'https://github.com/bitcoin/bitcoin',

      //Coin block reward
      lastPowBlock: '',
      blockReward: 50,
      blockRewardPos: '',
      superblockReward: '',
      masternodeReward: '',
      blockHalving: 210000,
      coinSupplyWithoutPremine: 21000000,
      premine: 'Yes',
      fullPremine: false,
      premineAmount: '0',
      coinSupplyWithPremine: 21000000,

      //Coin block confirmation
      minimumCoinAge: '',
      coinbaseMaturity: '',
      numberOfConfirmations: '',
      targetSpacingInMinutes: '',
      targetTimespanInMinutes: '10',
      masternodeAmount: '',
      masternodeConfirmations: '',
      hardCodedNode: false,
      node1: '',
      node2: '',

      // Coin custom logo
      walletSplash: '',
      WalletTestnetSplash: '',
      walletIcon: '',
      walletTestnetIcon: '',
    },
    smartContract: {
      //Smart contract type
      network: { title: 'Ethereum', subTitle: 'ERC' },
      typeOfContact: '20',

      //Smart settings
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
    updateWizardCoinData: (state, action) => {
      state.formData.coin = { ...state.formData.coin, ...action.payload };
      return state;
    },
    updateWizardSmartContractData: (state, action) => {
      state.formData.smartContract = {
        ...state.formData.smartContract,
        ...action.payload,
      };
      return state;
    },
  },
});

export const { updateWizardData } = wizardSlice.actions;
export const { updateWizardCoinData } = wizardSlice.actions;
export const { updateWizardSmartContractData } = wizardSlice.actions;
export const wizardDataSelector = (state) => state.wizard;
export const wizardCoinDataSelector = (state) => state.wizard.formData.coin;
export const wizardSmartContractDataSelector = (state) =>
  state.wizard.formData.smartContract;

const wizard = wizardSlice.reducer;
export default wizard;
