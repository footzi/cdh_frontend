const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { NODE_ENV, PORT, BACKEND_HOST } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: {
    crm: path.resolve(__dirname, 'src/clients/crm', 'index'),
    site: path.resolve(__dirname, 'src/clients/site', 'index'),
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
      site: path.resolve(__dirname, 'src/clients/site/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      data: path.resolve(__dirname, 'src/data'),
      public: path.resolve(__dirname, 'src/public/'),
      styles: path.resolve(__dirname, 'src/styles/'),
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
            options: {
              name: '[name].[ext]',
              outputPath: '/images',
              useRelativePath: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: './fonts/',
          publicPath: '/fonts',
          name: '[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: `[name]/index.js?v${Date.now()}`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/clients/crm', 'index.html'),
      inject: true,
      filename: './crm/index.html',
      chunks: ['crm'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/clients/site', 'index.pug'),
      inject: true,
      filename: './site/index.html',
      chunks: ['site'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/clients/site', 'agreements.pug'),
      inject: true,
      filename: './site/agreements.html',
      chunks: ['site'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/clients/site', 'privacy-policy.pug'),
      inject: true,
      filename: './site/privacy-policy.html',
      chunks: ['site'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/clients/site', 'video.pug'),
      inject: true,
      filename: './site/video.html',
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
    new CopyPlugin({
      patterns: [
        { from: './public/images', to: './images' },
        { from: './public/assets', to: './assets' },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: PORT,
    proxy: {
      '/api': BACKEND_HOST,
    },
    hot: true,
    historyApiFallback: true,
  },
};
