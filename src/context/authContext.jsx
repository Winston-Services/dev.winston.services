import React, { useState } from 'react';

import { CircularProgress } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import { userInfoSelector } from '../store/user';
import { isElectron } from '../utils/commonFunctions';

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
  const [connected, setConnected] = React.useState(false);
  let connection = React.useRef();

  const handleCommunication = (message, data) => {
    if (!data.SIG || data.SIG === '') {
      return;
    }
    if (!data.OP_CODE) {
      return;
    }

    switch (data.OP_CODE) {
      case 'CONNECT':
        message.send(JSON.stringify({
          OP_CODE: 'AUTHENTICATE',
          SIG: 'Add_Sig',
          data:'SIG'
        }, false, 2));
        break;
      case 'AUTHENTICATE':
        console.log(data);
        break;
      default:
        return;
    }
    return;
    // check op codes
    // check if current sig
  };

  const communicate = (connection) => {
    //set websocket connection states.
    setConnected(true);
    connection.onmessage = (message) => {
      try {
        const data = JSON.parse(message.data, false, 2);
        handleCommunication(connection, data);
      } catch (error) {
        console.error(error);
      }
    };
  };

  React.useEffect(() => {
    if (isElectron() && !connected) {
      connection.current = new WebSocket('ws://ws.winston.services:7557');
      communicate(connection.current);
    }
    return () => {
      if (connected) {
        // connection.current.close();
      }
    };
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
  }

  /*
  else if (auth?.authenticated && authenticatedRoute) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
*/
  return children;
}
AuthRedirect.propTypes = {
  children: PropTypes.element,
  authenticatedRoute: PropTypes.bool,
};
