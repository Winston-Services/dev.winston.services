import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { userInfoSelector } from '../store/user';
import { PropTypes } from 'prop-types';
const oldToken = false;
// const oldToken = localStorage.getItem('token')
//   ? JSON.parse(localStorage.getItem('token'))
//   : false;
const AuthContext = React.createContext(oldToken);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(oldToken);
  const removeAuth = () => {
    dispatch({ type: 'logout' });
    // localStorage.removeItem('token');
    setAuth(undefined);
    navigate('/sign-in');
  };
  const addAuth = (wallet) => {
    // localStorage.setItem('token', JSON.stringify(wallet));
    setAuth(wallet);
  };
  const value = { authenticated: auth, setAuth: addAuth, removeAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthRedirect({ children, authenticatedRoute = true }) {
  let auth = useAuth();
  let location = useLocation();
  const user = useSelector(userInfoSelector);
  if (!auth?.authenticated && authenticatedRoute) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  } else if (auth?.authenticated && !authenticatedRoute) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  if (user?.authLoading) {
    return <CircularProgress />;
  }

  return children;
}
AuthRedirect.propTypes = {
  children: PropTypes.element,
  authenticatedRoute: PropTypes.bool,
};
