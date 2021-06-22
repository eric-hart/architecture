import path from 'path';

import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const configuration = {
  mode: 'production',
  entry: {
    serverRender: {
      import: './src/script/server-render.js',
      filename: 'server-render.bundle.[contenthash].js',
    },
    singlePage: {
      import: './src/script/single-page.js',
      filename: 'single-page.bundle.[contenthash].js',
    },
    electron: {
      import: './src/script/electron.js',
      filename: 'electron.bundle.[contenthash].js',
    },
  },
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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
};

export default configuration;
