import React from 'react';

import {
  Typography,
  Grid,
  Card,
  Box,
  TextField,
  Button,
  Container,
  Avatar,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useNetworks } from '../../hooks/useNetworks';
import DropDown from './../../components/common/DropDown';
import FormTextField from './../../components/common/TextField';
import SwapTable from './SwapTable';
import useApi from '../../hooks/useApi';
import { useDex } from '../../hooks/useDex';
import { WinSwap } from '../../utils/WinSwap';
import { ethers } from 'ethers';
const digitsOnly = (value) => /^\d+$/.test(value);

const FORM_VALIDATION = Yup.object().shape({
  token: Yup.string().required('Token is required'),
  address: Yup.string().required('Address is required'),
  amount: Yup.string().test(
    'Digits only',
    'The field should have digits only',
    digitsOnly
  ),
});

const FORM_VALIDATION_ROUTER = Yup.object().shape({
  router: Yup.string().required('Router is required'),
});

const swapSteps = {
  1: 'Network',
  2: 'Wallet',
  3: 'Asset',
  4: 'Amount',
  5: 'Router',
  6: 'Route',
  7: 'Crosschain',
  8: 'To Network',
  9: 'To Wallet',
  10: 'To Asset',
  11: 'To Amount',
  8: 'Confirm',
};

export default function Swapping() {
  const { networks, chainId2NetworkName } = useNetworks();

  const [initialValues1, setInitialValues1] = React.useState({
    network: '',
    token: '',
    address: '',
    amount: '',
  });
  const [initialValues2, setInitialValues2] = React.useState({
    network: '',
    token: '',
    address: '',
    amount: '',
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

  const previewTrade = React.useCallback(async () => {
    const {
      PreviewTrade,
      init,
    } = WinSwap();
    const provider = new ethers.JsonRpcProvider(
      networks[initialValues1.network][0].rpc
    );
    init(initialValues3.router, provider, initialValues3.path);
    const trade = await PreviewTrade(
      ethers.parseUnits(initialValues1.amount, 18),
      initialValues3.path
    );
    setPreviewTradeValue(trade.map((amount) => ethers.formatUnits(amount, 18)));
  }, [initialValues3]);

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
            value: token.address,
          }))
      );
      console.log(initialValues1.token);
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
            value: token.address,
          }))
      );
    }
  }, [isLoading, data, initialValues1.network, initialValues2.network]);

  return (
    <Container>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item>
          <Typography variant="h3" gutterBottom={false}>
            Swapping
          </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item sm={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Formik
                initialValues={initialValues1}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Swap From</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 2, sm: 1.5, md: 0 } }}>
                      <DropDown
                        label="Network"
                        name="network"
                        options={networkOptions}
                        placeholder="Select Network"
                        onChange={(value) => {
                          setInitialValues1({
                            ...initialValues1,
                            network: value,
                          });
                          setRouting(
                            dex[value].routers.map((router) => ({
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
                        }}
                      />
                    </Grid>
                    <Grid item xs={6.5}>
                      <DropDown
                        label="Token"
                        name="token"
                        options={tokens}
                        value={initialValues1.token}
                        placeholder="Select Token"
                        helperText="Token is required"
                        onChange={(value) => {
                          setInitialValues1({
                            ...initialValues1,
                            token: value,
                          });
                          checkBalance();
                        }}
                      />
                    </Grid>
                    <Grid item xs={5.5}>
                      <FormTextField
                        name="amount"
                        fullWidth
                        label="Amount"
                        helperText="Amount is required"
                        placeholder="Enter Amount"
                        onChange={(value) => {
                          setInitialValues1({
                            ...initialValues1,
                            amount: value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <span style={{ float: 'right' }}>
                          Balance :{' '}
                          <span
                            style={{
                              color:
                                balance >= initialValues1.amount
                                  ? 'green'
                                  : 'red',
                            }}
                          >
                            {balance}
                          </span>
                        </span>
                        <br />
                        {balance < initialValues1.amount && (
                          <span style={{ color: 'red' }}>
                            (You need to add more funds to your wallet)
                          </span>
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Card>
          </Grid>
          <Grid item sm={12} md={3}>
            <Card sx={{ p: 2 }}>
              <Formik
                initialValues={initialValues2}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Swap To</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 2, sm: 1.5, md: 0 } }}>
                      <DropDown
                        label="Network"
                        name="network"
                        options={networkOptions}
                        placeholder="Select Network"
                        onChange={(value) => {
                          setInitialValues2({
                            ...initialValues2,
                            network: value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DropDown
                        label="Token"
                        name="token"
                        options={tokens2}
                        value={initialValues2.token}
                        placeholder="Select Token"
                        helperText="Token is required"
                        onChange={(value) => {
                          setInitialValues2({
                            ...initialValues2,
                            token: value,
                          });
                          setInitialValues3({
                            ...initialValues3,
                            path: [initialValues1.token, value],
                          });
                        }}
                      />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Card>
          </Grid>
          <Grid item sm={12} md={5}>
            <Card sx={{ p: 2 }}>
              <Formik
                initialValues={initialValues3}
                validationSchema={FORM_VALIDATION_ROUTER}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h5">
                        Crosschain | v3 | v2 | MasterCheif
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 2, sm: 1.5, md: 0 } }}>
                      <DropDown
                        label="Router"
                        name="router"
                        options={routing}
                        placeholder="Select Router"
                        onChange={(value) => {
                          setInitialValues3({
                            ...initialValues3,
                            router: value,
                          });
                          checkAllowance();
                        }}
                      />
                    </Grid>
                    {initialValues3.router && (
                      <Grid item xs={12}>
                        Allowance: {allowance}
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
                              setAllowance(initialValues1.amount || 0);
                            }}
                          >
                            Approve
                          </Button>
                        </Grid>
                      )}
                    <Grid item xs={12}>
                      <Box>
                        <Typography variant="h6">
                          Path
                          <Button size="small">Add Path</Button>
                        </Typography>
                        <Typography variant="body1">
                          {initialValues3.path
                            .map(
                              (token) =>
                                data.data.find(
                                  (_token) =>
                                    _token.chainId ===
                                      Number(initialValues1.network) &&
                                    _token.address === token
                                )?.symbol
                            )
                            .join(' -> ')}
                        </Typography>
                      </Box>
                      {previewTradeValue && (
                        <Typography variant="body1">
                          Preview Trade: {previewTradeValue[1]}
                        </Typography>
                      )}
                      {initialValues3.router &&
                        allowance >= initialValues1.amount &&
                        initialValues1.amount > 0 &&
                        balance >= initialValues1.amount && (
                          <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                              previewTrade();
                            }}
                          >
                            Preview Trade
                          </Button>
                        )}
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </Card>
          </Grid>
        </Grid>
        <Grid container item>
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
                <Grid item xs={12} sm={6} sx={{ px: { xs: 1.5, sm: 1.2 } }}>
                  <Typography variant="h5">Swap</Typography>
                </Grid>
                <Grid
                  item
                  sm={6}
                  display="flex"
                  justifyContent={'end'}
                  alignItems="center"
                  gap={1}
                  sx={{ px: { xs: 1.5, sm: 0 }, mt: { xs: 1.7, sm: 0 } }}
                >
                  <Typography>Filter:</Typography>
                  <TextField
                    sx={{ backgroundColor: '#271D5A', borderRadius: '5px' }}
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
                    sx={{ backgroundColor: '#271D5A', borderRadius: '5px' }}
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
  );
}
