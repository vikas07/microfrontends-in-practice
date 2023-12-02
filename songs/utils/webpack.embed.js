const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: `../client/src/embed.js`,
  output: {
    library: 'Songs',
    libraryTarget: 'umd',
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, '../server/public/embed')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new Dotenv({ path: `../client/.env` }),
    new MiniCssExtractPlugin({ filename: 'index.[hash].css' })
  ]
};
