const { alias, configPaths } = require('react-app-rewire-alias');
const { addBabelPresets } = require('customize-cra');

module.exports = function override(config) {
  alias(configPaths('./tsconfig.paths.json'))(config);

  addBabelPresets([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ]);
  return config;
};
