const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      colors: path.resolve(__dirname, 'src/constants/colors'),
      api: path.resolve(__dirname, 'src/api/index'),
      constants: path.resolve(__dirname, 'src/constants/'),
      icons: path.resolve(__dirname, 'src/icons'),
      common: path.resolve(__dirname, 'src/common'),
      CRM: path.resolve(__dirname, 'src/clients/CRM/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  }
}
