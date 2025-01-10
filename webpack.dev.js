const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: false,
    open: true,
    client: {
      overlay: false,
    },
    allowedHosts: ['winston.services', 'dev.winston.services', 'localhost'],
  },
  optimization: {
    minimize: false,
  },
}); 