import { useDispatch, useSelector } from 'react-redux';

import {
  userInfoSelector,
  userWalletsSelector,
  userAccountsSelector,
  userAccountSelector,
  setUserInfo,
  setUserWallets,
  setUserAccount,
  addUserAccount,
  addUserWallet,
  removeUserAccount,
  removeUserWallet,
} from '../store/user';

const useUser = () => {
  const dispatch = useDispatch();
  const info = useSelector(userInfoSelector);
  const wallets = useSelector(userWalletsSelector);
  const accounts = useSelector(userAccountsSelector);
  const account = useSelector(userAccountSelector);

  const setUser = (user) => {
    dispatch(setUserInfo(user));
  };

  const setWallets = (wallets) => {
    dispatch(setUserWallets(wallets));
  };

  const setAccount = (account) => {
    dispatch(setUserAccount(account));
  };

  const addAccount = (account) => {
    dispatch(addUserAccount(account));
  };

  const addWallet = (wallet) => {
    dispatch(addUserWallet(wallet));
  };

  const removeAccount = (index) => {
    dispatch(removeUserAccount(index));
  };

  const removeWallet = (index) => {
    dispatch(removeUserWallet(index));
  };

  return {
    info,
    wallets,
    accounts,
    account,
    setUser,
    setWallets,
    setAccount,
    addAccount,
    addWallet,
    removeAccount,
    removeWallet,
  };
};

export default useUser;
