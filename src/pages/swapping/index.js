import React from 'react';

import {
  Typography,
  Grid,
  Divider,
  Card,
  Box,
  TextField,
  IconButton,
  Button,
  Container,
  Avatar,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  Toolbar,
  Tooltip,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { useNetworks } from '../../hooks/useNetworks';
import DropDown from './../../components/common/DropDown';
import FormTextField from './../../components/common/TextField';
import Form from './../../components/common/Form';
import SwapTable from './SwapTable';
import useApi from '../../hooks/useApi';
import { useDex } from '../../hooks/useDex';
import { WinSwap } from '../../utils/WinSwap';
import { ethers } from 'ethers';
import { ArrowDropDown, ArrowLeft } from '@mui/icons-material';
import BotTrading from './BotTrading';
let timeout;
export function debounce(callback, delay) {
  clearTimeout(timeout);
  timeout = setTimeout(callback, delay);
  return callback;
}

// const digitsOnly = (value) => /^\d+$/.test(value);
const listed = {
  1: {
    //eth
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  56: {
    //bsc
    '0x55d398326f99059ff775485246999027b3197955': 'USDT',
    '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d': 'USDC',
    '0xe9e7cea3dedca5984780bafc599bd69add087d56': 'BUSD',
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c': 'WBNB',
    '0x181d5cec845973e64bccf9848412948be8a3883e': 'WAC',
  },
  100: {
    //gnosis
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  137: {
    //polygon
    '0x0000000000000000000000000000000000000000': 'USDC',
    '0x0000000000000000000000000000000000000000': 'USDT',
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  42161: {
    //arbitrum
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  43114: {
    //avalanche
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  8453: {
    //base
    '0x0000000000000000000000000000000000000000': 'WETH',
  },
  1666600000: {
    //harmony one
    '0x0000000000000000000000000000000000000000': 'ONE',
  },
};

export default function Swapping() {
  const { networks } = useNetworks();

  const chainId2NetworkName = (chainId) => {
    const networkKey = Object.keys(networks).find((key) =>
      networks[key].some((rpc) => rpc.chainId === chainId)
    );
    return networkKey ? networks[networkKey][0].name : undefined;
  };

  const [simple, setSimple] = React.useState(true);
  const [initialValues1, setInitialValues1] = React.useState({
    network: '',
    token: '',
    amount: '',
  });
  const [initialValues2, setInitialValues2] = React.useState({
    network: '',
    token: '',
  });
  const [initialValues3, setInitialValues3] = React.useState({
    router: '',
    path: [],
  });

  const networkOptions = Object.keys(networks).map((network) => ({
    label: (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
        <Avatar
          src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chainId2NetworkName(Number(network)).toLowerCase()}/info/logo.png`}
          sx={{ width: 20, height: 20 }}
        />
        {chainId2NetworkName(Number(network))}
      </Box>
    ),
    icon: (
      <Avatar
        src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${chainId2NetworkName(Number(network)).toLowerCase()}/info/logo.png`}
        sx={{ width: 20, height: 20 }}
      />
    ),
    value: Number(network),
  }));

  const api = useApi();
  const { data, isLoading } = api.endpoints.getTokens.useQuery();
  const [tokens, setTokens] = React.useState([]);
  const [tokens2, setTokens2] = React.useState([]);
  const { dex } = useDex();
  const [allowance, setAllowance] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [routing, setRouting] = React.useState([]);
  const [previewTradeValue, setPreviewTradeValue] = React.useState(null);
  const [previewTradeValues, setPreviewTradeValues] = React.useState(null);
  const [previewIsLoading, setPreviewIsLoading] = React.useState(false);
  const checkBalance = React.useCallback(() => {
    console.log(initialValues1.token, initialValues1.amount);
    setTimeout(() => {
      setBalance(ethers.formatUnits(10000000000000000000000n, 18));
    }, 1000);
  }, [initialValues1.token, initialValues1.amount]);

  const checkAllowance = React.useCallback(() => {
    console.log(initialValues1.token, initialValues1.amount);
    setTimeout(() => {
      setAllowance(ethers.formatUnits(10000000000000000000000n, 18));
    }, 1000);
  }, [initialValues1.token, initialValues1.amount]);

  const { PreviewTrade, init, getPath, clearPath, setPath } = WinSwap();

  const previewTrade = React.useCallback(async () => {
    setPreviewIsLoading(true);
    const provider = new ethers.JsonRpcProvider(
      networks[initialValues1.network][0].rpc
    );
    init(initialValues3.router, provider);
    setPath(initialValues3.path);
    // console.log(initialValues1.amount);
    const trade = await PreviewTrade(
      ethers.parseUnits(initialValues1.amount, 18),
      getPath()
    );
    // console.log(trade.map((amount) => ethers.formatUnits(amount, 18)));
    const altTrades = {
      start: initialValues1.token,
      end: initialValues2.token,
      router: initialValues3.router,
      amount: initialValues1.amount,
      routes: [
        ['0x55d398326f99059ff775485246999027b3197955'], //USDT
        ['0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'], //USDC
        ['0xe9e7cea3dedca5984780bafc599bd69add087d56'], //BUSD
        ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'], //WBNB
        ['0x181d5cec845973e64bccf9848412948be8a3883e'], //WAC
        [
          '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        ],
        [
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        ],
        [
          '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          '0x181d5cec845973e64bccf9848412948be8a3883e',
        ],
        [
          '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          '0xe9e7cea3dedca5984780bafc599bd69add087d56',
          '0x181d5cec845973e64bccf9848412948be8a3883e',
        ],
      ],
      trade: trade,
      trades: [],
    };
    for (let i = 0; i < altTrades.routes.length; i++) {
      setPath([altTrades.start, ...altTrades.routes[i], altTrades.end]);
      altTrades.trades[i] = await PreviewTrade(
        ethers.parseUnits(initialValues1.amount, 18),
        getPath()
      ).catch(() => []);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    setPreviewTradeValue(
      altTrades.trade.map((amount) => ethers.formatUnits(amount, 18))
    );
    setPreviewTradeValues(altTrades);
    setPreviewIsLoading(false);
  }, [initialValues1, initialValues3]);

  React.useEffect(() => {
    setInitialValues2({
      network: simple ? initialValues1.network : '',
      token: '',
    });
  }, [initialValues1.network, simple]);

  React.useEffect(() => {
    if (!isLoading && data) {
      setTokens(
        data.data
          .filter((token) => token.chainId === Number(initialValues1.network))
          .map((token) => ({
            label: (
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Avatar src={token.icon} sx={{ width: 20, height: 20 }} />
                {token.name} ({token.symbol})
              </Box>
            ),
            icon: <Avatar src={token.icon} sx={{ width: 20, height: 20 }} />,
            name: token.name,
            symbol: token.symbol,
            value: token.address,
          }))
      );
      // console.log(initialValues1.token);
    }
  }, [isLoading, data, initialValues1.network, initialValues2.network]);

  React.useEffect(() => {
    if (!isLoading && data) {
      setTokens2(
        data.data
          .filter(
            (token) =>
              token.chainId === Number(initialValues2.network) &&
              token.address !== initialValues1.token
          )
          .map((token) => ({
            label: (
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Avatar src={token.icon} sx={{ width: 20, height: 20 }} />
                {token.name} ({token.symbol})
              </Box>
            ),
            icon: <Avatar src={token.icon} sx={{ width: 20, height: 20 }} />,
            name: token.name,
            symbol: token.symbol,
            value: token.address,
          }))
      );
    }
  }, [isLoading, data, initialValues1.token]);

  return (
    <>
      <Formik
        initialValues={{
          network0: '',
          network1: '',
          token0: '',
          token1: '',
          amountOut: '',
        }}
        validationSchema={Yup.object().shape({
          network0: Yup.string().required('Network is required'),
          network1: Yup.string().required('Network is required'),
          token0: Yup.string().required('Token is required'),
          token1: Yup.string().required('Token is required'),
        })}
        onSubmit={(values) => {
          console.log(values);
          setInitialValues1({
            network: values.network0,
            token: values.token0,
            amount: values.amountOut,
          });
          setInitialValues2({
            network: values.network1,
            token: values.token1,
          });
          setInitialValues3({
            router: values.router,
            path: [values.token0, values.token1],
          });
          console.log(initialValues1, initialValues2, initialValues3);
          previewTrade();
          // TODO: Implement the swap
        }}
      >
        {({ setFieldValue }) => (
          <FormikForm>
            <Container>
              <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12}>
                  <Toolbar>
                    <Typography variant="h3" gutterBottom={false}>
                      Swap
                    </Typography>
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                    <Button variant="contained" color="primary" size="small">
                      Connect Wallet
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                      Liquidity
                    </Button>
                    <Button variant="contained" color="primary" size="small">
                      Trade Bot's
                    </Button>
                  </Toolbar>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item sm={12} md={2} p={0}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Toolbar
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                          alignItems: 'flex-start',
                        }}
                      >
                        {networkOptions.map((network) => (
                          <Tooltip
                            title={network.label}
                            placement="right"
                            arrow
                            key={network.value}
                          >
                            <Button
                              variant="contained"
                              color={
                                initialValues1.network === network.value
                                  ? 'secondary'
                                  : 'primary'
                              }
                              size="small"
                              fullWidth
                              sx={{ justifyContent: 'flex-start' }}
                              onClick={() => {
                                setInitialValues1({
                                  ...initialValues1,
                                  network: network.value,
                                });

                                if (simple) {
                                  setInitialValues2({
                                    ...initialValues2,
                                    network: network.value,
                                  });
                                }

                                setRouting(
                                  dex[network.value].routers.map((router) => ({
                                    label: (
                                      <Box
                                        sx={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          gap: 1,
                                        }}
                                      >
                                        <Avatar
                                          src={router.logo}
                                          sx={{ width: 20, height: 20 }}
                                        />
                                        {router.name} {router.version}
                                      </Box>
                                    ),
                                    value: router.router,
                                  }))
                                );

                                setFieldValue('network0', network.value);
                                setFieldValue('token0', '');
                                setFieldValue('amountOut', '');
                                setFieldValue('network1', network.value);
                                setFieldValue('token1', '');
                              }}
                            >
                              {network.label}
                            </Button>
                          </Tooltip>
                        ))}
                      </Toolbar>
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={10} p={0}>
                    <Grid container spacing={2}>
                      <Grid item sm={12} md={5} p={0}>
                        <Card sx={{ p: 1, minHeight: '241.51px' }}>
                          {!initialValues1.network && (
                            <Grid container spacing={1}>
                              <Grid item>
                                <Typography variant="h5">
                                  {' '}
                                  <ArrowLeft />
                                  Select A Network
                                </Typography>
                              </Grid>
                            </Grid>
                          )}
                          {initialValues1.network && (
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <Typography variant="h5">
                                  <strong>Network :</strong>{' '}
                                  {chainId2NetworkName(
                                    Number(initialValues1.network)
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Toolbar>
                                  {tokens.slice(0, 8).map((token) => (
                                    <Tooltip
                                      title={token.label}
                                      placement="top"
                                      arrow
                                      key={token.value}
                                    >
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => {
                                          setInitialValues1({
                                            ...initialValues1,
                                            token: token.value,
                                          });
                                          setFieldValue('token0', token.value);
                                        }}
                                        sx={{
                                          backgroundColor:
                                            initialValues1.token === token.value
                                              ? 'secondary'
                                              : 'primary',
                                        }}
                                      >
                                        {token.icon}
                                      </Button>
                                    </Tooltip>
                                  ))}
                                </Toolbar>
                                <DropDown
                                  label="Token"
                                  name="token0"
                                  options={tokens}
                                  value={initialValues1.token}
                                  placeholder="Select Token"
                                  helperText="Token is required"
                                  onChange={(value) => {
                                    setInitialValues1({
                                      ...initialValues1,
                                      token: value,
                                    });
                                    setFieldValue('token0', value);
                                  }}
                                />
                                <sup>{initialValues1.token}</sup>
                              </Grid>
                            </Grid>
                          )}
                        </Card>
                      </Grid>
                      {initialValues1.token && (
                        <Grid item sm={12} md={5} p={0}>
                          <Card sx={{ p: 1 }}>
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <Typography variant="h5">
                                  Swap To
                                  <span style={{ float: 'right' }}>
                                    Simple{' '}
                                    <Switch
                                      checked={!simple}
                                      onChange={() => setSimple(!simple)}
                                    />{' '}
                                    Pro
                                  </span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} spacing={2}>
                                {!simple && (
                                  <Grid item xs={12} paddingBottom={2}>
                                    <DropDown
                                      label="Network"
                                      name="network1"
                                      options={networkOptions}
                                      value={initialValues2.network}
                                      placeholder="Select Network"
                                      onChange={(value) => {
                                        setInitialValues2({
                                          ...initialValues2,
                                          network: value,
                                        });
                                        setFieldValue('network1', value);
                                      }}
                                    />
                                  </Grid>
                                )}
                                <Grid item xs={12}>
                                  <DropDown
                                    label="Token"
                                    name="token1"
                                    options={tokens2}
                                    value={initialValues2.token}
                                    placeholder="Select Token"
                                    helperText="Token is required"
                                    onChange={(value) => {
                                      checkBalance();
                                      setInitialValues2({
                                        ...initialValues2,
                                        token: value,
                                      });
                                      setInitialValues3({
                                        ...initialValues3,
                                        path: [initialValues1.token, value],
                                      });
                                      setFieldValue('token1', value);
                                    }}
                                  />
                                  <sup>{initialValues2.token}</sup>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Card>
                          <Card sx={{ p: 2, mt: 2 }}>
                            <Grid container spacing={3}>
                              <Grid item sx={{ alignItems: 'center' }}>
                                <Typography variant="h5">
                                  Crosschain | v3 | <strong>v2</strong> |
                                  MasterChef
                                </Typography>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )}
                      {initialValues2.token && (
                        <Grid item sm={12} md={10} p={0}>
                          <Card sx={{ p: 2 }}>
                            <Grid container spacing={3}>
                              <Grid item xs={6}>
                                <FormTextField
                                  label="Amount"
                                  name="amountOut"
                                  fullWidth
                                  onChange={(value) => {
                                    setInitialValues1({
                                      ...initialValues1,
                                      amount: value,
                                    });
                                    setFieldValue('amountOut', value);
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sx={{ mt: { xs: 2, sm: 1.5, md: 0 } }}
                              >
                                <DropDown
                                  label="Router"
                                  name="router"
                                  options={routing}
                                  value={initialValues3.router}
                                  placeholder="Select Router"
                                  onChange={(value) => {
                                    setInitialValues3({
                                      ...initialValues3,
                                      router: value,
                                    });
                                    setFieldValue('router', value);
                                    checkAllowance();
                                  }}
                                />
                              </Grid>
                              {initialValues3.router && (
                                <Grid item xs={12}>
                                  Balance : {balance}
                                  <span style={{ float: 'right' }}>
                                    Allowance: {allowance}
                                  </span>
                                  <br />
                                  {allowance < initialValues1.amount && (
                                    <span style={{ color: 'red' }}>
                                      (You need to approve the token first)
                                    </span>
                                  )}
                                </Grid>
                              )}
                              {initialValues3.router &&
                                allowance < initialValues1.amount && (
                                  <Grid item xs={12}>
                                    <Button
                                      variant="contained"
                                      fullWidth
                                      size="small"
                                      onClick={() => {
                                        setAllowance(
                                          initialValues1.amount || 0
                                        );
                                      }}
                                    >
                                      Approve
                                    </Button>
                                  </Grid>
                                )}
                              <Grid item xs={12}>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  size="small"
                                  onClick={() => {
                                    previewTrade();
                                  }}
                                  disabled={
                                    !initialValues3.router ||
                                    initialValues1.amount === '' ||
                                    previewIsLoading
                                  }
                                >
                                  Preview
                                </Button>
                              </Grid>
                              <Grid item xs={12}>
                                <Box>
                                  <Typography variant="h6">Routes</Typography>
                                  {previewTradeValue &&
                                    initialValues3.path.length > 0 && (
                                      <Table>
                                        <TableHead>
                                          <TableRow>
                                            <TableCell>IN</TableCell>
                                            <TableCell sx={{ width: '80%' }}>
                                              Path
                                            </TableCell>
                                            <TableCell>OUT</TableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          <TableRow>
                                            <TableCell>
                                              {initialValues1.amount}
                                            </TableCell>
                                            <TableCell sx={{ width: '80%' }}>
                                              {initialValues3.path
                                                .map(
                                                  (token) =>
                                                    data.data.find(
                                                      (_token) =>
                                                        _token.chainId ===
                                                          Number(
                                                            initialValues1.network
                                                          ) &&
                                                        _token.address === token
                                                    )?.symbol
                                                )
                                                .join(' -> ')}
                                            </TableCell>
                                            <TableCell>
                                              {
                                                previewTradeValue[
                                                  previewTradeValue.length - 1
                                                ]
                                              }
                                            </TableCell>
                                          </TableRow>
                                        </TableBody>
                                      </Table>
                                    )}

                                  {previewTradeValues && (
                                    <Table>
                                      <TableBody>
                                        {previewTradeValues.trades
                                          .map((trade, index) => ({
                                            trade,
                                            route:
                                              previewTradeValues.routes[index],
                                          }))
                                          .filter(
                                            (trade) => trade.trade.length > 0
                                          )
                                          .sort(
                                            (a, b) =>
                                              ethers.formatUnits(
                                                b.trade[b.trade.length - 1],
                                                18
                                              ) -
                                              ethers.formatUnits(
                                                a.trade[a.trade.length - 1],
                                                18
                                              )
                                          )
                                          .map(({ trade, route }, index) => (
                                            <React.Fragment key={index}>
                                              <TableRow>
                                                <TableCell>
                                                  {trade
                                                    .map((amount) =>
                                                      ethers.formatUnits(
                                                        amount,
                                                        18
                                                      )
                                                    )
                                                    .join(' -> ')}
                                                </TableCell>
                                              </TableRow>
                                              <TableRow>
                                                <TableCell>
                                                  {route
                                                    .map(
                                                      (token) =>
                                                        listed[
                                                          initialValues1.network
                                                        ][token]
                                                    )
                                                    .join(' -> ')}
                                                </TableCell>
                                              </TableRow>
                                            </React.Fragment>
                                          ))}
                                      </TableBody>
                                    </Table>
                                  )}
                                </Box>

                                {initialValues3.router && (
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      gap: 1,
                                    }}
                                  >
                                    <Button variant="contained" fullWidth>
                                      Approve
                                    </Button>
                                    <Button
                                      variant="contained"
                                      fullWidth
                                      type="submit"
                                    >
                                      Trade
                                    </Button>
                                  </Box>
                                )}
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item spacing={2}>
                  <Grid item xs={12}>
                    <Card elevation={0}>
                      <Grid
                        item
                        display={'flex'}
                        alignItems="center"
                        sx={{
                          flexDirection: { sm: 'row', xs: 'column' },
                          alignItems: { xs: 'start' },
                        }}
                        px={2}
                        py={3}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ px: { xs: 1.5, sm: 1.2 } }}
                        >
                          <Typography variant="h5">Swap</Typography>
                        </Grid>
                        <Grid
                          item
                          sm={6}
                          display="flex"
                          justifyContent={'end'}
                          alignItems="center"
                          gap={1}
                          sx={{
                            px: { xs: 1.5, sm: 0 },
                            mt: { xs: 1.7, sm: 0 },
                          }}
                        >
                          <Typography>Filter:</Typography>
                          <TextField
                            sx={{
                              backgroundColor: '#271D5A',
                              borderRadius: '5px',
                            }}
                            variant="standard"
                            hiddenLabel
                            fullWidth
                            color="filled"
                            placeholder="From"
                            InputProps={{
                              disableUnderline: true,
                            }}
                          />
                          <TextField
                            sx={{
                              backgroundColor: '#271D5A',
                              borderRadius: '5px',
                            }}
                            variant="standard"
                            hiddenLabel
                            fullWidth
                            color="filled"
                            placeholder="To"
                            InputProps={{
                              disableUnderline: true,
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12} pb={2}>
                        <SwapTable />
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </FormikForm>
        )}
      </Formik>
      <BotTrading />
    </>
  );
}
