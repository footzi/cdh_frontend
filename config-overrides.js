const { override, addWebpackAlias, addBabelPlugin, disableEsLint } = require('customize-cra');

const path = require('path');

module.exports = override(
  disableEsLint(),

  addWebpackAlias({
    colors: path.resolve(__dirname, 'src/constants/colors'),
    constants: path.resolve(__dirname, 'src/constants/'),
    icons: path.resolve(__dirname, 'src/icons'),
    components: path.resolve(__dirname, 'src/components'),
    CRM: path.resolve(__dirname, 'src/clients/CRM/'),
  }),

  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ])
);
