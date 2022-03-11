import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { userInfoSelector } from '../store/user';
import { PropTypes } from 'prop-types';

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const removeAuth = () => {
    dispatch({ type: 'logout' });
    setAuth(undefined);
    navigate('/');
  };
  const value = { authenticated: auth, setAuth, removeAuth };
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
    return <Navigate to="/login" state={{ from: location }} />;
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
