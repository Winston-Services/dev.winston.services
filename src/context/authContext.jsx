import React, { useState } from 'react';

import { CircularProgress, Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import useApi from '../hooks/useApi';
import {
  setUserInfo,
  setUserOauthAccounts,
  setUserProfile,
  logout,
} from '../store/user';
import { isElectron } from '../utils/commonFunctions';

const AuthContext = React.createContext(
  localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : false
);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const api = useApi();
  const [verifyToken] = api.endpoints.verifyToken.useLazyQuery();
  const [refreshToken] = api.endpoints.refreshToken.useMutation();
  // const [getUser] = api.endpoints.getMe.useLazyQuery();
  const [auth, setAuth] = useState(false);
  const refreshTimer = React.useRef(null);

  const removeAuth = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    setAuth(false);
    window.location.href = '/';
  };

  const addAuth = async (wallet) => {
    localStorage.removeItem('token');
    const res = await verifyToken(wallet.token).unwrap();
    if (res.message === 'Success') {
      // console.log('res', res);
      if (refreshTimer.current) {
        clearTimeout(refreshTimer.current);
      }
      let updatedWallet = wallet;
      if (res.data.user.token.expiresAt) {
        const expiresAt = new Date(res.data.user.token.expiresAt);
        const now = new Date();
        const timeDiff = expiresAt - now;
        const timeDiffInMinutes = Math.floor(timeDiff / (1000 * 60));
        if (timeDiffInMinutes < 10) {
          const { data, error } = await refreshToken(wallet.token).unwrap();
          if (error) {
            console.error('Error refreshing token:', error);
            return false;
          } else {
            updatedWallet.token = data.token;
          }
        }
      }

      localStorage.setItem(
        'token',
        JSON.stringify({ authenticated: true, ...updatedWallet })
      );
      dispatch(setUserOauthAccounts(res.data.user.oauthAccounts));
      dispatch(
        setUserProfile({
          firstName: res.data.user.profile?.name?.first || '',
          middleName: res.data.user.profile?.name?.middle || '',
          lastName: res.data.user.profile?.name?.last || '',
          username: res.data.user.profile?.username || '',
          phone: res.data.user.profile?.phone || '',
          address1: res.data.user.profile?.address1 || '',
          address2: res.data.user.profile?.address2 || '',
          address3: res.data.user.profile?.address3 || '',
          city: res.data.user.profile?.city || '',
          state: res.data.user.profile?.state || '',
          postalCode: res.data.user.profile?.zip || '',
          country: res.data.user.profile?.country || '',
          roles: res.data.user.profile?.roles || ['Guest'],
          banner: res.data.user.profile?.banner || '',
          avatar: res.data.user.profile?.avatar || '',
          bio: res.data.user.profile?.bio || '',
          likes: res.data.user.profile?.likes || 0,
          views: res.data.user.profile?.views || 0,
          shares: res.data.user.profile?.shares || 0,
        })
      );
      let name;
      if (
        res.data.user?.profile?.name?.first &&
        res.data.user?.profile?.name?.last
      ) {
        name = `${res.data.user?.profile?.name?.first} ${res.data.user?.profile?.name?.last}`;
      } else {
        name = 'Guest User';
      }
      dispatch(
        setUserInfo({
          authLoading: false,
          id: res.data.user._id,
          email: updatedWallet.email,
          token: updatedWallet.token,
          isVerified: res.data.user.isVerified,
          isAdmin: res.data.user.isAdmin,
          isAhwaHolder: res.data.user.isAhwaHolder,
          isBanned: res.data.user.isBanned,
          wallets: res.data.user.wallets,
          accounts: res.data.user.accounts,
          isSubscribed: res.data.user.isSubscribed,
          createdAt: res.data.user.createdAt,
          updatedAt: res.data.user.updatedAt,
          name: name,
          role: res.data.user.profile.roles[0],
        })
      );
      setAuth({ authenticated: true, ...updatedWallet });

      refreshTimer.current = setTimeout(() => {
        refreshAuth(updatedWallet);
      }, 1000 * 60 * 10); // 10 minutes

      return true;
    }
    return false;
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
        // user connected.
        // console.log(message);
        break;
      case 'REGISTER':
        console.log(message);
        break;
      case 'AUTHENTICATE':
        message.send(
          JSON.stringify(
            {
              OP_CODE: 'AUTHENTICATE',
              SIG: 'Add_Sig',
              data: 'SIG',
            },
            false,
            2
          )
        );
        console.log(data);
        break;
      case 'MESSAGE':
        console.log('message', data);
        break;
      default:
        console.log(message);
        return;
    }
    return;
    // check op codes
    // check if current sig
  };

  const communicate = (connection) => {
    //set websocket connection states.
    setConnected(true);

    const rateLimit = (func, limit) => {
      let lastCall = 0;
      return (...args) => {
        const now = Date.now();
        if (now - lastCall >= limit) {
          lastCall = now;
          return func(...args);
        }
      };
    };

    connection.onmessage = rateLimit(async (message) => {
      try {
        const data = JSON.parse(await message.data.text(), false, 2);
        handleCommunication(connection, data);
      } catch (error) {
        console.error(error);
      }
    }, 100); // rate limit

    connection.onopen = () => {
      // console.log('Connected', connection);
      if (connection.readyState === 1) {
        const message = JSON.stringify(
          {
            OP_CODE: 'CONNECT',
            SIG: 'No_Sig',
            data: '',
          },
          false,
          2
        );
        connection.send(message);
        // console.log(message);
      }
    };
  };

  const refreshAuth = (wallet) => {
    // console.log('refreshAuth', wallet);
    return addAuth(wallet);
  };

  React.useEffect(() => {
    if (!connected && !isElectron()) {
      try {
        connection.current = new WebSocket('https://winston.services/ws');
        communicate(connection.current);
      } catch (error) {
        console.error(error);
      }
    }
    return () => {
      if (connected) {
        // connection.current.close();
      }
    };
  });

  const value = {
    authenticated: auth?.authenticated || false,
    setAuth: addAuth,
    removeAuth,
    refreshAuth,
    get connection() {
      return connection.current;
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthRedirect({ children, authenticatedRoute = true }) {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [authLoading, setAuthLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    auth?.authenticated || false
  );

  const handleAuthentication = React.useCallback(
    async (token) => {
      try {
        const res = await auth.refreshAuth(JSON.parse(token));
        if (res) {
          setAuthenticated(true);
          const { from } = location.state || {
            from: { pathname: '/dashboard' },
          };
          navigate(from.pathname !== '/sign-in' ? from : '/dashboard');
        } else {
          throw new Error('Authentication failed');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        navigate('/sign-in');
      } finally {
        setAuthLoading(false);
      }
    },
    [auth, setAuthenticated, setAuthLoading, navigate, location]
  );

  React.useEffect(() => {
    if (authenticatedRoute && !authenticated) {
      if (!authLoading) {
        const token = localStorage.getItem('token');
        if (token) {
          handleAuthentication(token);
          setAuthLoading(true);
        } else {
          setAuthLoading(false);
        }
      }
    }
    if (auth?.authenticated) {
      setAuthenticated(auth?.authenticated);
      setAuthLoading(false);
    }
  }, [
    auth,
    authLoading,
    authenticatedRoute,
    handleAuthentication,
    authenticated,
  ]);

  if (authLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!authenticated && authenticatedRoute) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  if (authenticated && location.pathname === '/sign-in') {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

AuthRedirect.propTypes = {
  children: PropTypes.element,
  authenticatedRoute: PropTypes.bool,
};
