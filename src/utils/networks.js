const resource =
  'https://raw.githubusercontent.com/Winston-Services/support-networks/main/network.json';

const networks = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    core: 'bitcoin',
    image: './assets/icons/btc.svg',
    chainId: 0,
    decimals: 9,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    core: 'litecoin',
    image: './assets/icons/ltc.svg',
    chainId: 0,
    decimals: 9,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Dash',
    symbol: 'DASH',
    core: 'dash',
    image: './assets/icons/dash.svg',
    chainId: 0,
    decimals: 9,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Doge',
    symbol: 'DOGE',
    core: 'doge',
    image: './assets/icons/doge.svg',
    chainId: 0,
    decimals: 9,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    core: 'evm',
    image: './assets/icons/eth.svg',
    chainId: 1,
    decimals: 18,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Binance Smart Chain',
    symbol: 'BNB',
    core: 'evm',
    image: './assets/icons/bnb.svg',
    chainId: 56,
    decimals: 18,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
  {
    name: 'Polygon',
    symbol: 'Pol',
    core: 'evm',
    image: './assets/icons/polygon.svg',
    chainId: 1,
    decimals: 18,
    testnet: false,
    ws: '',
    rpc: '',
    explorer: '',
  },
];

class WinstonNetworks {
  constructor() {
    this._networks = [...networks];
    fetch(resource)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this._networks = data.networks;
      })
      .catch((error) => {
        console.error('Error fetching networks:', error);
      });
    // fetch the networks list form the supported networks api.
    return {
      network: (network) => {
        const foundNetwork =
          this.getNetworkByName(network) ||
          this.getNetworkBySymbol(network) ||
          this.getNetworkByChainId(network);
        return {
          metadata: foundNetwork || -1,
        };
      },
      get networks() {
        return [...this._networks];
      },
      addNetwork: this.addNetwork,
      removeNetwork: this.deleteNetwork,
      getNetworkByChainId: this.getNetworkByChainId,
      getNetworkBySymbol: this.getNetworkBySymbol,
      getNetworkByName: this.getNetworkByName,
    };
  }
  getNetworkByChainId(chainId) {
    return {
      ...this._networks.find((n) => n.chainId === chainId),
    };
  }
  getNetworkBySymbol(symbol) {
    return {
      ...this._networks.find(
        (n) => n.symbol.toLowerCase() === symbol.toLowerCase()
      ),
    };
  }
  getNetworkByName(name) {
    return {
      ...this._networks.find(
        (n) => n.name.toLowerCase() === name.toLowerCase()
      ),
    };
  }
  addNetwork(network) {
    this._networks.push(network);
    return {
      ...network,
    };
  }
  deleteNetwork(network) {
    this._networks = this._networks.filter((n) => n.name !== network);
    return {
      ...network,
    };
  }
}

module.exports = WinstonNetworks;
