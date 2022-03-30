import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ThemeLoader from './components/theme-loader';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import { isElectron } from './utils/commonFunctions';

const rootNode = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeLoader>
        {isElectron() ? (
          <HashRouter>
            <App />
          </HashRouter>
        ) : (
          <BrowserRouter>
            <App />
          </BrowserRouter>
        )}
      </ThemeLoader>
    </Provider>
  </React.StrictMode>,
  rootNode
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
