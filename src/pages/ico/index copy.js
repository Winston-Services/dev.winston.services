import React from "react";

import {
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  Avatar,
  CardHeader,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableHead,
  List,
  ListItem,
} from "@mui/material";
import { ethers } from "ethers";
import "./index.css";

import winstonRKLYFABI from "./WinstonRKLYF.abi.json";
import winstonRKLPSABI from "./WinstonRKLPS.abi.json";
import pancakeSwapRouterABI from './PancakeSwapRouter.abi.json';
import axios from 'axios';
const GasStationWallet = "0x8943F0eb2B1Fd12097a3C3520B4DF98982203C0E";
const FundraiserWallet = "0x42A84079Ec9eFEaa636035B81a2537689cfC168B";
const TrustWallet = "0xF9B9eE3B0301B511cd5AA4b8D039F63df19C615a";
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

const pancakeSwapContract = {
  factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73", // PancakeSwap V2 factory
  router: "0x10ED43C718714eb63d5aA57B78B54704E256024E", // PancakeSwap V2 router
};

const paymentTypes = [
  {
    image: "./assets/icons/wbnb.svg",
    name: "BNB",
  },
  {
    image: "./assets/icons/wbnb.svg",
    name: "WBNB",
  },
  {
    image: "./assets/icons/busd.svg",
    name: "BUSD",
  },
  {
    image: "./assets/icons/rickel.svg",
    name: "RKL",
  },
  {
    image: "./assets/icons/field.svg",
    name: "FIELD",
  },
  {
    image: "./assets/icons/wmue.svg",
    name: "WMUE",
  },
];

const tokens = {
  AHWA: "0x3A81caafeeDCF2D743Be893858cDa5AcDBF88c11",
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  RKL: "0xeca15e1bbff172d545dd6325f3bae7b737906737",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  WIN: "0x75578ebBefe274F240B8E1b5859cA34f342157D9",
  FIELD: "0x04D50c032F16a25d1449Ef04D893e95Bcc54d747",
  WMUE: "0x00abaA93fAF8fDc4f382135a7A56F9Cf7C3EdD21",
  USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
  USDT: "0x55d398326f99059fF775485246999027B3197955",
  BTCB: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
  UST: "",
  '1USE': "",
  '#HC': '',
  'BHT': '',

};

const tokenABI = {
  STANDARDERC20: require("./Wbnb.abi.json"),
  STANDARDBEP20: require("./Wbnb.abi.json"),
  AHWA: require("./Ahwa.abi.json"),
  BUSD: require("./Busd.abi.json"),
  RKL: require("./Rickle.abi.json"),
  WBNB: require("./Wbnb.abi.json"),
  WIN: require("./Winston.abi.json"),
  FIELD: require("./Field.abi.json"),
  WMUE: require("./Wmue.abi.json"),
}

const router = new ethers.Contract(
  pancakeSwapContract.router,
  pancakeSwapRouterABI,
  provider
);

async function getPrice(inputCurrency, outputCurrency) {
  const amounts = await router.getAmountsOut(ethers.utils.parseUnits("1", 18), [
    inputCurrency,
    outputCurrency,
  ]);
  return amounts[1].toString() / 1e18;
}

function ICO() {
  const [selectedPayment, SetSelectedPayment] = React.useState();
  const [errorMessage, setError] = React.useState(false);
  const [metamaskDownloadEnabled, enableDownloadMetamask] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [isPriceImpactToHigh, setPriceImpactToHigh] = React.useState(false);
  const [amount, setAmount] = React.useState(1);
  const [fundingBalance, setFundingBalance] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [winstonCoin, setWinstonCoin] = React.useState(0);
  const [supplyLocker, setSupplyLocker] = React.useState({
    lockedSupply: 0,
    trustWallet: 0,
    teamWallet: 0,
    burnedSupply: 0,
    heldInTrust: 0,
    totalSupply: 0,
    rickleTotalSupply: 0,
    ahwaTotalSupply: 0,
    heldInYFLiquidity: 0,
    heldInPSLiquidity: 0,
    heldInVoterPSLiquidity: 0,
    psWINLp: { reserve0: 0, reserve1: 0, value: 0 },
    psRKLLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfRKLLp: { reserve0: 0, reserve1: 0, value: 0 },
    psWBNBLp: { reserve0: 0, reserve1: 0, value: 0 },
    psBUSDLp: { reserve0: 0, reserve1: 0, value: 0 },
    psUSDCLp: { reserve0: 0, reserve1: 0, value: 0 },
    psUSDTLp: { reserve0: 0, reserve1: 0, value: 0 },
    psBTCBLp: { reserve0: 0, reserve1: 0, value: 0 },
    psCAKELp: { reserve0: 0, reserve1: 0, value: 0 },
    yf1USELp: { reserve0: 0, reserve1: 0, value: 0 },
    psBHTLp: { reserve0: 0, reserve1: 0, value: 0 },
    psHCLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfWBNBLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfBUSDLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfUSDCLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfUSDTLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfBTCBLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfFIELDLp: { reserve0: 0, reserve1: 0, value: 0 },
    yfWMUELp: { reserve0: 0, reserve1: 0, value: 0 },
    ssWBNBLp: { reserve0: 0, reserve1: 0, value: 0 },
    ssUSDTLp: { reserve0: 0, reserve1: 0, value: 0 },
    wbnbHeldInTrust: 0,
    rickleHeldInTrust: 0,
    fieldHeldInTrust: 0,
    wmueHeldInTrust: 0,
    usdcHeldInTrust: 0,
    usdtHeldInTrust: 0,
    winstonHeldInGasStation: 0,
    bnbHeldInGasStation: 0,
    wbnbHeldInFundraiserWallet: 0,
    rickleHeldInFundraiserWallet: 0,
    fieldHeldInFundraiserWallet: 0,
    wmueHeldInFundraiserWallet: 0,
    usdcHeldInFundraiserWallet: 0,
    usdtHeldInFundraiserWallet: 0,
    bnbHeldInTrust: 0,
    bnbHeldInFundraiserWallet: 0,
    busdHeldInTrust: 0,
    busdHeldInFundraiserWallet: 0,
  });

  const [coinPrices, setCoinPrices] = React.useState({
    WIN: 0,
    BUSD: 0,
    WBNB: 0,
    BNB: 0,
    RKL: 0,
    FIELD: 0,
    WMUE: 0,
    AHWA: 0,
    USDC: 0,
    USDT: 0
  });

  const [isLoadingPurchase, setIsLoadingPurchase] = React.useState(false);

  const tokenTransactionExecuter = async (
    coin_name,
    send_token_amount,
    quote
  ) => {
    setIsLoadingPurchase(true);
    if (quote >= 6000) return handlePriceImpactToHigh(send_token_amount);
    if (coin_name === 'RKL') return handleDirectSwap(send_token_amount, quote);
    if (coin_name !== 'BNB') return handleTokenPayment(coin_name, send_token_amount, quote);
    return handleNativePayment(coin_name, send_token_amount, quote);
  };


  const handlePriceImpactToHigh = (amount) => {
    setError('Price Impact too high.');
    setAmount(amount);
    setPriceImpactToHigh(true);
    setIsLoadingPurchase(false);
  }

  const handleAmountChange = (e) => {
    if (e.target.value * ((coinPrices[selectedPayment?.name] / coinPrices.RKL) * coinPrices.WIN) > 6000) {
      console.log(amount * ((coinPrices[selectedPayment?.name] / coinPrices.RKL) * coinPrices.WIN));
      return handlePriceImpactToHigh(e.target.value);
    } else {
      setError(false);
      setPriceImpactToHigh(false);
      setAmount(e.target.value);
    }
  }

  const handleApproval = async (contract, to, amount) => {
    const userProvider = new ethers.providers.Web3Provider(
      window.ethereum
    );

    const walletSigner = userProvider.getSigner();
    contract.connect(walletSigner);
    try {
      const Approval = await contract.approve(to, amount, {
        gasPrice: userProvider.getGasPrice(),
        gasLimit: 100000
      });
      return Approval;
    } catch (e) {
      console.log(e)
      setError("Couldn't Get Approval to Swap.");
    }
  };

  const getUserProvider = async () => {
    if (!window.ethereum) {
      setError('Metamask or Web3 Wallet Required.');
      enableDownloadMetamask(true);
      return false;
    }
    const userProvider = new ethers.providers.Web3Provider(window.ethereum);
    return userProvider;
  }

  const getUserSigner = (userProvider) => {
    const walletSigner = userProvider.getSigner();
    return walletSigner;
  }

  const getUserAccounts = async (userProvider) => {
    return await userProvider.send("eth_requestAccounts", []);
  };

  const setInitialTransaction = ({
    to,
    send_token_amount
  }) => {
    const transaction = {
      to,
      value: ethers.utils.parseEther(`${send_token_amount}`)
    };
    return transaction;
  };

  const estimateTransactionGas = async (userProvider, transaction) => {
    const gasEstimate = await userProvider.estimateGas(transaction);
    return gasEstimate;
  };

  const processTransaction = async (
    token,
    recipient,
    quote,
    transaction
  ) => {
    // console.log(transaction);
    // transaction.wait().then(r => {console.log("Response", r)});
    console.log("Processesing");
    console.log(token,
      recipient,
      quote,
      transaction);
    try {
      provider.once(transaction.hash, (verifiedTransaction) => {
        console.log('Transaction Mind: ', transaction, verifiedTransaction);
        return handlePaymentReceipt(
          token,
          recipient,
          quote,
          transaction.hash,
          verifiedTransaction
        )
      })
    } catch (error) {
      console.log(error);
      setError("Unable to complete this transaction.");
      setIsLoadingPurchase(false);
    }
  };

  const handleNativePayment = async (
    token,
    send_token_amount,
    quote
  ) => {
    const userProvider = await getUserProvider();
    if (!userProvider) return false;
    const accounts = await getUserAccounts(userProvider);
    const walletSigner = getUserSigner(userProvider);
    const transaction = setInitialTransaction({
      to: FundraiserWallet,
      send_token_amount
    })
    const gasEstimate = await estimateTransactionGas(userProvider, transaction);
    const sendETHPayment = async (transaction) => {
      const recipient = await walletSigner.getAddress();
      //this is a transaction to send eth/bnb
      try {
        const transactionHash = await walletSigner.sendTransaction(transaction);
        return processTransaction(token, recipient, quote, transactionHash);
      } catch (e) {
        console.error(e);
        setError("Transaction Failed!");
        setIsLoadingPurchase(false);
      }
    };
    transaction.gasLimit = gasEstimate;
    const usersCurrentBalance = (await walletSigner.getBalance()).toString();
    console.log(usersCurrentBalance / 1e18, ethers.utils.parseEther(`${send_token_amount}`).add(gasEstimate) / 1e18)
    if (usersCurrentBalance <= ethers.utils.parseEther(`${send_token_amount}`).add(gasEstimate)) {
      console.log('sendPayment for %s bnb and receive %s', ethers.utils.parseEther(`${send_token_amount}`).add(gasEstimate).toString(), quote);
      await sendETHPayment(transaction);
    } else {
      setError(`Insufficient funds! Aquire ${((usersCurrentBalance - ethers.utils.parseEther(`${send_token_amount}`).add(gasEstimate))) / 1e18} more ${token} to cover gas for this transaction.`);
    }
    setIsLoadingPurchase(false);
  }

  const handleTokenPayment = async (token = 'RKL', amountIn, quote = 0) => {
    const userProvider = await getUserProvider();
    if (!userProvider) return false;
    const accounts = await getUserAccounts(userProvider);
    const walletSigner = getUserSigner(userProvider);
    const recipient = await walletSigner.getAddress();
    const tokenBSCContract = new ethers.Contract(tokens[token], tokenABI[token], provider);
    const tokenUnits = await tokenBSCContract.decimals();
    const tokenAmountIn = ethers.utils.parseUnits(amountIn, tokenUnits);
    const contractSigner = tokenBSCContract.connect(walletSigner);
    if (quote <= 6000) {
      try {
        const transactionHash = await contractSigner.transfer(FundraiserWallet, tokenAmountIn);
        return processTransaction(token, recipient, quote, transactionHash);
      } catch (e) {
        console.error(e);
        setError("Transaction Failed!");
        setIsLoadingPurchase(false);
      }
    } else {
      return handlePriceImpactToHigh(amountIn);
    }
  }

  const handleDirectSwap = async (amount, quote) => {
    const userProvider = await getUserProvider();
    if (!userProvider) return false;
    const accounts = await getUserAccounts(userProvider);
    const walletSigner = getUserSigner(userProvider);
    const swapRouter = new ethers.Contract(
      pancakeSwapContract.router,
      pancakeSwapRouterABI,
      walletSigner
    );
    const recipient = await walletSigner.getAddress();
    swapRouter.connect(walletSigner);
    const rickleBSCContract = new ethers.Contract('0xeca15e1bbff172d545dd6325f3bae7b737906737', tokenABI['RKL'], walletSigner);
    const allowance = await rickleBSCContract.allowance(recipient, pancakeSwapContract.router);
    console.log("User Allowance:", allowance.toString());
    const amountInEther = ethers.utils.parseUnits(amount.toString(), 'ether');
    const quoteInEther = ethers.utils.parseUnits(quote.toString(), 'ether');
    const amountsOut = await swapRouter.getAmountsOut(amountInEther, [tokens.RKL, tokens.WIN]);//usedBy swapExactTokensForTokens
    const amountsIn = await swapRouter.getAmountsIn(amountsOut[1].toString(), [tokens.RKL, tokens.WIN]);//usedBy swapTokensForExactTokens
    console.log(amountsOut);
    console.log(amountsIn);

    if (allowance < amountInEther) {
      const Approval = await handleApproval(rickleBSCContract, pancakeSwapContract.router, amountInEther);
      console.log(Approval);
    }
    /*
    // console.log(amounts[0].toString() / 1e18, amounts[1].toString() / 1e18);
    if (ethers.utils.parseUnits(amounts[1].toString(), 'ether') <= ethers.utils.parseUnits(quote.toString(), 'ether')) {
      setError('Excessive amount.');
      setIsLoadingPurchase(false);
      return;
    }
    */
    try {
      const transactionHash = await swapRouter.swapTokensForExactTokens(
        amountsOut[1].toString(),//amountOut
        amountInEther.toString(),//amountInMax
        [tokens.RKL, tokens.WIN],
        recipient,
        Date.now() + 1000 * 60 * 10,
        {
          gasPrice: userProvider.getGasPrice(),
          gasLimit: 150000,
        }
      );
      return processTransaction('RKL', recipient, quote, transactionHash);
    } catch (e) {
      console.error(e);
      setError("Transaction Failed!");
      setIsLoadingPurchase(false);
    }

  }

  const setSuccessResponse = async () => {
    setSuccess(true);
  }

  const handlePaymentReceipt = (
    token,
    recipient,
    quote,
    transactionHash,
    transaction
  ) => {
    axios.post('https://api.winston.services/ico/winston', {
      token,
      recipient,
      quote,
      transactionHash,
      transaction
    }).then(response => {
      setAmount('');
      setSuccessResponse('Purchase Successful!', response.data);
      setIsLoadingPurchase(false);
      setError(false);
    }).catch(error => {
      setError(`An Error has happened, please contact support with the following transaction id.\n${transactionHash}`);
      setIsLoadingPurchase(false);
    });
  }

  const checker = async (name) => {
    setIsLoading(true);
    let _amount = 0;
    const x = {
      BNB: () => {
        _amount = coinPrices.WBNB;
      },
      WBNB: () => {
        _amount = coinPrices.WBNB;
      },
      BUSD: () => {
        _amount = coinPrices.BUSD;
      },
      RKL: () => {
        _amount = coinPrices.WIN;
      },
      WMUE: () => {
        _amount = coinPrices.WMUE;
      },
      FIELD: () => {
        _amount = coinPrices.FIELD;
      },
    }
    x[name]();
    setWinstonCoin(_amount);
    setIsLoading(false);
  };

  const getWinPrice = async () => {
    const token0 = tokens['RKL'];
    const token1 = tokens['BUSD'];
    const token2 = tokens['WIN'];
    const token3 = tokens['FIELD'];
    const token4 = tokens['WMUE'];
    const token5 = tokens['WBNB'];
    const token6 = tokens['AHWA'];
    const price1 = await getPrice(token0, token1);//rkl
    const price2 = await getPrice(token0, token2);//rkl=>win
    const price3 = await getPrice(token3, token1);//field
    const price4 = await getPrice(token4, token1);//wmue
    const price5 = await getPrice(token5, token1);//wbnb
    const price6 = await getPrice(token6, token2);//ahwa
    const price7 = await getPrice(tokens['USDC'], token1);//USDC
    const price8 = await getPrice(tokens['USDT'], token1);//USDT
    const price9 = await getPrice(tokens['BUSD'], tokens['USDC']);//USDT

    const prices = coinPrices;
    prices.WIN = price2;
    prices.RKL = price1;
    prices.BUSD = price9;
    prices.BNB = price5;
    prices.WBNB = price5;
    prices.FIELD = price3;
    prices.WMUE = price4;
    prices.AHWA = price6;
    prices.USDC = price7;
    prices.USDT = price8;
    setCoinPrices({ ...prices });
  }

  const handleClick = () => {
    tokenTransactionExecuter(
      selectedPayment.name,
      amount,
      amount * ((coinPrices[selectedPayment?.name] / coinPrices.RKL) * coinPrices.WIN)
    );
  };

  const handleSelectedPayment = (item) => {
    SetSelectedPayment(item);
    if (amount < 0)
      handlePriceImpactToHigh(1);
  };

  React.useEffect(() => {

    if (amount < 0) setAmount(1);
  }, [amount]);

  React.useEffect(() => {
    selectedPayment && checker(selectedPayment?.name);
  }, [selectedPayment]);

  React.useEffect(() => {
    !coinPrices.WIN && getWinPrice();
  }, [coinPrices.WIN, getWinPrice]);

  const loadDex = React.useCallback(async () => {
    const ahwaBSCContract = new ethers.Contract(tokens['AHWA'], tokenABI['AHWA'], provider);
    const winstonBSCContract = new ethers.Contract(tokens['WIN'], tokenABI['WIN'], provider);
    const rickleBSCContract = new ethers.Contract(tokens['RKL'], tokenABI['RKL'], provider);
    const fieldBSCContract = new ethers.Contract(tokens['FIELD'], tokenABI['FIELD'], provider);
    const wbnbBSCContract = new ethers.Contract(tokens['WBNB'], tokenABI['WBNB'], provider);
    const busdBSCContract = new ethers.Contract(tokens['BUSD'], tokenABI['WBNB'], provider);
    const wmueBSCContract = new ethers.Contract(tokens['WMUE'], tokenABI['WMUE'], provider);
    const usdcBSCContract = new ethers.Contract(tokens['USDC'], tokenABI['RKL'], provider);
    const usdtBSCContract = new ethers.Contract(tokens['USDT'], tokenABI['RKL'], provider);

    const winstonRKLYFBSCContract = new ethers.Contract('0x42a3f09de1d0fa9ba589e4cdcf07be9d9890462c', winstonRKLYFABI, provider);
    const winstonRKLPSContract = new ethers.Contract('0xbb22d416ac55e8d07d9fe78da3cc9919a1c357ce', winstonRKLPSABI, provider);
    const winstonAhwaPSContract = new ethers.Contract('0x89d958a02ba82c55202af0cd6555bdd954de5595', winstonRKLPSABI, provider);// ahwa res0

    const lockedSupply = await winstonBSCContract.balanceOf(tokens['WIN']);
    const trustWallet = await winstonBSCContract.balanceOf(TrustWallet);
    const teamWallet = await winstonBSCContract.balanceOf('0x130Be432f446F1fD0B356023f3b308C36a304642');
    const burnedSupply = await winstonBSCContract.balanceOf('0x000000000000000000000000000000000000dEaD');

    const bnbHeldInTrust = await provider.getBalance(TrustWallet);
    const heldInTrust = await winstonBSCContract.balanceOf(TrustWallet);
    const wbnbHeldInTrust = await wbnbBSCContract.balanceOf(TrustWallet);
    const busdHeldInTrust = await busdBSCContract.balanceOf(TrustWallet);
    const rickleHeldInTrust = await rickleBSCContract.balanceOf(TrustWallet);
    const fieldHeldInTrust = await fieldBSCContract.balanceOf(TrustWallet);
    const wmueHeldInTrust = await wmueBSCContract.balanceOf(TrustWallet);
    const usdcHeldInTrust = await usdcBSCContract.balanceOf(TrustWallet);
    const usdtHeldInTrust = await usdtBSCContract.balanceOf(TrustWallet);

    const winstonHeldInGasStation = await winstonBSCContract.balanceOf(GasStationWallet);
    const bnbHeldInGasStation = await provider.getBalance(GasStationWallet);

    const bnbHeldInFundraiserWallet = await provider.getBalance(FundraiserWallet);
    const wbnbHeldInFundraiserWallet = await wbnbBSCContract.balanceOf(FundraiserWallet);
    const busdHeldInFundraiserWallet = await busdBSCContract.balanceOf(FundraiserWallet);
    const rickleHeldInFundraiserWallet = await rickleBSCContract.balanceOf(FundraiserWallet);
    const fieldHeldInFundraiserWallet = await fieldBSCContract.balanceOf(FundraiserWallet);
    const wmueHeldInFundraiserWallet = await wmueBSCContract.balanceOf(FundraiserWallet);
    const usdcHeldInFundraiserWallet = await usdcBSCContract.balanceOf(FundraiserWallet);
    const usdtHeldInFundraiserWallet = await usdtBSCContract.balanceOf(FundraiserWallet);

    const totalSupply = await winstonBSCContract.totalSupply();
    const rickleTotalSupply = await rickleBSCContract.totalSupply();
    const ahwaTotalSupply = await ahwaBSCContract.totalSupply();

    const heldInYFLiquidity = await winstonRKLYFBSCContract.getReserves();
    const heldInPSLiquidity = await winstonRKLPSContract.getReserves();
    const heldInVoterPSLiquidity = await winstonAhwaPSContract.getReserves();

    const psWINLp = { reserve0: heldInVoterPSLiquidity[0], reserve1: heldInVoterPSLiquidity[1] };
    const psRKLLp = { reserve0: heldInPSLiquidity[0], reserve1: heldInPSLiquidity[1] };
    const yfRKLLp = { reserve0: heldInYFLiquidity[0], reserve1: heldInYFLiquidity[1] };
    const psWBNBLpContract = new ethers.Contract('0x4dce12240b37879610601eb70685d396faf06417', winstonRKLPSABI, provider);
    const psWBNBLpPSLiquidity = await psWBNBLpContract.getReserves();
    // console.log(...psWBNBLpPSLiquidity)
    const psWBNBLp = { reserve0: psWBNBLpPSLiquidity[0], reserve1: psWBNBLpPSLiquidity[1] };
    const psBUSDLpContract = new ethers.Contract('0x45d9c665055572970d246f2dd96c74787faef03f', winstonRKLPSABI, provider);
    const psBUSDLpPSLiquidity = await psBUSDLpContract.getReserves();
    const psBUSDLp = { reserve0: psBUSDLpPSLiquidity[0], reserve1: psBUSDLpPSLiquidity[1] };
    const psUSDCLpContract = new ethers.Contract('0xabfa93b2b786b6ea3c8d990cc2efe81c880cb09f', winstonRKLPSABI, provider);
    const psUSDCLpPSLiquidity = await psUSDCLpContract.getReserves();
    const psUSDCLp = { reserve0: psUSDCLpPSLiquidity[0], reserve1: psUSDCLpPSLiquidity[1] };
    const psUSDTLpContract = new ethers.Contract('0xe01d99478b8a159b957d75455c01104734e05ee1', winstonRKLPSABI, provider);
    const psUSDTLpPSLiquidity = await psUSDTLpContract.getReserves();
    const psUSDTLp = { reserve0: psUSDTLpPSLiquidity[0], reserve1: psUSDTLpPSLiquidity[1] };
    const psBTCBLpContract = new ethers.Contract('0x656fb87cda1f25e8181b0415ef65dd6d439165e4', winstonRKLPSABI, provider);
    const psBTCBLpPSLiquidity = await psBTCBLpContract.getReserves();
    const psBTCBLp = { reserve0: psBTCBLpPSLiquidity[0], reserve1: psBTCBLpPSLiquidity[1] };
    const psCAKELpContract = new ethers.Contract('0xb2a13ce9f3dfeb5f38f2211fbf3de91d72cdabdd', winstonRKLPSABI, provider);
    const psCAKELpPSLiquidity = await psCAKELpContract.getReserves();
    const psCAKELp = { reserve0: psCAKELpPSLiquidity[0], reserve1: psCAKELpPSLiquidity[1] };
    const yf1USELpContract = new ethers.Contract('0x4c24b7a71e7576d6623f62bb83af63f31230ddfc', winstonRKLYFABI, provider);
    const yf1USELpPSLiquidity = await yf1USELpContract.getReserves();
    const yf1USELp = { reserve0: yf1USELpPSLiquidity[0], reserve1: yf1USELpPSLiquidity[1] };
    const psHCLpContract = new ethers.Contract('0x8a7dc07d76b6d5f897a32a03731e8b5b06a656e7', winstonRKLPSABI, provider);
    const psHCLpPSLiquidity = await psHCLpContract.getReserves();
    const psHCLp = { reserve0: psHCLpPSLiquidity[0], reserve1: psHCLpPSLiquidity[1] };
    const yfWBNBLpContract = new ethers.Contract('0xb5e7ff9a2f33a8a1e31eb79dc14659111f3dd51c', winstonRKLYFABI, provider);
    const yfWBNBLpPSLiquidity = await yfWBNBLpContract.getReserves();
    const yfWBNBLp = { reserve0: yfWBNBLpPSLiquidity[0], reserve1: yfWBNBLpPSLiquidity[1] };
    const yfBUSDLpContract = new ethers.Contract('0x7e8c3ad495970e4ce7c26a135f8e3b93cba726c5', winstonRKLYFABI, provider);
    const yfBUSDLpPSLiquidity = await yfBUSDLpContract.getReserves();
    const yfBUSDLp = { reserve0: yfBUSDLpPSLiquidity[0], reserve1: yfBUSDLpPSLiquidity[1] };
    const yfUSDCLpContract = new ethers.Contract('0x9eb6a50dfddbfe710298d5139762301de8233d2c', winstonRKLYFABI, provider);
    const yfUSDCLpPSLiquidity = await yfUSDCLpContract.getReserves();
    const yfUSDCLp = { reserve0: yfUSDCLpPSLiquidity[0], reserve1: yfUSDCLpPSLiquidity[1] };
    const yfUSDTLpContract = new ethers.Contract('0xb3b7766717169facf3eb53b9e1e2c4266f7945f8', winstonRKLYFABI, provider);
    const yfUSDTLpPSLiquidity = await yfUSDTLpContract.getReserves();
    const yfUSDTLp = { reserve0: yfUSDTLpPSLiquidity[0], reserve1: yfUSDTLpPSLiquidity[1] };
    const yfBTCBLpContract = new ethers.Contract('0xc91878b2087fbe42c378b3667dde6ccb4d143392', winstonRKLYFABI, provider);
    const yfBTCBLpPSLiquidity = await yfBTCBLpContract.getReserves();
    const yfBTCBLp = { reserve0: yfBTCBLpPSLiquidity[0], reserve1: yfBTCBLpPSLiquidity[1] };
    const yfFIELDLpContract = new ethers.Contract('0x6a451dc09f877781dd98cc31270adae256e21e09', winstonRKLYFABI, provider);
    const yfFIELDLpPSLiquidity = await yfFIELDLpContract.getReserves();
    const yfFIELDLp = { reserve0: yfFIELDLpPSLiquidity[0], reserve1: yfFIELDLpPSLiquidity[1] };
    const yfWMUELpContract = new ethers.Contract('0x9b5ef226ff4b2b6ed395dac3de2786cdcd83a461', winstonRKLYFABI, provider);
    const yfWMUELpPSLiquidity = await yfWMUELpContract.getReserves();
    const yfWMUELp = { reserve0: yfWMUELpPSLiquidity[0], reserve1: yfWMUELpPSLiquidity[1] };
    const ssWBNBLpContract = new ethers.Contract('0xb0d1a98c5213d60ab4932779eb695943fe1aeb51', winstonRKLYFABI, provider);
    const ssWBNBLpPSLiquidity = await ssWBNBLpContract.getReserves();
    const ssWBNBLp = { reserve0: ssWBNBLpPSLiquidity[0], reserve1: ssWBNBLpPSLiquidity[1] };
    const ssUSDTLpContract = new ethers.Contract('0x71ffbe76c7e799a9e7bf8ffcd68e15ea4e175467', winstonRKLYFABI, provider);
    const ssUSDTLpPSLiquidity = await ssUSDTLpContract.getReserves();
    const ssUSDTLp = { reserve0: ssUSDTLpPSLiquidity[0], reserve1: ssUSDTLpPSLiquidity[1] };


    setSupplyLocker({
      totalSupply,
      rickleTotalSupply,
      ahwaTotalSupply,
      lockedSupply,
      burnedSupply,
      teamWallet,
      trustWallet,
      heldInTrust,
      heldInYFLiquidity: heldInYFLiquidity[0],
      heldInPSLiquidity: heldInPSLiquidity[0],
      heldInVoterPSLiquidity: heldInVoterPSLiquidity[1],
      psWINLp,
      psRKLLp,
      yfRKLLp,
      psWBNBLp,
      psBUSDLp,
      psUSDCLp,
      psUSDTLp,
      psBTCBLp,
      psCAKELp,
      yf1USELp,
      psHCLp,
      yfWBNBLp,
      yfBUSDLp,
      yfUSDCLp,
      yfUSDTLp,
      yfBTCBLp,
      yfFIELDLp,
      yfWMUELp,
      ssWBNBLp,
      ssUSDTLp,
      wbnbHeldInTrust,
      rickleHeldInTrust,
      fieldHeldInTrust,
      wmueHeldInTrust,
      usdcHeldInTrust,
      usdtHeldInTrust,
      winstonHeldInGasStation,
      bnbHeldInGasStation,
      wbnbHeldInFundraiserWallet,
      rickleHeldInFundraiserWallet,
      fieldHeldInFundraiserWallet,
      wmueHeldInFundraiserWallet,
      usdcHeldInFundraiserWallet,
      usdtHeldInFundraiserWallet,
      bnbHeldInTrust,
      bnbHeldInFundraiserWallet,
      busdHeldInTrust,
      busdHeldInFundraiserWallet,
    });
  })
  React.useEffect(() => {
    if(coinPrices.WBNB)
    loadDex();
  }, [coinPrices.WBNB, loadDex]);


  React.useEffect(() => {
    let value = supplyLocker.bnbHeldInFundraiserWallet * coinPrices.WBNB;
    value += supplyLocker.wbnbHeldInFundraiserWallet * coinPrices.WBNB;
    value += supplyLocker.busdHeldInFundraiserWallet * coinPrices.BUSD;
    value += supplyLocker.fieldHeldInFundraiserWallet * coinPrices.FIELD;
    value += supplyLocker.wmueHeldInFundraiserWallet * coinPrices.WMUE;
    setFundingBalance(Number((value / 1e18).toString()).toFixed(2));

  }, [supplyLocker, fundingBalance, coinPrices.WBNB, setFundingBalance]);
  React.useEffect(async () => {
    if (!metamaskDownloadEnabled && !window.ethereum) enableDownloadMetamask(true);
  }, [metamaskDownloadEnabled, enableDownloadMetamask])

  function LiquidityCell(props) {
    return (<TableRow>
      <TableCell>
        {props.exchange}
      </TableCell>
      <TableCell>
        {props.pool}
      </TableCell>
      <TableCell>
        {props.reserve0.toString() / 1e18}
      </TableCell>
      <TableCell>
        {props.reserve1.toString() / 1e18}
      </TableCell>
      <TableCell>
        {props.ratio.toString()}
      </TableCell>
      <TableCell>
        {props.price0.toString()}
      </TableCell>
      <TableCell>
        {props.price1.toString()}
      </TableCell>
    </TableRow>);
  }

  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mt={8} mb={3}>
        <img src="https://dropbox.winston.services/official-logos/Winston_Logo_W-White.png" width="300px" />
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} mb={2}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1} sx={{ py: 3, px: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar src="https://dropbox.blockchange.services/rickle/Rickle-Front-full-color.png" >RKL</Avatar>
                  }
                  title="Rickle"
                  subheader={(supplyLocker.rickleTotalSupply / 1e18).toString()}
                />
                <Typography variant="h5" mt={1} textAlign={"center"}>
                  ${((supplyLocker.rickleTotalSupply * coinPrices.RKL) / 1e18).toFixed(12)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1} sx={{ py: 3, px: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar src="https://dropbox.winston.services/official-logos/WinstonTokenLogo.svg" />
                  }
                  title="Winston"
                  subheader={(supplyLocker.totalSupply / 1e18).toString()}
                />
                <Typography variant="h5" mt={1} textAlign={"center"}>
                  ${((supplyLocker.totalSupply * (coinPrices.RKL / coinPrices.WIN)) / 1e18).toFixed(12)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={1} sx={{ py: 3, px: 2 }}>
                <CardHeader
                  avatar={
                    <Avatar src="https://dropbox.winston.services/official-logos/Ahwa.png" />
                  }
                  title="Ahwa"
                  subheader={(supplyLocker.ahwaTotalSupply / 1e18).toString()}
                />

                <Typography variant="h5" mt={1} textAlign={"center"}>
                  ${(

                    supplyLocker.ahwaTotalSupply *
                    (coinPrices.AHWA * (coinPrices.RKL / coinPrices.WIN))
                    / 1e18).toString()}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mb={2}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={"center"}>
                  USD Price
                </Typography>
                <Typography variant="h5" mt={2} textAlign={"center"}>
                  ${(coinPrices.RKL / coinPrices.WIN).toFixed(12)}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h3" textAlign={"center"} color="#FFD215">
                  Raised
                </Typography>
                <Typography
                  variant="h4"
                  mt={2}
                  textAlign={"center"}
                  color="#FFD215"
                >
                  ${fundingBalance} USD
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} sx={{ py: 6, px: 2 }}>
                <Typography variant="h4" textAlign={"center"}>
                  Goal
                </Typography>
                <Typography variant="h5" mt={2} textAlign={"center"}>
                  $1,500,000.00 USD
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={7}>
              <Card elevation={0} sx={{ py: 3, px: 2 }}>
                <Table condensed>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3}>
                        <Typography variant="h3" mt={2} textAlign={"center"}>
                          Winston Token
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h4" textAlign={"center"}>
                          Locked
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          {(supplyLocker.lockedSupply / 1e18).toString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          ${((supplyLocker.lockedSupply * (coinPrices.RKL / coinPrices.WIN)) / 1e18).toFixed(8)}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="h4" textAlign={"center"}>
                          Burned
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          {(supplyLocker.burnedSupply / 1e18).toString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          ${((supplyLocker.burnedSupply * (coinPrices.RKL / coinPrices.WIN)) / 1e18).toFixed(8)}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="h4" textAlign={"center"}>
                          Sale
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          {(supplyLocker.trustWallet / 1e18).toString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          ${((supplyLocker.trustWallet * (coinPrices.RKL / coinPrices.WIN)) / 1e18).toFixed(8)}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Typography variant="h4" textAlign={"center"}>
                          Team
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          {(supplyLocker.teamWallet / 1e18).toString()}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" mt={1} textAlign={"center"}>
                          ${((supplyLocker.teamWallet * (coinPrices.RKL / coinPrices.WIN)) / 1e18).toFixed(8)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Card elevation={0} sx={{ py: 3, px: 2 }}>
                <Typography variant="h4" textAlign={"center"}>
                  Wallets
                </Typography>
                <List>
                  <ListItem>
                    Locked Supply
                  </ListItem>
                  <ListItem >
                    <small>0x75578ebBefe274F240B8E1b5859cA34f342157D9</small>
                  </ListItem>
                  <ListItem>
                    Trust Wallet
                  </ListItem>
                  <ListItem>
                    <small>0xF9B9eE3B0301B511cd5AA4b8D039F63df19C615a</small>
                  </ListItem>
                  <ListItem>
                    Team Wallet
                  </ListItem>
                  <ListItem>
                    <small>0x130Be432f446F1fD0B356023f3b308C36a304642</small>
                  </ListItem>
                  <ListItem>
                    Funding Wallet
                  </ListItem>
                  <ListItem style={{ fontSize: "smaller" }}>
                    <small>{FundraiserWallet}</small>
                  </ListItem>
                </List>
                <Typography variant="h5" mt={1} textAlign={"center"}>
                  <a href="https://dicord.gg/rickletoken">Discord</a> | <a href="https://dropbox.winston.services/documentation/Winston%20Design.pdf">Whitepaper</a>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={8} mb={2}>
          <Typography variant="h2" textAlign={"center"} >
            Initial Coin Fund Raising
          </Typography>
        </Grid>
        {paymentTypes.map((item, index) => (
          <Grid item key={item.name + index} xs={12} sm={6} md={2}>
            <Card
              className={`icoCard ${selectedPayment?.name === item.name && "activeIcoCard"
                }`}
              onClick={() => handleSelectedPayment(item)}
              elevation={0}
              sx={{
                py: { xs: 2.5, md: 5 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Grid>
                <img
                  src={item.image}
                  alt=""
                  style={{ borderRadius: "100px" }}
                />
              </Grid>
              <Typography variant="h6" textAlign={"center"} mt={2}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1" textAlign={"center"}>
                ${coinPrices[item.name.toUpperCase()].toFixed(12)}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      {metamaskDownloadEnabled && <Card elevation={0} sx={{ mt: 6, p: 5, textAlign: "center" }}>
        <Grid container display="flex" justifyContent={"center"}>
          <Grid item xs={12} sm={8} md={6} lg={5}>
            <Button
              fullWidth
              disabled={isLoading || isLoadingPurchase || isPriceImpactToHigh}
              variant="contained"
              color="secondary"
              sx={{ mt: 3 }}
              target="_default"
              href="https://metamask.io/download/"
            >
              {isLoadingPurchase && (
                <CircularProgress size={24} sx={{ mr: 2 }} />
              )}
              Download Metamask
            </Button>
          </Grid>
        </Grid>
      </Card>}
      {!metamaskDownloadEnabled && selectedPayment && (
        <Card elevation={0} sx={{ mt: 6, p: 5, textAlign: "center" }}>
          {success && <Grid container display="flex" justifyContent={"center"}><Grid item xs={12} sm={8} md={6} lg={5}>
            <Grid mt={3} mb={3}>
              <Typography variant="h5">
                Purchase Complete. Make Another?
              </Typography>
            </Grid>
          </Grid></Grid>}
          <Grid container display="flex" justifyContent={"center"}>
            <Grid item xs={12} sm={8} md={6} lg={5}>
              <TextField
                fullWidth
                type={"number"}
                value={amount}
                onChange={handleAmountChange}
                InputProps={{ inputProps: { step: 0.00000001 } }}
                variant="outlined"
                label={selectedPayment?.name}
                placeholder={`0.00 ${selectedPayment?.name}`}
              />
              {errorMessage && <Grid mt={3}>
                <Typography variant="h5">
                  {errorMessage}
                </Typography>
              </Grid>}
              <Grid mt={3}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Typography variant="h5">
                    {amount * ((coinPrices[selectedPayment?.name] / coinPrices.RKL) * coinPrices.WIN)} WIN
                  </Typography>
                )}
                {isPriceImpactToHigh ? <Typography variant="h5">
                  Price impact too High.
                </Typography> :
                  <Typography variant="h5">
                    Max Purchase 6000 WIN
                  </Typography>}
              </Grid>
              <Button
                fullWidth
                disabled={isLoading || isLoadingPurchase || isPriceImpactToHigh}
                variant="contained"
                color="secondary"
                sx={{ mt: 3 }}
                onClick={handleClick}
              >
                {isLoadingPurchase && (
                  <CircularProgress size={24} sx={{ mr: 2 }} />
                )}
                Confirm purchase
              </Button>
            </Grid>


          </Grid>
        </Card>
      )}

      <Grid item xs={12} mt={8} mb={2}>
        <Card elevation={0} sx={{ py: 3, px: 2 }}>
          <Table condensed>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h3" mt={2} textAlign={"center"}>
                    Winston Gas Station
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>

                  BNB
                </TableCell>
                <TableCell>
                  {supplyLocker.bnbHeldInGasStation.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.bnbHeldInGasStation * coinPrices['WBNB']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  WIN

                </TableCell>
                <TableCell>
                  {supplyLocker.winstonHeldInGasStation.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.winstonHeldInGasStation * (coinPrices['RKL'] / coinPrices['WIN'])).toString() / 1e18}

                </TableCell>
              </TableRow>

            </TableBody>
            <TableFooter>
              <TableCell>
              </TableCell>
              <TableCell>
                Total Value
              </TableCell>
              <TableCell>

                ${((supplyLocker.bnbHeldInGasStation * coinPrices['WBNB']) + supplyLocker.winstonHeldInGasStation * (coinPrices['RKL'] / coinPrices['WIN'])).toString() / 1e18}

              </TableCell>
            </TableFooter>
          </Table>
        </Card>
      </Grid>
      <Grid item xs={12} mt={8} mb={2}>
        <Card elevation={0} sx={{ py: 3, px: 2 }}>
          <Table condensed>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h3" mt={2} textAlign={"center"}>
                    Fund Raising
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>

                  BNB
                </TableCell>
                <TableCell>
                  {supplyLocker.bnbHeldInFundraiserWallet.toString() / 1e18}
                </TableCell>
                <TableCell>

                  $ {(supplyLocker.bnbHeldInFundraiserWallet * coinPrices['WBNB']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  WBNB

                </TableCell>
                <TableCell>
                  {supplyLocker.wbnbHeldInFundraiserWallet.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.wbnbHeldInFundraiserWallet * coinPrices['WBNB']).toString() / 1e18}

                </TableCell>
              </TableRow>


              <TableRow>
                <TableCell>

                  BUSD

                </TableCell>
                <TableCell>
                  {supplyLocker.busdHeldInFundraiserWallet.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${supplyLocker.busdHeldInFundraiserWallet.toString() / 1e18}

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>

                  FIELD

                </TableCell>
                <TableCell>
                  {supplyLocker.fieldHeldInFundraiserWallet.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.fieldHeldInFundraiserWallet * coinPrices['FIELD']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  WMUE

                </TableCell>
                <TableCell>
                  {supplyLocker.wmueHeldInFundraiserWallet.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.wmueHeldInFundraiserWallet * coinPrices['WMUE']).toString() / 1e18}

                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableCell>
              </TableCell>
              <TableCell>
                Total Value
              </TableCell>
              <TableCell>

                ${(
                  (supplyLocker.bnbHeldInFundraiserWallet * coinPrices['WBNB']) +
                  (supplyLocker.wbnbHeldInFundraiserWallet * coinPrices['WBNB']) +
                  (supplyLocker.busdHeldInFundraiserWallet * coinPrices['BUSD']) +
                  (supplyLocker.fieldHeldInFundraiserWallet * coinPrices['FIELD']) +
                  (supplyLocker.wmueHeldInFundraiserWallet * coinPrices['WMUE'])
                ).toString() / 1e18}

              </TableCell>
            </TableFooter>
          </Table>
        </Card>
      </Grid>
      <Grid item xs={12} mt={8} mb={2}>
        <Card elevation={0} sx={{ py: 3, px: 2 }}>
          <Table condensed>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography variant="h3" mt={2} textAlign={"center"}>
                    Winston Holdings
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow>
                <TableCell>

                  WIN

                </TableCell>
                <TableCell>
                  {supplyLocker.heldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.heldInTrust * (coinPrices['RKL'] / coinPrices['WIN'])).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  RKL

                </TableCell>
                <TableCell>
                  {supplyLocker.rickleHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.rickleHeldInTrust * coinPrices['RKL']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  BNB
                </TableCell>
                <TableCell>
                  {supplyLocker.bnbHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.bnbHeldInTrust * coinPrices['WBNB']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  WBNB

                </TableCell>
                <TableCell>
                  {supplyLocker.wbnbHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.wbnbHeldInTrust * coinPrices['WBNB']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  BUSD

                </TableCell>
                <TableCell>
                  {supplyLocker.busdHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.busdHeldInTrust * coinPrices['BUSD']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  USDC

                </TableCell>
                <TableCell>
                  {supplyLocker.usdcHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.usdcHeldInTrust * coinPrices['USDC']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  USDT

                </TableCell>
                <TableCell>
                  {supplyLocker.usdtHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.usdtHeldInTrust * coinPrices['USDT']).toString() / 1e18}

                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>

                  FIELD

                </TableCell>
                <TableCell>
                  {supplyLocker.fieldHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.fieldHeldInTrust * coinPrices['FIELD']).toString() / 1e18}

                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>

                  WMUE

                </TableCell>
                <TableCell>
                  {supplyLocker.wmueHeldInTrust.toString() / 1e18}
                </TableCell>
                <TableCell>

                  ${(supplyLocker.wmueHeldInTrust * coinPrices['WMUE']).toString() / 1e18}

                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableCell>
              </TableCell>
              <TableCell>
                Total Value
              </TableCell>
              <TableCell>

                ${(
                  (supplyLocker.heldInTrust * (coinPrices['RKL'] / coinPrices['WIN'])) +
                  (supplyLocker.rickleHeldInTrust * coinPrices['RKL']) +
                  (supplyLocker.bnbHeldInTrust * coinPrices['WBNB']) +
                  (supplyLocker.wbnbHeldInTrust * coinPrices['WBNB']) +
                  (supplyLocker.busdHeldInTrust * coinPrices['BUSD']) +
                  (supplyLocker.usdcHeldInTrust * coinPrices['USDC']) +
                  (supplyLocker.usdtHeldInTrust * coinPrices['USDT']) +
                  (supplyLocker.fieldHeldInTrust * coinPrices['FIELD']) +
                  (supplyLocker.wmueHeldInTrust * coinPrices['WMUE'])
                ).toString() / 1e18}

              </TableCell>
            </TableFooter>
          </Table>
        </Card>
      </Grid>

      <Grid item xs={12} mt={8} mb={2}>
        <Card elevation={0} sx={{ py: 3, px: 2 }}>
          <Table condensed>
            <TableHead>
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography variant="h3" mt={2} textAlign={"center"}>
                    Liquidity
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >

                  DEX

                </TableCell>
                <TableCell >

                  Pair

                </TableCell>
                <TableCell >

                  Reserve 0

                </TableCell>
                <TableCell >

                  Reserve 1

                </TableCell>
                <TableCell >

                  Ratio

                </TableCell>
                <TableCell >

                  Value

                </TableCell>
                <TableCell >

                  Value

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[{
                exchange: "PS",
                pool: "AHWA/WIN",
                reserve0: supplyLocker.psWINLp.reserve0,
                reserve1: supplyLocker.psWINLp.reserve1,
                ratio: supplyLocker.psWINLp.reserve1 / supplyLocker.psWINLp.reserve0,
                price0: ((
                  supplyLocker.psWINLp.reserve0 *
                  ((supplyLocker.psWINLp.reserve1 / supplyLocker.psWINLp.reserve0) * (coinPrices.RKL / coinPrices.WIN))
                ) / 1e18),
                price1: (supplyLocker.psWINLp.reserve1 * (coinPrices.RKL / coinPrices.WIN) / 1e18)
                // 1 WIN = X AHWA
                // (supplyLocker.psWINLp.reserve0 / supplyLocker.psWINLp.reserve1)
                // supplyLocker.psWINLp.reserve1 
                // (supplyLocker.psWINLp.reserve0 / supplyLocker.psWINLp.reserve1)
              }, {
                exchange: "PS",
                pool: "WIN/RKL",
                reserve0: supplyLocker.psRKLLp.reserve0,
                reserve1: supplyLocker.psRKLLp.reserve1,
                ratio: supplyLocker.psRKLLp.reserve0 / supplyLocker.psRKLLp.reserve1,
                price0: (supplyLocker.psRKLLp.reserve0 * (coinPrices.RKL / coinPrices.WIN)) / 1e18,
                price1: supplyLocker.psRKLLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "WIN/RKL",
                reserve0: supplyLocker.yfRKLLp.reserve0,
                reserve1: supplyLocker.yfRKLLp.reserve1,
                ratio: supplyLocker.yfRKLLp.reserve0 / supplyLocker.yfRKLLp.reserve1,
                price0: (supplyLocker.yfRKLLp.reserve0 * (coinPrices.RKL / coinPrices.WIN)) / 1e18,
                price1: supplyLocker.yfRKLLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "WBNB/RKL",
                reserve0: supplyLocker.psWBNBLp.reserve0,
                reserve1: supplyLocker.psWBNBLp.reserve1,
                ratio: (supplyLocker.psWBNBLp.reserve0) / supplyLocker.psWBNBLp.reserve1,
                price0: supplyLocker.psWBNBLp.reserve0 * (coinPrices.WBNB / 1e18),
                price1: supplyLocker.psWBNBLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "BUSD/RKL",
                reserve0: supplyLocker.psBUSDLp.reserve0,
                reserve1: supplyLocker.psBUSDLp.reserve1,
                ratio: (supplyLocker.psBUSDLp.reserve0 / supplyLocker.psBUSDLp.reserve1),
                price0: supplyLocker.psBUSDLp.reserve0 * coinPrices.BUSD / 1e18,
                price1: supplyLocker.psBUSDLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "USDC/RKL",
                reserve0: supplyLocker.psUSDCLp.reserve0,
                reserve1: supplyLocker.psUSDCLp.reserve1,
                ratio: (supplyLocker.psUSDCLp.reserve0 / supplyLocker.psUSDCLp.reserve1),
                price0: supplyLocker.psUSDCLp.reserve0 * coinPrices.USDC / 1e18,
                price1: supplyLocker.psUSDCLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "USDT/RKL",
                reserve0: supplyLocker.psUSDTLp.reserve0,
                reserve1: supplyLocker.psUSDTLp.reserve1,
                ratio: supplyLocker.psUSDTLp.reserve0 / supplyLocker.psUSDTLp.reserve1,
                price0: supplyLocker.psUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.psUSDTLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "BTCB/RKL",
                reserve0: supplyLocker.psBTCBLp.reserve0,
                reserve1: supplyLocker.psBTCBLp.reserve1,
                ratio: supplyLocker.psBTCBLp.reserve0 / supplyLocker.psBTCBLp.reserve1,
                price0: 0,
                price1: supplyLocker.psBTCBLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "PS",
                pool: "CAKE/RKL",
                reserve0: supplyLocker.psCAKELp.reserve0,
                reserve1: supplyLocker.psCAKELp.reserve1,
                ratio: supplyLocker.psCAKELp.reserve0 / supplyLocker.psCAKELp.reserve1,
                price0: 0,
                price1: supplyLocker.psCAKELp.reserve1 * coinPrices.RKL / 1e18
              }, /*{
                exchange: "PS",
                pool: "BHT/RKL",
                reserve0: supplyLocker.psBHTLp.reserve0,
                reserve1: supplyLocker.psBHTLp.reserve1,
                ratio: 0,
                price0:0,
                price1:0
              },*/ {
                exchange: "PS",
                pool: "RKL/#HC",
                reserve0: supplyLocker.psHCLp.reserve0,
                reserve1: supplyLocker.psHCLp.reserve1,
                ratio: supplyLocker.psHCLp.reserve0 / supplyLocker.psHCLp.reserve1,
                price0: 0,
                price1: 0
              }, {
                exchange: "YF",
                pool: "WBNB/RKL",
                reserve0: supplyLocker.yfWBNBLp.reserve0,
                reserve1: supplyLocker.yfWBNBLp.reserve1,
                ratio: (supplyLocker.yfWBNBLp.reserve0) / supplyLocker.yfWBNBLp.reserve1,
                price0: supplyLocker.yfWBNBLp.reserve0 * (coinPrices.WBNB / 1e18),
                price1: supplyLocker.yfWBNBLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "BUSD/RKL",
                reserve0: supplyLocker.yfBUSDLp.reserve0,
                reserve1: supplyLocker.yfBUSDLp.reserve1,
                ratio: (supplyLocker.yfBUSDLp.reserve0 / supplyLocker.yfBUSDLp.reserve1),
                price0: supplyLocker.yfBUSDLp.reserve0 * coinPrices.BUSD / 1e18,
                price1: supplyLocker.yfBUSDLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "USDC/RKL",
                reserve0: supplyLocker.yfUSDCLp.reserve0,
                reserve1: supplyLocker.yfUSDCLp.reserve1,
                ratio: supplyLocker.yfUSDCLp.reserve0 / supplyLocker.yfUSDCLp.reserve1,
                price0: supplyLocker.yfUSDCLp.reserve0 * coinPrices.USDC / 1e18,
                price1: supplyLocker.yfUSDCLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "USDT/RKL",
                reserve0: supplyLocker.yfUSDTLp.reserve0,
                reserve1: supplyLocker.yfUSDTLp.reserve1,
                ratio: supplyLocker.yfUSDTLp.reserve0 / supplyLocker.yfUSDTLp.reserve1,
                price0: supplyLocker.yfUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.yfUSDTLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "BTCB/RKL",
                reserve0: supplyLocker.yfBTCBLp.reserve0,
                reserve1: supplyLocker.yfBTCBLp.reserve1,
                ratio: supplyLocker.yfBTCBLp.reserve0 / supplyLocker.yfBTCBLp.reserve1,
                price0: 0,
                price1: supplyLocker.yfBTCBLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "FIELD/RKL",
                reserve0: supplyLocker.yfFIELDLp.reserve0,
                reserve1: supplyLocker.yfFIELDLp.reserve1,
                ratio: supplyLocker.yfFIELDLp.reserve0 / supplyLocker.yfFIELDLp.reserve1,
                price0: supplyLocker.yfFIELDLp.reserve0 * coinPrices.FIELD / 1e18,
                price1: supplyLocker.yfFIELDLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "WMUE/RKL",
                reserve0: supplyLocker.yfWMUELp.reserve0,
                reserve1: supplyLocker.yfWMUELp.reserve1,
                ratio: supplyLocker.yfWMUELp.reserve0 / supplyLocker.yfWMUELp.reserve1,
                price0: supplyLocker.yfWMUELp.reserve0 * coinPrices.WMUE / 1e18,
                price1: supplyLocker.yfWMUELp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "YF",
                pool: "1USE/RKL",
                reserve0: supplyLocker.yf1USELp.reserve0,
                reserve1: supplyLocker.yf1USELp.reserve1,
                ratio: supplyLocker.yf1USELp.reserve0 / supplyLocker.yf1USELp.reserve1,
                price0: 0,
                price1: supplyLocker.yf1USELp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "SS",
                pool: "WBNB/RKL",
                reserve0: supplyLocker.ssWBNBLp.reserve0,
                reserve1: supplyLocker.ssWBNBLp.reserve1,
                ratio: (supplyLocker.ssWBNBLp.reserve0) / supplyLocker.ssWBNBLp.reserve1,
                price0: supplyLocker.ssWBNBLp.reserve0 * (coinPrices.WBNB / 1e18),
                price1: supplyLocker.ssWBNBLp.reserve1 * coinPrices.RKL / 1e18
              }, {
                exchange: "SS",
                pool: "USDT/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18
              },{
                exchange: "CS",
                pool: "WBNB/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18

              },{
                exchange: "CS",
                pool: "BUSD/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18

              },{
                exchange: "CS",
                pool: "USDT/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18

              },{
                exchange: "CS",
                pool: "USDC/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18

              },{
                exchange: "CS",
                pool: "USDT/RKL",
                reserve0: supplyLocker.ssUSDTLp.reserve0,
                reserve1: supplyLocker.ssUSDTLp.reserve1,
                ratio: supplyLocker.ssUSDTLp.reserve0 / supplyLocker.ssUSDTLp.reserve1,
                price0: supplyLocker.ssUSDTLp.reserve0 * coinPrices.USDT / 1e18,
                price1: supplyLocker.ssUSDTLp.reserve1 * coinPrices.RKL / 1e18

              }].map(item => <LiquidityCell
                exchange={item.exchange}
                pool={item.pool}
                reserve0={item.reserve0}
                reserve1={item.reserve1}
                ratio={item.ratio}
                price0={item.price0}
                price1={item.price1}
              />)}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </Container >
  );
}
export default ICO;
