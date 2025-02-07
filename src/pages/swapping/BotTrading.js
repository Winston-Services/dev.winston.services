import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import { ethers } from 'ethers';
import { Info } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';

const BotContext = React.createContext();

const BotProvider = ({ children }) => {
  const WIN = '0x75578ebbefe274f240b8e1b5859ca34f342157d9';
  const BNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
  const USDT = '0x55d398326f99059ff775485246999027b3197955';
  const USDC = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
  const WAC = '0x181d5cec845973e64bccf9848412948be8a3883e';
  const BRKL = '0xeCa15e1BbFF172D545Dd6325F3Bae7b737906737';

  const PancakeRouter = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
  const UniswapV2Router = '0x7a250d5630b4cf539739df2c5dacab8e3a30927f';
  const SushiV2Router = '0x7a250d5630b4cf539739df2c5dacab8e3a30927f';
  const ApeSwapRouter = '0x0841bd0b734e4f5853f0dd80d73f478254222ea6';
  const TraderJoeRouter = '0x60aE616a2155Ee3d9A68541Ba4544862310933d4';

  const [state, setState] = React.useState({
    cycle: 1,
    provider: null,
    wallet: null,
    high: {
      [WIN]: {
        value: 0,
        lastUpdated: null,
      },
      [BNB]: {
        value: 0,
        lastUpdated: null,
      },
    },
    low: {
      [WIN]: {
        value: 0,
        lastUpdated: null,
      },
      [BNB]: {
        value: 0,
        lastUpdated: null,
      },
    },
    current: {
      [WIN]: 0.0,
      [BNB]: 0.0,
      fetching: false,
      fetchingError: null,
      fetched: false,
      lastUpdated: null,
    },
    balance: {
      [WIN]: 0,
      [BNB]: 0,
      fetching: false,
      fetchingError: null,
      fetched: false,
      lastUpdated: null,
    },
    limitBalance: {
      [WIN]: 9000,
      [BNB]: 0.0316871,
    },
    supplyAt: {
      [WIN]: 60000,
      [BNB]: 0.211247,
    },
    profitRange: {
      low: 28.5,
      high: 68,
    },
    orders: [],
  });

  const getRouter = () => {
    if (state.provider && state.wallet) {
      const provider = state.provider;
      // console.log('getting token price');
      try {
        const router = new ethers.Contract(
          PancakeRouter,
          [
            'function getAmountsOut(uint amountIn, address[] memory path) view returns (uint[] memory amounts)',
          ],
          provider
        );
        return router;
      } catch (error) {
        throw error;
      }
    }
    return null;
  };

  const getUSDTPricePath = (token) =>
    token === WIN ? [WIN, USDT] : [BNB, USDT];

  const getTokenPrice = async (token, amount = 1) => {
    if (state.provider && state.wallet) {
      try {
        const router = getRouter();
        const path = getUSDTPricePath(token);
        const amounts = await router.getAmountsOut(
          ethers.parseEther(amount.toString()),
          path
        );
        // console.log('amounts', path, amounts);
        const price =
          ethers.formatUnits(amounts[1], 18) /
          ethers.formatUnits(amounts[0], 18);
        // console.log('price', price);
        return price;
      } catch (error) {
        throw error;
      }
    }
    return Promise.resolve(0n);
  };

  const getTokenBalance = async (token) => {
    if (state.provider && state.wallet) {
      const provider = state.provider;
      // console.log(provider);
      const tokenContract = new ethers.Contract(
        token,
        ['function balanceOf(address owner) view returns (uint256)'],
        provider
      );
      const balance = await tokenContract.balanceOf(state.wallet.address);
      return balance;
    }
    return Promise.resolve(0n);
  };

  const getGasBalance = async () => {
    if (state.provider && state.wallet) {
      const provider = state.provider;
      const balance = await provider.getBalance(state.wallet.address);
      return balance;
    }
    return Promise.resolve(0n);
  };

  const setProvider = (provider) => {
    setState({ ...state, provider });
  };

  const setWallet = (wallet) => {
    setState({ ...state, wallet });
  };

  const setCycle = (cycle) => {
    setState({ ...state, cycle });
  };

  const setProfitRangeHigh = (high) => {
    setState({ ...state, profitRange: { ...state.profitRange, high } });
  };

  const setProfitRangeLow = (low) => {
    setState({ ...state, profitRange: { ...state.profitRange, low } });
  };

  const setSupplyAt = (supplyAt) => {
    setState({ ...state, supplyAt });
  };

  const setLimitBalance = (limitBalance) => {
    setState({ ...state, limitBalance });
  };

  const setBalance = (balance) => {
    setState({ ...state, balance });
  };

  const setHigh = (high) => {
    setState({ ...state, high });
  };

  const setLow = (low) => {
    setState({ ...state, low });
  };

  const setCurrent = (current) => {
    setState({ ...state, current });
  };

  const setOrders = (orders) => {
    setState({ ...state, orders });
  };

  const encryptWallet = async (wallet) => {
    const password = '123456';
    return await wallet.encrypt(password);
  };

  const decryptWallet = async (encryptedWallet) => {
    const password = '123456';
    return await ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
  };

  const connectWallet = async () => {
    const provider = new ethers.JsonRpcProvider(
      'https://bsc-dataseed.binance.org/'
    );

    if (!state.wallet) {
      let wallet = localStorage.getItem('win-trading-wallet');
      if (wallet) {
        wallet = await decryptWallet(wallet);
      } else {
        wallet = ethers.Wallet.createRandom();
        localStorage.setItem('win-trading-wallet', await encryptWallet(wallet));
      }
      wallet.connect(provider);
      setState({
        ...state,
        provider,
        wallet,
      });
    }
  };

  const disconnectWallet = () => {
    setState({
      ...state,
      provider: null,
      wallet: null,
      balance: {
        ...state.balance,
        [WIN]: 0,
        [BNB]: 0,
        fetching: false,
        fetchingError: null,
        fetched: false,
        lastUpdated: null,
      },
    });
  };

  const fetchBalance = async () => {
    if (state.provider && state.wallet) {
      if (state.balance.fetching) {
        return;
      }
      setState({
        ...state,
        balance: { ...state.balance, fetching: true },
      });
      console.log('fetching balance');
      try {
        const tokenBalance = await getTokenBalance(WIN);
        const gasBalance = await getGasBalance();
        setState({
          ...state,
          balance: {
            ...state.balance,
            [WIN]: tokenBalance,
            [BNB]: gasBalance,
            fetching: false,
            fetchingError: null,
            fetched: true,
            lastUpdated: new Date().toLocaleString(),
          },
        });
      } catch (error) {
        setState({
          ...state,
          balance: {
            ...state.balance,
            fetching: false,
            fetchingError: error.message,
          },
        });
      }
    }
  };

  const fetchCurrent = async () => {
    if (state.provider && state.wallet) {
      if (state.current.fetching) {
        return;
      }
      // console.log('fetching current');
      setState({
        ...state,
        current: { ...state.current, fetching: true },
      });
      try {
        const winPrice = await getTokenPrice(WIN);
        const bnbPrice = await getTokenPrice(BNB);
        console.log('prices', winPrice, bnbPrice);
        setState({
          ...state,
          high: {
            [WIN]: {
              value:
                winPrice > state.high[WIN].value
                  ? winPrice
                  : state.high[WIN].value,
              lastUpdated: new Date().toLocaleString(),
            },
            [BNB]: {
              value:
                bnbPrice > state.high[BNB].value
                  ? bnbPrice
                  : state.high[BNB].value,
              lastUpdated: new Date().toLocaleString(),
            },
          },
          low: {
            [WIN]: {
              value:
                winPrice < state.low[WIN].value || !state.low[WIN].value
                  ? winPrice
                  : state.low[WIN].value,
              lastUpdated: new Date().toLocaleString(),
            },
            [BNB]: {
              value:
                bnbPrice < state.low[BNB].value || !state.low[BNB].value
                  ? bnbPrice
                  : state.low[BNB].value,
              lastUpdated: new Date().toLocaleString(),
            },
          },
          current: {
            [WIN]: winPrice,
            [BNB]: bnbPrice,
            fetching: false,
            fetchingError: null,
            fetched: true,
            lastUpdated: new Date().toLocaleString(),
          },
        });
      } catch (error) {
        setState({
          ...state,
          current: {
            ...state.current,
            fetching: false,
            fetchingError: error.message,
          },
        });
      }
    }
  };

  const [arbTrades, setArbTrades] = React.useState([]);

  const arbCheck = async (amount = 1000) => {
    if (state.provider && state.wallet) {
      const router = getRouter();
      const _amounts = [];
      const paths = [
        [WIN, BRKL, BNB, BRKL, WIN],
        [WIN, BRKL, USDT, BRKL, WIN],
        [WIN, BRKL, USDT, USDC, BRKL, WIN],
        [WIN, BRKL, USDC, BRKL, WIN],
        [WIN, BRKL, USDC, USDT, BRKL, WIN],
        [WIN, BRKL, BNB, WIN, BRKL, WIN],
        [WIN, BRKL, USDT, WIN, BRKL, WIN],
        [WIN, BRKL, USDC, WIN, BRKL, WIN],
        [WIN, BRKL, BNB, USDT, WIN, BNB, BRKL, WIN],
        [WIN, BRKL, BNB, USDC, WIN, BNB, BRKL, WIN],
        [WIN, BRKL, USDT, USDC, WIN],
        [WIN, BRKL, USDC, USDT, WIN],
      ];
      for (const path of paths) {
        try {
          const amounts = await router.getAmountsOut(
            ethers.parseEther(amount.toString()),
            path
          );
          if (amounts[amounts.length - 1] > amounts[0]) {
            _amounts.push({ path, amounts });
          }
        } catch (error) {
          console.log('error', error);
        }
      }
      setArbTrades(
        _amounts.map(({ path, amounts }) => ({
          in: ethers.formatUnits(amounts[0], 18),
          out: ethers.formatUnits(amounts[amounts.length - 1], 18),
          lastUpdated: new Date().toLocaleString(),
          path,
        }))
      );
    }
  };

  return (
    <BotContext.Provider
      value={{
        ...state,
        WIN,
        BNB,
        USDT,
        USDC,
        fetchBalance,
        fetchCurrent,
        connectWallet,
        disconnectWallet,
        setProvider,
        setWallet,
        setCycle,
        setProfitRangeHigh,
        setProfitRangeLow,
        setSupplyAt,
        setLimitBalance,
        setBalance,
        setHigh,
        setLow,
        setCurrent,
        setOrders,
        arbCheck,
        arbTrades,
      }}
    >
      {children}
    </BotContext.Provider>
  );
};

const useBot = () => {
  const {
    fetchBalance,
    fetchCurrent,
    connectWallet,
    disconnectWallet,
    setProvider,
    setWallet,
    setCycle,
    setProfitRangeHigh,
    setProfitRangeLow,
    setSupplyAt,
    setLimitBalance,
    setBalance,
    setHigh,
    setLow,
    setCurrent,
    setOrders,
    arbCheck,
    arbTrades,
    WIN,
    BNB,
    USDT,
    USDC,
    ...state
  } = React.useContext(BotContext);
  return {
    ...state,
    WIN,
    BNB,
    USDT,
    USDC,
    fetchBalance,
    fetchCurrent,
    connectWallet,
    disconnectWallet,
    setProvider,
    setWallet,
    setCycle,
    setProfitRangeHigh,
    setProfitRangeLow,
    setSupplyAt,
    setLimitBalance,
    setBalance,
    setHigh,
    setLow,
    setCurrent,
    setOrders,
    arbCheck,
    arbTrades,
  };
};

const Trading = () => {
  const {
    fetchBalance,
    fetchCurrent,
    connectWallet,
    disconnectWallet,
    setProvider,
    setWallet,
    setCycle,
    setProfitRangeHigh,
    setProfitRangeLow,
    setSupplyAt,
    setLimitBalance,
    setBalance,
    setHigh,
    setLow,
    setCurrent,
    setOrders,
    arbCheck,
    arbTrades,
    WIN,
    BNB,
    USDT,
    USDC,
    ...state
  } = useBot();

  const updateTimer = React.useRef(null);
  React.useEffect(() => {
    updateTimer.current = setInterval(() => {
      fetchBalance();
      fetchCurrent();
      arbCheck();
    }, 5000);
    return () => clearInterval(updateTimer.current);
  }, [fetchBalance, fetchCurrent, arbCheck]);

  React.useEffect(() => {
    if (state.provider && state.wallet) {
      fetchBalance();
      fetchCurrent();
      arbCheck();
    }
  }, [state.provider, state.wallet]);

  React.useEffect(() => {
    if (!state.wallet) {
      connectWallet();
    }
  }, [state.wallet]);

  const renderOrders = () => {
    let orders = [];
    let order = {
      cycle: 1,
    };
    order.action = 'Buy In';
    order.amount = state.limitBalance[BNB];
    order.bnbPrice = state.current[BNB];
    order.totalBnb = Number(order.bnbPrice) * Number(order.amount);
    order.targetHigh = Number(order.bnbPrice) * (1 + 0.68);
    order.targetLow = Number(order.bnbPrice) * (1 + 0.285);
    orders.push(order);
    return orders;
  };
  return (
    <Container>
      <Box>
        <Typography variant="h6" gutterBottom>
          Trading Strategy | Buy and Supply
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Supply At{' '}
                <Tooltip title="Supply At Info" arrow>
                  <Info
                    sx={{
                      fontSize: '10px',
                      alignSelf: 'center',
                      cursor: 'pointer',
                    }}
                  />
                </Tooltip>
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell>Balance</TableCell>
                      <TableCell>Current</TableCell>
                      <TableCell>High</TableCell>
                      <TableCell>Low</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        A
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        {state.supplyAt[WIN]?.toString()}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${(state.supplyAt[WIN] * state.current[WIN]).toFixed(8)}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $
                        {(state.supplyAt[WIN] * state.high[WIN]?.value).toFixed(
                          8
                        )}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $
                        {(state.supplyAt[WIN] * state.low[WIN]?.value).toFixed(
                          8
                        )}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        B
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        {state.supplyAt[BNB]?.toString()}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${(state.supplyAt[BNB] * state.current[BNB]).toFixed(8)}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $750
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $500
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
                <Typography variant="caption" color="text.secondary">
                  {state.wallet?.address} {state.supplyAt?.lastUpdated}
                </Typography>
              </TableContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Limit Balance{' '}
                <Tooltip title="Limit Balance Info" arrow>
                  <Info
                    sx={{
                      fontSize: '10px',
                      alignSelf: 'center',
                      cursor: 'pointer',
                    }}
                  />
                </Tooltip>
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{state.limitBalance[WIN]}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{state.limitBalance[BNB]}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
                <Typography variant="caption" color="text.secondary">
                  {state.limitBalance[BNB] / state.limitBalance[WIN]}
                </Typography>
              </TableContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Balance
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Balance</TableCell>
                      <TableCell>Current</TableCell>
                      <TableCell>High</TableCell>
                      <TableCell>Low</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        {state.balance[WIN]?.toString()}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        0.00000000
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        $0.00{' '}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Typography variant="caption" color="text.secondary">
                Last updated: {new Date().toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                High
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>A</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.high[WIN]?.value?.toString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>B</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.high[BNB]?.value?.toString()}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Typography variant="caption" color="text.secondary">
                Last updated: {new Date().toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>A</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.current[WIN]}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>B</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.current[BNB].toString()}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Typography variant="caption" color="text.secondary">
                Last updated: {state.current.lastUpdated}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Low
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>A</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.low[WIN]?.value?.toString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>B</TableCell>
                      <TableCell sx={{ width: '90%', fontSize: '10px' }}>
                        ${state.low[BNB]?.value?.toString()}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Typography variant="caption" color="text.secondary">
                Last updated: {new Date().toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profit Range{' '}
                <span
                  style={{ fontSize: '10px', color: 'gray', float: 'right' }}
                >
                  Buy In : $469
                </span>
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: '10px' }}>Low</TableCell>
                      <TableCell sx={{ fontSize: '10px' }}>28.5%</TableCell>
                      <TableCell sx={{ fontSize: '10px' }}>
                        ${469 * (1 + 0.285)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontSize: '10px' }}>High</TableCell>
                      <TableCell sx={{ fontSize: '10px' }}>68%</TableCell>
                      <TableCell sx={{ fontSize: '10px' }}>
                        ${469 * (1 + 0.68)}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Typography variant="caption" color="text.secondary">
                Edit
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Orders
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Amount</TableCell>
                      <TableCell>Total Bnb</TableCell>
                      <TableCell>Target High</TableCell>
                      <TableCell>Target Low</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderOrders().map((order, index) => (
                      <TableRow key={index}>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          {order.bnbPrice} <br /> {order.totalBnb}
                        </TableCell>
                        <TableCell>
                          {order.targetHigh} <br />{' '}
                          {order.amount * order.targetHigh}
                        </TableCell>
                        <TableCell>
                          {order.targetLow} <br />{' '}
                          {order.amount * order.targetLow}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Arb Trades
              </Typography>
              <TableContainer component={Paper}>
                <Table aria-label="strategy execution table" size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>In</TableCell>
                      <TableCell>Out</TableCell>
                      <TableCell>Profit</TableCell>
                      <TableCell>Last Updated</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {arbTrades.map((trade, index) => (
                      <TableRow key={index}>
                        <TableCell>{trade.in.toString()}</TableCell>
                        <TableCell>{trade.out.toString()}</TableCell>
                        <TableCell>{trade.profit}</TableCell>
                        <TableCell>{trade.lastUpdated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

const BotTrading = () => {
  return (
    <BotProvider>
      <Trading />
    </BotProvider>
  );
};

export default BotTrading;
