const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const process = require('process');

dotenv.config();

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: 'index.html',
});

const copyPlugin = new CopyWebpackPlugin({
  patterns: [
    { from: 'public', to: './', globOptions: { ignore: ['**/index.html'] } },
  ],
});

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
          {
            loader: 'url-loader', // Changed from 'file-loader' to 'url-loader' to allow SVGs to be used as images or React components
            options: {
              limit: 8192, // Files smaller than 8kb will be inlined as Data URLs
              name: '[name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.ts?x$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.env$/,
        use: [
          {
            loader: 'dotenv-webpack',
            options: {
              path: './.env', // Path to .env file
              safe: true, // Load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
              systemvars: true, // Load all system variables as well (useful for CI environments)
            },
          },
        ],
      },
      {
        test: /process$/,
        use: [
          {
            loader: 'process-webpack',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  plugins: [
    htmlPlugin,
    copyPlugin,
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFiles: ['index.js', 'index.jsx'],
  },
};
