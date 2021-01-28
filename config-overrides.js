const { override, addWebpackAlias, addBabelPlugin, disableEsLint } = require('customize-cra');

const path = require('path');

module.exports = override(
  disableEsLint(),

  addWebpackAlias({
    colors: path.resolve(__dirname, 'src/constants/colors'),
  }),

  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ])
);
