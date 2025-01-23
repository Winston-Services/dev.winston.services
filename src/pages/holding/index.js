import React from 'react';

import {
  Container,
  Typography,
  Grid,
  Card,
  Divider,
} from '@mui/material';
import { JsonRpcProvider, Contract, formatUnits } from 'ethers';
import PropTypes from 'prop-types';

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
    id: 'decimals',
    headerName: 'Decimals',
  },
  {
    id: 'more',
    headerName: 'More',
  },
];

const useBalance = (initialTokens) => {
  const [address, setAddress] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [balances, setBalances] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [tokens, setTokens] = React.useState(initialTokens);

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
      
      const tokenData = [];
      for (const tokenAddress of tokens) {
        await new Promise(resolve => setTimeout(resolve, 200));
        const tokenContract = new Contract(tokenAddress, abi, provider);
        const balance = await tokenContract.balanceOf(address);
        const decimals = await tokenContract.decimals();
        const name = await tokenContract.name();
        const symbol = await tokenContract.symbol();
        tokenData.push({
          contractAddress: tokenAddress,
          tokenAddress,
          balance: balance.toString(),
          decimals: decimals,
          symbol,
          name,
        });
      }
      
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
    setTokens,
  };
};

function WalletSection({ walletAddress, walletName, tokenList }) {
  const { balances, fetchTokens, setAddress, isLoading, error, setTokens } = useBalance();

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setTokens(tokenList);
  }, [setTokens, tokenList]);

  React.useEffect(() => {
    setAddress(walletAddress);
  }, [setAddress, walletAddress]);

  React.useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  React.useEffect(() => {
    setRows(
      balances.map((balance, index) => ({
        id: index,
        coinName: balance.name,
        TokenBalance: formatUnits(balance.balance, balance.decimals),
        decimals: balance.decimals.toString(),
        contractAddress: balance.contractAddress,
        more: <Typography onClick={() => {
          window.open(`https://debank.com/profile/${balance.tokenAddress}`, '_blank');
        }}>More</Typography>,
      }))
    );
  }, [balances]);

  return (
    <>
      <Typography textAlign={'center'} variant="h3">
        {walletName}
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

WalletSection.propTypes = {
  walletAddress: PropTypes.string.isRequired,
  walletName: PropTypes.string.isRequired,
  tokenList: PropTypes.array.isRequired,
};


function Holding() {
  const trustMultisigAddress = '0x40e4Da770530E960AE671634d14625F29e3dDb12';
  const trustHotWalletAddress = '0xf9b9ee3b0301b511cd5aa4b8d039f63df19c615a';
  const winstonContractAddress = '0x75578ebbefe274f240b8e1b5859ca34f342157d9';

  // Multisig Trust Holdings
  const tokenList1 = [
    '0x55d398326f99059fF775485246999027B3197955', // USDT
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
    '0x181d5cec845973e64bccf9848412948be8a3883e', // WAC
    '0x3A81caafeeDCF2D743Be893858cDa5AcDBF88c11', // AHWA
    '0xB2a13cE9f3dFEb5F38F2211FbF3dE91D72CdABDD', // Cake/RKL LP
    '0x157197baf3E455548987dF50f87846EA17F7B7Ab', // WBNB/WIN LP
    '0xD8cB5C5baAc62c1e0E79246AeC4DCD52136B599C', // USDC/WAC LP
    '0xBb22D416AC55E8D07d9fE78dA3cC9919A1c357ce', // RKL/WIN LP
  ];

  // Caretaker Hot Wallet
  const tokenList2 = [
    '0x75578ebbefe274f240b8e1b5859ca34f342157d9', // WIN
    '0x55d398326f99059fF775485246999027B3197955', // USDT
    '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
    '0xeca15e1bbff172d545dd6325f3bae7b737906737', // RKL
    '0x181d5cec845973e64bccf9848412948be8a3883e', // WAC
    '0x3A81caafeeDCF2D743Be893858cDa5AcDBF88c11', // AHWA
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // USDC
    '0xCC42724C6683B7E57334c4E856f4c9965ED682bD', // WMATIC
    '0xB2a13cE9f3dFEb5F38F2211FbF3dE91D72CdABDD', // Cake/RKL LP
    '0x4C24b7a71E7576d6623F62bb83AF63F31230dDFc', // Useless/Rkl LP
    '0x50fB90305D77AdFB3d7473C1661Fb157C6a4eeD4', // USD/WIN LP
    '0x656Fb87cda1F25e8181b0415ef65dd6D439165e4', // BTCB/RKL LP
    '0xe01d99478B8a159b957d75455C01104734E05eE1', // USD/RKL LP
    '0x252853aa8a9509a1c0ad5170B67d25328e3Ef648', // USDC/WIN LP
    '0x9E49C98Bd667A8b06Fff26ddFCbB9e5DBc0eCD60', // WBNB/WIN LP
    '0xC087C78AbaC4A0E900a327444193dBF9BA69058E', // USDC/BUSD LP
    '0x157197baf3E455548987dF50f87846EA17F7B7Ab', // WBNB/WIN LP
    '0xD8cB5C5baAc62c1e0E79246AeC4DCD52136B599C', // USDC/WAC LP
    '0x8820dF1B7f854773a694daB3D30247f6814c64aA', // BTCB/WIN LP
    '0xBb22D416AC55E8D07d9fE78dA3cC9919A1c357ce', // RKL/WIN LP
  ];

  // Winston Contract
  const tokenList3 = [
    '0x75578ebbefe274f240b8e1b5859ca34f342157d9', // WIN
    '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', // BTCB
    '0xeca15e1bbff172d545dd6325f3bae7b737906737', // RKL
    '0x181d5cec845973e64bccf9848412948be8a3883e', // WAC
    '0xB2a13cE9f3dFEb5F38F2211FbF3dE91D72CdABDD', // Cake/RKL LP
    '0x4C24b7a71E7576d6623F62bb83AF63F31230dDFc', // Useless/Rkl LP
    '0xe01d99478B8a159b957d75455C01104734E05eE1', // USD/RKL LP
    '0x9E49C98Bd667A8b06Fff26ddFCbB9e5DBc0eCD60', // WBNB/WIN LP
    '0x157197baf3E455548987dF50f87846EA17F7B7Ab', // WBNB/WIN LP
    '0xBb22D416AC55E8D07d9fE78dA3cC9919A1c357ce', // RKL/WIN LP
  ];

  return (
    <Container>
      <WalletSection
        walletAddress={trustMultisigAddress}
        walletName="Multisig Trust Holdings"
        tokenList={tokenList1}
      />
      <Divider sx={{ mt: 5, mb: 5 }} />
      <WalletSection
        walletAddress={trustHotWalletAddress}
        walletName="Caretaker Hot Wallet"
        tokenList={tokenList2}
      />
      <Divider sx={{ mt: 5, mb: 5 }} />
      <WalletSection
        walletAddress={winstonContractAddress}
        walletName="Winston Contract"
        tokenList={tokenList3}
      />
    </Container>
  );
}

export default Holding;
