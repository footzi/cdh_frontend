const path = require('path');

module.exports = {
  webpack: (config, env) => {
    config.resolve.alias = {
      colors: path.resolve(__dirname, './src/constants/colors'),
    };

    return config;
  },
};
