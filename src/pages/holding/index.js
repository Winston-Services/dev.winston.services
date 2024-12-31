import React from 'react';

import {
  Container,
  Typography,
  Grid,
  Card,
  Divider,
} from '@mui/material';
import { JsonRpcProvider, Contract, formatUnits } from 'ethers';

import Table from '../../components/common/Table';

const columns = [
  {
    id: 'coinName',
    headerName: 'Coin/Token name',
  },
  {
    id: 'TokenBalance',
    headerName: 'Token balance',
  },
  {
    id: 'price',
    headerName: 'Price',
  },
  {
    id: 'holdingValue',
    headerName: 'Holding value USD',
  },
  {
    id: 'decimals',
    headerName: 'Decimals',
  },
  {
    id: 'more',
    headerName: 'More',
  },
];

const useBalance = () => {
  const [address, setAddress] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [balances, setBalances] = React.useState([]);
  const [error, setError] = React.useState(null);

  const tokens = React.useMemo(
    () => [
      '0x55d398326f99059fF775485246999027B3197955', // USDT
      '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // WBNB
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
      '0x75578ebbefe274f240b8e1b5859ca34f342157d9', // WIN
      '0xeca15e1bbff172d545dd6325f3bae7b737906737', // RKL
      '0x181d5cec845973e64bccf9848412948be8a3883e', // WAC
      '0x3A81caafeeDCF2D743Be893858cDa5AcDBF88c11', // AHWA
    ],
    []
  );

  const fetchTokens = React.useCallback(
    async (network = 'https://bsc-dataseed.binance.org/') => {
      if (!address) return;
      setIsLoading(true);

      let provider;
      try {
        provider = new JsonRpcProvider(network, {
          name: 'binance',
          chainId: 56,
        });
      } catch (error) {
        console.error('Error creating provider:', error);
        setError(error);
        setIsLoading(false);
        return;
      }

      const abi = [
        'function name() view returns (string)',
        'function balanceOf(address owner) view returns (uint256)',
        'function decimals() view returns (uint8)',
        'function symbol() view returns (string)',
      ];

      const tokenData = await Promise.all(
        tokens.map(async (tokenAddress) => {
          const tokenContract = new Contract(tokenAddress, abi, provider);
          const balance = await tokenContract.balanceOf(address);
          const decimals = await tokenContract.decimals();
          const name = await tokenContract.name();
          const symbol = await tokenContract.symbol();
          return {
            contractAddress: tokenAddress,
            tokenAddress,
            balance: balance.toString(),
            decimals: decimals,
            symbol,
            name,
          };
        })
      );
      // console.log(tokenData);

      setBalances(tokenData);
      setIsLoading(false);
    },
    [address, tokens]
  );

  return {
    balances,
    fetchTokens,
    address,
    setAddress,
    isLoading,
    error,
  };
};

function TrustMultisig() {
  const trustMultisigAddress = '0x40e4Da770530E960AE671634d14625F29e3dDb12';

  const { balances, fetchTokens, setAddress, isLoading, error } = useBalance();

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setAddress(trustMultisigAddress);
  }, [setAddress, trustMultisigAddress]);

  React.useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  React.useEffect(() => {
    setRows(
      balances.map((balance, index) => ({
        id: index,
        coinName: balance.name,
        TokenBalance: formatUnits(balance.balance, balance.decimals),
        price: '--',
        holdingValue: 0,
        decimals: balance.decimals.toString(),
        contractAddress: balance.contractAddress,
        more: <Typography>More</Typography>,
      }))
    );
  }, [balances]);

  return (
    <>
      <Typography textAlign={'center'} variant="h3">
        Multisig Trust Holdings
      </Typography>
      <Grid mt={5}>
        <Card elevation={0} sx={{ pb: 7 }}>
          {error ? (
            <p>Error: {error.message}</p>
          ) : isLoading ? (
            <p>Loading...</p>
          ) : (
            <Table columns={columns} rows={rows}></Table>
          )}
        </Card>
      </Grid>
    </>
  );
}

function TrustHotWalletHoldings() {
  const trustMultisigAddress = '0xf9b9ee3b0301b511cd5aa4b8d039f63df19c615a';

  const { balances, fetchTokens, setAddress, isLoading, error } = useBalance();

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setAddress(trustMultisigAddress);
  }, [setAddress, trustMultisigAddress]);

  React.useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  React.useEffect(() => {
    setRows(
      balances.map((balance, index) => ({
        id: index,
        coinName: balance.name,
        TokenBalance: formatUnits(balance.balance, balance.decimals),
        price: '--',
        holdingValue: 0,
        decimals: balance.decimals.toString(),
        contractAddress: balance.contractAddress,
        more: <Typography>More</Typography>,
      }))
    );
  }, [balances]);

  return (
    <>
      <Typography textAlign={'center'} variant="h3">
        Trust Hot Wallet Holdings
      </Typography>
      <Grid mt={5}>
        <Card elevation={0} sx={{ pb: 7 }}>
          {error ? (
            <p>Error: {error.message}</p>
          ) : isLoading ? (
            <p>Loading...</p>
          ) : (
            <Table columns={columns} rows={rows}></Table>
          )}
        </Card>
      </Grid>
    </>
  );
}

function Holding() {
  return (
    <Container>
      <TrustMultisig />
      <Divider sx={{ mt: 5, mb: 5 }} />
      <TrustHotWalletHoldings />
    </Container>
  );
}

export default Holding;
