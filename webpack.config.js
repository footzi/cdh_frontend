const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

// public папка для статики всей
module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
    site: path.join(__dirname, 'src/clients/site', 'index.js'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      colors: path.resolve(__dirname, 'src/constants/colors'),
      api: path.resolve(__dirname, 'src/api/index'),
      constants: path.resolve(__dirname, 'src/constants/'),
      icons: path.resolve(__dirname, 'src/icons'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
      components: path.resolve(__dirname, 'src/components'),
      crm: path.resolve(__dirname, 'src/clients/crm/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      data: path.resolve(__dirname, 'src/data'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: ['@babel/preset-env'],
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
      inject: true,
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/clients/site', 'index.pug'),
      inject: true,
      filename: './site/index.html',
      chunks: ['site'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
