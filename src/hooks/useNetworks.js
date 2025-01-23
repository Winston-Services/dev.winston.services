import { useDispatch, useSelector } from 'react-redux';

import {
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
  networksSelector,
  networkRpcsSelector,
  networkRpcSelector,
  privacyRatingSelector,
  rpcEnpointSelector,
  rpcWsSelector,
  explorerSelector,
  explorerApiSelector,
  addressEndpointSelector,
  tokenEndpointSelector,
  blockEndpointSelector,
  txEndpointSelector,
  chainId2NetworkName,
} from '../store/networks';

export const useNetworks = () => {
  const networks = useSelector(networksSelector);
  const networkRpcs = (chainId) =>
    useSelector((state) => networkRpcsSelector(state, chainId));
  const networkRpc = (chainId, networkId) =>
    useSelector((state) => networkRpcSelector(state, chainId, networkId));
  const rpcEnpoint = (chainId, networkId) =>
    useSelector((state) => rpcEnpointSelector(state, chainId, networkId));
  const rpcWs = (chainId, networkId) =>
    useSelector((state) => rpcWsSelector(state, chainId, networkId));
  const explorer = (chainId, networkId) =>
    useSelector((state) => explorerSelector(state, chainId, networkId));
  const explorerApi = (chainId, networkId) =>
    useSelector((state) => explorerApiSelector(state, chainId, networkId));
  const addressEndpoint = (chainId, networkId) =>
    useSelector((state) => addressEndpointSelector(state, chainId, networkId));
  const tokenEndpoint = (chainId, networkId) =>
    useSelector((state) => tokenEndpointSelector(state, chainId, networkId));
  const blockEndpoint = (chainId, networkId) =>
    useSelector((state) => blockEndpointSelector(state, chainId, networkId));
  const txEndpoint = (chainId, networkId) =>
    useSelector((state) => txEndpointSelector(state, chainId, networkId));
  const privacyRating = (chainId, networkId) =>
    useSelector((state) => privacyRatingSelector(state, chainId, networkId));
  const id2Net = (chainId) =>
    useSelector((state) => chainId2NetworkName(state, chainId));
  const dispatch = useDispatch();

  return {
    setNetworkRpcs: (network, rpcs) => dispatch(setNetworkRpcs(network, rpcs)),
    addNetworkRpc: (network, rpc) => dispatch(addNetworkRpc(network, rpc)),
    removeNetworkRpc: (network, rpcId) =>
      dispatch(removeNetworkRpc(network, rpcId)),
    setRpcEnpoint: (network, rpcId, endpoint) =>
      dispatch(setRpcEnpoint(network, rpcId, endpoint)),
    setRpcWs: (network, rpcId, ws) => dispatch(setRpcWs(network, rpcId, ws)),
    setExplorer: (network, rpcId, explorer) =>
      dispatch(setExplorer(network, rpcId, explorer)),
    setExplorerApi: (network, rpcId, explorerApi) =>
      dispatch(setExplorerApi(network, rpcId, explorerApi)),
    setExplorerApiKey: (network, rpcId, explorerApiKey) =>
      dispatch(setExplorerApiKey(network, rpcId, explorerApiKey)),
    setAddressEndpoint: (network, rpcId, addressEndpoint) =>
      dispatch(setAddressEndpoint(network, rpcId, addressEndpoint)),
    setTokenEndpoint: (network, rpcId, tokenEndpoint) =>
      dispatch(setTokenEndpoint(network, rpcId, tokenEndpoint)),
    setBlockEndpoint: (network, rpcId, blockEndpoint) =>
      dispatch(setBlockEndpoint(network, rpcId, blockEndpoint)),
    setTxEndpoint: (network, rpcId, txEndpoint) =>
      dispatch(setTxEndpoint(network, rpcId, txEndpoint)),
    setPrivacyRating: (network, rpcId, privacyRating) =>
      dispatch(setPrivacyRating(network, rpcId, privacyRating)),
    chainId2NetworkName: id2Net,
    networks,
    networkRpcs,
    networkRpc,
    privacyRating,
    rpcEnpoint,
    rpcWs,
    explorer,
    explorerApi,
    addressEndpoint,
    tokenEndpoint,
    blockEndpoint,
    txEndpoint,
  };
};

export default useNetworks;
