import { useSelector, useDispatch } from 'react-redux';
import {
  setDex,
  setDexRouters,
  setDexRouter,
  addDexRouter,
  removeDexRouter,
  selectDex,
  selectDexRouters,
} from '../store/dex';

export const useDex = () => {
  const dispatch = useDispatch();
  const dex = useSelector(selectDex);
  const routers = (chainId) => useSelector(selectDexRouters(chainId));

  const _setDex = (dex) => dispatch(setDex(dex));
  const _setDexRouters = (routers) => dispatch(setDexRouters(routers));
  const _setDexRouter = (router) => dispatch(setDexRouter(router));
  const _addDexRouter = (router) => dispatch(addDexRouter(router));
  const _removeDexRouter = (router) => dispatch(removeDexRouter(router));

  return {
    dex,
    routers,
    setDex: _setDex,
    setDexRouters: _setDexRouters,
    setDexRouter: _setDexRouter,
    addDexRouter: _addDexRouter,
    removeDexRouter: _removeDexRouter,
  };
};
