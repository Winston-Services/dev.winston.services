/* eslint-disable no-undef */
// Module to control the application lifecycle and the native browser window.
// this is the server side.
const path = require('path');
const url = require('url');

const { app, BrowserWindow, protocol, Menu, shell } = require('electron');
const { Level } = require('level');

const { Winston } = require('./Winston');

// Create a database
const db = new Level('wallet.db', { valueEncoding: 'json' });

const winstonAppInstance = new Winston({
  root: '127.0.0.1',
  address: 'n/a',
  db,
});

// Create the native browser window.
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // Set the path of an additional "preload" script that can be used to
    // communicate between node-land and browser-land.
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, 'favicon.ico'),
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('file://')) {
      return { action: 'allow' };
    }
    // open url in a browser and prevent default
    shell.openExternal(url);
    return { action: 'deny' };
  });
  // In production, set the initial browser path to the local bundle generated
  // by the Create React App build process.
  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    : 'http://localhost:3000';

  mainWindow.loadURL(appURL);

  // Automatically open Chrome's DevTools in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }

  const menu = Menu.buildFromTemplate([
    {
      label: 'Winston',
      submenu: [
        {
          click: () => mainWindow.webContents.send('navigate', '/'),
          label: 'Home',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/academy'),
          label: 'Academy',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/marketplace'),
          label: 'Marketplace',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/wizard'),
          label: 'Workshop',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/faucet'),
          label: 'Faucet',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/staking'),
          label: 'Staking',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/burning'),
          label: 'Burning',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/swapping'),
          label: 'Swapping',
        },
      ],
    },
    {
      label: 'Integrations',
      submenu: [
        {
          click: () => mainWindow.webContents.send('navigate', '/discord'),
          label: 'Discord',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/slack'),
          label: 'Slack',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/telegram'),
          label: 'Telegram',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/twitter'),
          label: 'Twitter',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/github'),
          label: 'Github',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/bitbucket'),
          label: 'Bitbucket',
        },
      ],
    },

    {
      label: 'Tools',
      submenu: [
        {
          click: () => mainWindow.webContents.send('navigate', '/dashboard'),
          label: 'Wallet',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/airdrop'),
          label: 'Airdrop',
        },
        {
          click: () =>
            mainWindow.webContents.send('navigate', '/community-funding'),
          label: 'Community Funding',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/ico'),
          label: 'ICO',
        },
      ],
    },
    {
      label: 'Connect',
      submenu: [
        {
          click: () => mainWindow.webContents.send('navigate', '/sign-in'),
          label: 'Sign In',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/feedback'),
          label: 'Feedback',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/contact-us'),
          label: 'Contact',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/wiki'),
          label: 'Wiki',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/support'),
          label: 'Support',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/developers'),
          label: 'Developers',
        },
      ],
    },
    {
      label: 'About',
      submenu: [
        {
          click: () => mainWindow.webContents.send('navigate', '/news'),
          label: 'News',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/our-team'),
          label: 'Meet the team',
        },
        {
          label: 'Assets',
          click: () => mainWindow.webContents.send('navigate', '/assets'),
        },
        {
          label: 'Currencies',
          click: () => mainWindow.webContents.send('navigate', '/currencies'),
        },
        {
          label: 'Network Status',
          click: () =>
            mainWindow.webContents.send('navigate', '/network-status'),
        },
        {
          label: 'Supported Coins',
          click: () =>
            mainWindow.webContents.send('navigate', '/supported-coins'),
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/whitepapers'),
          label: 'Whitepapers',
        },
        {
          click: () =>
            mainWindow.webContents.send('navigate', '/our-investors'),
          label: 'Investors',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/terms'),
          label: 'Terms',
        },
        {
          click: () => mainWindow.webContents.send('navigate', '/privacy'),
          label: 'Privacy',
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
}

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    'file',
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error('Failed to register protocol');
    }
  );
}

// This method will be called when Electron has finished its initialization and
// is ready to create the browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  setupLocalFilesNormalizerProxy();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar to stay active until
// the user quits  explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// If your app has no need to navigate or only needs to navigate to known pages,
// it is a good idea to limit navigation outright to that known scope,
// disallowing any other kinds of navigation.
const allowedNavigationDestinations = 'http://localhost';
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
