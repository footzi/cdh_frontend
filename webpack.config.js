const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    crm: path.join(__dirname, 'src/clients/crm', 'index.tsx'),
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
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
