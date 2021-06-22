import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const configuartion = {
  mode: 'development',
  entry: './src/script/single-page.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template:  './assets/index.html',
    }),
  ],
  module: {
    rules: [
        {
          test: /\.(js|jsx)/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
    ],
  },
  devServer: {
    port: 8888,
    https: true,
    proxy: {
      '/api/users': {
        target: 'https://localhost:2100',
        secure: false,
      },
    },
  },
};

export default configuartion;
