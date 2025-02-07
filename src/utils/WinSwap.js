import { ethers } from 'ethers';

export const WinSwap = () => {
  const ERC20Standard = (routerAddress, provider) => {
    const NameABI = ['function name() external view returns (string memory)'];
    const SymbolABI = [
      'function symbol() external view returns (string memory)',
    ];
    const DecimalsABI = ['function decimals() external view returns (uint8)'];
    const ApproveABI = [
      'function approve(address spender, uint256 amount) external returns (bool)',
    ];
    const GetAllowanceABI = [
      'function allowance(address owner, address spender) external view returns (uint256)',
    ];
    const BalanceOfABI = [
      'function balanceOf(address account) external view returns (uint256)',
    ];
    const TransferABI = [
      'function transfer(address to, uint256 amount) external returns (bool)',
    ];
    const TransferFromABI = [
      'function transferFrom(address from, address to, uint256 amount) external returns (bool)',
    ];
    const Name = async () => {
      const contract = new ethers.Contract(routerAddress, NameABI, provider);
      const name = await contract.name();
      return name;
    };
    const Symbol = async () => {
      const contract = new ethers.Contract(routerAddress, SymbolABI, provider);
      const symbol = await contract.symbol();
      return symbol;
    };
    const Decimals = async () => {
      const contract = new ethers.Contract(
        routerAddress,
        DecimalsABI,
        provider
      );
      const decimals = await contract.decimals();
      return decimals;
    };
    const Approve = async (spender, amount) => {
      const contract = new ethers.Contract(routerAddress, ApproveABI, provider);
      const tx = await contract.approve(spender, amount);
      return tx;
    };
    const GetAllowance = async (owner, spender) => {
      const contract = new ethers.Contract(
        routerAddress,
        GetAllowanceABI,
        provider
      );
      const allowance = await contract.allowance(owner, spender);
      return allowance;
    };
    const BalanceOf = async (account) => {
      const contract = new ethers.Contract(
        routerAddress,
        BalanceOfABI,
        provider
      );
      const balance = await contract.balanceOf(account);
      return balance;
    };
    const Transfer = async (to, amount) => {
      const contract = new ethers.Contract(
        routerAddress,
        TransferABI,
        provider
      );
      const tx = await contract.transfer(to, amount);
      return tx;
    };
    const TransferFrom = async (from, to, amount) => {
      const contract = new ethers.Contract(
        routerAddress,
        TransferFromABI,
        provider
      );
      const tx = await contract.transferFrom(from, to, amount);
      return tx;
    };
    return {
      Name,
      Symbol,
      Decimals,
      Approve,
      GetAllowance,
      BalanceOf,
      Transfer,
      TransferFrom,
    };
  };

  const v2 = () => {
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

    const SwapExactETHForTokensABI = [
      'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    ];

    const SwapTokensForExactETHABI = [
      'function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
    ];

    const SwapExactTokensForETHABI = [
      'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
    ];

    const SwapETHForExactTokensABI = [
      'function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    ];

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

    const SwapExactETHForTokens = async (
      routerAddress,
      amountOutMin,
      path,
      to,
      deadline
    ) => {
      const contract = new ethers.Contract(
        routerAddress,
        SwapExactETHForTokensABI,
        provider
      );
      const tx = await contract.swapExactETHForTokens(
        amountOutMin,
        path,
        to,
        deadline
      );
      return tx;
    };

    const SwapTokensForExactETH = async (
      routerAddress,
      amountOut,
      amountInMax,
      path,
      to,
      deadline
    ) => {
      const contract = new ethers.Contract(
        routerAddress,
        SwapTokensForExactETHABI,
        provider
      );
      const tx = await contract.swapTokensForExactETH(
        amountOut,
        amountInMax,
        path,
        to,
        deadline
      );
      return tx;
    };

    const SwapExactTokensForETH = async (
      routerAddress,
      amountIn,
      amountOutMin,
      path,
      to,
      deadline
    ) => {
      const contract = new ethers.Contract(
        routerAddress,
        SwapExactTokensForETHABI,
        provider
      );
      const tx = await contract.swapExactTokensForETH(
        amountIn,
        amountOutMin,
        path,
        to,
        deadline
      );
      return tx;
    };

    const SwapETHForExactTokens = async (
      routerAddress,
      amountOut,
      path,
      to,
      deadline
    ) => {
      const contract = new ethers.Contract(
        routerAddress,
        SwapETHForExactTokensABI,
        provider
      );
      const tx = await contract.swapETHForExactTokens(
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
      const contract = new ethers.Contract(
        pairAddress,
        GetReservesABI,
        provider
      );
      const reserves = await contract.getReserves();
      return reserves;
    };
    return {
      GetAmountsOut,
      GetAmountsIn,
      swapExactTokensForTokens,
      swapTokensForExactTokens,
      SwapExactETHForTokens,
      SwapTokensForExactETH,
      SwapExactTokensForETH,
      SwapETHForExactTokens,
      GetPair,
      GetReserves,
    };
  };

  const v3 = () => {};

  const masterChef = (routerAddress, provider) => {
    const DepositABI = [
      'function deposit(uint256 pid, uint256 amount) external',
    ];

    const WithdrawABI = [
      'function withdraw(uint256 pid, uint256 amount) external',
    ];

    const HarvestABI = ['function harvest(uint256 pid) external'];

    const EmergencyWithdrawABI = [
      'function emergencyWithdraw(uint256 pid) external',
    ];

    const GetUserInfoABI = [
      'function userInfo(uint256 pid, address user) external view returns (uint256 amount, uint256 rewardDebt)',
    ];

    const GetPoolInfoABI = [
      'function poolInfo(uint256 pid) external view returns (uint256 allocPoint, uint256 lastRewardBlock, uint256 accSushiPerShare)',
    ];

    const Deposit = async (pid, amount) => {
      const contract = new ethers.Contract(routerAddress, DepositABI, provider);
      const tx = await contract.deposit(pid, amount);
      return tx;
    };

    const Withdraw = async (pid, amount) => {
      const contract = new ethers.Contract(
        routerAddress,
        WithdrawABI,
        provider
      );
      const tx = await contract.withdraw(pid, amount);
      return tx;
    };

    const Harvest = async (pid) => {
      const contract = new ethers.Contract(routerAddress, HarvestABI, provider);
      const tx = await contract.harvest(pid);
      return tx;
    };

    const GetUserInfo = async (pid, user) => {
      const contract = new ethers.Contract(
        routerAddress,
        GetUserInfoABI,
        provider
      );
      const userInfo = await contract.userInfo(pid, user);
      return userInfo;
    };

    const GetPoolInfo = async (pid) => {
      const contract = new ethers.Contract(
        routerAddress,
        GetPoolInfoABI,
        provider
      );
      const poolInfo = await contract.poolInfo(pid);
      return poolInfo;
    };

    const EmergencyWithdraw = async (pid) => {
      const contract = new ethers.Contract(
        routerAddress,
        EmergencyWithdrawABI,
        provider
      );
      const tx = await contract.emergencyWithdraw(pid);
      return tx;
    };

    return {
      Deposit,
      Withdraw,
      Harvest,
      EmergencyWithdraw,
      GetUserInfo,
      GetPoolInfo,
    };
  };

  let _swopPath = [];
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

  const setPath = (path) => {
    _swopPath = path;
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
    setPath,
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
