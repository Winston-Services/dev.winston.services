import React, { useState } from 'react';

import { CircularProgress } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import { userInfoSelector } from '../store/user';


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
    setAuth(false);
    navigate('/sign-in');
  };
  const addAuth = (wallet) => {
    // localStorage.setItem('token', JSON.stringify(wallet));
    setAuth(wallet);
  };
  let connected = false;
  let connection = React.useRef(null);
  const handleMessage = () => {};
  const communicate = (connection) => {
    connection.onopen = () => {
      connected = true;
    }
    //set websocket connection states.
    connection.onmessage = (message) => {
      // set OP Code handler.
      handleMessage(message);
    }
    // console.log(connection)
  };

  React.useEffect(() => {
    if (!connected) {
      connection.current = new WebSocket('ws://127.0.0.1:7557');
      communicate(connection.current);
    }
    
  });

  React.useEffect(() => {
    window.Winston.navigate((location) => {
      console.log('Location', location);
      navigate(location);
    });
  });
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

  if (user?.authLoading) {
    return <CircularProgress />;
  }
  if (!auth?.authenticated && authenticatedRoute) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  } else if (auth?.authenticated && !authenticatedRoute) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  return children;
}
AuthRedirect.propTypes = {
  children: PropTypes.element,
  authenticatedRoute: PropTypes.bool,
};
