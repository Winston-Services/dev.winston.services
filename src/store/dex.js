import { createSlice } from '@reduxjs/toolkit';

const dexSlice = createSlice({
  name: 'dex',
  initialState: {
    1: {
      routers: [
        {
          name: 'Uniswap',
          logo: './assets/icons/uniswap.png',
          router: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
          factory: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
          version: 'v2',
        },
        {
          name: 'PancakeSwap',
          logo: './assets/icons/pancakeswap.png',
          router: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
          factory: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
          version: 'v2',
        },
        {
          name: 'SushiSwap',
          logo: './assets/icons/sushiswap.png',
          router: '0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f',
          factory: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
          version: 'v2',
        },
      ],
    },
    10: {
      routers: [
        {
          name: 'Uniswap',
          logo: 'https://raw.githubusercontent.com/trustwallet/assets/refs/heads/master/blockchains/ethereum/info/logo.png',
          router: '0x7a250d5630b4cf539739df2c5dacab8e899a6dc9',
          factory: '0x5c69bee701efa465e677ee3d096c92a682753419',
          version: 'v2',
        },
      ],
    },
    56: {
      routers: [
        {
          name: 'PancakeSwap',
          logo: 'https://raw.githubusercontent.com/trustwallet/assets/refs/heads/master/blockchains/ethereum/info/logo.png',
          router: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
          factory: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
          version: 'v2',
        },
      ],
    },
    100: {
      routers: [],
    },
    137: {
      routers: [
        {
          name: 'QuickSwap',
          logo: './assets/icons/quickswap.png',
          router: '0xa5e0829caCED8fFDD4De3c43696c57f7D7A678ff',
          factory: '0x5757371414417b8c6caad45baef941abc7d3ab32',
          version: 'v2',
        },
        {
          name: 'SushiSwap',
          logo: './assets/icons/sushiswap.png',
          router: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
          factory: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
          version: 'v2',
        },
      ],
    },
    42161: {
      routers: [],
    },
    43114: {
      routers: [],
    },
    1666600000: {
      routers: [],
    },
  },
  reducers: {
    setDex: (state, action) => {
      state[action.payload.chainId] = action.payload.dex;
    },
    setDexRouters: (state, action) => {
      state[action.payload.chainId].routers = action.payload.routers;
    },
    setDexRouter: (state, action) => {
      state[action.payload.chainId].routers[action.payload.index] =
        action.payload.router;
    },
    addDexRouter: (state, action) => {
      state[action.payload.chainId].routers.push(action.payload.router);
    },
    removeDexRouter: (state, action) => {
      state[action.payload.chainId].routers.splice(action.payload.index, 1);
    },
  },
});

export const {
  setDex,
  setDexRouters,
  setDexRouter,
  addDexRouter,
  removeDexRouter,
} = dexSlice.actions;

export const selectDex = (state) => state.dex;
export const selectDexRouters = (chainId) => (state) =>
  state.dex[chainId]?.routers ?? [];
export const selectDexRouter = (chainId, name) => (state) =>
  state.dex[chainId]?.routers.find((router) => router.name === name) ?? null;

export default dexSlice.reducer;
