import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  userInfoSelector,
  userWalletsSelector,
  userAccountsSelector,
  userAccountSelector,
  userProfileSelector,
  setUserInfo,
  setUserWallets,
  setUserAccount,
  setFirstRunCompleted,
  setFirstRunStep,
  setFirstRun,
  addUserAccount,
  addUserWallet,
  removeUserAccount,
  removeUserWallet,
  setUserProfile,
} from '../store/user';

const useUser = () => {
  const dispatch = useDispatch();
  const info = useSelector(userInfoSelector);
  const wallets = useSelector(userWalletsSelector);
  const accounts = useSelector(userAccountsSelector);
  const account = useSelector(userAccountSelector);
  const profile = useSelector(userProfileSelector);

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

  const setProfile = (profile) => {
    dispatch(setUserProfile(profile));
  };

  React.useEffect(() => {
    if (info) {
      setUser(info);
    }
    if (profile) {
      setProfile(profile);
    }
    if (accounts) {
      accounts.forEach(account => addAccount(account));
    }
    if (account) {
      setAccount(account);
    }
  }, [info, profile, accounts, account, setUser, setProfile, addAccount, setAccount]);

  return {
    info,
    profile,
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
    setProfile,
    setFirstRunCompleted,
    setFirstRunStep,
    setFirstRun,
  };
};

export default useUser;
