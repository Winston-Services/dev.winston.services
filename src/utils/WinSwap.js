import { ethers } from 'ethers';

export const WinSwap = () => {
  const _swopPath = [];
  let _provider;
  let currentAllowance = 0n;
  let routerAddress;

  const ApproveABI = [
    'function approve(address spender, uint256 amount) external returns (bool)',
  ];

  const GetAllowanceABI = [
    'function allowance(address owner, address spender) external view returns (uint256)',
  ];

  const GetAmountsOutABI = [
    'function getAmountsOut(uint amountIn, address[] memory path) external view returns (uint[] memory amounts)',
  ];

  const GetAmountsInABI = [
    'function getAmountsIn(uint amountOut, address[] memory path) external view returns (uint[] memory amounts)',
  ];

  const GetPairABI = [
    'function getPair(address tokenA, address tokenB) external view returns (address pair)',
  ];

  const GetReservesABI = [
    'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
  ];

  const SwapExactTokensForTokensABI = [
    'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  ];

  const SwapTokensForExactTokensABI = [
    'function swapTokensForExactTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  ];

  const Approve = async (routerAddress, spender, amount, provider) => {
    const contract = new ethers.Contract(routerAddress, ApproveABI, provider);
    const tx = await contract.approve(spender, amount);
    return tx;
  };

  const GetAllowance = async (routerAddress, owner, spender, provider) => {
    const contract = new ethers.Contract(
      routerAddress,
      GetAllowanceABI,
      provider
    );
    const allowance = await contract.allowance(owner, spender);
    return allowance;
  };

  const GetAmountsOut = async (routerAddress, amountIn, path, provider) => {
    const contract = new ethers.Contract(
      routerAddress,
      GetAmountsOutABI,
      provider
    );
    const amounts = await contract.getAmountsOut(amountIn, path);
    return amounts;
  };

  const GetAmountsIn = async (routerAddress, amountOut, path, provider) => {
    const contract = new ethers.Contract(
      routerAddress,
      GetAmountsInABI,
      provider
    );
    const amounts = await contract.getAmountsIn(amountOut, path);
    return amounts;
  };

  // Swap Exact Tokens For Tokens
  const swapExactTokensForTokens = async (
    routerAddress,
    amountIn,
    amountOutMin,
    path,
    to,
    deadline = Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from now
    provider
  ) => {
    const contract = new ethers.Contract(
      routerAddress,
      SwapExactTokensForTokensABI,
      provider
    );
    const tx = await contract.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      to,
      deadline
    );
    return tx;
  };

  // Swap Tokens For Exact Tokens
  const swapTokensForExactTokens = async (
    routerAddress,
    amountIn,
    amountOut,
    path,
    to,
    deadline,
    provider
  ) => {
    const contract = new ethers.Contract(
      routerAddress,
      SwapTokensForExactTokensABI,
      provider
    );
    const tx = await contract.swapTokensForExactTokens(
      amountIn,
      amountOut,
      path,
      to,
      deadline
    );
    return tx;
  };

  const GetPair = async (routerAddress, tokenA, tokenB, provider) => {
    const contract = new ethers.Contract(routerAddress, GetPairABI, provider);
    const pair = await contract.getPair(tokenA, tokenB);
    return pair;
  };

  const GetReserves = async (pairAddress, provider) => {
    const contract = new ethers.Contract(pairAddress, GetReservesABI, provider);
    const reserves = await contract.getReserves();
    return reserves;
  };

  const getProvider = () => {
    return _provider;
  };

  const setProvider = (provider) => {
    _provider = provider;
  };

  const clearPath = () => {
    _swopPath = [];
  };

  const addToPath = (token) => {
    _swopPath.push(token);
  };

  const getPath = () => {
    return _swopPath;
  };

  const getCurrentAllowance = () => {
    return currentAllowance;
  };

  const setCurrentAllowance = (allowance) => {
    currentAllowance = allowance;
  };

  const getRouterAddress = () => {
    return routerAddress;
  };

  const setRouterAddress = (address) => {
    routerAddress = address;
  };

  const PreviewTrade = async (amountIn, path) => {
    return await GetAmountsOut(
      getRouterAddress(),
      amountIn,
      path,
      getProvider()
    );
  };

  const isProfitable = async (amountIn, path, minProfitMargin) => {
    const profit = await getProfit(amountIn, path);
    const profitMargin = profit / amountIn;
    return [profitMargin >= minProfitMargin, profit, profitMargin];
  };

  const getProfit = async (amountIn, path) => {
    const [...results] = await PreviewTrade(amountIn, path);
    const lastResult = results[results.length - 1];
    const profit = lastResult - amountIn;
    return profit;
  };

  const init = async (routerAddress, provider) => {
    setRouterAddress(routerAddress);
    setProvider(provider);
  };

  return {
    getProvider,
    setProvider,
    clearPath,
    addToPath,
    getPath,
    getCurrentAllowance,
    setCurrentAllowance,
    getRouterAddress,
    setRouterAddress,
    PreviewTrade,
    isProfitable,
    getProfit,
    Approve,
    GetAllowance,
    GetAmountsOut,
    GetAmountsIn,
    swapExactTokensForTokens,
    swapTokensForExactTokens,
    GetPair,
    GetReserves,
    init,
  };
};
