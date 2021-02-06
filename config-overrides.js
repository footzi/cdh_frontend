const { override, addWebpackAlias, addBabelPlugin, disableEsLint } = require('customize-cra');

const path = require('path');

module.exports = override(
  disableEsLint(),

  addWebpackAlias({
    colors: path.resolve(__dirname, 'src/constants/colors'),
    api: path.resolve(__dirname, 'src/api/index'),
    constants: path.resolve(__dirname, 'src/constants/'),
    icons: path.resolve(__dirname, 'src/icons'),
    common: path.resolve(__dirname, 'src/common'),
    CRM: path.resolve(__dirname, 'src/clients/CRM/'),
  }),

  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ])
);
