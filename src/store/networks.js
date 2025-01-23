import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  1: [
    {
      id: 'eth.llamarpc.com',
      name: 'Ethereum',
      rpc: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      chainId: 1,
      ws: 'wss://eth.llamarpc.com',
      explorer: 'https://etherscan.io',
      explorer_api: 'https://api.etherscan.io/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://eth.llamarpc.com/address',
      tokenEndpoint: 'https://eth.llamarpc.com/token',
      blockEndpoint: 'https://eth.llamarpc.com/block',
      txEndpoint: 'https://eth.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  10: [
    {
      id: 'optimism.llamarpc.com',
      name: 'Optimism',
      rpc: 'https://optimism.llamarpc.com',
      chainId: 10,
      ws: 'wss://optimism.llamarpc.com',
      explorer: 'https://optimistic.etherscan.io',
      explorer_api: 'https://api-optimistic.etherscan.io/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://optimism.llamarpc.com/address',
      tokenEndpoint: 'https://optimism.llamarpc.com/token',
      blockEndpoint: 'https://optimism.llamarpc.com/block',
      txEndpoint: 'https://optimism.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  56: [
    {
      id: 'bsc.llamarpc.com',
      name: 'Binance',
      rpc: 'https://bsc.llamarpc.com',
      chainId: 56,
      ws: 'wss://bsc.llamarpc.com',
      explorer: 'https://bscscan.com',
      explorer_api: 'https://api.bscscan.com/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://bsc.llamarpc.com/address',
      tokenEndpoint: 'https://bsc.llamarpc.com/token',
      blockEndpoint: 'https://bsc.llamarpc.com/block',
      txEndpoint: 'https://bsc.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  100: [
    {
      id: 'gnosis.llamarpc.com',
      name: 'xDai',
      rpc: 'https://gnosis.llamarpc.com',
      chainId: 100,
      ws: 'wss://gnosis.llamarpc.com',
      explorer: 'https://gnosisscan.io',
      explorer_api: 'https://api.gnosisscan.io/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://gnosis.llamarpc.com/address',
      tokenEndpoint: 'https://gnosis.llamarpc.com/token',
      blockEndpoint: 'https://gnosis.llamarpc.com/block',
      txEndpoint: 'https://gnosis.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  137: [
    {
      id: 'polygon.llamarpc.com',
      name: 'Polygon',
      rpc: 'https://polygon-mainnet.g.alchemy.com/v2/demo',
      chainId: 137,
      ws: 'wss://polygon.llamarpc.com',
      explorer: 'https://polygonscan.com',
      explorer_api: 'https://api.polygonscan.com/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://polygon.llamarpc.com/address',
      tokenEndpoint: 'https://polygon.llamarpc.com/token',
      blockEndpoint: 'https://polygon.llamarpc.com/block',
      txEndpoint: 'https://polygon.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  42161: [
    {
      id: 'arbitrum.llamarpc.com',
      name: 'Arbitrum',
      rpc: 'https://arbitrum.llamarpc.com',
      chainId: 42161,
      ws: 'wss://arbitrum.llamarpc.com',
      explorer: 'https://arbiscan.io',
      explorer_api: 'https://api.arbiscan.io/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://arbitrum.llamarpc.com/address',
      tokenEndpoint: 'https://arbitrum.llamarpc.com/token',
      blockEndpoint: 'https://arbitrum.llamarpc.com/block',
      txEndpoint: 'https://arbitrum.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  43114: [
    {
      id: 'avalanche.llamarpc.com',
      name: 'AvalancheC',
      rpc: 'https://avalanche.llamarpc.com',
      chainId: 43114,
      ws: 'wss://avalanche.llamarpc.com',
      explorer: 'https://cchain.explorer.avax.network',
      explorer_api: 'https://api.cchain.explorer.avax.network/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://avalanche.llamarpc.com/address',
      tokenEndpoint: 'https://avalanche.llamarpc.com/token',
      blockEndpoint: 'https://avalanche.llamarpc.com/block',
      txEndpoint: 'https://avalanche.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
  1666600000: [
    {
      id: 'harmony.llamarpc.com',
      name: 'Harmony',
      rpc: 'https://harmony.llamarpc.com',
      chainId: 1666600000,
      ws: 'wss://harmony.llamarpc.com',
      explorer: 'https://explorer.harmony.one',
      explorer_api: 'https://api.explorer.harmony.one/api',
      explorer_api_key: 'demo',
      addressEndpoint: 'https://harmony.llamarpc.com/address',
      tokenEndpoint: 'https://harmony.llamarpc.com/token',
      blockEndpoint: 'https://harmony.llamarpc.com/block',
      txEndpoint: 'https://harmony.llamarpc.com/tx',
      privacyRating: 1,
    },
  ],
};

export const networksSlice = createSlice({
  name: 'networks',
  initialState,
  reducers: {
    setNetworkRpcs: (network) => (state, action) => {
      state[network] = action.payload;
    },
    addNetworkRpc: (network) => (state, action) => {
      state[network].push(action.payload);
    },
    removeNetworkRpc: (network) => (state, action) => {
      state[network] = state[network].filter(
        (rpc) => rpc.id !== action.payload
      );
    },
    setRpcEnpoint: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).rpc =
        action.payload.rpc;
    },
    setRpcWs: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).ws =
        action.payload.ws;
    },
    setExplorer: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).explorer =
        action.payload.explorer;
    },
    setExplorerApi: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).explorer_api =
        action.payload.explorer_api;
    },
    setExplorerApiKey: (network) => (state, action) => {
      state[network].find(
        (rpc) => rpc.id === action.payload.id
      ).explorer_api_key = action.payload.explorer_api_key;
    },
    setAddressEndpoint: (network) => (state, action) => {
      state[network].find(
        (rpc) => rpc.id === action.payload.id
      ).addressEndpoint = action.payload.addressEndpoint;
    },
    setTokenEndpoint: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).tokenEndpoint =
        action.payload.tokenEndpoint;
    },
    setBlockEndpoint: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).blockEndpoint =
        action.payload.blockEndpoint;
    },
    setTxEndpoint: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).txEndpoint =
        action.payload.txEndpoint;
    },
    setPrivacyRating: (network) => (state, action) => {
      state[network].find((rpc) => rpc.id === action.payload.id).privacyRating =
        action.payload.privacyRating;
    },
  },
});

export const {
  setNetworkRpcs,
  addNetworkRpc,
  removeNetworkRpc,
  setRpcEnpoint,
  setRpcWs,
  setExplorer,
  setExplorerApi,
  setExplorerApiKey,
  setAddressEndpoint,
  setTokenEndpoint,
  setBlockEndpoint,
  setTxEndpoint,
  setPrivacyRating,
} = networksSlice.actions;

export const networksSelector = (state) => state.networks;
export const networkRpcsSelector = (state, network) => state.networks[network];
export const networkRpcSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId);
export const privacyRatingSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).privacyRating;
export const rpcEnpointSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).rpc;
export const rpcWsSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).ws;
export const explorerSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).explorer;
export const explorerApiSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).explorer_api;
export const addressEndpointSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).addressEndpoint;
export const tokenEndpointSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).tokenEndpoint;
export const blockEndpointSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).blockEndpoint;
export const txEndpointSelector = (state, network, rpcId) =>
  state.networks[network].find((rpc) => rpc.id === rpcId).txEndpoint;
export const chainId2NetworkName = (state, chainId) => {
  const networkKey = Object.keys(state.networks).find(key =>
    state.networks[key].some(rpc => rpc.chainId === chainId)
  );
  return networkKey ? state.networks[networkKey][0].name : undefined;
};

const networks = networksSlice.reducer;
export default networks;
